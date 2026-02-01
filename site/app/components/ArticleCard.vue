<template>
  <div
    class="group relative transition-all duration-500 cursor-pointer active:scale-[0.99] overflow-hidden"
    :class="[
      mode === 'card' 
        ? 'rounded-3xl p-6 border border-outline/5 hover:shadow-paper bg-white' 
        : 'px-8 py-6 border-b border-outline/5 hover:bg-black/[0.01]',
      { 'article-read': isRead(article.link) }
    ]"
  >
    <!-- NEW Indicator (Pulse) -->
    <div v-if="article.isNew" class="absolute top-4 right-4 z-10">
       <span class="flex h-2.5 w-2.5">
         <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
         <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
       </span>
    </div>

    <!-- List Mode Layout (Premium Book List Style) -->
    <div v-if="mode === 'list'" class="flex items-start gap-6">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-3 mb-2.5">
           <span v-if="isQualified" class="inline-flex items-center gap-1 text-[#FF9500] font-black text-[10px] uppercase italic tracking-tighter">
             神作
           </span>
           <span class="inline-flex items-center text-primary/60 shrink-0" v-html="getContentTypeIcon(article.contentType)"></span>
           <h3 class="text-[17px] font-bold text-text-main group-hover:text-primary transition-colors tracking-tight leading-tight">
             {{ article.title }}
           </h3>
        </div>
        <div class="flex items-center gap-4 text-[12px] text-text-muted">
          <span class="font-bold text-text-sub uppercase tracking-widest opacity-80">{{ article.rssTitle || 'RSS' }}</span>
          <span class="opacity-30">·</span>
          <span>{{ formatRelativeTime(article.date) }}</span>
          <span v-if="article.score" class="opacity-30">·</span>
          <span v-if="article.score" class="text-primary/80 font-bold">推荐值 {{ article.score }}%</span>
        </div>
      </div>
    </div>

    <!-- Card Mode (Magazine Style) -->
    <template v-else>
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-3">
          <span
            v-if="isQualified"
            class="inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-black bg-[#FF9500]/10 text-[#FF9500] border border-[#FF9500]/20 uppercase tracking-widest"
          >
            神作
          </span>
          <span class="inline-flex items-center text-primary/60" v-html="getContentTypeIcon(article.contentType)"></span>
        </div>
        <span class="text-[11px] text-text-muted font-bold tracking-tighter">{{ formatRelativeTime(article.date) }}</span>
      </div>

      <h3 class="article-title text-[19px] font-bold text-text-main leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2 tracking-tight">
        {{ article.title }}
      </h3>

      <p
        v-if="displaySummary"
        class="text-[14px] text-text-sub leading-relaxed mb-6 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity"
      >
        {{ displaySummary }}
      </p>

      <div class="flex items-center justify-between gap-3 mt-auto">
        <div v-if="displayTags.length" class="flex items-center gap-2 flex-wrap flex-1 min-w-0">
          <span
            v-for="tag in displayTags"
            :key="tag"
            class="text-[10px] font-bold px-2 py-1 rounded-md bg-black/[0.03] text-text-muted/60 hover:bg-primary/5 hover:text-primary transition-all"
          >
            #{{ tag }}
          </span>
        </div>
        <span class="text-[11px] font-black text-text-muted/40 tracking-widest shrink-0 uppercase">
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
  return article.qualified === true || article.score >= 90
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
  if (list.length) return list.slice(0, 2).filter(Boolean)
  return []
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