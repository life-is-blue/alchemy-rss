import { JSDOM } from 'jsdom'
import { Readability } from '@mozilla/readability'

// 正则常量定义
const REGEX_BESTBLOGS_ID = /\/(article|status)\/([a-zA-Z0-9]+)/
const REGEX_NEXTJS_TEXT = /"text":"(.*?)(?<!\\)"/g

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const url = query.url as string
  const apiKey = process.env.BESTBLOGS_API_KEY

  if (!url) {
    throw createError({ statusCode: 400, message: 'URL is required' })
  }

  // 1. 优先尝试 BestBlogs API
  if (apiKey && url.includes('bestblogs.dev')) {
    const apiResult = await tryFetchBestBlogsAPI(url, apiKey)
    if (apiResult) {
      return apiResult
    }
    console.warn('⚠️ [Reader] BestBlogs API failed, falling back to scraper')
  }

  // 2. 降级到通用爬虫
  return await tryFallbackScraper(url)
})

/**
 * 尝试通过 BestBlogs OpenAPI 获取数据
 * 优化策略：优先直连 ID，失败后再尝试搜索
 */
async function tryFetchBestBlogsAPI(url: string, apiKey: string) {
  try {
    console.log('🔍 [Reader] Trying BestBlogs API for:', url)
    
    // 1. 尝试从 URL 提取 ID
    const idMatch = url.match(REGEX_BESTBLOGS_ID)
    const resourceId = idMatch ? idMatch[2] : null
    
    if (!resourceId) {
      console.log('❌ [Reader] Failed to extract ID from URL')
      return null
    }

    console.log('🔍 [Reader] Extracted ID:', resourceId)

    // 2. 优先策略：假设 URL ID 就是资源 ID，直接并发请求 Meta 和 Content
    // 这能减少一次多余的 Search RTT
    console.log('🚀 [Reader] Attempting direct fetch by ID...')
    const [contentResp, metaResp] = await Promise.all([
      callBestBlogsAPI(`/openapi/v1/resource/content?id=${resourceId}`, apiKey, null, 'GET'),
      callBestBlogsAPI(`/openapi/v1/resource/meta?id=${resourceId}`, apiKey, null, 'GET')
    ])

    // 检查直连结果
    if (contentResp?.success && contentResp.data) {
      console.log('✅ [Reader] Direct fetch success!')
      const meta = metaResp?.success ? metaResp.data : { id: resourceId }
      return buildArticleResponse(contentResp.data, meta)
    }

    // 3. 兜底策略：如果直连失败，尝试通过 Search API 反查
    // 也许 URL ID 是短链或其他格式，需要通过 Search 找到真实 ID
    console.log('⚠️ [Reader] Direct fetch failed, falling back to Search API...')
    let searchResp = await callBestBlogsAPI('/openapi/v1/resource/list', apiKey, {
      pageSize: 1,
      keyword: resourceId
    })

    if (!searchResp?.success || !searchResp.data?.dataList?.length) {
      // 再试一次用完整 URL 搜
      searchResp = await callBestBlogsAPI('/openapi/v1/resource/list', apiKey, {
        pageSize: 1,
        keyword: url
      })
    }

    if (searchResp?.success && searchResp.data?.dataList?.length > 0) {
      const item = searchResp.data.dataList[0]
      const meta = item.resourceMeta || item
      console.log('✅ [Reader] Found ID via Search:', meta.id)

      // 用搜到的真实 ID 再去拿一次正文
      const retryContentResp = await callBestBlogsAPI(`/openapi/v1/resource/content?id=${meta.id}`, apiKey, null, 'GET')
      if (retryContentResp?.success && retryContentResp.data) {
        return buildArticleResponse(retryContentResp.data, meta)
      }
    }

    return null // 彻底失败
  } catch (error) {
    console.error('❌ [Reader] API Logic Exception:', error)
    return null
  }
}

/**
 * 构建标准响应格式
 */
function buildArticleResponse(contentData: any, meta: any) {
  return {
    title: meta.title || contentData.title || 'Alchemy Refined',
    content: contentData.displayDocument || meta.summary,
    siteName: 'BestBlogs (API)',
    byline: (meta.authors || []).join(', '),
    // AI Metadata
    aiSummary: meta.oneSentenceSummary,
    mainPoints: meta.mainPoints,
    tags: meta.tags,
    readTime: meta.readTime,
    score: meta.score,
    wordCount: meta.wordCount
  }
}

/**
 * 通用爬虫逻辑
 */
async function tryFallbackScraper(url: string) {
  try {
    console.log('🕷️ [Reader] Falling back to Scraper for:', url)
    
    const html = await $fetch<string>(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    })

    if (url.includes('bestblogs.dev')) {
      const textMatches = html.match(REGEX_NEXTJS_TEXT)
      if (textMatches && textMatches.length > 0) {
        const content = textMatches
          .map(m => {
            try {
              let t = m.slice(8, -1)
              return t.replace(/\\n/g, '<br/>')
                      .replace(/\\"/g, '"')
                      .replace(/\\u003c/g, '<')
                      .replace(/\\u003e/g, '>')
                      .replace(/\\u0026/g, '&')
            } catch(e) { return "" }
          })
          .filter(t => t.length > 40)
          .join('<br/><br/>')

        if (content.length > 100) {
          return {
            title: 'Alchemy 精选 (Regex Fallback)',
            content: `<div style="font-family: sans-serif; line-height: 1.8; color: #333;">${content}</div>`,
            siteName: 'BestBlogs'
          }
        }
      }
    }

    const dom = new JSDOM(html, { url })
    const reader = new Readability(dom.window.document)
    const article = reader.parse()

    return {
      title: article?.title || '无法获取标题',
      content: article?.content || '<p>无法抓取该内容，请点击原文链接阅读。</p>',
      siteName: article?.siteName || 'Scraper',
      byline: article?.byline
    }
  } catch (error) {
    console.error('❌ [Reader] Scraper Failed:', error)
    return { error: 'Failed to fetch content' }
  }
}

/**
 * API 调用辅助函数 (支持 GET/POST)
 */
async function callBestBlogsAPI(endpoint: string, apiKey: string, body: any, method = 'POST') {
  try {
    return await $fetch<any>(`https://api.bestblogs.dev${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey 
      },
      body: method === 'POST' ? body : undefined
    })
  } catch (e) {
    return null
  }
}