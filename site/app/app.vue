<template>
  <div class="min-h-screen bg-background flex flex-col selection:bg-primary/10">
    <!-- Minimal Header -->
    <header class="h-14 px-8 flex items-center justify-between border-b border-outline/5 bg-background">
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2 font-bold text-[15px] text-text-main">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-text-sub"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
          <span>Alchemy RSS</span>
        </div>
        <nav class="hidden md:flex items-center gap-6 text-[13px] text-text-sub">
          <button @click="selectTab('全部')" :class="{ 'text-text-main font-bold': currentTab === '全部' }">首页</button>
          <button class="hover:text-text-main transition-colors">我的书架</button>
        </nav>
      </div>
      
      <div class="flex items-center gap-4">
        <div class="relative hidden sm:block">
          <input 
            v-model="searchValue"
            type="text" 
            placeholder="搜索书架..." 
            class="w-48 h-8 bg-black/5 rounded-full px-8 text-[12px] focus:outline-none focus:w-64 transition-all duration-500"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-2.5 text-text-sub"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
        <div class="w-8 h-8 rounded-full bg-outline overflow-hidden border border-white shadow-sm">
          <img src="/favicon.svg" class="w-full h-full object-cover" alt="User" />
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="flex-1 flex justify-center py-8 px-4 overflow-hidden relative">
      <!-- Centered Book Card -->
      <div class="w-full max-w-[1200px] book-card flex overflow-hidden relative">
        
        <!-- Left Sidebar (Integrated) -->
        <aside class="hidden lg:flex w-64 flex-col border-r border-outline/5 p-8 gap-6 overflow-y-auto">
          <div>
            <p class="text-[11px] font-bold text-text-sub uppercase tracking-widest mb-4">内容来源</p>
            <div class="flex flex-col gap-1">
              <button 
                v-for="tab in rssData" 
                :key="tab.title"
                @click="selectTab(tab.title)"
                class="text-left py-2 px-3 rounded-lg text-[14px] transition-all"
                :class="currentTab === tab.title ? 'bg-black/5 text-text-main font-bold' : 'text-text-sub hover:bg-black/[0.02]'"
              >
                {{ tab.title }}
              </button>
            </div>
          </div>
        </aside>

        <!-- Main Stream -->
        <section class="flex-1 overflow-y-auto p-10 lg:p-16 bg-white custom-scrollbar">
          <div class="max-w-[700px] mx-auto">
            <h2 class="text-3xl font-black mb-12 tracking-tight">{{ currentTab === '全部' ? '精选提炼' : currentTab }}</h2>
            
            <div v-if="loading" class="space-y-12">
              <div v-for="i in 3" :key="i" class="space-y-4">
                <div class="h-8 bg-black/5 rounded-lg w-3/4"></div>
                <div class="h-4 bg-black/5 rounded-lg w-full"></div>
                <div class="h-4 bg-black/5 rounded-lg w-5/6"></div>
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
        </section>

        <!-- Detail Panel (Reader Mode) -->
        <aside 
          class="absolute inset-0 z-20 bg-white transition-all duration-500 transform"
          :class="selectedUrl ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'"
        >
          <div class="h-full flex flex-col max-w-[900px] mx-auto relative">
            <header class="h-16 px-8 flex items-center border-b border-outline/5">
              <button @click="selectedUrl = ''" class="flex items-center gap-2 text-text-sub hover:text-text-main transition-colors font-bold text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                返回目录
              </button>
            </header>
            <div class="flex-1 overflow-y-auto p-10 lg:p-20 custom-scrollbar">
              <ReaderPanel :url="selectedUrl" />
            </div>
          </div>
        </aside>
      </div>

      <!-- Right Floating Action Bar -->
      <div class="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-30">
        <button class="floating-action" title="目录"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="9" y1="12" y2="12"/><line x1="21" x2="7" y1="18" y2="18"/></svg></button>
        <button class="floating-action" title="字体"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg></button>
        <button class="floating-action" title="想法"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></button>
        <div class="h-px w-6 bg-outline mx-auto my-2"></div>
        <button class="floating-action" title="深色模式"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg></button>
      </div>
    </main>

    <!-- Mobile Navigation -->
    <nav class="lg:hidden fixed bottom-0 left-0 right-0 h-14 bg-white/95 backdrop-blur border-t border-outline/5 flex items-center justify-around z-40">
       <button @click="selectTab('全部')" class="flex flex-col items-center gap-1" :class="currentTab === '全部' ? 'text-primary' : 'text-text-sub'">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
         <span class="text-[10px] font-bold">首页</span>
       </button>
       <button class="flex flex-col items-center gap-1 text-text-sub">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
         <span class="text-[10px] font-bold">书架</span>
       </button>
    </nav>
  </div>
</template>

<script setup>
const { 
  loading, 
  currentTab, 
  searchValue, 
  rssData, 
  loadData, 
  filteredArticles,
  selectTab 
} = useArticles()

const selectedUrl = ref('')

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
