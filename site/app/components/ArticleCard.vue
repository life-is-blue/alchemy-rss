<template>
  <div
    class="group relative transition-all duration-300 cursor-pointer active:scale-[0.995]"
    :class="[
      mode === 'card' 
        ? 'rounded-2xl p-5 border shadow-sm hover:shadow-md card-hover' 
        : 'px-4 py-5 border-b border-outline/5 hover:bg-[var(--color-hover-bg)]',
      {
        'qualified-border': isQualified && mode === 'card',
        'article-read': isRead(article.link)
      }
    ]"
    :style="mode === 'card' ? { backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-card-border)' } : {}"
  >
    <!-- List Mode Layout -->
    <div v-if="mode === 'list'" class="flex items-center gap-4">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
           <span v-if="isQualified" class="text-qualified shrink-0">
             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
           </span>
           <h3 class="text-[14px] font-bold text-text-main truncate group-hover:text-primary transition-colors">
             {{ article.title }}
           </h3>
        </div>
        <div class="flex items-center gap-3 text-[11px] text-text-muted">
          <span class="font-medium text-text-sub">{{ article.rssTitle || 'RSS' }}</span>
          <span class="opacity-30">·</span>
          <span>{{ formatRelativeTime(article.date) }}</span>
          <span v-if="displayTags.length" class="opacity-30">·</span>
          <span v-if="displayTags.length" class="truncate">{{ displayTags[0] }}</span>
        </div>
      </div>
    </div>

    <!-- Card Mode Layout -->
    <template v-else>
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <span
            v-if="isQualified"
            class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-qualified/10 text-qualified border border-qualified/10"
          >
            精选
          </span>
          <span class="inline-flex items-center text-text-muted" v-html="getContentTypeIcon(article.contentType)"></span>
        </div>
        <span class="text-[11px] text-text-muted font-medium">{{ formatRelativeTime(article.date) }}</span>
      </div>

      <h3 class="article-title text-[16px] font-semibold text-text-main leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2 tracking-tight">
        {{ article.title }}
      </h3>

      <p
        v-if="displaySummary"
        class="text-[13px] text-text-sub leading-relaxed mb-4 line-clamp-2"
      >
        {{ displaySummary }}
      </p>

      <div class="flex items-center justify-between gap-2 mt-auto">
        <div v-if="displayTags.length" class="flex items-center gap-1.5 flex-wrap flex-1 min-w-0">
          <span
            v-for="tag in displayTags"
            :key="tag"
            class="tag-chip"
          >
            {{ tag }}
          </span>
        </div>
        <span class="text-[11px] text-text-muted font-bold tracking-tight shrink-0">
          {{ article.rssTitle || 'RSS' }}
        </span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { CONTENT_TYPE_ICONS } from '~/composables/useArticles'
import { useReadingProgress } from '~/composables/useReadingProgress'

const { isRead } = useReadingProgress()

const props = defineProps({
  article: { type: Object, required: true },
  mode: { type: String, default: 'card' }
})

const isQualified = computed(() => {
  const { article } = props
  return article.qualified === true || article.score >= 80 || (article.rssTitle && article.rssTitle.includes('精选'))
})

const displaySummary = computed(() => {
  const { article } = props
  if (article.oneSentenceSummary) return article.oneSentenceSummary
  if (article.aiSummary) return article.aiSummary
  if (article.summary) {
    const summary = article.summary.replace(/<[^>]+>/g, '')
    const match = summary.match(/一句话摘要\s*(.+?)(?:📝|详细摘要|$)/)
    return match ? match[1].trim() : summary.slice(0, 100)
  }
  return ''
})

const displayTags = computed(() => {
  const { article } = props
  const tags = article.tags || article.categoryTag || []
  const list = Array.isArray(tags) ? tags : [tags]
  if (list.length) return list.slice(0, 3).filter(Boolean)
  
  const rssTitle = article.rssTitle || ''
  const fallback = []
  if (rssTitle.includes('精选')) fallback.push('精选')
  if (rssTitle.includes('编程') || rssTitle.includes('Programming')) fallback.push('编程')
  if (rssTitle.includes('AI')) fallback.push('AI')
  return fallback.slice(0, 3)
})

const getContentTypeIcon = (type) => CONTENT_TYPE_ICONS[type] || ''

const formatRelativeTime = (dateStr) => {
  if (!dateStr) return ''
  try {
    const date = new Date(dateStr)
    if (isNaN(date.getTime())) return dateStr
    const diffMs = Date.now() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 60) return diffMins <= 1 ? '刚刚' : `${diffMins}分钟前`
    if (diffHours < 24) return `${diffHours}小时前`
    if (diffDays < 7) return `${diffDays}天前`
    return `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
  } catch { return dateStr }
}
</script>
