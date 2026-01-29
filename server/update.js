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

// 简单的并发控制函数
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
        
        const newFeedItems = (feed?.items || []).filter(curr => !items.find(el => utils.isSameLink(el.link, curr.link)))
        
        // 使用自定义并发控制替代旧版 Async.mapLimit
        const processedNewItems = await mapLimit(newFeedItems, 3, async (curr) => {
          let date = utils.getNowDate('YYYY-MM-DD')
          try {
            date = utils.formatDate(curr.isoDate, 'YYYY-MM-DD')
          } catch (e) {}

          newData.rss[rssItem.title] = true
          newData.links[curr.link] = true

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
          } else {
            let summary = curr.contentSnippet || curr.content || ''
            summary = summary.replace(/<[^>]+>/g, '')
              .replace(/&nbsp;/g, ' ')
              .replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>')
              .replace(/&amp;/g, '&')
              .replace(/&quot;/g, '"')
              .replace(/\s+/g, ' ').slice(0, 200).trim()

            return {
              title: curr.title,
              link: curr.link,
              date,
              summary: summary || undefined
            }
          }
        })

        let allItems = items
        if (processedNewItems && processedNewItems.length) {
          utils.logSuccess('更新 RSS: ' + rssItem.title + ` (+${processedNewItems.length})`)
          newData.titles.push(rssItem.title)
          newData.length += processedNewItems.length
          
          allItems = processedNewItems.concat(items).sort(function (a, b) {
            return a.date < b.date ? 1 : -1
          }).map((item, index) => {
            if (index < 100) return item
            const { summary, ai_summary, ...rest } = item
            return rest
          })
        }
        linksJson[rssIndex] = {
          title: rssItem.title,
          items: allItems
        }
      } catch (err) {
        console.error(`Error processing feed ${rssItem.title}:`, err)
        linksJson[rssIndex] = {
          title: rssItem.title,
          items: linksExist.find((el) => el.title === rssItem.title)?.items || []
        }
      }
      callback(null)
    })())
  }))

  Async.parallelLimit(tasks, 2, async () => {
    if (newData.length) {
      fs.outputJsonSync(LINKS_PATH, linksJson)
      await writemd(newData, linksJson)
      await createFeed(linksJson)
      utils.log('完成抓取，即将上传')
      if (!utils.WORKFLOW) {
        handleCommit()
      }
    } else {
      utils.logSuccess('无需更新')
    }
    rssJson = null
    linksJson = null
    newData = null
    if (utils.WORKFLOW) {
      process.exit(0)
    }
  })
}

module.exports = handleUpdate
