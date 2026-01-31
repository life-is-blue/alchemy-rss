<template>
  <div class="bg-white relative" ref="readerContainer">
    <!-- Reading Progress Bar (top) -->
    <div class="fixed top-14 left-0 right-0 h-0.5 bg-black/5 z-50">
      <div
        class="reading-progress h-full"
        :style="{ width: readingProgress + '%' }"
      ></div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="space-y-10 animate-pulse">
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
      class="custom-content selection:bg-primary/10 transition-colors duration-500"
      :class="[`theme-${theme}`]"
    >
      <header class="mb-12 text-center lg:text-left">
        <div class="flex items-center justify-center lg:justify-start gap-2 text-[11px] font-medium text-text-sub/60 mb-4">
          <span>{{ article.siteName || 'Alchemy Archive' }}</span>
          <span v-if="article.byline" class="opacity-30">·</span>
          <span v-if="article.byline">{{ article.byline }}</span>
          <span v-if="article.readTime" class="opacity-30">·</span>
          <span v-if="article.readTime">{{ article.readTime }} 分钟阅读</span>
        </div>
        <h1 class="text-2xl lg:text-3xl font-bold leading-[1.3] text-text-main mb-6 tracking-tight">
          {{ article.title }}
        </h1>

        <!-- Tags -->
        <div v-if="articleData?.tags?.length" class="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
          <span
            v-for="tag in articleData.tags.slice(0, 5)"
            :key="tag"
            class="tag-chip"
          >
            {{ tag }}
          </span>
        </div>
      </header>

      <!-- AI Insight Card (Collapsible) -->
      <div v-if="article.aiSummary || article.mainPoints" class="mb-10 rounded-xl transition-colors duration-500 overflow-hidden" style="background-color: var(--color-card-bg); border: 1px solid var(--color-card-border);">
        <button
          @click="insightExpanded = !insightExpanded"
          class="w-full p-4 flex items-center justify-between text-left hover:bg-black/[0.02] transition-colors"
        >
          <div class="flex items-center gap-2 text-primary font-semibold text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 1 8 8c0 3.2-2.3 5.9-5.4 7.2-.6.2-1 .8-1 1.4v.4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.4c0-.6-.4-1.2-1-1.4C4.3 15.9 2 13.2 2 10a8 8 0 0 1 8-8z"/><path d="M9 22h6"/></svg>
            AI 摘要
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="text-text-sub/50 transition-transform"
            :class="{ 'rotate-180': insightExpanded }"
          ><path d="m6 9 6 6 6-6"/></svg>
        </button>

        <div v-show="insightExpanded" class="px-4 pb-4">
          <p v-if="article.aiSummary" class="text-[15px] text-text-sub leading-relaxed mb-4">
            {{ article.aiSummary }}
          </p>

          <ul v-if="article.mainPoints && article.mainPoints.length" class="space-y-2">
            <li v-for="(point, idx) in article.mainPoints" :key="idx" class="flex gap-2 text-[13px] text-text-sub leading-relaxed">
              <span class="font-semibold text-primary shrink-0">{{ idx + 1 }}.</span>
              <span>
                <strong class="text-text-main">{{ point.point }}</strong>
                <span v-if="point.explanation" class="opacity-80"> - {{ point.explanation }}</span>
              </span>
            </li>
          </ul>

          <div class="mt-4 pt-4 border-t border-black/[0.05] flex flex-wrap gap-4 text-[11px] font-medium text-text-sub/70 items-center">
            <span v-if="article.score" class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" class="text-qualified"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              评分 {{ article.score }}
            </span>
            <span v-if="article.wordCount" class="flex items-center gap-1">
              {{ article.wordCount }} 字
            </span>
          </div>
        </div>
      </div>

      <article
        class="prose prose-lg max-w-none text-text-main leading-[1.9] font-normal article-body"
        :style="{ fontSize: fontSize + 'px', lineHeight: 1.8 + (fontSize - 16) * 0.02 }"
        v-html="article.content"
      ></article>

      <footer class="mt-16 mb-8 border-t border-outline/10 pt-8">
        <!-- Article Actions -->
        <div class="flex items-center justify-between gap-4 mb-8">
          <a
            :href="props.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-sm text-text-sub hover:text-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            查看原文
          </a>

          <div class="flex items-center gap-3">
            <button
              @click="toggleFavorite"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all active:scale-95"
              :class="isFavorited ? 'bg-qualified/10 text-qualified' : 'bg-black/5 text-text-sub hover:bg-black/10'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" :fill="isFavorited ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
              {{ isFavorited ? '已收藏' : '收藏' }}
            </button>

            <button
              @click="scrollToTop"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/5 text-sm font-medium text-text-sub hover:bg-black/10 transition-all active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 15-6-6-6 6"/></svg>
              回到顶部
            </button>
          </div>
        </div>

        <!-- Reading Complete -->
        <div class="text-center text-[11px] text-text-sub/50 font-medium uppercase tracking-widest">
          — 阅读完毕 —
        </div>
      </footer>
    </div>

    <!-- Empty State -->
    <div v-else class="flex flex-col items-center justify-center text-text-sub/30 text-center gap-6 p-10 min-h-[50vh]">
      <div class="w-16 h-16 rounded-full bg-black/[0.02] flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/><path d="M8 15h6"/></svg>
      </div>
      <p class="text-sm font-medium tracking-tight">选择一篇文章开始阅读</p>
    </div>

    <!-- Mobile Bottom Toolbar -->
    <div class="xl:hidden fixed bottom-14 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-outline/10 px-4 py-2 z-40 safe-area-pb">
      <div class="flex items-center justify-around">
        <button
          @click="showSettingsPanel = !showSettingsPanel"
          class="flex flex-col items-center gap-0.5 py-1 text-text-sub active:text-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>
          <span class="text-[10px]">字号</span>
        </button>

        <button
          @click="toggleFavorite"
          class="flex flex-col items-center gap-0.5 py-1"
          :class="isFavorited ? 'text-qualified' : 'text-text-sub'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" :fill="isFavorited ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
          <span class="text-[10px]">{{ isFavorited ? '已收藏' : '收藏' }}</span>
        </button>

        <a
          :href="props.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center gap-0.5 py-1 text-text-sub active:text-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
          <span class="text-[10px]">原文</span>
        </a>
      </div>
    </div>

    <!-- Mobile Settings Panel -->
    <transition name="toolbar-fade">
      <div
        v-if="showSettingsPanel"
        class="xl:hidden fixed bottom-28 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-wechat border border-outline/10 p-4 z-50"
      >
        <div class="mb-4">
          <p class="text-[11px] font-medium text-text-sub/60 mb-3">字号</p>
          <div class="flex items-center justify-between gap-4">
            <button @click="decreaseFont" class="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 active:scale-90 transition-all font-bold text-lg">A-</button>
            <div class="flex-1 h-1 bg-black/5 rounded-full relative">
              <div class="absolute left-0 top-0 h-full bg-primary/50 rounded-full" :style="{ width: ((fontSize - 14) / 12) * 100 + '%' }"></div>
            </div>
            <button @click="increaseFont" class="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 active:scale-90 transition-all font-bold text-lg">A+</button>
          </div>
        </div>

        <div>
          <p class="text-[11px] font-medium text-text-sub/60 mb-3">主题</p>
          <div class="flex items-center justify-around">
            <button @click="theme = 'white'" class="w-10 h-10 rounded-full border-2 transition-all active:scale-90" :class="theme === 'white' ? 'border-primary' : 'border-outline/20'" style="background-color: #FFFFFF;" title="白色"></button>
            <button @click="theme = 'sepia'" class="w-10 h-10 rounded-full border-2 transition-all active:scale-90" :class="theme === 'sepia' ? 'border-primary' : 'border-outline/20'" style="background-color: #f5e6c8;" title="护眼"></button>
            <button @click="theme = 'green'" class="w-10 h-10 rounded-full border-2 transition-all active:scale-90" :class="theme === 'green' ? 'border-primary' : 'border-outline/20'" style="background-color: #cce8cf;" title="绿色"></button>
            <button @click="theme = 'night'" class="w-10 h-10 rounded-full border-2 transition-all active:scale-90" :class="theme === 'night' ? 'border-primary' : 'border-outline/20'" style="background-color: #1A1A1A;" title="夜间"></button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Overlay for settings panel -->
    <div
      v-if="showSettingsPanel"
      @click="showSettingsPanel = false"
      class="xl:hidden fixed inset-0 z-40"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  url: String,
  articleData: Object
})

const emit = defineEmits(['scroll-top'])

const { fontSize, theme, increaseFont, decreaseFont } = useReadingSettings()

const article = ref(null)
const loading = ref(false)
const insightExpanded = ref(true)
const showSettingsPanel = ref(false)
const readingProgress = ref(0)
const readerContainer = ref(null)
const articleContent = ref(null)

// Favorites state (localStorage)
const isFavorited = ref(false)

const toggleFavorite = () => {
  if (!props.url) return
  isFavorited.value = !isFavorited.value

  if (process.client) {
    const favorites = JSON.parse(localStorage.getItem('article-favorites') || '{}')
    if (isFavorited.value) {
      favorites[props.url] = {
        title: article.value?.title || props.articleData?.title,
        savedAt: new Date().toISOString()
      }
    } else {
      delete favorites[props.url]
    }
    localStorage.setItem('article-favorites', JSON.stringify(favorites))
  }
}

// Check if already favorited
const checkFavoriteStatus = () => {
  if (process.client && props.url) {
    const favorites = JSON.parse(localStorage.getItem('article-favorites') || '{}')
    isFavorited.value = !!favorites[props.url]
  }
}

// Reading progress tracking
const updateReadingProgress = () => {
  if (!process.client) return

  const scrollContainer = document.querySelector('.overflow-y-scroll')
  if (!scrollContainer) return

  const scrollTop = scrollContainer.scrollTop
  const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight

  if (scrollHeight > 0) {
    readingProgress.value = Math.min(100, Math.round((scrollTop / scrollHeight) * 100))
  }

  // Save progress to localStorage
  if (props.url && readingProgress.value > 0) {
    const progress = JSON.parse(localStorage.getItem('reading-progress') || '{}')
    progress[props.url] = {
      progress: readingProgress.value,
      read: readingProgress.value > 90,
      lastReadAt: new Date().toISOString()
    }
    localStorage.setItem('reading-progress', JSON.stringify(progress))
  }
}

const scrollToTop = () => {
  emit('scroll-top')
}

// Setup scroll listener
onMounted(() => {
  if (process.client) {
    const scrollContainer = document.querySelector('.overflow-y-scroll')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateReadingProgress, { passive: true })
    }
  }
})

onUnmounted(() => {
  if (process.client) {
    const scrollContainer = document.querySelector('.overflow-y-scroll')
    if (scrollContainer) {
      scrollContainer.removeEventListener('scroll', updateReadingProgress)
    }
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
    // Strategy: Load from static archive first
    if (props.articleData?.archive_path) {
      console.log('📦 Loading from static archive:', props.articleData.archive_path)
      try {
        const data = await $fetch(`/${props.articleData.archive_path}`)
        article.value = data
        loading.value = false
        return
      } catch (e) {
        console.warn('⚠️ Static archive missing, falling back to API...')
      }
    }

    // Fallback: Request online API
    const data = await $fetch('/api/reader', {
      query: { url: newUrl }
    })
    article.value = data
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
}
.article-body p {
  margin-bottom: 2rem;
}
.article-body h1, .article-body h2, .article-body h3 {
  color: var(--color-text-main);
  font-weight: 800;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}
.article-body h2 { font-size: 1.5rem; }
.article-body img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 2.5rem auto;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
.article-body pre {
  background-color: #1A1A1A;
  color: #E0E0E0;
  padding: 1.5rem;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.6;
  margin: 2.5rem 0;
  overflow-x: auto;
}
.article-body blockquote {
  border-left: 4px solid var(--color-primary);
  background: #F9F9F9;
  padding: 1.5rem 2rem;
  margin: 2.5rem 0;
  font-style: italic;
  color: #555;
  border-radius: 0 12px 12px 0;
}
.article-body a {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 4px;
  font-weight: 600;
}

/* Themes */
.theme-white {
  background-color: #FFFFFF;
  color: #333;
  --color-card-bg: #FBFBF9;
  --color-card-border: rgba(0, 0, 0, 0.03);
}
.theme-sepia {
  background-color: #f5e6c8;
  color: #5c4b37;
  --color-card-bg: rgba(0, 0, 0, 0.02);
  --color-card-border: rgba(91, 70, 54, 0.1);
}
.theme-green {
  background-color: #cce8cf;
  color: #3d5c3f;
  --color-card-bg: rgba(0, 0, 0, 0.02);
  --color-card-border: rgba(61, 92, 63, 0.1);
}
.theme-night {
  background-color: #1a1a1a;
  color: #999999;
  --color-card-bg: rgba(255, 255, 255, 0.03);
  --color-card-border: rgba(255, 255, 255, 0.05);
}

.theme-night .article-body h1, 
.theme-night .article-body h2, 
.theme-night .article-body h3,
.theme-night h1 {
  color: #E0E0E0;
}
</style>