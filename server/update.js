/**
 * Alchemy RSS Update - API-First 版本
 *
 * 改进：
 * 1. 直接调用 BestBlogs API，不依赖 RSS Feed
 * 2. 基于文章 ID 去重，而非 URL
 * 3. 同时更新 links.json 和 articles/ 归档
 */

const fs = require('fs-extra')
const moment = require('moment')
const simpleGit = require('simple-git')

const utils = require('./utils')
const writemd = require('./writemd')
const createFeed = require('./feed')
const apiFetcher = require('./api-fetcher')
const rssFetcher = require('./rss-fetcher')
const { classifyTags } = require('./tag-classifier')

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

  // 1. 根据源类型获取文章列表
  let apiItems = []

  // 判断源类型
  const isRssSource = sourceConfig.type === 'rss' && sourceConfig.xmlUrl
  const isApiSource = !isRssSource && (
    sourceConfig.category ||   // 分类源
    sourceConfig.keyword ||    // 关键词源
    sourceConfig.sourceId ||   // 订阅源聚合
    sourceConfig.type          // 类型过滤源（ARTICLE/VIDEO/PODCAST/TWITTER）
  )

  if (isRssSource) {
    // 标准 RSS 源
    apiItems = await rssFetcher.fetchRSS(sourceConfig.xmlUrl, sourceConfig.limit || 20)
  } else if (isApiSource) {
    // BestBlogs API 源
    apiItems = await apiFetcher.fetchSource(sourceConfig)
  } else {
    utils.logWarn(`源 ${sourceConfig.title} 配置无效，跳过`)
    return { items: existingItems, newCount: 0 }
  }

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
    // RSS 源使用 URL 去重，API 源使用 ID 去重
    const existById = apiItem.id ? existingById.get(apiItem.id) : null
    const existByUrl = apiItem.link ? existingByUrl.get(apiItem.link) : null
    const exist = existById || existByUrl

    if (!exist) {
      // 新文章
      toProcess.push({ apiItem, isNew: true, isRss: isRssSource })
    } else if (!exist.archive_path && !isRssSource) {
      // 已存在但未归档 (仅 API 源支持归档)
      toProcess.push({ apiItem, isNew: false, oldData: exist, isRss: false })
    }
  }

  if (toProcess.length === 0) {
    utils.log(`源 ${sourceConfig.title} 无新文章`)
    return { items: existingItems, newCount: 0 }
  }

  utils.log(`需要处理 ${toProcess.length} 篇文章`)

  // 4. 并发获取完整内容并归档
  let newCount = 0
  const processedItems = await mapLimit(toProcess, 3, async ({ apiItem, isNew, oldData, isRss }) => {
    try {
      // RSS 源不支持归档，直接返回索引数据
      if (isRss) {
      if (isNew) newCount++
        const tags = apiItem.tags
        return {
          title: apiItem.title,
          link: apiItem.link,
          date: apiItem.date || utils.getNowDate('YYYY-MM-DD'),
          summary: apiItem.summary,
          oneSentenceSummary: apiItem.oneSentenceSummary || apiItem.summary,
          sourceName: apiItem.sourceName,
          tags: tags,
          topicTag: classifyTags(tags),
          _source: 'rss'
        }
      }

      // BestBlogs API 源：获取完整内容并归档
      const fullData = await apiFetcher.fetchFullResource(apiItem.id)

      if (fullData) {
        const tags = fullData.tags || apiItem.tags
        fullData.topicTag = classifyTags(tags)
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
          oneSentenceSummary: fullData.oneSentenceSummary || fullData.aiSummary || apiItem.oneSentenceSummary,
          summary: fullData.summary || apiItem.summary,
          mainPoints: fullData.mainPoints || apiItem.mainPoints,
          keyQuotes: fullData.keyQuotes || apiItem.keyQuotes,
          archive_path: archivePath,
          tags: tags,
          topicTag: fullData.topicTag,
          readTime: fullData.readTime || apiItem.readTime,
          score: fullData.score || apiItem.score,
          wordCount: fullData.wordCount || apiItem.wordCount,
          domain: fullData.domain || apiItem.domain,
          category: fullData.category || apiItem.category,
          aiSubCategory: fullData.aiSubCategory || apiItem.aiSubCategory,
          mainDomain: fullData.mainDomain || apiItem.mainDomain,
          sourceId: fullData.sourceId || apiItem.sourceId,
          sourceName: fullData.sourceName || apiItem.sourceName,
          resourceType: fullData.resourceType || apiItem.resourceType,
          language: fullData.language || apiItem.language,
          publishTimeStamp: fullData.publishTimeStamp || apiItem.publishTimeStamp,
          publishDateStr: fullData.publishDateStr || apiItem.publishDateStr,
          publishDateTimeStr: fullData.publishDateTimeStr || apiItem.publishDateTimeStr,
          qualified: apiItem.qualified
        }
      } else {
        // API 获取失败，使用列表数据
        if (isNew) newCount++
        const tags = apiItem.tags
        return {
          id: apiItem.id,
          title: apiItem.title,
          link: apiItem.url,
          date: apiItem.date || utils.getNowDate('YYYY-MM-DD'),
          oneSentenceSummary: apiItem.oneSentenceSummary,
          summary: apiItem.summary,
          mainPoints: apiItem.mainPoints,
          keyQuotes: apiItem.keyQuotes,
          tags: tags,
          topicTag: classifyTags(tags),
          readTime: apiItem.readTime,
          score: apiItem.score,
          wordCount: apiItem.wordCount,
          domain: apiItem.domain,
          category: apiItem.category,
          aiSubCategory: apiItem.aiSubCategory,
          mainDomain: apiItem.mainDomain,
          sourceId: apiItem.sourceId,
          sourceName: apiItem.sourceName,
          resourceType: apiItem.resourceType,
          language: apiItem.language,
          publishTimeStamp: apiItem.publishTimeStamp,
          publishDateStr: apiItem.publishDateStr,
          publishDateTimeStr: apiItem.publishDateTimeStr,
          qualified: apiItem.qualified
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

  // 6. 排序
  allItems = allItems
    .sort((a, b) => a.date < b.date ? 1 : -1)

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
  linksJson = new Array(sourcesConfig.length)
  newData = {
    length: 0,
    titles: [],
    rss: {},
    links: {}
  }

  // 分组: RSS 源 vs API 源
  const rssSources = []
  const apiSources = []

  sourcesConfig.forEach((config, index) => {
    let existingItems = linksExist.find(el => el.title === config.title)?.items || []
    if ((!existingItems || existingItems.length === 0) && Array.isArray(config.aliases)) {
      const aliasEntry = linksExist.find(el => config.aliases.includes(el.title))
      if (aliasEntry?.items) existingItems = aliasEntry.items
    }
    const sourceInfo = { config, index, existingItems }

    // 判断源类型
    const isRssSource = config.type === 'rss' && config.xmlUrl
    const isApiSource = !isRssSource && (
      config.category ||   // 分类源
      config.keyword ||    // 关键词源
      config.sourceId ||   // 订阅源聚合
      config.type          // 类型过滤源（ARTICLE/VIDEO/PODCAST/TWITTER）
    )

    if (isRssSource) {
      rssSources.push(sourceInfo)
    } else if (isApiSource) {
      apiSources.push(sourceInfo)
    } else {
      // 无效配置，保留原数据
      linksJson[index] = { title: config.title, items: existingItems }
    }
  })

  utils.log(`源分组: ${rssSources.length} 个 RSS 源, ${apiSources.length} 个 API 源`)

  // 处理单个源的辅助函数
  async function processSingleSource({ config, index, existingItems }) {
    try {
      const { items, newCount } = await processSource(config, existingItems)
      linksJson[index] = { title: config.title, items }

      if (newCount > 0) {
        newData.length += newCount
        newData.titles.push(config.title)
        newData.rss[config.title] = true
      }
    } catch (err) {
      console.error(`Error processing ${config.title}:`, err)
      linksJson[index] = { title: config.title, items: existingItems }
    }
  }

  // 并行处理: RSS 组完全并行, API 组带限速并发
  await Promise.all([
    // RSS 组: 完全并行 (各源独立，无共享限速)
    Promise.all(rssSources.map(processSingleSource)),

    // API 组: 限速并发 (共享 BestBlogs API)
    mapLimit(apiSources, 2, processSingleSource)
  ])

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
