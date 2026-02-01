<template>
  <div
    class="group relative transition-all duration-300 cursor-pointer active:scale-[0.99]"
    :class="[
      mode === 'card' 
        ? 'rounded-2xl p-6 bg-white shadow-card hover:shadow-paper' 
        : 'px-6 py-5 border-b border-black/[0.02] hover:bg-black/[0.01]',
      { 'article-read': isRead(article.link) }
    ]"
  >
    <!-- NEW Badge -->
    <div v-if="article.isNew" class="absolute top-0 right-0 p-3">
       <span class="flex h-2 w-2">
         <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
         <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
       </span>
    </div>

    <div class="flex flex-col h-full">
      <!-- Top Meta Row: Perfect Alignment -->
      <div class="flex items-center gap-3 mb-3">
        <div v-if="isQualified" class="flex items-center gap-1 text-essential font-bold text-[10px] tracking-widest uppercase">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          必读精选
        </div>
        <span class="inline-flex items-center text-primary/60 shrink-0" v-html="formatIcon"></span>
        <div class="flex items-center gap-2 text-[11px] font-bold text-text-muted/60 uppercase tracking-widest">
          <span>{{ article.rssTitle || 'Archive' }}</span>
          <span class="opacity-30">·</span>
          <span>{{ timeAgo }}</span>
        </div>
      </div>

      <!-- Title: Consistent Styling -->
      <h3 
        class="font-bold text-text-main group-hover:text-primary transition-colors leading-snug mb-3 tracking-tight"
        :class="mode === 'card' ? 'text-[18px]' : 'text-[16px]'"
      >
        {{ article.title }}
      </h3>

      <!-- Bottom Meta Row: Clean and Professional -->
      <div class="mt-auto flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <span v-if="article.score" class="text-[11px] font-black text-primary px-2 py-0.5 rounded bg-primary/5 border border-primary/10">
            炼金指数 {{ article.score }}%
          </span>
          <div v-if="article.tags?.length" class="flex gap-1.5">
            <span 
              v-for="tag in article.tags.slice(0, 1)" 
              :key="tag"
              class="text-[10px] font-medium text-text-muted/50"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
        
        <span v-if="mode === 'list' && article.wordCount" class="text-[10px] font-bold text-text-muted/20 uppercase tracking-widest">
          {{ article.wordCount }} WORDS
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { CONTENT_TYPE_ICONS } from '~/composables/useArticles'
import { useReadingProgress } from '~/composables/useReadingProgress'

const props = defineProps({
  article: { type: Object, required: true },
  mode: { type: String, default: 'card' }
})

const { isRead } = useReadingProgress()

const isQualified = computed(() => props.article.qualified || props.article.score >= 90)
const formatIcon = computed(() => CONTENT_TYPE_ICONS[props.article.contentType] || CONTENT_TYPE_ICONS.ARTICLE)

const timeAgo = computed(() => {
  if (!props.article.date) return ''
  const date = new Date(props.article.date)
  const diffMs = Date.now() - date.getTime()
  const mins = Math.floor(diffMs / 60000)
  const hours = Math.floor(diffMs / 3600000)
  if (mins < 60) return `${mins}分钟前`
  if (hours < 24) return `${hours}小时前`
  return `${Math.floor(hours/24)}天前`
})
</script>