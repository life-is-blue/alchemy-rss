/**
 * RSS Fetcher - 标准 RSS/Atom 源解析器
 *
 * 用于抓取非 BestBlogs 的外部 RSS 源
 * 如: baoyu.io, ruanyifeng.com 等独立博客
 */

const Parser = require('rss-parser')
const utils = require('./utils')

const parser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; AlchemyRSS/1.0)'
  },
  timeout: 10000
})

/**
 * 抓取 RSS Feed
 *
 * @param {string} xmlUrl - RSS Feed URL
 * @param {number} limit - 最大条目数
 * @returns {Promise<Array>} 标准化的文章列表
 */
async function fetchRSS(xmlUrl, limit = 20) {
  try {
    const feed = await parser.parseURL(xmlUrl)

    const items = feed.items.slice(0, limit).map(item => ({
      // 基础字段
      title: item.title,
      link: item.link,
      date: item.isoDate || item.pubDate || utils.getNowDate('YYYY-MM-DD'),

      // 摘要 (RSS 源没有 AI 摘要，使用原始内容)
      summary: item.contentSnippet
        ? item.contentSnippet.substring(0, 300)
        : (item.content ? item.content.replace(/<[^>]*>/g, '').substring(0, 300) : ''),

      // 来源信息
      sourceName: feed.title || new URL(xmlUrl).hostname,
      sourceUrl: feed.link || xmlUrl,

      // RSS 源特有标记
      _source: 'rss'
    }))

    utils.logSuccess(`RSS 抓取成功: ${feed.title} (${items.length} 篇)`)
    return items

  } catch (e) {
    utils.logWarn(`RSS 抓取失败 ${xmlUrl}: ${e.message}`)
    return []
  }
}

module.exports = { fetchRSS }
