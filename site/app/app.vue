<template>
  <div class="h-screen flex overflow-hidden bg-background selection:bg-primary/10 transition-colors duration-500" :class="[`theme-${theme}`]">
    <!-- Sidebar: Unified & Professional -->
    <aside
      class="hidden md:flex w-80 flex-col shrink-0 bg-sidebar-bg relative z-20 border-r border-black/[0.02]"
    >
      <div class="p-10 flex flex-col h-full">
        <!-- Logo Section -->
        <div class="flex items-center gap-4 font-bold text-text-main mb-12 px-2 cursor-pointer group" @click="handleNav('reader')">
          <div class="w-11 h-11 rounded-[14px] bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          </div>
          <span class="tracking-tight font-serif text-2xl">Alchemy</span>
        </div>

        <!-- Navigation: Grid Aligned -->
        <nav class="flex-1 overflow-y-auto hide-scrollbar pr-4 text-text-main">
          <!-- 1. Main Views -->
          <div class="space-y-1">
            <button
              v-for="item in mainNav"
              :key="item.id"
              @click="handleNav(item.id)"
              class="nav-item-base"
              :class="currentView === item.id && currentCategory === '全部' && currentTab === '全部' ? 'nav-item-active shadow-sm' : 'nav-item-inactive'"
            >
              <div class="nav-item-content">
                <span class="w-5 h-5 flex items-center justify-center" v-html="getIcon(item.icon)"></span>
                <span class="text-[15px] font-bold">{{ item.label }}</span>
              </div>
            </button>
          </div>

          <!-- 2. Sections -->
          <div v-for="section in navSections" :key="section.title">
            <p class="nav-section-title">{{ section.title }}</p>
            <div class="space-y-1">
              <button
                v-for="item in section.items"
                :key="item.key"
                @click="item.handler()"
                class="nav-item-base"
                :class="item.active ? 'nav-item-active shadow-sm' : 'nav-item-inactive'"
              >
                <div class="nav-item-content">
                  <span v-if="item.icon" class="w-5 h-5 flex items-center justify-center opacity-60" v-html="item.icon"></span>
                  <span class="text-[15px] truncate max-w-[160px] font-medium">{{ item.label }}</span>
                </div>
                <span v-if="item.count" class="text-[11px] font-black opacity-20 tracking-tighter">{{ item.count }}</span>
              </button>
            </div>
          </div>
        </nav>

        <!-- Profile (Bottom) -->
        <div class="mt-auto pt-8 border-t border-black/[0.03] flex items-center gap-4">
          <div class="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 overflow-hidden shadow-inner">
            <img src="/favicon.svg" class="w-7 h-7 opacity-90 object-contain" alt="Avatar" />
          </div>
          <div class="min-w-0">
            <p class="text-[14px] font-bold text-text-main truncate">Pickle Rick</p>
            <p class="text-[11px] text-text-muted/60 uppercase font-black tracking-widest">Premium</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Content: Floating Aesthetic -->
    <div class="flex-1 flex flex-col min-w-0 relative z-10">
      <!-- Header: Seamless Integration -->
      <header
        class="h-20 px-10 md:px-16 flex items-center justify-between bg-white/80 backdrop-blur-xl shrink-0 z-30"
      >
        <div class="flex items-center gap-8">
          <button @click="isMobileMenuOpen = true" class="md:hidden p-2 text-text-sub hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          </button>

          <!-- Back -->
          <button
            v-if="selectedUrl"
            @click="closeReader"
            class="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 text-text-sub transition-all group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <!-- Dynamic Context -->
          <h1 
            class="text-[17px] font-bold text-text-main transition-all duration-300 flex items-center gap-4"
            :class="selectedUrl && !showHeaderTitle ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'"
          >
            <span class="tracking-tight">{{ selectedUrl ? filteredArticles.find(a => a.link === selectedUrl)?.title : filterTitle }}</span>
            <span v-if="!selectedUrl" class="text-[11px] font-black bg-primary/5 text-primary px-2 py-0.5 rounded-lg border border-primary/10 tracking-widest uppercase">{{ filteredArticles.length }}</span>
          </h1>
        </div>

        <!-- Integrated Header Components -->
        <div class="flex items-center gap-12">
          <!-- Search -->
          <div v-if="!selectedUrl" class="relative w-full max-w-[340px] hidden lg:block">
            <input
              v-model="searchValue"
              type="text"
              placeholder="搜索资讯..."
              class="w-full h-11 header-integrated-input rounded-full px-12 text-[15px] text-text-main placeholder:text-text-muted/40 outline-none"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="absolute left-5 top-3.5 text-text-muted/40 transition-colors"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>

          <!-- Top Nav -->
          <nav class="hidden md:flex items-center gap-10">
            <button @click="handleNav('reader')" class="text-[15px] font-bold transition-colors" :class="currentView === 'reader' && !selectedUrl ? 'text-primary' : 'text-text-sub hover:text-primary'">首页</button>
            <button @click="handleNav('favorites')" class="text-[15px] font-bold transition-colors" :class="currentView === 'favorites' ? 'text-primary' : 'text-text-sub hover:text-primary'">书架</button>
          </nav>

          <!-- View Mode -->
          <div class="flex items-center header-integrated-pill">
            <button
              @click="viewMode = 'list'"
              class="p-2 rounded-lg transition-all"
              :class="viewMode === 'list' ? 'bg-white text-primary shadow-sm' : 'text-text-sub hover:text-text-main'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><path d="M3 6h.01M3 12h.01M3 18h.01"/></svg>
            </button>
            <button
              @click="viewMode = 'card'"
              class="p-2 rounded-lg transition-all"
              :class="viewMode === 'card' ? 'bg-white text-primary shadow-sm' : 'text-text-sub hover:text-text-main'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="7" height="7" x="3" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="14" rx="1.5"/><rect width="7" height="7" x="3" y="14" rx="1.5"/></svg>
            </button>
          </div>
        </div>
      </header>

      <!-- Scroll Area -->
      <main
        ref="mainContent"
        class="flex-1 overflow-y-auto custom-scrollbar flex flex-col items-center relative transition-colors duration-500"
        @scroll="handleScroll"
      >
        <div
          class="w-full flex flex-col items-center"
          :class="[
            selectedUrl ? 'max-w-none' : 'max-w-[1200px] p-10 md:p-16 lg:p-24'
          ]"
        >
          <transition name="fade" mode="out-in">
            <!-- Feed: Cohesive Style -->
            <div v-if="!selectedUrl" class="w-full">
              <div v-if="currentView === 'reader' || currentView === 'favorites'" key="articles">
                <div
                  :class="[
                    viewMode === 'card'
                      ? 'grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-14'
                      : 'flex flex-col bg-surface rounded-[40px] shadow-paper overflow-hidden'
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

                <!-- Sentinel -->
                <div v-if="hasMore" ref="scrollSentinel" class="h-40 flex items-center justify-center mt-10">
                   <div class="flex gap-2.5">
                     <div class="w-2.5 h-2.5 rounded-full bg-primary/20 animate-bounce"></div>
                     <div class="w-2.5 h-2.5 rounded-full bg-primary/40 animate-bounce [animation-delay:0.2s]"></div>
                     <div class="w-2.5 h-2.5 rounded-full bg-primary/20 animate-bounce [animation-delay:0.4s]"></div>
                   </div>
                </div>
              </div>
              <SourceGrid v-else-if="currentView === 'sources'" key="sources" :sources="rssData" />
            </div>

            <!-- Reader: Premium Polish -->
            <div v-else key="reader" class="w-full flex justify-center min-h-screen pb-32">
              <div
                class="w-full max-w-[1000px] md:my-16 md:rounded-[40px] overflow-hidden transition-all duration-700"
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
      <div v-if="showGlobalSettings" class="fixed inset-y-0 right-0 w-80 bg-white/95 backdrop-blur-3xl shadow-2xl z-50 p-12 flex flex-col gap-12 border-l border-black/[0.03]">
        <h3 class="font-black text-text-main uppercase tracking-[0.3em] text-[13px] text-center">Preferences</h3>
        <div class="space-y-8">
          <p class="text-[11px] font-bold text-text-muted/50 uppercase tracking-widest text-center">Type Size</p>
          <div class="flex items-center justify-between bg-black/[0.04] rounded-2xl p-3">
             <button @click="decreaseFont" class="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white shadow-sm transition-all active:scale-90"><span class="text-sm font-bold">A</span></button>
             <button @click="resetFont" class="text-sm font-black text-text-main px-4 hover:bg-white rounded-lg h-10 transition-all">{{ fontSize }}</button>
             <button @click="increaseFont" class="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white shadow-sm transition-all active:scale-90"><span class="text-xl font-bold">A</span></button>
          </div>
        </div>
        <div class="space-y-8">
          <p class="text-[11px] font-bold text-text-muted/50 uppercase tracking-widest text-center">Appearance</p>
          <div class="grid grid-cols-2 gap-4">
            <button v-for="(t, key) in availableThemes" :key="key" @click="theme = key" class="flex flex-col items-center gap-3 p-5 rounded-[24px] border-2 transition-all active:scale-95" :class="theme === key ? 'border-primary bg-primary/5' : 'border-transparent bg-black/[0.03]'">
              <div class="w-12 h-12 rounded-full border border-black/5 shadow-inner" :style="{ backgroundColor: t.bg }"></div>
              <span class="text-[12px] font-bold text-text-sub">{{ t.label }}</span>
            </button>
          </div>
        </div>
      </div>
    </transition>
    <div v-if="showGlobalSettings" @click="showGlobalSettings = false" class="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"></div>
  </div>
</template>

<script setup>
import { CONTENT_TYPE_LABELS, CATEGORY_LABELS, CONTENT_TYPE_ICONS } from '~/composables/useArticles'

const {
  loading, searchValue, rssData, filteredArticles, displayedArticles, hasMore, categoryGroups, currentCategory, currentTab, currentView, selectedUrl, loadData, loadMore, selectTab, selectCategory, handleNav, toggleFavorite, isFavorited
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
  night: { bg: '#121212', label: '极夜黑' }
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

const navSections = computed(() => [
  { title: '载体格式', items: contentTypes.slice(1).map(t => ({ label: t.label, active: currentTab.value === t.label, icon: getFormatIcon(t.id), handler: () => selectTab(t.label) })) },
  { title: '专题分类', items: categoryGroups.value.map(g => ({ label: g.label, active: currentCategory.value === g.key, count: g.count, handler: () => selectCategory(g.key) })) }
])

const handleScroll = (e) => { showBackToTop.value = e.target.scrollTop > 300 }
const getIcon = (name) => {
  if (name === 'home') return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
  if (name === 'bookmark') return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>'
  if (name === 'rss') return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>'
  return ''
}

const filterTitle = computed(() => {
  if (currentView.value === 'favorites') return '书架'
  if (currentView.value === 'sources') return '炼金工坊'
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

const mainNav = [
  { id: 'reader', label: '全部文章', icon: 'home' },
  { id: 'favorites', label: '书架', icon: 'bookmark' },
  { id: 'sources', label: '炼金工坊', icon: 'rss' }
]

if (process.client) {
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && selectedUrl.value) closeReader() })
}
</script>

<style>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>