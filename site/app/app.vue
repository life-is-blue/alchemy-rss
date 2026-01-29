<template>
  <div class="min-h-screen bg-background flex flex-col selection:bg-primary/10">
    <!-- Minimal Header -->
    <header class="h-14 px-8 flex items-center justify-between border-b border-outline/5 bg-background">
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2 font-bold text-[15px] text-text-main">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-text-sub"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
          <span class="tracking-tight">Alchemy RSS</span>
        </div>
        <nav class="hidden md:flex items-center gap-8 text-[13px] text-text-sub">
          <button 
            @click="currentView = 'reader'; currentTab = '全部'; selectedUrl = ''" 
            class="hover:text-text-main transition-colors"
            :class="{ 'text-text-main font-bold': currentView === 'reader' && !selectedUrl }"
          >首页</button>
          <button 
            @click="currentView = 'sources'; selectedUrl = ''"
            class="hover:text-text-main transition-colors"
            :class="{ 'text-text-main font-bold': currentView === 'sources' }"
          >RSS 源</button>
          <button class="hover:text-text-main transition-colors">我的书架</button>
        </nav>
      </div>
      
      <div class="flex items-center gap-4 flex-1 justify-end max-w-xl ml-auto">
        <div class="relative w-full max-w-md hidden sm:block group">
          <input 
            v-model="searchValue"
            type="text" 
            placeholder="搜索..." 
            class="w-full h-10 bg-black/[0.04] rounded-lg px-10 text-[14px] text-text-main focus:bg-white focus:shadow-md focus:outline-none transition-all duration-300 border border-transparent focus:border-outline/10 placeholder:text-text-sub/50"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3.5 top-3 text-text-sub group-focus-within:text-primary transition-colors"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
        <div class="w-9 h-9 rounded-full bg-outline overflow-hidden border border-white shadow-sm shrink-0">
          <img src="/favicon.svg" class="w-full h-full object-cover" alt="User" />
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="flex-1 flex justify-center py-10 px-4 overflow-hidden relative">
      <!-- The Unified Book Container -->
      <div class="w-full max-w-[1200px] book-card flex bg-white overflow-hidden relative">
        
        <!-- Refined Sidebar -->
        <aside class="hidden lg:flex w-56 flex-col p-10 pr-0 gap-8 shrink-0 overflow-y-auto">
          <div>
            <p class="text-[10px] font-black text-text-sub/40 uppercase tracking-[0.2em] mb-6 px-3">Topics</p>
            <div class="flex flex-col gap-1.5">
              <button 
                v-for="cat in categories" 
                :key="cat.name"
                @click="selectTab(cat.name)"
                class="flex items-center justify-between text-left py-2 px-3 rounded-lg text-[14px] transition-all group"
                :class="currentTab === cat.name ? 'text-primary font-black scale-105 origin-left' : 'text-text-sub hover:text-text-main'"
              >
                <span>{{ cat.name }}</span>
                <span class="text-[10px] font-bold opacity-40 group-hover:opacity-100 transition-opacity">{{ cat.count }}</span>
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
          <div class="max-w-[800px] mx-auto p-10 lg:p-16">
            
            <transition name="fade" mode="out-in">
              <!-- Articles View -->
              <div v-if="currentView === 'reader' && !selectedUrl" key="articles">
                <div class="flex items-end justify-between mb-16">
                  <h2 class="text-4xl font-black tracking-tighter">{{ currentTab === '全部' ? '精选提炼' : currentTab }}</h2>
                  <div class="text-[11px] font-bold text-text-sub/40 uppercase tracking-widest pb-1">Alchemy Refined</div>
                </div>
                
                <div v-if="loading" class="space-y-12">
                  <div v-for="i in 3" :key="i" class="space-y-4">
                    <div class="h-8 bg-black/[0.02] rounded-lg w-3/4"></div>
                    <div class="h-4 bg-black/[0.02] rounded-lg w-full"></div>
                    <div class="h-4 bg-black/[0.02] rounded-lg w-5/6"></div>
                  </div>
                </div>
                
                <template v-else>
                  <ArticleCard 
                    v-for="article in filteredArticles" 
                    :key="article.link"
                    :article="article"
                    @click="selectedUrl = article.link"
                  />
                </template>
              </div>

              <!-- Sources View -->
              <SourceGrid v-else-if="currentView === 'sources' && !selectedUrl" key="sources" :sources="rssData" />

                          <!-- Detail View -->

                          <div v-else-if="selectedUrl" key="detail" class="relative">

                            <header class="h-12 flex items-center mb-12">

                              <button @click="selectedUrl = ''" class="flex items-center gap-2 text-text-sub hover:text-text-main transition-all font-bold text-sm active-press">

                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>

                                返回目录

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
      <div class="hidden xl:flex fixed right-10 top-1/2 -translate-y-1/2 flex-col gap-5 z-[100]">
        <button 
          @click="selectedUrl = ''" 
          class="floating-action active-press" 
          title="目录"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="9" y1="12" y2="12"/><line x1="21" x2="7" y1="18" y2="18"/></svg>
        </button>
        
        <div class="group relative">
          <button class="floating-action active-press" title="字体">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>
          </button>
          <div class="absolute right-full pr-6 top-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <div class="bg-white/95 backdrop-blur-xl shadow-wechat rounded-[24px] p-5 flex items-center gap-5 border border-outline/10 min-w-[160px]">
              <button @click="decreaseFont" class="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 active:scale-90 transition-all font-bold text-lg">-</button>
              <span class="text-base font-black w-8 text-center">{{ fontSize }}</span>
              <button @click="increaseFont" class="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 active:scale-90 transition-all font-bold text-lg">+</button>
            </div>
          </div>
        </div>

        <div class="group relative">
          <button class="floating-action active-press" title="背景">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
          </button>
          <div class="absolute right-full pr-6 top-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <div class="bg-white/95 backdrop-blur-xl shadow-wechat rounded-[24px] p-4 flex items-center gap-4 border border-outline/10">
              <button @click="theme = 'white'" class="w-9 h-9 rounded-full border-2 transition-all active:scale-90" :class="theme === 'white' ? 'border-primary' : 'border-outline/20'" style="background-color: #FFFFFF;" title="白色"></button>
              <button @click="theme = 'sepia'" class="w-9 h-9 rounded-full border-2 transition-all active:scale-90" :class="theme === 'sepia' ? 'border-primary' : 'border-outline/20'" style="background-color: #F4ECD8;" title="护眼"></button>
              <button @click="theme = 'parchment'" class="w-9 h-9 rounded-full border-2 transition-all active:scale-90" :class="theme === 'parchment' ? 'border-primary' : 'border-outline/20'" style="background-color: #FAF9F6;" title="纸张"></button>
              <button @click="theme = 'night'" class="w-9 h-9 rounded-full border-2 transition-all active:scale-90" :class="theme === 'night' ? 'border-primary' : 'border-outline/20'" style="background-color: #1A1B1E;" title="深色"></button>
            </div>
          </div>
        </div>

        <button class="floating-action active-press shadow-lg" title="想法"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></button>
        
        <div class="h-px w-8 bg-black/5 mx-auto my-1"></div>

        <button 
          @click="scrollToTop" 
          class="floating-action active-press shadow-lg" 
          title="回到顶部"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
        </button>
      </div>
    </main>

    <!-- Mobile Navigation -->
    <nav class="lg:hidden fixed bottom-0 left-0 right-0 h-14 bg-white/95 backdrop-blur border-t border-outline/5 flex items-center justify-around z-40">
       <button @click="currentView = 'reader'; selectedUrl = ''" class="flex flex-col items-center gap-1" :class="currentView === 'reader' ? 'text-primary' : 'text-text-sub'">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
         <span class="text-[10px] font-bold">首页</span>
       </button>
       <button @click="currentView = 'sources'; selectedUrl = ''" class="flex flex-col items-center gap-1" :class="currentView === 'sources' ? 'text-primary' : 'text-text-sub'">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
         <span class="text-[10px] font-bold">源</span>
       </button>
    </nav>
  </div>
</template>

<script setup>
const { 
  loading, 
  currentTab, 
  searchValue, 
  categories,
  rssData, 
  loadData, 
  filteredArticles,
  selectTab 
} = useArticles()

const {
  fontSize,
  theme,
  increaseFont,
  decreaseFont
} = useReadingSettings()

const selectedUrl = ref('')
const currentView = ref('reader') // reader, sources
const mainContent = ref(null)

const scrollToTop = () => {
  // 1. Ref 优先
  if (mainContent.value) {
    mainContent.value.scrollTo({ top: 0, behavior: 'smooth' })
  }
  // 2. 广撒网：抓取所有可能的滚动容器
  document.querySelectorAll('.overflow-y-scroll, .overflow-y-auto').forEach(el => {
    el.scrollTo({ top: 0, behavior: 'smooth' })
  })
  // 3. 兜底 Window
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
</style>
