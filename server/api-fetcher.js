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
 * 延迟函数
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * 判断错误是否可重试
 */
function isRetryable(error) {
  if (typeof error?.status === 'number') {
    return error.status === 429 || error.status >= 500
  }
  const msg = error.message || ''
  return msg.includes('频繁') ||
         msg.includes('rate') ||
         msg.includes('Too Many') ||
         msg.includes('429') ||
         /\b5\d{2}\b/.test(msg)  // 5xx errors (500, 502, 503, etc.)
}

/**
 * 带指数退避的重试包装器
 * @param {Function} fn - 异步函数
 * @param {number} maxRetries - 最大重试次数
 */
async function callWithRetry(fn, maxRetries = 3) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (e) {
      if (attempt === maxRetries || !isRetryable(e)) {
        throw e
      }

      // 指数退避: 1s, 2s, 4s + 随机抖动 (0-1s)
      const baseDelay = Math.pow(2, attempt) * 1000
      const jitter = Math.random() * 1000
      const totalDelay = baseDelay + jitter
      utils.logWarn(`API 限速，${(totalDelay / 1000).toFixed(1)}s 后重试 (${attempt + 1}/${maxRetries})`)
      await delay(totalDelay)
    }
  }
}

/**
 * 调用 BestBlogs API（带自动重试）
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

  return callWithRetry(async () => {
    const resp = await fetch(url, options)
    const text = await resp.text()

    let json = null
    try {
      json = JSON.parse(text)
    } catch (e) {
      const err = new Error(`Non-JSON response (${resp.status}): ${text.slice(0, 200)}`)
      err.status = resp.status
      throw err
    }

    if (!resp.ok) {
      const err = new Error(`HTTP ${resp.status}: ${json.message || 'Unknown error'}`)
      err.status = resp.status
      throw err
    }

    if (!json.success) {
      const err = new Error(`API Error: ${json.message || 'Unknown error'}`)
      err.status = resp.status
      throw err
    }

    return json.data
  })
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
 * @param {string} options.keyword - 关键词搜索
 * @param {string} options.type - 资源类型: ARTICLE | PODCAST | VIDEO | TWITTER
 * @param {string} options.sourceId - 订阅源 ID
 * @param {string} options.language - 内容语言: zh_CN | en_US
 * @param {number} options.lowerTotalScore - 最低评分（推文）
 * @param {number} options.upperTotalScore - 最高评分（推文）
 * @param {string} options.mainDomainFilter - 主领域过滤
 */
async function fetchResourceList(options = {}) {
  const body = {
    currentPage: options.currentPage || 1,
    pageSize: options.pageSize || 50,
    category: options.category,
    sortType: options.sortType || 'score_desc',
    timeFilter: options.timeFilter || '1w',
    qualifiedFilter: options.qualifiedFilter || 'true',
    userLanguage: options.userLanguage || 'zh_CN',

    // 新增参数
    keyword: options.keyword,
    type: options.type,
    sourceId: options.sourceId,
    language: options.language,
    lowerTotalScore: options.lowerTotalScore,
    upperTotalScore: options.upperTotalScore,
    mainDomainFilter: options.mainDomainFilter
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
      fetchResourceContent(id).catch(() => null)  // content 失败不阻塞
    ])

    if (!meta) return null

    return {
      id: meta.id,
      title: meta.title,
      url: meta.url,
      date: meta.publishDateTimeStr,
      author: (meta.authors || []).join(', '),
      siteName: meta.sourceName,

      // 内容 (安全访问)
      content: content?.displayDocument || null,

      // AI 元数据
      aiSummary: meta.oneSentenceSummary,
      oneSentenceSummary: meta.oneSentenceSummary,
      summary: meta.summary,
      mainPoints: meta.mainPoints,
      keyQuotes: meta.keyQuotes,
      tags: meta.tags,
      topicTag: null,  // 由调用方填充
      readTime: meta.readTime,
      score: meta.score,
      wordCount: meta.wordCount,

      // 原始元数据
      domain: meta.domain,
      category: meta.category,
      aiSubCategory: meta.aiSubCategory,
      mainDomain: meta.mainDomain,
      sourceId: meta.sourceId,
      sourceName: meta.sourceName,
      resourceType: meta.resourceType,
      language: meta.language,
      publishTimeStamp: meta.publishTimeStamp,
      publishDateStr: meta.publishDateStr,
      publishDateTimeStr: meta.publishDateTimeStr
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
 * @param {string} sourceConfig.keyword - 关键词搜索
 * @param {string} sourceConfig.type - 资源类型
 * @param {string} sourceConfig.sourceId - 订阅源 ID
 * @param {string} sourceConfig.language - 内容语言
 * @param {number} sourceConfig.lowerTotalScore - 最低评分
 * @param {number} sourceConfig.upperTotalScore - 最高评分
 * @param {string} sourceConfig.mainDomainFilter - 主领域过滤
 */
async function fetchSource(sourceConfig) {
  const options = {
    category: sourceConfig.category,
    sortType: sourceConfig.sortType || 'score_desc',
    timeFilter: sourceConfig.timeFilter || '1w',
    qualifiedFilter: sourceConfig.qualifiedFilter || 'true',
    pageSize: sourceConfig.limit || 50,
    userLanguage: sourceConfig.userLanguage || 'zh_CN',

    // 新增参数映射
    keyword: sourceConfig.keyword,
    type: sourceConfig.type,
    sourceId: sourceConfig.sourceId,
    language: sourceConfig.language,
    lowerTotalScore: sourceConfig.lowerTotalScore,
    upperTotalScore: sourceConfig.upperTotalScore,
    mainDomainFilter: sourceConfig.mainDomainFilter
  }

  try {
    const items = await fetchResourceList(options)

    // 转换为标准格式
    return items.map(item => ({
      id: item.id,
      title: item.title,
      url: item.url || `https://www.bestblogs.dev/article/${item.id}`,
      date: item.publishDateTimeStr || item.publishDateStr,
      oneSentenceSummary: item.oneSentenceSummary,
      summary: item.summary,
      mainPoints: item.mainPoints,
      keyQuotes: item.keyQuotes,
      tags: item.tags,
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
