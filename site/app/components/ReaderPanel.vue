<template>
  <div class="h-full flex flex-col bg-surface overflow-hidden">
    <div v-if="loading" class="p-8 space-y-6 animate-pulse">
      <div class="h-8 bg-surface-variant rounded w-3/4"></div>
      <div class="h-4 bg-surface-variant rounded w-1/4"></div>
      <div class="space-y-3 pt-8">
        <div class="h-4 bg-surface-variant rounded"></div>
        <div class="h-4 bg-surface-variant rounded"></div>
        <div class="h-4 bg-surface-variant rounded w-5/6"></div>
      </div>
    </div>

    <div v-else-if="article" class="flex-1 overflow-y-auto p-6 lg:p-8 custom-content">
      <header class="mb-8">
        <div class="flex items-center gap-2 text-xs text-primary font-bold uppercase tracking-widest mb-2">
          <span>{{ article.siteName || 'Alchemy Reader' }}</span>
          <span v-if="article.byline" class="text-outline/30">•</span>
          <span v-if="article.byline">{{ article.byline }}</span>
        </div>
        <h1 class="text-2xl lg:text-3xl font-bold leading-tight mb-4 text-on-surface">
          {{ article.title }}
        </h1>
        <hr class="border-outline/10" />
      </header>

      <div class="prose prose-sm lg:prose-base max-w-none text-on-surface-variant leading-relaxed" v-html="article.content"></div>
    </div>

    <div v-else class="h-full flex flex-col items-center justify-center text-on-surface-variant/40 text-center gap-4 p-8">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      <p>选择一篇文章<br/>开启炼金阅读模式</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  url: String
})

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
      params: { url: newUrl }
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
.custom-content img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1.5rem 0;
}
.custom-content pre {
  background-color: #1f1b16;
  color: #fef8f4;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1.5rem 0;
}
.custom-content p {
  margin-bottom: 1.25rem;
}
.custom-content h2, .custom-content h3 {
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>
