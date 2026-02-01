<template>
  <div class="fixed right-6 bottom-1/2 translate-y-1/2 md:right-12 z-40 flex flex-col gap-5">
    <transition-group name="fab">
      <button
        v-for="tool in visibleTools"
        :key="tool.id"
        @click="tool.handler"
        class="wechat-fab group relative transition-all duration-300"
        :class="[
          { 'text-primary border-primary bg-primary/5': tool.active },
          tool.id === 'top' && !showBackToTop ? 'opacity-20 grayscale pointer-events-none' : 'opacity-100'
        ]"
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
  isDark: { type: Boolean, default: false },
  isReader: { type: Boolean, default: false }
})

const emit = defineEmits(['scroll-top', 'toggle-settings', 'toggle-dark', 'back', 'home'])

const ICONS = {
  CATALOG: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>`,
  HOME: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  FONT_SIZE: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>`,
  SUN: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  MOON: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  TOP: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`
}

const tools = computed(() => [
  {
    id: 'nav',
    label: props.isReader ? '返回目录' : '首页',
    icon: props.isReader ? ICONS.CATALOG : ICONS.HOME,
    visible: props.showToolbar,
    handler: () => props.isReader ? emit('back') : emit('home')
  },
  {
    id: 'settings',
    label: '字体与样式',
    icon: ICONS.FONT_SIZE,
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
    visible: true, // Always visible to prevent layout jumping
    active: props.showBackToTop,
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
  border-color: var(--color-primary);
}

.wechat-fab:active {
  transform: scale(0.95);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.fab-enter-active,
.fab-leave-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fab-leave-active {
  position: absolute;
  opacity: 0;
}
.fab-enter-from,
.fab-leave-to {
  opacity: 0;
  transform: scale(0.5) translateY(10px);
}
</style>