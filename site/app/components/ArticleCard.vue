<template>
  <div
    class="group relative bg-white rounded-lg p-4 border border-black/5 hover:border-primary/20 card-hover cursor-pointer active:scale-[0.995]"
    :class="{ 'qualified-border bg-qualified-light/30': isQualified }"
  >
    <!-- 顶部：精选徽章 + 时间 -->
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <!-- 精选徽章 -->
        <span
          v-if="isQualified"
          class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-qualified/10 text-qualified"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          精选
        </span>
        <!-- 内容类型图标 -->
        <span class="inline-flex items-center text-text-sub/60" v-html="getContentTypeIcon(article.contentType)"></span>
      </div>
      <!-- 相对时间 -->
      <span class="text-[11px] text-text-sub/60">{{ formatRelativeTime(article.date) }}</span>
    </div>

    <!-- 标题（最多两行） -->
    <h3 class="article-title text-[15px] font-bold text-text-main leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
      {{ article.title }}
    </h3>

    <!-- 一句话摘要 -->
    <p
      v-if="displaySummary"
      class="text-[13px] text-text-sub leading-relaxed mb-3 line-clamp-2"
    >
      {{ displaySummary }}
    </p>

    <!-- 底部：标签 + 来源 -->
    <div class="flex items-center justify-between gap-2">
      <!-- 标签列表 -->
      <div v-if="displayTags.length" class="flex items-center gap-1.5 flex-wrap flex-1 min-w-0">
        <span
          v-for="tag in displayTags"
          :key="tag"
          class="tag-chip"
        >
          {{ tag }}
        </span>
      </div>
      <!-- 来源名称 -->
      <span class="text-[11px] text-text-sub/70 font-medium shrink-0">
        {{ article.rssTitle || 'RSS' }}
      </span>
    </div>

    <!-- 推文特有：互动数据 -->
    <div v-if="article.contentType === 'TWITTER' && article.tweetData" class="flex items-center gap-4 mt-3 pt-3 border-t border-black/5 text-[11px] text-text-sub">
      <span class="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        {{ article.tweetData.likeCount || 0 }}
      </span>
      <span class="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>
        {{ article.tweetData.retweetCount || 0 }}
      </span>
      <span v-if="article.score" class="ml-auto flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        {{ article.score }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { CONTENT_TYPE_ICONS } from '~/composables/useArticles'

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

// 判断是否为精选文章（根据 rssTitle 判断）
const isQualified = computed(() => {
  const article = props.article
  // 方式1: 原有字段
  if (article.qualified === true || article.score >= 80) return true
  // 方式2: RSS 源标题包含 "精选"
  if (article.rssTitle && article.rssTitle.includes('精选')) return true
  return false
})

// 获取显示的摘要（从 summary 中提取一句话摘要）
const displaySummary = computed(() => {
  const article = props.article
  // 优先使用专门的一句话摘要字段
  if (article.oneSentenceSummary) {
    return article.oneSentenceSummary
  }
  if (article.aiSummary) {
    return article.aiSummary
  }
  if (article.summary) {
    // 从 summary 中提取一句话摘要
    // 格式: "📌 一句话摘要 xxx 📝 详细摘要 yyy"
    const summary = article.summary.replace(/<[^>]+>/g, '')
    const oneSentenceMatch = summary.match(/一句话摘要\s*(.+?)(?:📝|详细摘要|$)/)
    if (oneSentenceMatch && oneSentenceMatch[1]) {
      return oneSentenceMatch[1].trim()
    }
    // 如果没有匹配到格式，返回前100个字符
    return summary.slice(0, 100)
  }
  return ''
})

// 获取显示的标签（从 rssTitle 提取分类）
const displayTags = computed(() => {
  const article = props.article
  // 优先使用 tags 或 categoryTag 字段
  if (article.tags && article.tags.length) {
    const tagList = Array.isArray(article.tags) ? article.tags : [article.tags]
    return tagList.slice(0, 3).filter(Boolean)
  }
  if (article.categoryTag) {
    const tagList = Array.isArray(article.categoryTag) ? article.categoryTag : [article.categoryTag]
    return tagList.slice(0, 3).filter(Boolean)
  }
  // 从 rssTitle 提取分类标签
  const rssTitle = article.rssTitle || ''
  const tags = []
  if (rssTitle.includes('精选')) tags.push('精选')
  if (rssTitle.includes('编程') || rssTitle.includes('Programming')) tags.push('编程')
  if (rssTitle.includes('商业') || rssTitle.includes('Business')) tags.push('商业')
  if (rssTitle.includes('产品') || rssTitle.includes('Product')) tags.push('产品')
  if (rssTitle.includes('AI') || rssTitle.includes('人工智能')) tags.push('AI')
  if (rssTitle.includes('宝玉')) tags.push('宝玉分享')
  return tags.slice(0, 3)
})

const getContentTypeIcon = (type) => {
  return CONTENT_TYPE_ICONS[type] || ''
}

// 格式化为相对时间
const formatRelativeTime = (dateStr) => {
  if (!dateStr) return ''
  try {
    const date = new Date(dateStr)
    if (isNaN(date.getTime())) return dateStr

    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / (1000 * 60))
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffMins < 60) {
      return diffMins <= 1 ? '刚刚' : `${diffMins}分钟前`
    }
    if (diffHours < 24) {
      return `${diffHours}小时前`
    }
    if (diffDays < 7) {
      return `${diffDays}天前`
    }
    if (diffDays < 30) {
      return `${Math.floor(diffDays / 7)}周前`
    }
    // 超过30天显示日期
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${month}-${day}`
  } catch (e) {
    return dateStr
  }
}
</script>
