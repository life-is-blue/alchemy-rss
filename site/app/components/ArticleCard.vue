<template>
  <div
    class="group relative transition-all duration-500 cursor-pointer active:scale-[0.99] overflow-hidden"
    :class="[
      mode === 'card' 
        ? 'rounded-3xl p-7 bg-white shadow-card hover:shadow-paper' 
        : 'px-8 py-7 border-b border-black/[0.03] hover:bg-black/[0.01]',
      { 'article-read': isRead(article.link) }
    ]"
  >
    <!-- NEW Indicator -->
    <div v-if="article.isNew" class="absolute top-0 right-0 p-4">
       <span class="flex h-2.5 w-2.5">
         <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
         <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
       </span>
    </div>

    <div class="flex flex-col h-full">
      <!-- Strong Vertical Axis: Unified Meta Row -->
      <div class="flex items-center gap-4 mb-4">
        <div v-if="isQualified" class="flex items-center gap-1.5 text-essential font-black text-[10px] tracking-widest uppercase">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Essential
        </div>
        <div class="flex items-center gap-3 text-[12px] font-medium text-text-muted">
          <span class="inline-flex items-center text-primary/50" v-html="formatIcon"></span>
          <span class="uppercase tracking-wider font-bold">{{ article.rssTitle || 'Archive' }}</span>
          <span class="opacity-30">/</span>
          <span>{{ timeAgo }}</span>
        </div>
      </div>

      <!-- Title: More breath, better rhythm -->
      <h3 
        class="font-extrabold text-text-main group-hover:text-primary transition-colors leading-tight mb-4 tracking-tight"
        :class="mode === 'card' ? 'text-[20px]' : 'text-[18px]'"
      >
        {{ article.title }}
      </h3>

      <!-- Premium Pill style for Score -->
      <div class="mt-auto flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div v-if="article.score" class="flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/5 border border-primary/5">
            <span class="w-1 h-1 rounded-full bg-primary/40"></span>
            <span class="text-[11px] font-black text-primary uppercase tracking-tighter">Index {{ article.score }}%</span>
          </div>
          
          <div v-if="article.tags?.length" class="flex gap-2">
            <span 
              v-for="tag in article.tags.slice(0, 1)" 
              :key="tag"
              class="text-[11px] font-bold text-text-muted/40"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
        
        <span v-if="mode === 'list' && article.wordCount" class="text-[10px] font-bold text-text-muted/20 uppercase tracking-[0.2em]">
          {{ article.wordCount }} Words
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
  if (mins < 60) return `${mins}m ago`
  if (hours < 24) return `${hours}h ago`
  return `${Math.floor(hours/24)}d ago`
})
</script>