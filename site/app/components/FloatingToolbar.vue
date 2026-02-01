<template>
  <div class="fixed right-6 bottom-6 md:right-10 md:bottom-10 z-40 flex flex-col items-center gap-2">
    <!-- Unified Capsule Dock -->
    <div
      v-if="showToolbar || showBackToTop"
      class="flex flex-col items-center p-1.5 gap-2 rounded-full transition-all duration-300 backdrop-blur-md border border-outline/10 shadow-paper"
      style="background-color: var(--color-surface);"
    >
      
      <!-- Toolbar Items (Reader Mode) -->
      <template v-if="showToolbar">
        <button
          @click="$emit('toggle-settings')"
          class="toolbar-btn group relative"
          title="阅读设置"
        >
          <span class="text-[16px] font-serif font-bold">Aa</span>
          <span class="tooltip">样式设置</span>
        </button>

        <button
          @click="$emit('toggle-dark')"
          class="toolbar-btn group relative"
          title="夜间模式"
        >
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          <span class="tooltip">{{ isDark ? '日间模式' : '夜间模式' }}</span>
        </button>

        <!-- Divider if BackToTop is also visible -->
        <div v-if="showBackToTop" class="w-4 h-[1px] bg-border my-0.5"></div>
      </template>

      <!-- Back to Top -->
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="toolbar-btn group relative"
        title="回到顶部"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </div>
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
.toolbar-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--color-text-sub);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
}
.toolbar-btn:hover {
  background-color: var(--color-hover-bg);
  color: var(--color-primary);
}
.toolbar-btn:active {
  transform: scale(0.92);
}

.tooltip {
  position: absolute;
  right: 100%;
  margin-right: 12px;
  background-color: rgba(0,0,0,0.8);
  color: white;
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 4px;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: opacity 0.2s;
  font-weight: 500;
}
.group:hover .tooltip {
  opacity: 1;
}

/* Night Mode Overrides handled by CSS variables in main.css, 
   but we can add specific adjustments if needed */
</style>