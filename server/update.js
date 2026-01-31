/**
 * Alchemy RSS Update - API-First 版本
 *
 * 改进：
 * 1. 直接调用 BestBlogs API，不依赖 RSS Feed
 * 2. 基于文章 ID 去重，而非 URL
 * 3. 同时更新 links.json 和 articles/ 归档
 */

const fs = require('fs-extra')
const Async = require('async')
const moment = require('moment')
const simpleGit = require('simple-git')

const utils = require('./utils')
const writemd = require('./writemd')
const createFeed = require('./feed')
const apiFetcher = require('./api-fetcher')

const {
  RESP_PATH,
  RSS_PATH,
  LINKS_PATH,
} = utils.PATH

const git = simpleGit(RESP_PATH)

// 文章存档目录
const ARTICLES_DIR = utils.PATH.RESP_PATH + '/data/articles'

let sourcesConfig = null
let linksJson = null
let newData = null

/**
 * 主入口
 */
async function handleUpdate() {
  // 检查 API Key (环境变量由 utils.js 统一加载)
  const apiKey = apiFetcher.getApiKey()
  if (!apiKey) {
    utils.logWarn('警告: BESTBLOGS_API_KEY 未配置，将跳过 API 抓取')
  } else {
    utils.log(`API Key 已配置: ${apiKey.substring(0, 10)}...`)
  }

  if (!utils.WORKFLOW) {
    utils.log('开始更新抓取')
  }

  await handleFeed()
}

/**
 * Git 提交（仅本地开发时）
 */
function handleCommit() {
  git.add('./*')
    .commit('更新: ' + newData.titles.join('、'))
    .push(['-u', 'origin', 'master'], () => utils.logSuccess('完成抓取和上传！'))
}

/**
 * 并发限制的 mapLimit
 */
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

/**
 * 保存文章到归档目录
 */
async function saveArticle(article, date) {
  const d = moment(date)
  const year = d.format('YYYY')
  const month = d.format('MM')
  const relPath = `${year}/${month}/${article.id}.json`
  const absPath = `${ARTICLES_DIR}/${relPath}`

  await fs.ensureDir(`${ARTICLES_DIR}/${year}/${month}`)
  await fs.writeJson(absPath, article, { spaces: 2 })

  return `data/articles/${relPath}`
}

/**
 * 处理单个源的文章
 */
async function processSource(sourceConfig, existingItems) {
  utils.log(`开始处理: ${sourceConfig.title}`)

  // 1. 从 API 获取文章列表
  const apiItems = await apiFetcher.fetchSource(sourceConfig)

  if (apiItems.length === 0) {
    utils.logWarn(`源 ${sourceConfig.title} 无数据`)
    return { items: existingItems, newCount: 0 }
  }

  utils.log(`API 返回 ${apiItems.length} 篇文章`)

  // 2. 构建已有文章的 ID 索引
  const existingById = new Map()
  const existingByUrl = new Map()
  existingItems.forEach(item => {
    if (item.id) existingById.set(item.id, item)
    if (item.link) existingByUrl.set(item.link, item)
  })

  // 3. 识别需要处理的文章
  const toProcess = []
  for (const apiItem of apiItems) {
    const existById = existingById.get(apiItem.id)
    const existByUrl = existingByUrl.get(apiItem.url)
    const exist = existById || existByUrl

    if (!exist) {
      // 新文章
      toProcess.push({ apiItem, isNew: true })
    } else if (!exist.archive_path) {
      // 已存在但未归档
      toProcess.push({ apiItem, isNew: false, oldData: exist })
    }
  }

  if (toProcess.length === 0) {
    utils.log(`源 ${sourceConfig.title} 无新文章`)
    return { items: existingItems, newCount: 0 }
  }

  utils.log(`需要处理 ${toProcess.length} 篇文章`)

  // 4. 并发获取完整内容并归档
  let newCount = 0
  const processedItems = await mapLimit(toProcess, 3, async ({ apiItem, isNew, oldData }) => {
    try {
      // 获取完整内容
      const fullData = await apiFetcher.fetchFullResource(apiItem.id)

      if (fullData) {
        // 保存到归档目录
        const date = fullData.date || apiItem.date || utils.getNowDate('YYYY-MM-DD')
        const archivePath = await saveArticle(fullData, date)

        if (isNew) newCount++

        // 返回索引数据
        return {
          id: apiItem.id,
          title: fullData.title || apiItem.title,
          link: fullData.url || apiItem.url,
          date: date,
          summary: fullData.aiSummary || apiItem.summary,
          archive_path: archivePath,
          tags: fullData.tags || apiItem.tags,
          read_time: fullData.readTime || apiItem.readTime,
          score: fullData.score || apiItem.score
        }
      } else {
        // API 获取失败，使用列表数据
        if (isNew) newCount++
        return {
          id: apiItem.id,
          title: apiItem.title,
          link: apiItem.url,
          date: apiItem.date || utils.getNowDate('YYYY-MM-DD'),
          summary: apiItem.summary,
          tags: apiItem.tags,
          read_time: apiItem.readTime,
          score: apiItem.score
        }
      }
    } catch (e) {
      utils.logWarn(`处理文章失败 ${apiItem.id}: ${e.message}`)
      if (oldData) return oldData
      return null
    }
  })

  // 5. 合并结果
  const validProcessed = processedItems.filter(Boolean)
  let allItems = [...existingItems]

  validProcessed.forEach(pi => {
    const idx = allItems.findIndex(el =>
      el.id === pi.id || utils.isSameLink(el.link, pi.link)
    )
    if (idx > -1) {
      allItems[idx] = pi // 更新
    } else {
      allItems.unshift(pi) // 新增
    }
  })

  // 6. 排序和脱水
  allItems = allItems
    .sort((a, b) => a.date < b.date ? 1 : -1)
    .map((item, index) => {
      if (index < 100) return item
      const { summary, ai_summary, ...rest } = item
      return rest
    })

  utils.logSuccess(`完成 ${sourceConfig.title}: +${newCount} 篇`)
  return { items: allItems, newCount }
}

/**
 * 主处理流程
 */
async function handleFeed() {
  // 确保归档目录存在
  await fs.ensureDir(ARTICLES_DIR)

  sourcesConfig = fs.readJsonSync(RSS_PATH)
  const linksExist = fs.readJsonSync(LINKS_PATH)
  linksJson = []
  newData = {
    length: 0,
    titles: [],
    rss: {},
    links: {}
  }

  // 逐个处理源（可以改为并发，但为了稳定先串行）
  for (let i = 0; i < sourcesConfig.length; i++) {
    const sourceConfig = sourcesConfig[i]
    const existingItems = linksExist.find(el => el.title === sourceConfig.title)?.items || []

    try {
      const { items, newCount } = await processSource(sourceConfig, existingItems)
      linksJson[i] = { title: sourceConfig.title, items }

      if (newCount > 0) {
        newData.length += newCount
        newData.titles.push(sourceConfig.title)
        newData.rss[sourceConfig.title] = true
      }
    } catch (err) {
      console.error(`Error processing ${sourceConfig.title}:`, err)
      linksJson[i] = { title: sourceConfig.title, items: existingItems }
    }
  }

  // 保存结果
  const hasChanges = newData.length > 0 ||
    linksJson.some((l, i) => JSON.stringify(l) !== JSON.stringify(linksExist[i]))

  if (hasChanges) {
    fs.outputJsonSync(LINKS_PATH, linksJson)
    await writemd(newData, linksJson)
    await createFeed(linksJson)
    utils.log(`更新完成: +${newData.length} 篇文章`)
    if (!utils.WORKFLOW) handleCommit()
  } else {
    utils.logSuccess('无需更新')
  }

  if (utils.WORKFLOW) process.exit(0)
}

module.exports = handleUpdate
