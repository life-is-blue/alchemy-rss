<template>
  <div 
    class="group py-8 px-2 border-b border-outline last:border-0 cursor-pointer flex flex-col gap-3 transition-all active:opacity-60"
    @click="$emit('click')"
  >
    <div class="flex items-center gap-3">
      <span class="text-[11px] font-medium tracking-widest text-text-sub uppercase">{{ article.rssTitle }}</span>
      <div class="w-1 h-1 rounded-full bg-outline"></div>
      <span class="text-[11px] font-medium text-text-sub">{{ article.date }}</span>
    </div>

    <div class="space-y-3">
      <h3 class="text-[20px] font-bold leading-tight text-text-main group-hover:text-primary transition-colors duration-300">
        {{ article.title }}
      </h3>
      <p v-if="article.summary" class="text-text-sub text-[15px] leading-[1.8] line-clamp-3 font-light">
        {{ article.summary }}
      </p>
    </div>

    <div class="flex items-center gap-6 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <a 
        :href="article.link" 
        target="_blank" 
        @click.stop
        class="text-xs font-bold text-primary flex items-center gap-1"
      >
        阅读原文
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
      <button 
        @click.stop="$emit('action', 'save')"
        class="text-xs font-bold text-text-sub hover:text-text-main transition-colors"
      >
        加入书架
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