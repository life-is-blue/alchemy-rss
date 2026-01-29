<template>
  <div class="h-full flex flex-col bg-white overflow-hidden">
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
      class="flex-1 overflow-y-auto custom-content selection:bg-primary/10 transition-colors duration-500"
      :class="[`theme-${theme}`]"
    >
      <header class="mb-16 text-center lg:text-left">
        <div class="flex items-center justify-center lg:justify-start gap-2 text-[11px] font-bold text-[#B2B2B2] uppercase tracking-[0.2em] mb-6">
          <span>{{ article.siteName || 'Alchemy Archive' }}</span>
          <span v-if="article.byline" class="opacity-30">/</span>
          <span v-if="article.byline">{{ article.byline }}</span>
        </div>
        <h1 class="text-3xl lg:text-4xl font-black leading-[1.2] text-text-main mb-8 tracking-tight">
          {{ article.title }}
        </h1>
        <div class="w-12 h-1 bg-primary/10 rounded-full mx-auto lg:mx-0"></div>
      </header>

      <!-- AI Insight Card -->
      <div v-if="article.aiSummary || article.mainPoints" class="mb-12 p-8 rounded-2xl shadow-sm transition-colors duration-500" style="background-color: var(--color-card-bg); border: 1px solid var(--color-card-border);">
        <div class="flex items-center gap-2 mb-4 text-primary font-bold text-xs uppercase tracking-widest">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 1 8 8c0 3.2-2.3 5.9-5.4 7.2-.6.2-1 .8-1 1.4v.4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.4c0-.6-.4-1.2-1-1.4C4.3 15.9 2 13.2 2 10a8 8 0 0 1 8-8z"/><path d="M9 22h6"/></svg>
          Alchemy Insight
        </div>
        
        <p v-if="article.aiSummary" class="text-lg font-medium text-[#444] leading-relaxed mb-6 italic">
          “{{ article.aiSummary }}”
        </p>

        <ul v-if="article.mainPoints && article.mainPoints.length" class="space-y-3">
          <li v-for="(point, idx) in article.mainPoints" :key="idx" class="flex gap-3 text-sm text-[#555] leading-relaxed">
            <span class="font-bold text-primary shrink-0">{{ idx + 1 }}.</span>
            <span>
              <strong class="text-text-main block mb-0.5">{{ point.point }}</strong>
              {{ point.explanation }}
            </span>
          </li>
        </ul>

        <div class="mt-6 pt-6 border-t border-black/[0.05] flex flex-wrap gap-4 text-xs font-bold text-text-sub uppercase tracking-wider">
          <span v-if="article.readTime">⏱️ {{ article.readTime }} min read</span>
          <span v-if="article.score">🔥 Score: {{ article.score }}</span>
          <span v-if="article.wordCount">📝 {{ article.wordCount }} words</span>
        </div>
      </div>

      <article 
        class="prose prose-lg max-w-[750px] mx-auto text-[#333] leading-[1.9] font-normal article-body" 
        :style="{ fontSize: fontSize + 'px' }"
        v-html="article.content"
      ></article>
      
      <footer class="mt-20 mb-10 max-w-[750px] mx-auto border-t border-outline/10 pt-10 text-center">
        <div class="text-[11px] font-bold text-text-sub uppercase tracking-widest mb-8">End of Content</div>
        <div class="flex justify-center gap-4">
          <button class="px-8 py-3 rounded-full border border-outline text-sm font-bold text-text-sub hover:text-text-main hover:border-text-main transition-all">
            分享想法
          </button>
          <button class="px-8 py-3 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
            收录至书架
          </button>
        </div>
      </footer>
    </div>

    <!-- Empty State -->
    <div v-else class="h-full flex flex-col items-center justify-center text-text-sub/30 text-center gap-6 p-10">
      <div class="w-20 h-20 rounded-full bg-black/[0.02] flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/><path d="M8 15h6"/></svg>
      </div>
      <p class="text-sm font-medium tracking-tight">Select an entry from the library<br/>to begin your refinement process.</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  url: String
})

const { fontSize, theme } = useReadingSettings()

const article = ref(null)
const loading = ref(false)

watch(() => props.url, async (newUrl) => {
  if (!newUrl) {
    article.value = null
    return
  }

  loading.value = true
  try {
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
  background-color: #F4ECD8; 
  color: #5B4636; 
  --color-card-bg: rgba(0, 0, 0, 0.02);
  --color-card-border: rgba(91, 70, 54, 0.1);
}
.theme-parchment { 
  background-color: #FAF9F6; 
  background-image: url("https://www.transparenttextures.com/patterns/papyrus-dark.png");
  color: #444; 
  --color-card-bg: rgba(0, 0, 0, 0.02);
}
.theme-night { 
  background-color: #1A1B1E; 
  color: #A0A0A0; 
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