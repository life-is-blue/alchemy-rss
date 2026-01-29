<template>
  <div 
    class="group bg-surface border border-outline/10 p-5 rounded-lg hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer flex flex-col gap-3"
    @click="$emit('click')"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-primary/70">
        <span>{{ article.rssTitle }}</span>
        <span class="text-outline/30">•</span>
        <span class="text-on-surface-variant/50">{{ article.date }}</span>
      </div>
      <div class="opacity-0 group-hover:opacity-100 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </div>
    </div>

    <h3 class="text-base font-bold leading-tight group-hover:text-primary transition-colors">
      {{ article.title }}
    </h3>

    <p v-if="article.summary" class="text-on-surface-variant/70 text-sm line-clamp-2 leading-relaxed">
      {{ article.summary }}
    </p>

    <div class="mt-auto pt-2 flex items-center gap-4">
      <a 
        :href="article.link" 
        target="_blank" 
        @click.stop
        class="text-xs font-bold text-on-surface-variant/40 hover:text-primary transition-colors"
      >
        查看原文
      </a>
      <button 
        @click.stop="$emit('action', 'save')"
        class="text-xs font-bold text-on-surface-variant/40 hover:text-primary transition-colors"
      >
        稍后阅读
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})
defineEmits(['click', 'action'])
</script>
