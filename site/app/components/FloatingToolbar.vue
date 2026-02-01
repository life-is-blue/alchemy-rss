<template>
  <div class="fixed right-6 bottom-6 md:right-12 md:bottom-12 z-40 flex flex-col gap-5">
    <!-- Main Toolbar Stack -->
    <div class="flex flex-col gap-4 transition-all duration-300" :class="showToolbar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'">
      
      <!-- Font / Settings -->
      <button
        @click="$emit('toggle-settings')"
        class="floating-action group relative"
        title="阅读设置"
      >
        <span class="text-[18px] font-serif italic font-bold">Aa</span>
        <span class="absolute right-full mr-3 bg-black/80 text-white text-[11px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">样式设置</span>
      </button>

      <!-- Theme Toggle (Quick) -->
      <button
        @click="$emit('toggle-dark')"
        class="floating-action group relative"
        title="夜间模式"
      >
        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        <span class="absolute right-full mr-3 bg-black/80 text-white text-[11px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">{{ isDark ? '日间模式' : '夜间模式' }}</span>
      </button>

    </div>

    <!-- Toggle / Menu Button (Always Visible) -->
     <button
        @click="scrollToTop"
        class="floating-action group relative transition-all duration-300"
        :class="showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'"
        title="回到顶部"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m18 15-6-6-6 6"/></svg>
    </button>
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
.floating-action {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--color-surface);
  color: var(--color-text-sub);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  border: 1px solid var(--color-outline);
  transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
}
.floating-action:hover {
  transform: translateY(-2px);
  color: var(--color-primary);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
.floating-action:active {
  transform: scale(0.92);
}
</style>