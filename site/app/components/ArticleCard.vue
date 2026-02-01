<template>
  <div
    class="group relative transition-all duration-300 cursor-pointer active:scale-[0.995]"
    :class="[
      mode === 'card' 
        ? 'rounded-2xl p-6 border shadow-sm hover:shadow-md card-hover' 
        : 'px-6 py-6 border-b border-outline/5 hover:bg-[var(--color-hover-bg)]',
      {
        'qualified-border': isQualified && mode === 'card',
        'article-read': isRead(article.link)
      }
    ]"
    :style="mode === 'card' ? { backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-card-border)' } : {}"
  >
    <!-- NEW Indicator (Pulse) -->
    <div v-if="article.isNew" class="absolute top-4 right-4 z-10">
       <span class="flex h-2.5 w-2.5">
         <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
         <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
       </span>
    </div>

    <!-- List Mode Layout -->
    <div v-if="mode === 'list'" class="flex items-center gap-5">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-3 mb-2">
           <span v-if="isQualified" class="text-qualified shrink-0">
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
           </span>
           <span class="inline-flex items-center text-primary/60 shrink-0" v-html="getContentTypeIcon(article.contentType)"></span>
           <h3 class="text-[16px] font-bold text-text-main truncate group-hover:text-primary transition-colors tracking-tight">
             {{ article.title }}
           </h3>
        </div>
        <div class="flex items-center gap-4 text-[12px] text-text-muted">
          <span class="font-black text-text-sub uppercase tracking-wider">{{ article.rssTitle || 'RSS' }}</span>
          <span class="opacity-30">·</span>
          <span>{{ formatRelativeTime(article.date) }}</span>
          <span v-if="displayTags.length" class="opacity-30">·</span>
          <span v-if="displayTags.length" class="truncate opacity-60 font-medium">#{{ displayTags[0] }}</span>
        </div>
      </div>
    </div>

    <!-- Card Mode Layout -->
    <template v-else>
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-3">
          <span
            v-if="isQualified"
            class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-qualified/10 text-qualified border border-qualified/10 uppercase tracking-tight"
          >
            精选
          </span>
          <span class="inline-flex items-center text-primary/60" v-html="getContentTypeIcon(article.contentType)"></span>
        </div>
        <span class="text-[11px] text-text-muted font-bold tracking-tighter">{{ formatRelativeTime(article.date) }}</span>
      </div>

      <h3 class="article-title text-[18px] font-bold text-text-main leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2 tracking-tight">
        {{ article.title }}
      </h3>

      <p
        v-if="displaySummary"
        class="text-[14px] text-text-sub leading-relaxed mb-5 line-clamp-2 opacity-80"
      >
        {{ displaySummary }}
      </p>

      <div class="flex items-center justify-between gap-3 mt-auto">
        <div v-if="displayTags.length" class="flex items-center gap-2 flex-wrap flex-1 min-w-0">
          <span
            v-for="tag in displayTags"
            :key="tag"
            class="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-black/[0.04] text-text-muted/70 tracking-tight"
          >
            #{{ tag }}
          </span>
        </div>
        <span class="text-[11px] font-black text-text-muted tracking-widest shrink-0 uppercase opacity-60">
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