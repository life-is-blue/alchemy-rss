/**
 * BestBlogs API-First Fetcher
 *
 * 直接调用 BestBlogs OpenAPI 获取文章，不依赖 RSS Feed
 * - 更稳定：不受 RSS 更新频率限制
 * - 更准确：直接获取 ID，避免 URL 解析问题
 * - 更丰富：API 返回更多元数据
 */

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const utils = require('./utils')

const API_BASE = 'https://api.bestblogs.dev'

/**
 * 获取 API Key（延迟读取，确保环境变量已加载）
 */
function getApiKey() {
  return process.env.BESTBLOGS_API_KEY
}

/**
 * 调用 BestBlogs API
 */
async function callAPI(endpoint, method = 'POST', body = null) {
  const apiKey = getApiKey()
  if (!apiKey) {
    throw new Error('BESTBLOGS_API_KEY not configured')
  }

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey
    }
  }

  if (body && method !== 'GET') {
    options.body = JSON.stringify(body)
  }

  const url = method === 'GET' && body
    ? `${API_BASE}${endpoint}?${new URLSearchParams(body)}`
    : `${API_BASE}${endpoint}`

  const resp = await fetch(url, options)
  const json = await resp.json()

  if (!json.success) {
    throw new Error(`API Error: ${json.message || 'Unknown error'}`)
  }

  return json.data
}

/**
 * 获取资源列表
 *
 * @param {Object} options
 * @param {string} options.category - 分类: Artificial_Intelligence | Programming_Technology | Business_Tech | Product_Development
 * @param {string} options.sortType - 排序: score_desc | time_desc | read_desc | default
 * @param {string} options.timeFilter - 时间范围: 1d | 3d | 1w | 1m | 3m | 1y
 * @param {string} options.qualifiedFilter - 精选过滤: true | false | ALL
 * @param {number} options.pageSize - 每页数量
 * @param {string} options.userLanguage - 语言偏好: zh_CN | en_US
 */
async function fetchResourceList(options = {}) {
  const body = {
    currentPage: options.currentPage || 1,
    pageSize: options.pageSize || 50,
    category: options.category,
    sortType: options.sortType || 'score_desc',
    timeFilter: options.timeFilter || '1w',
    qualifiedFilter: options.qualifiedFilter || 'true',
    userLanguage: options.userLanguage || 'zh_CN'
  }

  // 移除 undefined 字段
  Object.keys(body).forEach(key => body[key] === undefined && delete body[key])

  const data = await callAPI('/openapi/v1/resource/list', 'POST', body)
  return data.dataList || []
}

/**
 * 获取资源元数据
 */
async function fetchResourceMeta(id) {
  return await callAPI('/openapi/v1/resource/meta', 'GET', { id })
}

/**
 * 获取资源内容
 */
async function fetchResourceContent(id) {
  return await callAPI('/openapi/v1/resource/content', 'GET', { id })
}

/**
 * 获取完整资源数据（元数据 + 内容）
 */
async function fetchFullResource(id) {
  try {
    const [meta, content] = await Promise.all([
      fetchResourceMeta(id),
      fetchResourceContent(id)
    ])

    return {
      id: meta.id,
      title: meta.title,
      url: meta.url,
      date: meta.publishDateTimeStr,
      author: (meta.authors || []).join(', '),
      siteName: meta.sourceName,

      // 内容
      content: content.displayDocument,

      // AI 元数据
      aiSummary: meta.oneSentenceSummary,
      mainPoints: meta.mainPoints,
      tags: meta.tags,
      readTime: meta.readTime,
      score: meta.score,
      wordCount: meta.wordCount,

      // 原始元数据
      domain: meta.domain,
      category: meta.category
    }
  } catch (e) {
    utils.logWarn(`获取资源失败 ${id}: ${e.message}`)
    return null
  }
}

/**
 * 根据源配置获取文章列表
 *
 * @param {Object} sourceConfig - 源配置
 * @param {string} sourceConfig.title - 源标题
 * @param {string} sourceConfig.category - 分类
 * @param {string} sourceConfig.sortType - 排序方式
 * @param {string} sourceConfig.timeFilter - 时间范围
 * @param {string} sourceConfig.qualifiedFilter - 精选过滤
 * @param {number} sourceConfig.limit - 数量限制
 */
async function fetchSource(sourceConfig) {
  const options = {
    category: sourceConfig.category,
    sortType: sourceConfig.sortType || 'score_desc',
    timeFilter: sourceConfig.timeFilter || '1w',
    qualifiedFilter: sourceConfig.qualifiedFilter || 'true',
    pageSize: sourceConfig.limit || 50,
    userLanguage: sourceConfig.userLanguage || 'zh_CN'
  }

  try {
    const items = await fetchResourceList(options)

    // 转换为标准格式
    return items.map(item => ({
      id: item.id,
      title: item.title,
      url: item.url || `https://www.bestblogs.dev/article/${item.id}`,
      date: item.publishDateTimeStr || item.publishDateStr,
      summary: item.oneSentenceSummary || item.summary,
      tags: item.tags,
      score: item.score,
      readTime: item.readTime,
      wordCount: item.wordCount,
      category: item.category,
      sourceName: item.sourceName
    }))
  } catch (e) {
    utils.logWarn(`获取源失败 ${sourceConfig.title}: ${e.message}`)
    return []
  }
}

module.exports = {
  getApiKey,
  callAPI,
  fetchResourceList,
  fetchResourceMeta,
  fetchResourceContent,
  fetchFullResource,
  fetchSource
}
