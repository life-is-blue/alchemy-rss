<template>
  <div class="fixed right-6 bottom-1/2 translate-y-1/2 md:right-12 z-40 flex flex-col gap-5">
    <transition-group name="fab">
      <button
        v-for="tool in visibleTools"
        :key="tool.id"
        @click="tool.handler"
        class="wechat-fab group relative transition-all duration-300"
        :class="[
          { 'active-tool': tool.active },
          tool.id === 'top' && !showBackToTop ? 'opacity-10 grayscale pointer-events-none' : 'opacity-100'
        ]"
        :aria-label="tool.label"
      >
        <!-- Icon Rendering (Ultra-thin strokes for premium feel) -->
        <span v-html="tool.icon" class="flex items-center justify-center transition-transform duration-300 group-hover:scale-110"></span>

        <!-- Tooltip -->
        <span class="absolute right-full mr-5 px-2.5 py-1.5 bg-black/80 text-white text-[11px] font-bold rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-2xl z-50">
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
  isReader: { type: Boolean, default: false },
  isFavorited: { type: Boolean, default: false }
})

const emit = defineEmits(['scroll-top', 'toggle-settings', 'toggle-dark', 'back', 'home', 'toggle-favorite'])

const ICONS = {
  CATALOG: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>`,
  HOME: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  FAV: (active) => `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="${active ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  FONT: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>`,
  SUN: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l1.41 1.41M19.07 4.93l1.41 1.41"/></svg>`,
  MOON: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  TOP: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m18 15-6-6-6 6"/></svg>`
}

const tools = computed(() => [
  {
    id: 'nav',
    label: props.isReader ? '返回目录' : '首页',
    icon: props.isReader ? ICONS.CATALOG : ICONS.HOME,
    visible: true,
    handler: () => props.isReader ? emit('back') : emit('home')
  },
  {
    id: 'fav',
    label: props.isFavorited ? '取消收藏' : '加入收藏',
    icon: ICONS.FAV(props.isFavorited),
    visible: props.isReader,
    active: props.isFavorited,
    handler: () => emit('toggle-favorite')
  },
  {
    id: 'settings',
    label: '字体字号',
    icon: ICONS.FONT,
    visible: true,
    handler: () => emit('toggle-settings')
  },
  {
    id: 'theme',
    label: props.isDark ? '日间' : '夜间',
    icon: props.isDark ? ICONS.SUN : ICONS.MOON,
    visible: true,
    handler: () => emit('toggle-dark')
  },
  {
    id: 'top',
    label: '置顶',
    icon: ICONS.TOP,
    visible: true,
    handler: () => emit('scroll-top')
  }
])

const visibleTools = computed(() => tools.value.filter(t => t.visible))
</script>

<style scoped>
.wechat-fab {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: var(--color-surface);
  color: var(--color-text-sub);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border: 1px solid var(--color-outline);
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
}

.wechat-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.08);
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.active-tool {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background-color: var(--color-primary-10);
}

.wechat-fab:active {
  transform: scale(0.92);
}

.fab-enter-active,
.fab-leave-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fab-leave-active {
  position: absolute;
  opacity: 0;
}
.fab-enter-from,
.fab-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(20px);
}
</style>