const Parser = require('rss-parser')
const Async = require('async')
const queryString = require('query-string')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

const utils = require('./utils')

/**
 * 尝试通过 BestBlogs API 获取数据
 */
async function fetchBestBlogsAPI(rssUrl) {
  const apiKey = process.env.BESTBLOGS_API_KEY
  if (!apiKey || !rssUrl.includes('bestblogs.dev/feeds/rss')) {
    return null
  }

  try {
    const parsed = queryString.parseUrl(rssUrl)
    const query = parsed.query
    
    // 映射 RSS 参数到 API Body
    const body = {
      pageSize: parseInt(query.limit || '20'),
      sort: query.sort || 'new',
      tag: query.tag,
      resourceType: query.type ? query.type.toUpperCase() : undefined
    }

    // 移除 undefined 字段
    Object.keys(body).forEach(key => body[key] === undefined && delete body[key])

    const resp = await fetch('https://api.bestblogs.dev/openapi/v1/resource/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey
      },
      body: JSON.stringify(body)
    })

    const json = await resp.json()
    if (json.success && Array.isArray(json.data.dataList)) {
      if (!utils.WORKFLOW) utils.logSuccess('成功 API: ' + rssUrl)
      
      // 转换为 RSS Feed 格式
      return {
        items: json.data.dataList.map(item => {
          const meta = item.resourceMeta || item
          return {
            title: meta.title,
            link: meta.url,
            isoDate: meta.publishDateTimeStr, // API 返回 ISO 格式
            contentSnippet: meta.oneSentenceSummary || meta.summary, // 优先使用 AI 摘要
            content: meta.summary, // 这里的 content 只是摘要，全文在 displayDocument
            // 额外字段 (供后续 Archiver 使用)
            id: meta.id,
            tags: meta.tags
          }
        })
      }
    }
  } catch (e) {
    if (!utils.WORKFLOW) utils.logWarn('API 失败，回退 RSS: ' + e.message)
  }
  return null
}

async function fetchFeed(rss) {
  // 1. 优先尝试 BestBlogs API
  const apiFeed = await fetchBestBlogsAPI(rss)
  if (apiFeed) return apiFeed

  // 2. 回退到标准 RSS 解析
  const parser = new Parser({
    headers: {
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
    },
  })

  try {
    const feed = await parser.parseURL(rss)
    if (feed) {
      if (!utils.WORKFLOW) {
        utils.logSuccess('成功 RSS: ' + rss)
      }
      return feed
    }
  } catch (e) {
    console.error(e)
  }

  if (!utils.WORKFLOW) {
    utils.logWarn('失败 RSS: ' + rss)
  }
  return true
}

async function initFetch(rssItem, onFinish) {
  require('dotenv').config({ multiline: true, override: true })
  
  let rssConfig = {}
  try {
    rssConfig = JSON.parse(process.env.RSS_CONFIG || '{}')
  } catch (e) {
  }

  let rssArray = rssItem.rss

  if (typeof rssArray === 'string') {
    rssArray = [rssArray]
  }

  let envRss = rssConfig[rssItem.title]

  if (typeof envRss === 'string') {
    envRss = [envRss]
  }

  if (envRss && envRss.length) {
    rssArray = [...envRss, ...rssArray]
  }

  const tasks = rssArray.map((rss) => ((callback) => {
    ((async () => {
      const feed = await fetchFeed(rss)

      if (feed === true) {
        callback(true)
      } else {
        callback(null, feed)
      }
    })())
  }))

  utils.log('开始 RSS: ' + rssItem.title)

  return new Promise((resolve) => {
    Async.tryEach(tasks, (err, res) => {
      utils.log('完成 RSS: ' + rssItem.title)
      resolve(err ? null : res)
    })
  })
}

module.exports = initFetch