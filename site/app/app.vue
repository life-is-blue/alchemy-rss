<template>
  <div class="h-screen flex overflow-hidden bg-background selection:bg-primary/10 transition-colors duration-500" :class="[`theme-${theme}`]">
    <!-- Desktop Sidebar -->
    <aside
      class="hidden md:flex w-72 flex-col shrink-0 border-r transition-all duration-300 backdrop-blur-xl"
      style="background-color: var(--color-sidebar-bg); border-color: var(--color-border);"
    >
      <div class="p-8 flex flex-col h-full overflow-hidden">
        <!-- WeChat Style Logo -->
        <div class="flex items-center gap-3 font-bold text-[20px] text-text-main mb-12 px-2 cursor-pointer" @click="handleNav('reader')">
          <div class="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          </div>
          <span class="tracking-tighter font-serif text-2xl text-text-main">Alchemy</span>
        </div>

        <nav class="space-y-10 flex-1 overflow-y-auto hide-scrollbar pr-2 text-text-main">
          <!-- 1. Main Views -->
          <div class="space-y-1">
            <button
              v-for="item in mainNav"
              :key="item.id"
              @click="handleNav(item.id)"
              class="nav-item-base"
              :class="currentView === item.id && currentCategory === '全部' && currentTab === '全部' ? 'nav-item-active' : 'nav-item-inactive'"
            >
              <div class="nav-item-content">
                <span class="w-5 h-5 flex items-center justify-center" v-html="getIcon(item.icon)"></span>
                <span class="text-[15px] font-bold">{{ item.label }}</span>
              </div>
            </button>
          </div>

          <!-- 2. Format Filters -->
          <div class="space-y-4">
            <p class="nav-section-title">载体格式</p>
            <div class="space-y-1">
              <button
                v-for="type in contentTypes.slice(1)"
                :key="type.id"
                @click="selectTab(type.label)"
                class="nav-item-base !py-2.5"
                :class="currentTab === type.label ? 'bg-primary/10 text-primary font-bold shadow-sm' : 'nav-item-inactive'"
              >
                <div class="nav-item-content">
                  <span class="w-4.5 h-4.5 flex items-center justify-center opacity-70" v-html="getFormatIcon(type.id)"></span>
                  <span class="text-[14px]">{{ type.label }}</span>
                </div>
              </button>
            </div>
          </div>

          <!-- 3. Topic Categories -->
          <div class="space-y-4">
            <p class="nav-section-title">专题分类</p>
            <div class="space-y-1">
              <button
                v-for="group in categoryGroups"
                :key="group.key"
                @click="selectCategory(group.key)"
                class="nav-item-base !py-2.5"
                :class="currentCategory === group.key ? 'bg-primary/10 text-primary font-bold shadow-sm' : 'nav-item-inactive'"
              >
                <div class="nav-item-content">
                  <span class="text-[14px] truncate">{{ group.label }}</span>
                </div>
                <span class="nav-item-count text-[11px]">{{ group.count }}</span>
              </button>
            </div>
          </div>
        </nav>

        <!-- Compact Profile (Bottom) -->
        <div class="mt-auto pt-8 border-t flex items-center gap-4" style="border-color: var(--color-border);">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 overflow-hidden">
            <img src="/favicon.svg" class="w-6 h-6 opacity-90 object-contain" alt="Avatar" />
          </div>
          <div class="min-w-0">
            <p class="text-[12px] font-bold text-text-main truncate leading-tight">Pickle Rick</p>
            <p class="text-[11px] text-text-muted/60 truncate uppercase font-bold tracking-tighter">Premium Edition</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content Shell -->
    <div class="flex-1 flex flex-col min-w-0 relative">
      <!-- Fixed Top Header (Design Sync with nav.png) -->
      <header
        class="h-16 px-6 md:px-12 flex items-center justify-between border-b bg-white/80 backdrop-blur-xl z-30 shrink-0"
        style="border-color: var(--color-border);"
      >
        <div class="flex items-center gap-6">
          <button @click="isMobileMenuOpen = true" class="md:hidden p-2 text-text-sub hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          </button>

          <!-- Back Button -->
          <button
            v-if="selectedUrl"
            @click="closeReader"
            class="hidden md:flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 text-text-sub hover:text-primary transition-all group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="group-hover:-translate-x-0.5 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <!-- Dynamic Title & Count -->
          <h1 
            class="text-[16px] font-bold text-text-main transition-all duration-300 flex items-center gap-3"
            :class="selectedUrl && !showHeaderTitle ? 'opacity-0' : 'opacity-100'"
          >
            <span class="tracking-tight">{{ selectedUrl ? filteredArticles.find(a => a.link === selectedUrl)?.title : filterTitle }}</span>
            <span v-if="!selectedUrl" class="text-[11px] font-black text-primary px-2 py-0.5 rounded-md bg-primary/5 border border-primary/10 tracking-widest uppercase">{{ filteredArticles.length }} Articles</span>
          </h1>
        </div>

        <!-- WeChat Style Search & Top Nav -->
        <div class="flex items-center gap-10 flex-1 justify-end">
          <div v-if="!selectedUrl" class="relative w-full max-w-[320px] hidden lg:block">
            <input
              v-model="searchValue"
              type="text"
              placeholder="搜索文章..."
              class="w-full h-10 bg-[#F5F5F5] rounded-full px-11 text-[14px] text-text-main focus:bg-white focus:shadow-sm focus:outline-none transition-all duration-300 border-none placeholder:text-text-muted/50"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="absolute left-4 top-3 text-text-muted/40 transition-colors"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>

          <nav class="hidden md:flex items-center gap-8">
            <button @click="handleNav('reader')" class="text-[14px] font-bold transition-colors" :class="currentView === 'reader' && !selectedUrl ? 'text-primary' : 'text-text-sub hover:text-primary'">首页</button>
            <div class="w-[1px] h-3 bg-black/5"></div>
            <button @click="handleNav('favorites')" class="text-[14px] font-bold transition-colors" :class="currentView === 'favorites' ? 'text-primary' : 'text-text-sub hover:text-primary'">我的收藏</button>
          </nav>

          <!-- View Mode -->
          <div class="flex items-center bg-[#F5F5F5] p-1 rounded-xl">
            <button
              @click="viewMode = 'list'"
              class="p-1.5 rounded-lg transition-all"
              :class="viewMode === 'list' ? 'bg-white text-primary shadow-sm' : 'text-text-sub hover:text-text-main'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
            </button>
            <button
              @click="viewMode = 'card'"
              class="p-1.5 rounded-lg transition-all"
              :class="viewMode === 'card' ? 'bg-white text-primary shadow-sm' : 'text-text-sub hover:text-text-main'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="7" height="7" x="3" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="14" rx="1.5"/><rect width="7" height="7" x="3" y="14" rx="1.5"/></svg>
            </button>
          </div>
        </div>
      </header>

      <!-- Scrollable Main -->
      <main
        ref="mainContent"
        class="flex-1 overflow-y-auto custom-scrollbar flex flex-col items-center relative transition-colors duration-500"
        @scroll="handleScroll"
      >
        <div
          class="w-full flex flex-col items-center"
          :class="[
            selectedUrl ? 'max-w-none' : 'max-w-[1100px] p-8 md:p-12 lg:p-16'
          ]"
        >
          <transition name="fade" mode="out-in">
            <!-- Feed View -->
            <div v-if="!selectedUrl" class="w-full">
              <div v-if="currentView === 'reader' || currentView === 'favorites'" key="articles">
                <div
                  :class="[
                    viewMode === 'card'
                      ? 'grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10'
                      : 'flex flex-col bg-surface rounded-[var(--radius-paper)] shadow-paper overflow-hidden border border-outline/5'
                  ]"
                >
                  <ArticleCard
                    v-for="article in displayedArticles"
                    :key="article.link"
                    :article="article"
                    :mode="viewMode"
                    @click="openArticle(article)"
                  />
                </div>

                <div v-if="loading" class="mt-12 space-y-6">
                  <div v-for="i in 3" :key="i" class="animate-pulse bg-black/[0.02] rounded-3xl h-40"></div>
                </div>

                <div v-if="!loading && displayedArticles.length === 0" class="py-40 text-center">
                   <div class="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8">
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-primary/40"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                   </div>
                   <p class="text-text-muted font-bold text-lg">空空如也</p>
                </div>

                <div v-if="hasMore" ref="scrollSentinel" class="h-32 flex items-center justify-center mt-10">
                   <div class="flex gap-2">
                     <div class="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
                     <div class="w-2 h-2 rounded-full bg-primary [animation-delay:0.2s] animate-bounce"></div>
                     <div class="w-2 h-2 rounded-full bg-primary [animation-delay:0.4s] animate-bounce"></div>
                   </div>
                </div>
              </div>
              <SourceGrid v-else-if="currentView === 'sources'" key="sources" :sources="rssData" />
            </div>

            <!-- Zen Reader View -->
            <div v-else key="reader" class="w-full flex justify-center min-h-screen pb-24">
              <div
                class="w-full max-w-[1000px] md:my-12 md:rounded-[var(--radius-paper)] overflow-hidden transition-all duration-500"
                style="background-color: var(--color-surface); box-shadow: var(--shadow-paper);"
              >
                <ReaderPanel
                  :url="selectedUrl"
                  :articleData="filteredArticles.find(a => a.link === selectedUrl)"
                  :nextArticle="nextArticle"
                  @scroll-top="scrollToTop"
                  @show-settings="showGlobalSettings = true"
                  @open-next="openArticle"
                  @toggle-header-title="showHeaderTitle = $event"
                />
              </div>
            </div>
          </transition>
        </div>
      </main>

      <FloatingToolbar
        :show-back-to-top="showBackToTop"
        :show-toolbar="true"
        :is-dark="theme === 'night'"
        :is-reader="!!selectedUrl"
        :is-favorited="isFavorited(selectedUrl)"
        @scroll-top="scrollToTop"
        @toggle-settings="showGlobalSettings = true"
        @toggle-dark="theme = (theme === 'night' ? 'white' : 'night')"
        @toggle-favorite="toggleFavorite(filteredArticles.find(a => a.link === selectedUrl))"
        @back="closeReader"
        @home="handleNav('reader')"
      />
    </div>

    <!-- Global Settings Drawer -->
    <transition name="drawer-right">
      <div v-if="showGlobalSettings" class="fixed inset-y-0 right-0 w-80 bg-white/95 backdrop-blur-2xl shadow-2xl z-50 p-10 flex flex-col gap-12 border-l border-outline/5">
        <div class="flex items-center justify-between">
           <h3 class="font-black text-text-main uppercase tracking-[0.2em] text-[12px]">Settings</h3>
           <button @click="showGlobalSettings = false" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 text-text-muted transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg></button>
        </div>
        <div class="space-y-6">
          <p class="text-[11px] font-bold text-text-muted/50 uppercase tracking-widest">Font Size</p>
          <div class="flex items-center justify-between bg-[#F5F5F5] rounded-2xl p-2.5">
             <button @click="decreaseFont" class="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white hover:shadow-sm transition-all active:scale-90"><span class="text-sm font-bold opacity-60">A</span></button>
             <button @click="resetFont" class="text-sm font-black text-text-main px-4 hover:bg-white rounded-lg h-10 transition-all">{{ fontSize }}</button>
             <button @click="increaseFont" class="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white hover:shadow-sm transition-all active:scale-90"><span class="text-xl font-bold opacity-60">A</span></button>
          </div>
        </div>
        <div class="space-y-6">
          <p class="text-[11px] font-bold text-text-muted/50 uppercase tracking-widest">Theme</p>
          <div class="grid grid-cols-2 gap-4">
            <button v-for="(t, key) in availableThemes" :key="key" @click="theme = key" class="flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all active:scale-95" :class="theme === key ? 'border-primary bg-primary/5' : 'border-transparent bg-black/[0.03]'">
              <div class="w-12 h-12 rounded-full border border-black/5 shadow-inner" :style="{ backgroundColor: t.bg }"></div>
              <span class="text-[11px] font-bold text-text-sub">{{ t.label }}</span>
            </button>
          </div>
        </div>
      </div>
    </transition>
    <div v-if="showGlobalSettings" @click="showGlobalSettings = false" class="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"></div>
  </div>
</template>

<script setup>
import { CONTENT_TYPE_LABELS, CATEGORY_LABELS } from '~/composables/useArticles'

const {
  loading, searchValue, rssData, filteredArticles, displayedArticles, hasMore, categoryGroups, sourceFeeds, currentCategory, currentTab, currentView, selectedUrl, loadData, loadMore, selectTab, selectCategory, handleNav, toggleFavorite, isFavorited
} = useArticles()

const { theme, fontSize, increaseFont, decreaseFont, resetFont } = useReadingSettings()

const viewMode = ref('list')
const isMobileMenuOpen = ref(false)
const showGlobalSettings = ref(false)
const showHeaderTitle = ref(false)
const mainContent = ref(null)
const scrollSentinel = ref(null)
const showBackToTop = ref(false)

const availableThemes = {
  white: { bg: '#FFFFFF', label: '简约白' },
  sepia: { bg: '#F5E6C8', label: '羊皮纸' },
  green: { bg: '#CCE8CF', label: '护眼绿' },
  night: { bg: '#1A1A1A', label: '极夜黑' }
}

const contentTypes = [
  { id: 'ALL', label: '全部' },
  { id: 'ARTICLE', label: '文章' },
  { id: 'TWITTER', label: '动态' },
  { id: 'PODCAST', label: '播客' },
  { id: 'VIDEO', label: '视频' }
]

const getFormatIcon = (id) => {
  if (id === 'ALL') return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="14" rx="1.5"/><rect width="7" height="7" x="3" y="14" rx="1.5"/></svg>'
  if (id === 'ARTICLE') return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>'
  if (id === 'TWITTER') return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>'
  if (id === 'PODCAST') return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>'
  if (id === 'VIDEO') return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>'
  return ''
}

const handleScroll = (e) => { showBackToTop.value = e.target.scrollTop > 300 }

const getIcon = (name) => {
  if (name === 'home') return '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
  if (name === 'bookmark') return '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>'
  if (name === 'rss') return '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>'
  return ''
}

const filterTitle = computed(() => {
  if (currentView.value === 'favorites') return '我的收藏'
  if (currentView.value === 'sources') return '订阅管理'
  return currentCategory.value !== '全部' ? (CATEGORY_LABELS[currentCategory.value] || currentCategory.value) : '精选推荐'
})

const nextArticle = computed(() => {
  if (!selectedUrl.value) return null
  const currentIndex = filteredArticles.value.findIndex(a => a.link === selectedUrl.value)
  if (currentIndex !== -1 && currentIndex < filteredArticles.value.length - 1) return filteredArticles.value[currentIndex + 1]
  return null
})

const openArticle = (article) => { selectedUrl.value = article.link; showHeaderTitle.value = false; scrollToTop() }
const closeReader = () => selectedUrl.value = ''
const scrollToTop = () => mainContent.value?.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => { loadData() })

if (process.client) {
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && selectedUrl.value) closeReader() })
}
</script>

<style>
/* Nuxt 4 standard CSS handles global styles */
</style>