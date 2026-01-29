const fs = require('fs-extra')
const Async = require('async')
const moment = require('moment')
const simpleGit = require('simple-git')

const utils = require('./utils')
const writemd = require('./writemd')
const createFeed = require('./feed')
const fetch = require('./fetch')
const Archiver = require('./archiver')

const {
  RESP_PATH,
  RSS_PATH,
  LINKS_PATH,
} = utils.PATH

const git = simpleGit(RESP_PATH)
const archiver = new Archiver(RESP_PATH)

let rssJson = null
let linksJson = null
let newData = null

async function handleUpdate() {
  if (!utils.WORKFLOW) {
    utils.log('开始更新抓取')
  }
  handleFeed()
}

function handleCommit() {
  git.add('./*')
    .commit('更新: ' + newData.titles.join('、'))
    .push(['-u', 'origin', 'master'], () => utils.logSuccess('完成抓取和上传！'))
}

async function mapLimit(items, limit, asyncFn) {
  const results = []
  const executing = []
  for (const item of items) {
    const p = Promise.resolve().then(() => asyncFn(item))
    results.push(p)
    if (limit <= items.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1))
      executing.push(e)
      if (executing.length >= limit) {
        await Promise.race(executing)
      }
    }
  }
  return Promise.all(results)
}

function handleFeed() {
  rssJson = fs.readJsonSync(RSS_PATH)
  const linksExist = fs.readJsonSync(LINKS_PATH)
  linksJson = []
  newData = {
    length: 0,
    titles: [],
    rss: {},
    links: {}
  }

  const tasks = rssJson.map((rssItem, rssIndex) => ((callback) => {
    ((async () => {
      try {
        const feed = await fetch(rssItem)
        const items = linksExist.find((el) => el.title === rssItem.title)?.items || []
        
        // 识别“需要处理”的文章：新文章 OR 已存在但未归档的文章
        const itemsToProcess = (feed?.items || []).map(curr => {
          const exist = items.find(el => utils.isSameLink(el.link, curr.link))
          if (!exist) return { curr, isNew: true }
          if (!exist.archive_path && curr.link.includes('bestblogs.dev')) return { curr, isNew: false, oldData: exist }
          return null
        }).filter(Boolean)

        if (itemsToProcess.length > 0) {
          const processedItems = await mapLimit(itemsToProcess, 3, async ({ curr, isNew, oldData }) => {
            let date = isNew ? utils.getNowDate('YYYY-MM-DD') : oldData.date
            try {
              if (isNew) date = utils.formatDate(curr.isoDate, 'YYYY-MM-DD')
            } catch (e) {}

            if (isNew) {
              newData.rss[rssItem.title] = true
              newData.links[curr.link] = true
            }

            const archiveMeta = await archiver.archive(curr.link, date)
            
            if (archiveMeta) {
              return {
                title: archiveMeta.title || curr.title,
                link: archiveMeta.link,
                date,
                summary: archiveMeta.ai_summary,
                archive_path: archiveMeta.archive_path,
                tags: archiveMeta.tags,
                read_time: archiveMeta.read_time
              }
            } else if (isNew) {
              // 仅对新文章执行降级清洗，老文章如果归档失败就保持原样
              let summary = curr.contentSnippet || curr.content || ''
              summary = summary.replace(/<[^>]+>/g, '').slice(0, 200).trim()
              return { title: curr.title, link: curr.link, date, summary }
            } else {
              return oldData
            }
          })

          // 更新 items 列表
          let allItems = items
          processedItems.forEach(pi => {
            const idx = allItems.findIndex(el => utils.isSameLink(el.link, pi.link))
            if (idx > -1) {
              allItems[idx] = pi // 更新老文章
            } else {
              allItems.unshift(pi) // 插入新文章
              newData.length++
            }
          })

          if (newData.length > 0) newData.titles.push(rssItem.title)
          
          // 脱水处理
          allItems = allItems.sort((a, b) => a.date < b.date ? 1 : -1)
            .map((item, index) => {
              if (index < 100) return item
              const { summary, ai_summary, ...rest } = item
              return rest
            })
          
          linksJson[rssIndex] = { title: rssItem.title, items: allItems }
          if (processedItems.length > 0) utils.logSuccess(`处理 ${rssItem.title}: +${processedItems.length}`)
        } else {
          linksJson[rssIndex] = { title: rssItem.title, items }
        }
      } catch (err) {
        console.error(`Error processing feed ${rssItem.title}:`, err)
        linksJson[rssIndex] = { title: rssItem.title, items: linksExist.find((el) => el.title === rssItem.title)?.items || [] }
      }
      callback(null)
    })())
  }))

  Async.parallelLimit(tasks, 2, async () => {
    if (newData.length || linksJson.some((l, i) => JSON.stringify(l) !== JSON.stringify(linksExist[i]))) {
      fs.outputJsonSync(LINKS_PATH, linksJson)
      await writemd(newData, linksJson)
      await createFeed(linksJson)
      utils.log('更新完成')
      if (!utils.WORKFLOW) handleCommit()
    } else {
      utils.logSuccess('无需更新')
    }
    if (utils.WORKFLOW) process.exit(0)
  })
}

module.exports = handleUpdate