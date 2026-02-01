/**
 * Tag Classifier - 轻量级双层标签系统
 *
 * 根据文章的原始标签匹配主题标签
 * - Layer 1: 原始标签 (tags) - 直接使用 API 返回的细粒度标签
 * - Layer 2: 主题标签 (topicTag) - 构建时基于 keywords 匹配计算
 */

const fs = require('fs-extra')
const path = require('path')

const TAGS_PATH = path.join(__dirname, '../data/tags.json')

// 缓存预编译的正则表达式
let topicMatchers = null

/**
 * 加载并预编译分类匹配器
 */
function loadMatchers() {
  if (topicMatchers) return topicMatchers

  const tagsConfig = fs.readJsonSync(TAGS_PATH)

  topicMatchers = tagsConfig.map(cat => ({
    filename: cat.filename,
    regex: cat.keywords ? new RegExp(cat.keywords, 'i') : null
  }))

  return topicMatchers
}

/**
 * 根据文章标签匹配主题标签
 * @param {string[]} tags - API 返回的原始标签
 * @returns {string} - 主题文件名，如 "ai-llm"
 */
function classifyTags(tags) {
  if (!tags || tags.length === 0) return 'other'

  const matchers = loadMatchers()
  const tagStr = tags.join(' ')

  for (const { filename, regex } of matchers) {
    if (regex && regex.test(tagStr)) {
      return filename
    }
  }

  return 'other'
}

module.exports = { classifyTags, loadMatchers }
