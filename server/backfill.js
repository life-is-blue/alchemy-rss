/**
 * Backfill last-year archives for API sources.
 *
 * Notes:
 * - Respects API page size limits via BACKFILL_PAGE_SIZE (default 100)
 * - Limits total pages per source via BACKFILL_MAX_PAGES (default 20)
 * - Skips RSS sources (no archive support)
 */

const fs = require('fs-extra')
const moment = require('moment')

const utils = require('./utils')
const writemd = require('./writemd')
const createFeed = require('./feed')
const apiFetcher = require('./api-fetcher')
const { classifyTags } = require('./tag-classifier')

const { RSS_PATH, LINKS_PATH } = utils.PATH
const ARTICLES_DIR = utils.PATH.RESP_PATH + '/data/articles'

const DEFAULT_TIME_FILTER = '1y'
const DEFAULT_PAGE_SIZE = 100
const DEFAULT_MAX_PAGES = 20
const DEFAULT_CONCURRENCY = 2
const DEFAULT_DELAY_MS = 500
const DEFAULT_RESET = false

async function delay(ms) {
  if (!ms) return
  await new Promise(resolve => setTimeout(resolve, ms))
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

function buildListOptions(config, currentPage, pageSize, timeFilter) {
  const options = {
    currentPage,
    pageSize,
    category: config.category,
    sortType: config.sortType || 'time_desc',
    timeFilter: timeFilter || config.timeFilter || DEFAULT_TIME_FILTER,
    qualifiedFilter: config.qualifiedFilter || 'true',
    userLanguage: config.userLanguage || 'zh_CN',

    keyword: config.keyword,
    type: config.type,
    sourceId: config.sourceId,
    language: config.language,
    lowerTotalScore: config.lowerTotalScore,
    upperTotalScore: config.upperTotalScore,
    mainDomainFilter: config.mainDomainFilter
  }

  Object.keys(options).forEach(k => options[k] === undefined && delete options[k])
  return options
}

function normalizeListItems(items) {
  return items.map(item => ({
    id: item.id,
    title: item.title,
    url: item.url || `https://www.bestblogs.dev/article/${item.id}`,
    date: item.publishDateTimeStr || item.publishDateStr,
    oneSentenceSummary: item.oneSentenceSummary,
    summary: item.summary,
    tags: item.tags,
    mainPoints: item.mainPoints,
    keyQuotes: item.keyQuotes,
    score: item.score,
    readTime: item.readTime,
    wordCount: item.wordCount,
    category: item.category,
    sourceName: item.sourceName,
    sourceId: item.sourceId,
    resourceType: item.resourceType,
    domain: item.domain,
    aiSubCategory: item.aiSubCategory,
    mainDomain: item.mainDomain,
    language: item.language,
    publishTimeStamp: item.publishTimeStamp,
    publishDateStr: item.publishDateStr,
    publishDateTimeStr: item.publishDateTimeStr,
    qualified: item.qualified
  }))
}

async function processApiSource(config, existingItems, backfillOptions) {
  const existingById = new Map()
  const existingByUrl = new Map()
  existingItems.forEach(item => {
    if (item.id) existingById.set(item.id, item)
    if (item.link) existingByUrl.set(item.link, item)
  })

  let currentPage = 1
  let allItems = [...existingItems]
  let addedCount = 0

  while (currentPage <= backfillOptions.maxPages) {
    const listOptions = buildListOptions(config, currentPage, backfillOptions.pageSize, backfillOptions.timeFilter)
    const dataList = await apiFetcher.fetchResourceList(listOptions)
    if (!dataList || dataList.length === 0) break

    const apiItems = normalizeListItems(dataList)
    const toProcess = []

    for (const apiItem of apiItems) {
      const existById = apiItem.id ? existingById.get(apiItem.id) : null
      const existByUrl = apiItem.url ? existingByUrl.get(apiItem.url) : null
      const exist = existById || existByUrl

      if (!exist || !exist.archive_path) {
        toProcess.push({ apiItem, oldData: exist })
      }
    }

    if (toProcess.length > 0) {
      const processedItems = await mapLimit(toProcess, backfillOptions.concurrency, async ({ apiItem, oldData }) => {
        try {
          const fullData = await apiFetcher.fetchFullResource(apiItem.id)
          if (fullData) {
            const tags = fullData.tags || apiItem.tags
            fullData.topicTag = classifyTags(tags)
            const date = fullData.date || apiItem.date || utils.getNowDate('YYYY-MM-DD')
            const archivePath = await saveArticle(fullData, date)
            addedCount++
            return {
              id: apiItem.id,
              title: fullData.title || apiItem.title,
              link: fullData.url || apiItem.url,
              date,
              oneSentenceSummary: fullData.oneSentenceSummary || fullData.aiSummary || apiItem.oneSentenceSummary,
              summary: fullData.summary || apiItem.summary,
              mainPoints: fullData.mainPoints || apiItem.mainPoints,
              keyQuotes: fullData.keyQuotes || apiItem.keyQuotes,
              archive_path: archivePath,
              tags,
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
          }

          const tags = apiItem.tags
          addedCount++
          return {
            id: apiItem.id,
            title: apiItem.title,
            link: apiItem.url,
            date: apiItem.date || utils.getNowDate('YYYY-MM-DD'),
            oneSentenceSummary: apiItem.oneSentenceSummary,
            summary: apiItem.summary,
            mainPoints: apiItem.mainPoints,
            keyQuotes: apiItem.keyQuotes,
            tags,
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
        } catch (e) {
          utils.logWarn(`回填失败 ${apiItem.id}: ${e.message}`)
          return oldData || null
        }
      })

      processedItems.filter(Boolean).forEach(pi => {
        const idx = allItems.findIndex(el => el.id === pi.id || utils.isSameLink(el.link, pi.link))
        if (idx > -1) allItems[idx] = pi
        else allItems.unshift(pi)
        if (pi.id) existingById.set(pi.id, pi)
        if (pi.link) existingByUrl.set(pi.link, pi)
      })
    }

    currentPage += 1
    await delay(backfillOptions.delayMs)
  }

  allItems = allItems.sort((a, b) => a.date < b.date ? 1 : -1)
  return { items: allItems, addedCount }
}

async function runBackfill() {
  const apiKey = apiFetcher.getApiKey()
  if (!apiKey) {
    utils.logWarn('警告: BESTBLOGS_API_KEY 未配置，无法进行回填')
    process.exit(1)
  }

  await fs.ensureDir(ARTICLES_DIR)

  const sourcesConfig = fs.readJsonSync(RSS_PATH)

  const backfillOptions = {
    timeFilter: process.env.BACKFILL_TIME_FILTER || DEFAULT_TIME_FILTER,
    pageSize: Number(process.env.BACKFILL_PAGE_SIZE || DEFAULT_PAGE_SIZE),
    maxPages: Number(process.env.BACKFILL_MAX_PAGES || DEFAULT_MAX_PAGES),
    concurrency: Number(process.env.BACKFILL_CONCURRENCY || DEFAULT_CONCURRENCY),
    delayMs: Number(process.env.BACKFILL_DELAY_MS || DEFAULT_DELAY_MS),
    reset: process.env.BACKFILL_RESET === 'true' || DEFAULT_RESET
  }

  utils.log(`回填参数: timeFilter=${backfillOptions.timeFilter}, pageSize=${backfillOptions.pageSize}, maxPages=${backfillOptions.maxPages}, reset=${backfillOptions.reset}`)

  if (backfillOptions.reset) {
    utils.logWarn('执行覆盖模式：清空 data/articles 与 data/links.json')
    await fs.remove(ARTICLES_DIR)
    await fs.ensureDir(ARTICLES_DIR)
  }

  const linksJson = new Array(sourcesConfig.length)
  const linksExist = backfillOptions.reset ? [] : (fs.existsSync(LINKS_PATH) ? fs.readJsonSync(LINKS_PATH) : [])
  const newData = { length: 0, titles: [], rss: {}, links: {} }

  for (let i = 0; i < sourcesConfig.length; i += 1) {
    const config = sourcesConfig[i]
    let existingItems = linksExist.find(el => el.title === config.title)?.items || []
    if ((!existingItems || existingItems.length === 0) && Array.isArray(config.aliases)) {
      const aliasEntry = linksExist.find(el => config.aliases.includes(el.title))
      if (aliasEntry?.items) existingItems = aliasEntry.items
    }

    const isRssSource = config.type === 'rss' && config.xmlUrl
    if (isRssSource) {
      linksJson[i] = { title: config.title, items: existingItems }
      continue
    }

    utils.log(`回填源: ${config.title}`)
    const { items, addedCount } = await processApiSource(config, existingItems, backfillOptions)
    linksJson[i] = { title: config.title, items }
    if (addedCount > 0) {
      newData.length += addedCount
      newData.titles.push(config.title)
      newData.rss[config.title] = true
    }
  }

  fs.outputJsonSync(LINKS_PATH, linksJson)
  await writemd(newData, linksJson)
  await createFeed(linksJson)
  utils.logSuccess(`回填完成: +${newData.length} 篇文章`)
}

runBackfill().catch(err => {
  console.error(err)
  process.exit(1)
})
