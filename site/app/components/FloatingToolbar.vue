<template>
  <transition name="toolbar-fade">
    <div class="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-[100]">

      <!-- Reader Mode Tools -->
      <template v-if="mode === 'reader'">
        <button
          @click="$emit('back')"
          class="floating-action active-press"
          title="返回列表"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="9" y1="12" y2="12"/><line x1="21" x2="7" y1="18" y2="18"/></svg>
        </button>

        <!-- Font Settings -->
        <div class="group relative">
          <button class="floating-action active-press" title="字号">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>
          </button>
          <div class="absolute right-full pr-4 top-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-x-2 group-hover:translate-x-0">
            <div class="bg-white/95 backdrop-blur-xl shadow-wechat rounded-2xl p-4 flex items-center gap-4 border border-outline/10">
              <button @click="decreaseFont" class="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 active:scale-90 transition-all font-bold text-base">-</button>
              <span class="text-sm font-bold w-6 text-center">{{ fontSize }}</span>
              <button @click="increaseFont" class="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 active:scale-90 transition-all font-bold text-base">+</button>
            </div>
          </div>
        </div>

        <!-- Theme Settings -->
        <div class="group relative">
          <button class="floating-action active-press" title="主题">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
          </button>
          <div class="absolute right-full pr-4 top-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-x-2 group-hover:translate-x-0">
            <div class="bg-white/95 backdrop-blur-xl shadow-wechat rounded-2xl p-3 flex items-center gap-3 border border-outline/10">
              <button @click="theme = 'white'" class="w-8 h-8 rounded-full border-2 transition-all active:scale-90" :class="theme === 'white' ? 'border-primary' : 'border-outline/20'" style="background-color: #FFFFFF;" title="白色"></button>
              <button @click="theme = 'sepia'" class="w-8 h-8 rounded-full border-2 transition-all active:scale-90" :class="theme === 'sepia' ? 'border-primary' : 'border-outline/20'" style="background-color: #f5e6c8;" title="护眼"></button>
              <button @click="theme = 'green'" class="w-8 h-8 rounded-full border-2 transition-all active:scale-90" :class="theme === 'green' ? 'border-primary' : 'border-outline/20'" style="background-color: #cce8cf;" title="绿色"></button>
              <button @click="theme = 'night'" class="w-8 h-8 rounded-full border-2 transition-all active:scale-90" :class="theme === 'night' ? 'border-primary' : 'border-outline/20'" style="background-color: #1A1A1A;" title="夜间"></button>
            </div>
          </div>
        </div>

        <div class="h-px w-6 bg-black/5 mx-auto my-1"></div>
      </template>

      <!-- Common Tools (Always visible) -->
      <button
        @click="$emit('scroll-top')"
        class="floating-action active-press"
        title="回到顶部"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>

    </div>
  </transition>
</template>

<script setup>
import { useReadingSettings } from '~/composables/useReadingSettings'

const props = defineProps({
  mode: {
    type: String,
    default: 'list', // 'list' | 'reader'
    validator: (value) => ['list', 'reader'].includes(value)
  }
})

defineEmits(['back', 'scroll-top'])

// Use composable for settings state
const { fontSize, theme, increaseFont, decreaseFont } = useReadingSettings()
</script>