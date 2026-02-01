<template>
  <div class="relative transition-colors duration-500" ref="readerContainer">
    <!-- Reading Progress Bar (top) -->
    <div class="fixed top-0 left-0 right-0 h-1 bg-primary/10 z-50">
      <div
        class="reading-progress h-full bg-primary"
        :style="{ width: readingProgress + '%' }"
      ></div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="max-w-[700px] mx-auto py-20 px-6 space-y-10 animate-pulse">
      <div class="h-10 bg-black/[0.03] rounded-lg w-4/5"></div>
      <div class="h-4 bg-black/[0.03] rounded-lg w-1/4"></div>
      <div class="space-y-4 pt-10">
        <div class="h-4 bg-black/[0.03] rounded-lg w-full"></div>
        <div class="h-4 bg-black/[0.03] rounded-lg w-full"></div>
        <div class="h-4 bg-black/[0.03] rounded-lg w-5/6"></div>
      </div>
    </div>

    <!-- Article Content -->
    <div
      v-else-if="article"
      ref="articleContent"
      class="max-w-[700px] mx-auto py-12 md:py-20 px-6 md:px-10 selection:bg-primary/10 transition-colors duration-500"
    >
      <header class="mb-16">
        <div class="flex items-center gap-2 text-[12px] font-bold text-text-muted/60 mb-6 uppercase tracking-widest">
          <span>{{ article.siteName || 'Alchemy Archive' }}</span>
          <span v-if="article.byline" class="opacity-30">·</span>
          <span v-if="article.byline">{{ article.byline }}</span>
        </div>
        
        <h1 class="text-3xl md:text-4xl font-extrabold leading-[1.25] text-text-main mb-8 tracking-tight">
          {{ article.title }}
        </h1>

        <div class="flex items-center gap-4 text-[13px] text-text-muted font-medium">
           <span v-if="article.readTime">{{ article.readTime }} 分钟阅读</span>
           <span v-if="articleData?.tags?.length" class="opacity-30">·</span>
           <div v-if="articleData?.tags?.length" class="flex items-center gap-2 overflow-x-auto hide-scrollbar">
             <span v-for="tag in articleData.tags.slice(0, 3)" :key="tag" class="whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">#{{ tag }}</span>
           </div>
        </div>
      </header>

      <!-- AI Insight Card (Clean Style) -->
      <div v-if="article.aiSummary || article.mainPoints" class="mb-16 rounded-3xl p-6 md:p-8 border border-outline/10 transition-all duration-500" style="background-color: var(--color-hover-bg); box-shadow: var(--shadow-card);">
        <div class="flex items-center gap-2 text-primary font-bold text-[14px] mb-6 uppercase tracking-wider">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 1 8 8c0 3.2-2.3 5.9-5.4 7.2-.6.2-1 .8-1 1.4v.4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.4c0-.6-.4-1.2-1-1.4C4.3 15.9 2 13.2 2 10a8 8 0 0 1 8-8z"/><path d="M9 22h6"/></svg>
          AI 深度摘要
        </div>

        <p v-if="article.aiSummary" class="text-[16px] text-text-main leading-relaxed mb-8 font-medium italic opacity-90">
          "{{ article.aiSummary }}"
        </p>

        <div v-if="article.mainPoints && article.mainPoints.length" class="space-y-4">
          <div v-for="(point, idx) in article.mainPoints" :key="idx" class="flex gap-4 items-start group">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary/5 text-primary text-[10px] font-bold shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-all">
              {{ idx + 1 }}
            </span>
            <div class="text-[14px] leading-relaxed">
              <strong class="text-text-main block mb-1">{{ point.point }}</strong>
              <p v-if="point.explanation" class="text-text-sub opacity-80">{{ point.explanation }}</p>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-black/[0.03] flex items-center justify-between text-[11px] font-bold text-text-muted/40 uppercase tracking-widest">
          <span v-if="article.score" class="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" class="text-qualified"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            WORTH {{ article.score }} POINTS
          </span>
          <span v-if="article.wordCount">{{ article.wordCount }} WORDS</span>
        </div>
      </div>

      <article
        class="prose prose-lg max-w-none text-text-main leading-[1.85] font-normal article-body"
        :style="{ fontSize: fontSize + 'px' }"
        v-html="article.content"
      ></article>

      <footer class="mt-24 mb-12 border-t border-outline/5 pt-12">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div class="flex items-center gap-4">
            <button
              @click="toggleFavorite"
              class="flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-bold transition-all active:scale-95 shadow-sm border border-outline/5"
              :class="isFavorited ? 'bg-primary text-white border-primary' : 'bg-white text-text-main hover:bg-black/5'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" :fill="isFavorited ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2.5"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
              {{ isFavorited ? '已收藏' : '加入收藏' }}
            </button>
            <a
              :href="props.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-text-main text-[13px] font-bold hover:bg-black/5 transition-all active:scale-95 shadow-sm border border-outline/5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
              阅读原文
            </a>
          </div>

          <button
            @click="scrollToTop"
            class="p-3 rounded-full bg-white text-text-muted hover:text-primary transition-all active:scale-90 border border-outline/5 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m18 15-6-6-6 6"/></svg>
          </button>
        </div>

        <!-- Next Article Card -->
        <div v-if="nextArticle" class="mt-16 mb-8">
           <p class="text-[11px] font-bold text-text-muted/40 uppercase tracking-widest mb-4">下一篇 Next</p>
           <div
             @click="$emit('open-next', nextArticle)"
             class="group cursor-pointer p-6 rounded-xl border transition-all duration-300"
             style="background-color: var(--color-hover-bg); border-color: var(--color-outline);"
             :class="['hover:bg-primary/5 hover:border-primary/10']"
           >
             <h3 class="text-[16px] font-bold text-text-main group-hover:text-primary transition-colors mb-2 truncate">
               {{ nextArticle.title }}
             </h3>
             <div class="flex items-center gap-2 text-[12px] text-text-muted">
               <span>{{ nextArticle.rssTitle || 'RSS' }}</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="opacity-50 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
             </div>
           </div>
        </div>

        <div v-if="!nextArticle" class="text-center text-[11px] text-text-muted/30 font-bold uppercase tracking-[0.3em]">
          END OF ARCHIVE
        </div>
      </footer>
    </div>

    <!-- Empty State -->
    <div v-else class="flex flex-col items-center justify-center text-text-muted/30 text-center gap-6 p-10 min-h-[70vh]">
      <div class="w-20 h-20 rounded-full bg-black/[0.02] flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/><path d="M8 15h6"/></svg>
      </div>
      <p class="text-sm font-bold tracking-tight">请在左侧选择一篇文章开始阅读</p>
    </div>

    <!-- Lightbox Overlay -->
    <transition name="fade">
      <div
        v-if="showLightbox"
        @click="closeLightbox"
        class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
      >
        <img
          :src="lightboxImage"
          class="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-300"
          alt="Full size preview"
        />
        <button
          @click.stop="closeLightbox"
          class="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useReadingProgress } from '~/composables/useReadingProgress'

const props = defineProps({
  url: String,
  articleData: Object,
  nextArticle: Object
})

const emit = defineEmits(['scroll-top', 'show-settings', 'open-next', 'toggle-header-title'])

const { fontSize, theme, increaseFont, decreaseFont } = useReadingSettings()
const { updateProgress } = useReadingProgress()

const article = ref(null)
const loading = ref(false)
const readingProgress = ref(0)
const readerContainer = ref(null)
const articleContent = ref(null)

// Lightbox State
const lightboxImage = ref(null)
const showLightbox = ref(false)

const openLightbox = (src) => {
  if (!src) return
  lightboxImage.value = src
  showLightbox.value = true
  document.body.style.overflow = 'hidden' // Prevent scrolling
}

const closeLightbox = () => {
  showLightbox.value = false
  lightboxImage.value = null
  document.body.style.overflow = ''
}

const isFavorited = ref(false)

const toggleFavorite = () => {
  if (!props.url) return
  isFavorited.value = !isFavorited.value
  if (process.client) {
    const favorites = JSON.parse(localStorage.getItem('article-favorites') || '{}')
    if (isFavorited.value) {
      favorites[props.url] = { title: article.value?.title || props.articleData?.title, savedAt: new Date().toISOString() }
    } else {
      delete favorites[props.url]
    }
    localStorage.setItem('article-favorites', JSON.stringify(favorites))
  }
}

const checkFavoriteStatus = () => {
  if (process.client && props.url) {
    const favorites = JSON.parse(localStorage.getItem('article-favorites') || '{}')
    isFavorited.value = !!favorites[props.url]
  }
}

const updateReadingProgress = () => {
  if (!process.client) return
  const container = document.querySelector('.overflow-y-auto')
  if (!container) return
  const scrollHeight = container.scrollHeight - container.clientHeight
  if (scrollHeight > 0) {
    readingProgress.value = Math.min(100, Math.round((container.scrollTop / scrollHeight) * 100))
    if (props.url) updateProgress(props.url, readingProgress.value)
  }
}

const scrollToTop = () => emit('scroll-top')

// Scroll Title Logic
let titleObserver = null
const setupTitleObserver = () => {
  if (process.client && articleContent.value) {
    const titleEl = articleContent.value.querySelector('h1')
    if (titleEl) {
      titleObserver = new IntersectionObserver((entries) => {
        // If title is NOT intersecting (scrolled out of view), show header title
        emit('toggle-header-title', !entries[0].isIntersecting)
      }, { threshold: 0 })
      titleObserver.observe(titleEl)
    }
  }
}

// Setup Image Listeners for Lightbox & Code Copy Buttons
const setupContentInteractions = () => {
  nextTick(() => {
    if (articleContent.value) {
      setupTitleObserver() // Initialize title observer
      
      // 1. Image Lightbox
      const images = articleContent.value.querySelectorAll('img')
      images.forEach(img => {
        img.style.cursor = 'zoom-in'
        img.addEventListener('click', (e) => {
          e.stopPropagation()
          openLightbox(img.src)
        })
      })

      // 2. Code Block Copy
      const preBlocks = articleContent.value.querySelectorAll('pre')
      preBlocks.forEach(pre => {
        // Wrapper for positioning
        if (pre.parentNode.classList.contains('code-wrapper')) return // Avoid double wrap
        
        const wrapper = document.createElement('div')
        wrapper.className = 'code-wrapper relative group'
        pre.parentNode.insertBefore(wrapper, pre)
        wrapper.appendChild(pre)

        // Copy Button
        const btn = document.createElement('button')
        btn.className = 'absolute top-2 right-2 p-1.5 rounded-md bg-white/10 text-white/70 opacity-0 group-hover:opacity-100 hover:bg-white/20 hover:text-white transition-all text-xs font-sans'
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`
        
        btn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(pre.innerText)
            const originalIcon = btn.innerHTML
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><polyline points="20 6 9 17 4 12"/></svg>`
            setTimeout(() => { btn.innerHTML = originalIcon }, 2000)
          } catch (err) {
            console.error('Failed to copy', err)
          }
        })
        wrapper.appendChild(btn)
      })
    }
  })
}

onMounted(() => {
  if (process.client) {
    const container = document.querySelector('.overflow-y-auto')
    if (container) container.addEventListener('scroll', updateReadingProgress, { passive: true })
  }
})

onUnmounted(() => {
  if (process.client) {
    const container = document.querySelector('.overflow-y-auto')
    if (container) container.removeEventListener('scroll', updateReadingProgress)
  }
})

watch(() => props.url, async (newUrl) => {
  if (!newUrl) {
    article.value = null
    readingProgress.value = 0
    return
  }

  loading.value = true
  readingProgress.value = 0
  checkFavoriteStatus()

  try {
    if (props.articleData?.archive_path) {
      try {
        article.value = await $fetch(`/${props.articleData.archive_path}`)
        loading.value = false
        setupContentInteractions() // Setup listener after static load
        return
      } catch { console.warn('Static archive missing, falling back...') }
    }
    article.value = await $fetch('/api/reader', { query: { url: newUrl } })
    setupContentInteractions() // Setup listener after API load
  } catch (e) {
    console.error('Failed to load article', e)
    article.value = null
  } finally {
    loading.value = false
  }
}, { immediate: true })
</script>

<style>
.article-body {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  color: var(--color-text-main);
}
.article-body p {
  margin-bottom: 2rem; /* Reduced from 2.5rem for better continuity */
  line-height: 1.75;   /* Tightened from 1.85 */
  text-align: justify; /* WeChat Reading standard */
}
.article-body h1, .article-body h2, .article-body h3 {
  font-weight: 800;
  margin-top: 4rem;
  margin-bottom: 2rem;
  line-height: 1.25;
  letter-spacing: -0.025em; /* tight tracking */
  color: var(--color-text-main);
}
.article-body h2 { font-size: 1.6rem; border-bottom: 1px solid var(--color-outline); padding-bottom: 0.75rem; }
.article-body img {
  max-width: 100%;
  height: auto;
  border-radius: 24px;
  margin: 3rem auto;
  box-shadow: 0 15px 45px rgba(0,0,0,0.08);
}
.article-body pre {
  background-color: #1A1A1A;
  color: #E0E0E0;
  padding: 2rem;
  border-radius: 20px;
  font-size: 14px;
  line-height: 1.7;
  margin: 3rem 0;
  overflow-x: auto;
  border: 1px solid rgba(255,255,255,0.05);
}
.article-body blockquote {
  border-left: 6px solid var(--color-primary);
  background: rgba(0, 0, 0, 0.02);
  padding: 2rem 2.5rem;
  margin: 3rem 0;
  font-style: italic;
  color: var(--color-text-sub);
  border-radius: 4px 20px 20px 4px;
}
.article-body a {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 6px;
  font-weight: 700;
  transition: opacity 0.2s;
}
.article-body a:hover {
  opacity: 0.7;
}
</style>
