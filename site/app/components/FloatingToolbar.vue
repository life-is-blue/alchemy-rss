<template>
  <div class="fixed right-6 bottom-1/2 translate-y-1/2 md:right-12 z-40 flex flex-col gap-5">
    
    <!-- Reader Actions (Only when reading) -->
    <template v-if="showToolbar">
      <!-- Catalog (Placeholder for now) -->
      <button class="wechat-fab group" title="目录">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
      </button>

      <!-- AI Summary (Toggle) -->
      <button class="wechat-fab group" title="AI 摘要">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
      </button>

      <!-- Style Settings (Aa) -->
      <button
        @click="$emit('toggle-settings')"
        class="wechat-fab group"
        title="样式设置"
      >
        <span class="text-[17px] font-serif font-medium">A</span>
      </button>

      <!-- Dark Mode -->
      <button
        @click="$emit('toggle-dark')"
        class="wechat-fab group"
        title="夜间模式"
      >
         <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
         <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
      </button>
    </template>

    <!-- Back to Top (Conditional) -->
    <transition name="fade">
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="wechat-fab group"
        title="回到顶部"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </transition>

  </div>
</template>

<script setup>
const props = defineProps({
  showBackToTop: { type: Boolean, default: false },
  showToolbar: { type: Boolean, default: true },
  isDark: { type: Boolean, default: false }
})

const emit = defineEmits(['scroll-top', 'toggle-settings', 'toggle-dark'])

const scrollToTop = () => emit('scroll-top')
</script>

<style scoped>
.wechat-fab {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--color-surface);
  color: var(--color-text-sub);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06); /* Soft Shadow */
  border: 1px solid var(--color-outline);
  transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
}

.wechat-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  color: var(--color-primary);
}

.wechat-fab:active {
  transform: scale(0.95);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
</style>