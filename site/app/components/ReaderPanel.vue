<template>
  <div class="relative transition-colors duration-500" ref="readerContainer">
    <!-- Reading Progress Bar -->
    <div class="fixed top-0 left-0 right-0 h-1 bg-primary/10 z-50">
      <div class="reading-progress h-full bg-primary" :style="{ width: readingProgress + '%' }"></div>
    </div>

    <!-- Article Content -->
    <div v-if="article" ref="articleContent" class="max-w-[800px] mx-auto py-12 md:py-24 px-6 md:px-12 selection:bg-primary/10 transition-colors duration-500">
      
      <!-- Hero Header (Design Sync with read-intro.png) -->
      <header class="text-center mb-20">
        <div class="flex items-center justify-center gap-2 text-[12px] font-bold text-primary mb-10 uppercase tracking-[0.2em]">
          <span>{{ article.siteName || 'Alchemy Archive' }}</span>
        </div>
        
        <h1 class="text-3xl md:text-5xl font-black leading-tight text-text-main mb-10 tracking-tighter">
          {{ article.title }}
        </h1>

        <div v-if="article.byline" class="text-primary font-bold text-[15px] mb-12">
          <span class="opacity-60 text-text-muted mr-1">作者</span>
          <span class="hover:underline cursor-pointer">{{ article.byline }}</span>
        </div>

        <!-- Designer Stats Row -->
        <div class="stats-row">
          <div class="stats-item">
            <span class="stats-value">{{ article.score || 0 }}%</span>
            <span class="stats-label">推荐值</span>
          </div>
          <div class="w-[1px] h-8 bg-black/5"></div>
          <div class="stats-item">
            <span class="stats-value">{{ article.readTime || '5' }}</span>
            <span class="stats-label">分钟阅读</span>
          </div>
          <div class="w-[1px] h-8 bg-black/5"></div>
          <div class="stats-item">
            <span class="stats-value">{{ Math.round((article.wordCount || 1000) / 1000) }}k</span>
            <span class="stats-label">字数</span>
          </div>
        </div>

        <div class="flex items-center justify-center gap-4 mt-12">
           <button @click="toggleFavorite" class="px-8 py-3 rounded-xl font-bold text-sm border border-outline/10 hover:bg-black/5 transition-all">
             {{ isFavorited(props.url) ? '已收藏' : '加入书架' }}
           </button>
           <a :href="props.url" target="_blank" class="px-8 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
             开始阅读原文
           </a>
        </div>
      </header>

      <!-- AI Summary Section -->
      <div v-if="article.aiSummary || article.mainPoints" class="mb-20 rounded-3xl p-8 md:p-12 bg-[#F5F7F9] border border-outline/5">
        <div class="flex items-center gap-2 text-primary font-black text-[14px] mb-8 uppercase tracking-widest">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          AI 智能导读
        </div>
        <p v-if="article.aiSummary" class="text-xl text-text-main leading-relaxed mb-10 font-bold tracking-tight">
          "{{ article.aiSummary }}"
        </p>
        <div v-if="article.mainPoints?.length" class="space-y-6">
          <div v-for="(point, idx) in article.mainPoints" :key="idx" class="flex gap-6 items-start">
            <span class="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-white text-[12px] font-black shrink-0 mt-1 shadow-md shadow-primary/10">{{ idx + 1 }}</span>
            <div>
              <strong class="text-text-main text-[16px] block mb-2">{{ point.point }}</strong>
              <p class="text-text-sub opacity-80 leading-relaxed">{{ point.explanation }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Body -->
      <article class="prose prose-xl max-w-none text-text-main article-body" :style="{ fontSize: fontSize + 'px' }" v-html="article.content"></article>

      <footer class="mt-32 pt-16 border-t border-black/5">
        <div v-if="nextArticle" class="group cursor-pointer p-10 rounded-3xl bg-[#F5F7F9] hover:bg-primary/[0.03] transition-all duration-500 relative overflow-hidden" @click="$emit('open-next', nextArticle)">
           <div class="absolute right-0 top-0 bottom-0 w-1.5 bg-primary/0 group-hover:bg-primary transition-all"></div>
           <p class="text-[11px] font-black text-text-muted/40 uppercase tracking-[0.2em] mb-6">下一篇 NEXT</p>
           <div class="flex items-center justify-between gap-8">
             <div class="flex-1 min-w-0">
               <h3 class="text-2xl font-black text-text-main group-hover:text-primary transition-colors mb-4 truncate leading-tight">{{ nextArticle.title }}</h3>
               <div class="flex items-center gap-3 text-sm font-bold text-text-muted"><span class="text-primary/60">{{ nextArticle.rssTitle }}</span><span>·</span><span>点击继续阅读</span></div>
             </div>
             <div class="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0 border border-outline/5"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
           </div>
        </div>
      </footer>
    </div>

    <!-- Lightbox -->
    <transition name="fade">
      <div v-if="showLightbox" @click="closeLightbox" class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-8 cursor-zoom-out backdrop-blur-md">
        <img :src="lightboxImage" class="max-w-full max-h-full object-contain rounded-xl shadow-2xl transition-transform duration-500" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useReadingProgress } from '~/composables/useReadingProgress'
const { isRead } = useReadingProgress()
const { isFavorited, toggleFavorite: globalToggleFavorite } = useArticles()
const { fontSize, theme } = useReadingSettings()

const props = defineProps({ url: String, articleData: Object, nextArticle: Object })
const emit = defineEmits(['scroll-top', 'show-settings', 'open-next', 'toggle-header-title'])

const article = ref(null)
const loading = ref(false)
const readingProgress = ref(0)
const articleContent = ref(null)
const lightboxImage = ref(null)
const showLightbox = ref(false)

const openLightbox = (src) => { lightboxImage.value = src; showLightbox.value = true; document.body.style.overflow = 'hidden' }
const closeLightbox = () => { showLightbox.value = false; document.body.style.overflow = '' }

const toggleFavorite = () => {
  if (!props.url) return
  globalToggleFavorite({
    link: props.url,
    title: article.value?.title || props.articleData?.title,
    rssTitle: article.value?.siteName || props.articleData?.rssTitle,
    date: article.value?.date || props.articleData?.date
  })
}

// Scroll & Reveal Title Logic
let titleObserver = null
const setupTitleObserver = () => {
  if (process.client && articleContent.value) {
    const titleEl = articleContent.value.querySelector('h1')
    if (titleEl) {
      titleObserver = new IntersectionObserver((entries) => { emit('toggle-header-title', !entries[0].isIntersecting) }, { threshold: 0 })
      titleObserver.observe(titleEl)
    }
  }
}

const setupContentInteractions = () => {
  nextTick(() => {
    if (articleContent.value) {
      setupTitleObserver()
      articleContent.value.querySelectorAll('img').forEach(img => {
        img.style.cursor = 'zoom-in'; img.addEventListener('click', (e) => { e.stopPropagation(); openLightbox(img.src) })
      })
      articleContent.value.querySelectorAll('pre').forEach(pre => {
        if (pre.parentNode.classList.contains('code-wrapper')) return
        const wrapper = document.createElement('div'); wrapper.className = 'code-wrapper relative group'; pre.parentNode.insertBefore(wrapper, pre); wrapper.appendChild(pre)
        const btn = document.createElement('button'); btn.className = 'absolute top-3 right-3 p-2 rounded-lg bg-white/10 text-white/50 opacity-0 group-hover:opacity-100 hover:bg-white/20 hover:text-white transition-all'; btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`
        btn.addEventListener('click', async () => { await navigator.clipboard.writeText(pre.innerText); btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400"><polyline points="20 6 9 17 4 12"/></svg>'; setTimeout(() => { btn.innerHTML = originalIcon }, 2000) })
        wrapper.appendChild(btn)
      })
    }
  })
}

const updateReadingProgress = () => {
  if (!process.client) return
  const container = document.querySelector('.overflow-y-auto')
  if (!container) return
  const scrollHeight = container.scrollHeight - container.clientHeight
  if (scrollHeight > 0) {
    readingProgress.value = Math.min(100, Math.round((container.scrollTop / scrollHeight) * 100))
    if (props.url) useReadingProgress().updateProgress(props.url, readingProgress.value)
  }
}

onMounted(() => { if (process.client) document.querySelector('.overflow-y-auto')?.addEventListener('scroll', updateReadingProgress, { passive: true }) })
onUnmounted(() => { if (process.client) document.querySelector('.overflow-y-auto')?.removeEventListener('scroll', updateReadingProgress) })

watch(() => props.url, async (newUrl) => {
  if (!newUrl) { article.value = null; return }
  loading.value = true; readingProgress.value = 0
  try {
    if (props.articleData?.archive_path) {
      article.value = await $fetch(`/${props.articleData.archive_path}`)
    } else {
      article.value = await $fetch('/api/reader', { query: { url: newUrl } })
    }
    setupContentInteractions()
  } catch (e) { console.error(e); article.value = null } finally { loading.value = false }
}, { immediate: true })
</script>

<style>
.article-body { color: var(--color-text-main); font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif; }
.article-body p { margin-bottom: 2.5rem; line-height: 1.85; text-align: justify; }
.article-body h2 { font-size: 1.8rem; font-weight: 900; margin: 4rem 0 2rem; border-bottom: 1px solid rgba(0,0,0,0.03); padding-bottom: 1rem; }
.article-body img { border-radius: 20px; margin: 4rem auto; box-shadow: var(--shadow-wechat); }
.article-body blockquote { border-left: 4px solid var(--color-primary); background: rgba(var(--color-primary-rgb), 0.03); padding: 2rem 3rem; margin: 4rem 0; border-radius: 4px 24px 24px 4px; font-style: italic; }
</style>