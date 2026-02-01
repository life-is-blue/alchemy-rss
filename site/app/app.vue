<template>
  <div class="h-screen flex overflow-hidden bg-background selection:bg-primary/10 transition-colors duration-500" :class="[`theme-${theme}`]">
    <!-- Desktop Sidebar -->
    <aside
      class="hidden md:flex w-64 flex-col shrink-0 border-r transition-all duration-300 backdrop-blur-xl"
      style="background-color: var(--color-sidebar-bg); border-color: var(--color-border);"
    >
      <div class="p-6">
        <div class="flex items-center gap-2 font-bold text-[16px] text-text-main mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
          <span class="tracking-tight">Alchemy RSS</span>
        </div>

        <nav class="space-y-6">
          <!-- Main Nav -->
          <div class="space-y-1">
            <button
              v-for="item in mainNav"
              :key="item.id"
              @click="handleNav(item.id)"
              class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium transition-all group hover:bg-[var(--color-hover-bg)]"
              :class="currentView === item.id && (currentCategory === '全部' || item.id !== 'reader') ? 'bg-primary text-white shadow-md hover:bg-primary' : 'text-text-sub hover:text-text-main'"
            >
              <span class="w-4.5 h-4.5 flex items-center justify-center transition-colors" :class="currentView === item.id && (currentCategory === '全部' || item.id !== 'reader') ? 'text-white' : 'text-text-sub group-hover:text-primary'" v-html="getIcon(item.icon)"></span>
              {{ item.label }}
            </button>
          </div>

          <!-- RSS Sources (Flat list) - Kept but made more compact -->
          <div class="space-y-3 pt-4">
            <p class="text-[11px] font-bold text-text-muted/50 uppercase tracking-widest px-3">订阅源</p>
            <div class="space-y-1 max-h-[40vh] overflow-y-auto hide-scrollbar">
              <button
                v-for="feed in sourceFeeds"
                :key="feed.title"
                @click="selectCategory(feed.title)"
                class="w-full flex items-center justify-between px-3 py-2 rounded-xl text-[13px] font-medium transition-all group hover:bg-[var(--color-hover-bg)]"
                :class="currentCategory === feed.title ? 'bg-primary/10 text-primary font-bold' : 'text-text-sub hover:text-text-main'"
              >
                <span class="truncate max-w-[120px]">{{ feed.title }}</span>
                <span class="text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">{{ feed.count }}</span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div class="mt-auto p-6 border-t flex items-center gap-3" style="border-color: var(--color-border);">
        <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <div class="min-w-0">
          <p class="text-[12px] font-bold text-text-main truncate">Pickle Rick</p>
          <p class="text-[10px] text-text-muted truncate">Solenya Edition</p>
        </div>
      </div>
    </aside>

    <!-- Main Content Shell -->
    <div class="flex-1 flex flex-col min-w-0 relative">
      <!-- Top Header -->
      <header
        class="h-14 px-4 md:px-8 flex items-center justify-between border-b backdrop-blur-md z-30 shrink-0 transition-colors duration-300"
        style="background-color: var(--color-sidebar-bg); border-color: var(--color-border);"
      >
        <div class="flex items-center gap-4">
          <!-- Mobile Menu Toggle -->
          <button @click="isMobileMenuOpen = true" class="md:hidden p-2 -ml-2 text-text-sub hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          </button>

          <!-- Reader Back Button (Desktop) -->
          <button
            v-if="selectedUrl"
            @click="closeReader"
            class="hidden md:flex items-center gap-2 text-text-sub hover:text-primary transition-all group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <h1 
            class="text-[15px] font-bold text-text-main truncate max-w-[300px] md:max-w-[500px] transition-opacity duration-300 flex items-center gap-2"
            :class="selectedUrl && !showHeaderTitle ? 'opacity-0' : 'opacity-100'"
          >
            <span>{{ selectedUrl ? filteredArticles.find(a => a.link === selectedUrl)?.title : filterTitle }}</span>
            <span v-if="!selectedUrl" class="text-[10px] font-bold text-text-muted opacity-40 uppercase tracking-widest mt-0.5">{{ filteredArticles.length }}</span>
          </h1>
        </div>

        <div class="flex items-center gap-6 md:gap-8">
          <!-- Top Nav Links (WeChat Style) -->
          <nav v-if="selectedUrl" class="hidden md:flex items-center gap-6">
            <button @click="handleNav('reader')" class="text-[13px] font-bold text-text-sub hover:text-primary transition-colors">首页</button>
            <div class="w-[1px] h-3 bg-border"></div>
            <button @click="handleNav('favorites')" class="text-[13px] font-bold text-text-sub hover:text-primary transition-colors">我的收藏</button>
          </nav>

          <!-- Search (Only in List View) -->
          <div v-if="!selectedUrl" class="relative w-full max-w-[240px] hidden sm:block">
            <input
              v-model="searchValue"
              type="text"
              placeholder="搜索文章..."
              class="w-full h-9 bg-black/[0.03] rounded-full px-10 text-[13px] text-text-main focus:bg-white focus:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all duration-300 border border-transparent focus:border-primary/20 placeholder:text-text-muted/50"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="absolute left-4 top-2.5 text-text-muted/50 transition-colors"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>

          <!-- View Mode Toggle -->
          <div class="flex items-center bg-black/[0.03] p-0.5 rounded-full border border-outline/5">
            <button
              @click="viewMode = 'list'"
              class="p-1.5 rounded-full transition-all"
              :class="viewMode === 'list' ? 'bg-white text-primary shadow-sm' : 'text-text-muted hover:text-text-main'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
            </button>
            <button
              @click="viewMode = 'card'"
              class="p-1.5 rounded-full transition-all"
              :class="viewMode === 'card' ? 'bg-white text-primary shadow-sm' : 'text-text-muted hover:text-text-main'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
            </button>
          </div>
        </div>
      </header>

      <!-- Scrollable Content Area -->
      <main
        ref="mainContent"
        class="flex-1 overflow-y-auto custom-scrollbar flex flex-col items-center relative transition-colors duration-500"
        @scroll="handleScroll"
      >
        <div
          class="w-full flex flex-col items-center"
          :class="[
            selectedUrl ? 'max-w-none' : 'max-w-[1000px] p-4 md:p-8 lg:p-12'
          ]"
        >
          <transition name="fade" mode="out-in">
            <!-- Feed View -->
            <div v-if="!selectedUrl" class="w-full">
              <div v-if="currentView === 'reader'" key="articles">
                <!-- Integrated Filter Bar (Space Optimized) -->
                <div class="mb-8 space-y-4">
                  <!-- Media Type Switcher (Level 1 Format) -->
                  <div class="flex items-center gap-6 border-b border-outline/5 pb-4">
                    <button
                      v-for="type in contentTypes"
                      :key="type.id"
                      @click="selectTab(type.label)"
                      class="flex items-center gap-2 text-[13px] font-bold transition-all relative"
                      :class="currentTab === type.label ? 'text-primary' : 'text-text-muted hover:text-text-main'"
                    >
                      <span v-html="getFormatIcon(type.id)" class="opacity-70"></span>
                      <span>{{ type.label }}</span>
                      <!-- Active Indicator Dot -->
                      <div v-if="currentTab === type.label" class="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                    </button>
                  </div>

                  <!-- Horizontal Category Pills (Level 2 Topic) -->
                  <div class="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2">
                    <button
                      @click="selectCategory('全部')"
                      class="px-5 py-2 rounded-full text-[13px] font-bold transition-all whitespace-nowrap border"
                      :class="currentCategory === '全部' ? 'bg-primary text-white border-primary shadow-md' : 'bg-white text-text-sub border-outline/5 hover:border-primary/20'"
                    >
                      全部
                    </button>
                    <button
                      v-for="group in categoryGroups"
                      :key="group.key"
                      @click="selectCategory(group.key)"
                      class="px-5 py-2 rounded-full text-[13px] font-bold transition-all whitespace-nowrap border"
                      :class="currentCategory === group.key ? 'bg-primary text-white border-primary shadow-md' : 'bg-white text-text-sub border-outline/5 hover:border-primary/20'"
                    >
                      {{ group.label }}
                    </button>
                  </div>
                </div>

                <!-- Articles Grid/List -->
                <div
                  :class="[
                    viewMode === 'card'
                      ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'
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

                <!-- Loading / Sentinel / Empty -->
                <div v-if="loading" class="mt-12 space-y-4">
                  <div v-for="i in 3" :key="i" class="animate-pulse bg-white/50 rounded-2xl h-32 border border-outline/5"></div>
                </div>

                <div v-if="!loading && displayedArticles.length === 0" class="py-32 text-center">
                   <div class="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6 opacity-30">
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                   </div>
                   <p class="text-text-muted font-medium text-sm tracking-tight">暂无订阅内容</p>
                </div>

                <!-- Sentinel for Infinite Scroll -->
                <div v-if="hasMore" ref="scrollSentinel" class="h-20 flex items-center justify-center mt-10">
                   <div class="flex gap-1.5">
                     <div class="w-1.5 h-1.5 rounded-full bg-primary/20 animate-bounce"></div>
                     <div class="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:0.2s]"></div>
                     <div class="w-1.5 h-1.5 rounded-full bg-primary/20 animate-bounce [animation-delay:0.4s]"></div>
                   </div>
                </div>
              </div>

              <!-- Sources View -->
              <SourceGrid v-else-if="currentView === 'sources'" key="sources" :sources="rssData" />
            </div>

            <!-- Zen Reader View -->
            <div v-else key="reader" class="w-full flex justify-center min-h-screen pb-20">
              <div
                class="w-full max-w-[1000px] md:my-10 md:rounded-[var(--radius-paper)] overflow-hidden transition-all duration-300"
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

      <!-- Floating Toolbar (Unified) -->
      <FloatingToolbar
        :show-back-to-top="showBackToTop"
        :show-toolbar="true"
        :is-dark="theme === 'night'"
        :is-reader="!!selectedUrl"
        @scroll-top="scrollToTop"
        @toggle-settings="showGlobalSettings = true"
        @toggle-dark="theme = (theme === 'night' ? 'white' : 'night')"
        @back="closeReader"
        @home="handleNav('reader')"
      />
    </div>

    <!-- Global Settings Drawer (Themes) -->
    <transition name="drawer-right">
      <div
        v-if="showGlobalSettings"
        class="fixed right-0 top-0 bottom-0 w-80 bg-white/95 backdrop-blur-xl shadow-2xl border-l border-outline/5 p-8 z-50 flex flex-col gap-10"
      >
        <div class="flex items-center justify-between">
           <h3 class="font-bold text-text-main uppercase tracking-widest text-[11px]">系统设置</h3>
           <button @click="showGlobalSettings = false" class="text-text-muted hover:text-primary">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
           </button>
        </div>

        <div class="space-y-4">
          <p class="text-[11px] font-bold text-text-muted/50 uppercase tracking-widest">阅读字号</p>
          <div class="flex items-center justify-between bg-black/[0.03] rounded-2xl p-2 border border-black/[0.02]">
             <button @click="decreaseFont" class="w-12 h-10 flex items-center justify-center rounded-xl hover:bg-white hover:shadow-sm transition-all active:scale-95 text-text-sub">
               <span class="text-[14px] font-serif font-bold">A</span>
             </button>
             <button @click="resetFont" class="text-[13px] font-medium text-text-main w-12 text-center hover:bg-white hover:shadow-sm rounded-lg h-8 transition-all" title="重置字号">{{ fontSize }}</button>
             <button @click="increaseFont" class="w-12 h-10 flex items-center justify-center rounded-xl hover:bg-white hover:shadow-sm transition-all active:scale-95 text-text-sub">
               <span class="text-[20px] font-serif font-bold">A</span>
             </button>
          </div>
        </div>

        <div class="space-y-4">
          <p class="text-[11px] font-bold text-text-muted/50 uppercase tracking-widest">显示主题</p>
          <div class="grid grid-cols-2 gap-3">
            <button
              v-for="(t, key) in availableThemes"
              :key="key"
              @click="theme = key"
              class="flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all active:scale-95"
              :class="theme === key ? 'border-primary bg-primary/5' : 'border-transparent bg-black/[0.03]'"
            >
              <div class="w-12 h-12 rounded-full border border-black/5 shadow-sm" :style="{ backgroundColor: t.bg }"></div>
              <span class="text-[11px] font-bold text-text-sub">{{ t.label }}</span>
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Settings Overlay -->
    <div v-if="showGlobalSettings" @click="showGlobalSettings = false" class="fixed inset-0 bg-black/5 z-40"></div>

    <!-- Mobile Drawer Overlay -->
    <transition name="fade">
      <div v-if="isMobileMenuOpen" @click="isMobileMenuOpen = false" class="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-50"></div>
    </transition>

    <!-- Mobile Sidebar Drawer -->
    <transition name="drawer">
      <aside v-if="isMobileMenuOpen" class="md:hidden fixed top-0 left-0 bottom-0 w-72 bg-white z-[60] shadow-2xl flex flex-col p-6 overflow-y-auto">
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center gap-2 font-bold text-text-main">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
            <span>Alchemy RSS</span>
          </div>
          <button @click="isMobileMenuOpen = false" class="text-text-muted hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
          </button>
        </div>

        <!-- Re-use Nav items -->
        <nav class="space-y-6">
          <div class="space-y-1">
            <button
              v-for="item in mainNav"
              :key="item.id"
              @click="handleNav(item.id); isMobileMenuOpen = false"
              class="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-[14px] font-medium transition-all"
              :class="currentView === item.id && (currentCategory === '全部' || item.id !== 'reader') ? 'bg-primary/5 text-primary' : 'text-text-sub'"
            >
              <span class="w-5 h-5 flex items-center justify-center" v-html="getIcon(item.icon)"></span>
              {{ item.label }}
            </button>
          </div>

          <div class="space-y-2">
            <p class="text-[10px] font-bold text-text-muted/50 uppercase tracking-widest px-3">Selected Reading</p>
            <div class="space-y-1">
              <button
                v-for="group in categoryGroups"
                :key="group.key"
                @click="selectCategory(group.key); isMobileMenuOpen = false"
                class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[14px] font-medium transition-all"
                :class="currentCategory === group.key ? 'bg-primary/5 text-primary' : 'text-text-sub'"
              >
                <span>{{ group.label }}</span>
                <span class="text-[10px] opacity-40">{{ group.count }}</span>
              </button>
            </div>
          </div>
        </nav>
      </aside>
    </transition>
  </div>
</template>

<script setup>
import { CONTENT_TYPE_LABELS, CATEGORY_LABELS } from '~/composables/useArticles'

const {
  loading,
  searchValue,
  rssData,
  filteredArticles,
  displayedArticles,
  hasMore,
  categoryGroups,
  sourceFeeds,
  currentCategory,
  currentView,
  selectedUrl,
  loadData,
  loadMore,
  selectTab,
  selectCategory,
  handleNav
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
  if (id === 'ALL') return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>'
  if (id === 'ARTICLE') return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>'
  if (id === 'TWITTER') return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>'
  if (id === 'PODCAST') return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>'
  if (id === 'VIDEO') return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>'
  return ''
}

let observer = null

const handleScroll = (e) => {
  showBackToTop.value = e.target.scrollTop > 300
}

const setupObserver = () => {
  if (process.client && scrollSentinel.value) {
    if (observer) observer.disconnect()
    
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore.value && !loading.value) {
        loadMore()
      }
    }, { threshold: 0.1, rootMargin: '200px' })
    
    observer.observe(scrollSentinel.value)
  }
}

watch([scrollSentinel, hasMore], () => {
  nextTick(setupObserver)
}, { immediate: true })

const mainNav = [
  { id: 'reader', label: '全部文章', icon: 'home' },
  { id: 'favorites', label: '我的收藏', icon: 'bookmark' },
  { id: 'sources', label: 'RSS 订阅源', icon: 'rss' }
]

const getIcon = (name) => {
  if (name === 'home') return '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
  if (name === 'bookmark') return '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>'
  if (name === 'rss') return '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>'
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
  if (currentIndex !== -1 && currentIndex < filteredArticles.value.length - 1) {
    return filteredArticles.value[currentIndex + 1]
  }
  return null
})

const hasActiveFilter = computed(() => (currentCategory.value && currentCategory.value !== '全部') || currentView.value === 'favorites')

const clearFilters = () => handleNav('reader')

const openArticle = (article) => {
  selectedUrl.value = article.link
  showHeaderTitle.value = false // Reset header title visibility
  scrollToTop()
}

const closeReader = () => selectedUrl.value = ''

const getCategoryLabel = (name) => name === '全部' ? '全部' : (CATEGORY_LABELS[name] || name)

const scrollToTop = () => mainContent.value?.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => {
  loadData()
})

if (process.client) {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && selectedUrl.value) closeReader()
  })
}
</script>
