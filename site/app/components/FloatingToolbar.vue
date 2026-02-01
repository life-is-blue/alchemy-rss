<template>
  <div class="fixed right-6 bottom-1/2 translate-y-1/2 md:right-12 z-40 flex flex-col gap-5">
    <transition-group name="fab">
      <button
        v-for="tool in visibleTools"
        :key="tool.id"
        @click="tool.handler"
        class="wechat-fab group relative"
        :title="tool.label"
        :aria-label="tool.label"
      >
        <!-- Icon Rendering -->
        <span v-html="tool.icon" class="flex items-center justify-center transition-transform duration-300 group-hover:scale-110"></span>

        <!-- Tooltip (Desktop) -->
        <span class="absolute right-full mr-4 px-2.5 py-1.5 bg-black/80 text-white text-[12px] font-medium rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-xl">
          {{ tool.label }}
        </span>
      </button>
    </transition-group>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  showBackToTop: { type: Boolean, default: false },
  showToolbar: { type: Boolean, default: true },
  isDark: { type: Boolean, default: false }
})

const emit = defineEmits(['scroll-top', 'toggle-settings', 'toggle-dark', 'toggle-catalog', 'toggle-ai'])

// Icon Constants (SVG Strings for purity)
const ICONS = {
  CATALOG: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>`,
  AI: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  STYLE: `<span class="text-[18px] font-serif font-medium">A</span>`,
  SUN: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
  MOON: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  TOP: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`
}

// Tool Definition
const tools = computed(() => [
  {
    id: 'catalog',
    label: '目录',
    icon: ICONS.CATALOG,
    visible: props.showToolbar,
    handler: () => emit('toggle-catalog')
  },
  {
    id: 'ai',
    label: 'AI 摘要',
    icon: ICONS.AI,
    visible: props.showToolbar,
    handler: () => emit('toggle-ai')
  },
  {
    id: 'settings',
    label: '样式设置',
    icon: ICONS.STYLE,
    visible: props.showToolbar,
    handler: () => emit('toggle-settings')
  },
  {
    id: 'theme',
    label: props.isDark ? '日间模式' : '夜间模式',
    icon: props.isDark ? ICONS.SUN : ICONS.MOON,
    visible: props.showToolbar,
    handler: () => emit('toggle-dark')
  },
  {
    id: 'top',
    label: '回到顶部',
    icon: ICONS.TOP,
    visible: props.showBackToTop,
    handler: () => emit('scroll-top')
  }
])

const visibleTools = computed(() => tools.value.filter(t => t.visible))
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
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  border: 1px solid var(--color-outline);
  transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
}

.wechat-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  color: var(--color-primary);
  border-color: var(--color-primary); /* Active Border */
}

.wechat-fab:active {
  transform: scale(0.95);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

/* Vue Transition: Fab Fade In/Out */
.fab-enter-active,
.fab-leave-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy enter */
}
.fab-leave-active {
  position: absolute; /* Smooth collapse */
  opacity: 0;
}
.fab-enter-from,
.fab-leave-to {
  opacity: 0;
  transform: scale(0.5) translateY(10px);
}
</style>