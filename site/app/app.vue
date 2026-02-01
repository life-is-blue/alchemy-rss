<template>
  <div class="min-h-screen bg-background flex flex-col selection:bg-primary/10">
    <!-- Header -->
    <header class="h-14 px-4 md:px-8 flex items-center justify-between border-b border-outline/5 bg-white sticky top-0 z-50">
      <div class="flex items-center gap-4 md:gap-6">
        <div class="flex items-center gap-2 font-bold text-[15px] text-text-main">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
          <span class="tracking-tight hidden sm:inline">Alchemy RSS</span>
        </div>

        <!-- Content Type Tabs (Desktop) -->
        <nav class="hidden md:flex items-center gap-1 relative">
          <button
            v-for="tab in contentTypeTabs"
            :key="tab.value"
            @click="selectContentType(tab.value)"
            class="px-4 py-2 text-[13px] font-medium rounded-lg transition-all"
            :class="currentContentType === tab.value
              ? 'text-primary bg-primary/5'
              : 'text-text-sub hover:text-text-main hover:bg-black/5'"
          >
            {{ tab.label }}
          </button>
        </nav>
      </div>

      <div class="flex items-center gap-3 md:gap-4 flex-1 justify-end max-w-xl ml-auto">
        <!-- Search -->
        <div class="relative w-full max-w-md hidden sm:block group">
          <input
            v-model="searchValue"
            type="text"
            placeholder="搜索文章..."
            class="w-full h-9 bg-black/[0.03] rounded-lg px-9 text-[13px] text-text-main focus:bg-white focus:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all duration-300 border border-transparent focus:border-primary/20 placeholder:text-text-sub/50"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-2.5 text-text-sub/50 group-focus-within:text-primary transition-colors"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>

        <!-- Nav Links -->
        <button
          @click="currentView = 'sources'; selectedUrl = ''"
          class="hidden md:flex items-center gap-1.5 text-[13px] font-medium px-3 py-1.5 rounded-lg transition-all whitespace-nowrap shrink-0"
          :class="currentView === 'sources' ? 'text-primary bg-primary/5' : 'text-text-sub hover:text-text-main'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
          RSS源
        </button>

        <div class="w-8 h-8 rounded-full bg-primary/10 overflow-hidden border border-primary/20 shrink-0 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
      </div>
    </header>

    <!-- Category Filter Bar (Refined: Text-only style) -->
    <!-- Hide on XL screens where sidebar is visible -->
    <div v-if="currentView === 'reader' && !selectedUrl" class="bg-white/80 backdrop-blur-md border-b border-outline/5 px-4 md:px-8 sticky top-14 z-40 xl:hidden">
      <div class="max-w-[1200px] mx-auto flex items-center gap-6 overflow-x-auto hide-scrollbar h-12">
        <button
          v-for="cat in categoryFilters"
          :key="cat.name"
          @click="selectCategory(cat.name)"
          class="relative h-full flex items-center gap-1 text-[13px] font-medium transition-all hover:text-text-main shrink-0"
          :class="currentCategory === cat.name
            ? 'text-primary font-bold'
            : 'text-text-sub'"
        >
          {{ getCategoryLabel(cat.name) }}
          <span class="text-[10px] opacity-40 font-normal transform -translate-y-0.5">{{ cat.count }}</span>

          <!-- Active Indicator -->
          <div
            v-if="currentCategory === cat.name"
            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full"
          ></div>
        </button>
      </div>
    </div>

    <!-- Main Content Area -->
    <main class="flex-1 flex justify-center py-6 md:py-10 px-4 overflow-hidden relative">
      <!-- The Unified Book Container -->
      <div class="w-full max-w-[1200px] book-card flex bg-white overflow-hidden relative">

        <!-- Sidebar (Large Screens) -->
        <aside class="hidden xl:flex w-52 flex-col p-6 pr-0 gap-6 shrink-0 overflow-y-auto border-r border-outline/5">
          <!-- Navigation Section -->
          <div>
            <p class="text-[10px] font-bold text-text-sub/40 uppercase tracking-[0.15em] mb-3 px-3">导航</p>
            <div class="flex flex-col gap-1">
              <button
                @click="goHome"
                class="flex items-center gap-2.5 text-left py-2 px-3 rounded-lg text-[13px] transition-all"
                :class="currentView === 'reader' && !currentCategory ? 'bg-primary/5 text-primary font-semibold' : 'text-text-sub hover:text-text-main hover:bg-black/5'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <span>首页</span>
              </button>
              <button
                @click="currentView = 'favorites'"
                class="flex items-center gap-2.5 text-left py-2 px-3 rounded-lg text-[13px] transition-all"
                :class="currentView === 'favorites' ? 'bg-primary/5 text-primary font-semibold' : 'text-text-sub hover:text-text-main hover:bg-black/5'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                <span>收藏</span>
              </button>
              <button
                @click="currentView = 'sources'; selectedUrl = ''"
                class="flex items-center gap-2.5 text-left py-2 px-3 rounded-lg text-[13px] transition-all"
                :class="currentView === 'sources' ? 'bg-primary/5 text-primary font-semibold' : 'text-text-sub hover:text-text-main hover:bg-black/5'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
                <span>RSS 源</span>
              </button>
            </div>
          </div>

          <!-- Categories Section -->
          <div>
            <p class="text-[10px] font-bold text-text-sub/40 uppercase tracking-[0.15em] mb-3 px-3">分类</p>
            <div class="flex flex-col gap-1">
              <button
                v-for="cat in categoryFilters"
                :key="cat.name"
                @click="selectCategory(cat.name)"
                class="flex items-center gap-2 text-left py-2 px-3 rounded-lg text-[13px] transition-all"
                :class="currentCategory === cat.name ? 'bg-primary/5 text-primary font-semibold' : 'text-text-sub hover:text-text-main hover:bg-black/5'"
              >
                <span class="flex-1 truncate">{{ getCategoryLabel(cat.name) }}</span>
                <span class="text-[10px] font-medium px-1.5 py-0.5 rounded transition-colors" :class="currentCategory === cat.name ? 'bg-primary/10 text-primary' : 'bg-black/5 text-text-sub/60'">{{ cat.count }}</span>
              </button>
            </div>
          </div>
        </aside>

        <!-- Main Stream & Content -->
        <section
          ref="mainContent"
          class="flex-1 overflow-y-scroll custom-scrollbar transition-colors duration-500"
          :class="[selectedUrl ? `theme-${theme}` : 'bg-white']"
          style="scrollbar-gutter: stable;"
        >
          <div class="max-w-[800px] mx-auto p-6 md:p-10 lg:p-12">

            <transition name="fade" mode="out-in">
              <!-- Articles View -->
              <div v-if="currentView === 'reader' && !selectedUrl" key="articles">
                <div class="flex items-center justify-between mb-6">
                  <h2 class="text-xl md:text-2xl font-bold tracking-tight text-text-main">
                    {{ filterTitle }}
                  </h2>
                  <div class="flex items-center gap-3">
                    <span class="text-[11px] font-medium text-text-sub/60 bg-black/5 px-2 py-1 rounded">
                      {{ filteredArticles.length }} 篇
                    </span>
                    <button
                      v-if="hasActiveFilter"
                      @click="clearFilters"
                      class="text-[11px] font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      清除筛选
                    </button>
                  </div>
                </div>

                <!-- Loading Skeleton -->
                <div v-if="loading" class="space-y-3">
                  <div v-for="i in 5" :key="i" class="animate-pulse p-4 rounded-lg border border-black/5">
                    <div class="h-3 bg-black/[0.03] rounded w-20 mb-3"></div>
                    <div class="h-5 bg-black/[0.03] rounded w-4/5 mb-2"></div>
                    <div class="h-4 bg-black/[0.03] rounded w-full mb-3"></div>
                    <div class="flex gap-2">
                      <div class="h-5 bg-black/[0.03] rounded w-12"></div>
                      <div class="h-5 bg-black/[0.03] rounded w-14"></div>
                    </div>
                  </div>
                </div>

                <template v-else>
                  <div class="grid grid-cols-1 gap-y-3">
                    <ArticleCard
                      v-for="article in displayedArticles"
                      :key="article.link"
                      :article="article"
                      @click="openArticle(article)"
                    />
                  </div>

                  <!-- Empty State -->
                  <div v-if="displayedArticles.length === 0" class="text-center py-16 text-text-sub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto mb-4 opacity-30"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                    <p class="text-sm">暂无内容</p>
                  </div>

                  <!-- Load More -->
                  <div v-if="hasMore" class="mt-10 text-center pb-8">
                    <button
                      @click="loadMore"
                      class="px-6 py-2.5 rounded-full border border-outline text-sm font-medium text-text-sub hover:text-text-main hover:border-text-main hover:bg-black/5 transition-all active:scale-95"
                    >
                      加载更多
                    </button>
                  </div>
                </template>
              </div>

              <!-- Sources View -->
              <SourceGrid v-else-if="currentView === 'sources' && !selectedUrl" key="sources" :sources="rssData" />

              <!-- Detail View (Reader) -->
              <div v-else-if="selectedUrl" key="detail" class="relative">
                <header class="h-10 flex items-center mb-8">
                  <button @click="closeReader" class="flex items-center gap-1.5 text-text-sub hover:text-text-main transition-all font-medium text-sm active-press">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    返回
                  </button>
                </header>

                <ReaderPanel
                  :url="selectedUrl"
                  :articleData="filteredArticles.find(a => a.link === selectedUrl)"
                  @scroll-top="scrollToTop"
                />
              </div>

            </transition>
          </div>
        </section>
      </div>

      <!-- Right Floating Action Bar -->
      <FloatingToolbar
        :mode="selectedUrl ? 'reader' : 'list'"
        @back="closeReader"
        @scroll-top="scrollToTop"
      />
    </main>

    <!-- Mobile Navigation -->
    <nav class="lg:hidden fixed bottom-0 left-0 right-0 h-14 bg-white/95 backdrop-blur-lg border-t border-outline/5 flex items-center justify-around z-40 safe-area-pb">
      <button @click="currentView = 'reader'; selectedUrl = ''" class="flex flex-col items-center gap-0.5 py-1" :class="currentView === 'reader' && !selectedUrl ? 'text-primary' : 'text-text-sub'">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <span class="text-[10px] font-medium">首页</span>
      </button>
      <button @click="currentView = 'sources'; selectedUrl = ''" class="flex flex-col items-center gap-0.5 py-1" :class="currentView === 'sources' ? 'text-primary' : 'text-text-sub'">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
        <span class="text-[10px] font-medium">订阅</span>
      </button>
      <button class="flex flex-col items-center gap-0.5 py-1 text-text-sub">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
        <span class="text-[10px] font-medium">收藏</span>
      </button>
    </nav>
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
  categoryTags,
  currentCategory,
  loadData,
  loadMore,
  selectTab,
  selectCategory
} = useArticles()

const {
  theme
} = useReadingSettings()

const selectedUrl = ref('')
const currentView = ref('reader') // reader, sources
const mainContent = ref(null)
const currentContentType = ref('全部')

// Content type tabs for top navigation
const contentTypeTabs = computed(() => [
  { label: '全部', value: '全部' },
  { label: '文章', value: 'ARTICLE' },
  { label: '视频', value: 'VIDEO' },
  { label: '播客', value: 'PODCAST' },
  { label: '动态', value: 'TWITTER' }
])

// Category filters - use categoryTags from useArticles (based on all articles, not filtered)
// This ensures category counts remain stable when a category is selected
const categoryFilters = computed(() => categoryTags.value)

// Dynamic filter title based on current filters
const filterTitle = computed(() => {
  const categoryLabel = currentCategory.value && currentCategory.value !== '全部'
    ? getCategoryLabel(currentCategory.value)
    : null
  const typeLabel = currentContentType.value !== '全部'
    ? contentTypeTabs.value.find(t => t.value === currentContentType.value)?.label
    : null

  if (categoryLabel && typeLabel) {
    return `${categoryLabel} · ${typeLabel}`
  } else if (categoryLabel) {
    return categoryLabel
  } else if (typeLabel) {
    return typeLabel
  }
  return '精选推荐'
})

// Check if any filter is active
const hasActiveFilter = computed(() => {
  return currentContentType.value !== '全部' || (currentCategory.value && currentCategory.value !== '全部')
})

// Clear all filters
const clearFilters = () => {
  currentContentType.value = '全部'
  selectTab('全部')
  selectCategory('全部')
  scrollToTop()
}

// Select content type (top tabs)
const selectContentType = (type) => {
  currentContentType.value = type
  currentView.value = 'reader'
  selectedUrl.value = ''

  // Map to useArticles selectTab
  if (type === '全部') {
    selectTab('全部')
  } else {
    const label = CONTENT_TYPE_LABELS[type]
    if (label) {
      selectTab(label)
    }
  }
  scrollToTop()
}

// Open article and mark as reading
const openArticle = (article) => {
  selectedUrl.value = article.link
  scrollToTop()
}

// Close reader and return to list
const closeReader = () => {
  selectedUrl.value = ''
}

// Go to home (clear all filters)
const goHome = () => {
  currentView.value = 'reader'
  currentContentType.value = '全部'
  selectedUrl.value = ''
  selectTab('全部')
  selectCategory('全部')
  scrollToTop()
}

// Get category label in Chinese
const getCategoryLabel = (name) => {
  if (name === '全部') return '全部'
  return CATEGORY_LABELS[name] || name
}

const scrollToTop = () => {
  if (mainContent.value) {
    mainContent.value.scrollTo({ top: 0, behavior: 'smooth' })
  }
  document.querySelectorAll('.overflow-y-scroll, .overflow-y-auto').forEach(el => {
    el.scrollTo({ top: 0, behavior: 'smooth' })
  })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  loadData()
})
</script>

<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.03);
  border-radius: 10px;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.safe-area-pb {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
