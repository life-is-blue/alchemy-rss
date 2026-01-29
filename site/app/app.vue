<template>
  <div class="min-h-screen bg-background text-on-background">
    <!-- App Bar -->
    <header class="sticky top-0 z-50 h-16 bg-surface px-4 flex items-center gap-4 shadow-sm border-b border-outline/10">
      <div class="text-xl font-bold text-primary flex items-center gap-2">
        <img src="/favicon.svg" class="w-8 h-8" alt="Alchemy Logo" />
        <span class="hidden md:block">Alchemy</span>
      </div>
      
      <div class="flex-1 max-w-2xl mx-auto px-4">
        <div class="relative flex items-center">
          <input 
            v-model="searchValue"
            type="text" 
            placeholder="搜索知识情报..." 
            class="w-full h-11 bg-surface-variant rounded-xl px-12 focus:outline-none focus:ring-2 focus:ring-primary/50 text-on-surface-variant transition-all"
          />
          <div class="absolute left-4 text-on-surface-variant/60">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
        </div>
      </div>

      <div class="hidden sm:flex items-center gap-4">
        <a href="https://github.com/life-is-blue/alchemy-rss" target="_blank" class="p-2 hover:bg-surface-variant rounded-full transition-colors text-on-surface-variant/70">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
      </div>
    </header>

    <main class="flex h-[calc(100vh-64px)] overflow-hidden">
      <!-- Navigation Rail / Sidebar -->
      <aside class="hidden lg:flex w-64 flex-col p-4 gap-2 border-r border-outline/10 overflow-y-auto bg-surface/50">
        <button 
          @click="selectTab('全部')"
          class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all"
          :class="currentTab === '全部' ? 'bg-primary-container text-on-primary-container shadow-sm' : 'hover:bg-surface-variant text-on-surface-variant'"
        >
          <span class="w-2 h-2 rounded-full" :class="currentTab === '全部' ? 'bg-primary' : 'bg-outline/20'"></span>
          <span>全部内容</span>
        </button>
        <button 
          v-for="tab in rssData" 
          :key="tab.title"
          @click="selectTab(tab.title)"
          class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-left"
          :class="currentTab === tab.title ? 'bg-primary-container text-on-primary-container shadow-sm' : 'hover:bg-surface-variant text-on-surface-variant'"
        >
          <span class="w-2 h-2 rounded-full" :class="currentTab === tab.title ? 'bg-primary' : 'bg-outline/20'"></span>
          <span>{{ tab.title }}</span>
        </button>
      </aside>

      <!-- Content Stream -->
      <section class="flex-1 overflow-y-auto p-4 lg:p-6 bg-background custom-scrollbar">
        <div class="max-w-3xl mx-auto space-y-6">
          <div v-if="loading" class="space-y-6">
            <div v-for="i in 5" :key="i" class="h-40 bg-surface-variant/30 animate-pulse rounded-2xl border border-outline/5"></div>
          </div>
          
          <template v-else>
            <div v-if="filteredArticles.length === 0" class="py-20 text-center text-on-surface-variant/40">
              <p>没有找到相关文章</p>
            </div>
            <ArticleCard 
              v-for="article in filteredArticles" 
              :key="article.link"
              :article="article"
              @click="selectedUrl = article.link"
              class="active:scale-[0.98] transition-transform"
            />
          </template>
        </div>
      </section>

      <!-- Detail Panel -->
      <aside 
        class="fixed inset-0 z-50 lg:static lg:z-0 lg:flex w-full lg:w-[450px] xl:w-[600px] flex-col border-l border-outline/10 bg-surface transition-transform duration-300 transform"
        :class="selectedUrl ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'"
      >
        <div v-if="selectedUrl" class="lg:hidden flex items-center p-4 border-b border-outline/10">
          <button @click="selectedUrl = ''" class="p-2 hover:bg-surface-variant rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <span class="ml-4 font-bold">文章详情</span>
        </div>
        <ReaderPanel :url="selectedUrl" />
      </aside>
    </main>

    <!-- Mobile Bottom Nav -->
    <nav class="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface border-t border-outline/10 flex items-center z-40 px-2 overflow-x-auto gap-2 no-scrollbar">
       <button 
          @click="selectTab('全部')"
          class="px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors"
          :class="currentTab === '全部' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:bg-surface-variant'"
        >
          全部
        </button>
        <button 
          v-for="tab in rssData" 
          :key="tab.title"
          @click="selectTab(tab.title)"
          class="px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors"
          :class="currentTab === tab.title ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:bg-surface-variant'"
        >
          {{ tab.title }}
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
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: var(--color-outline);
  opacity: 0.2;
  border-radius: 10px;
}
</style>