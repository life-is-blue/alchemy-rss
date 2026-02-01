<template>
  <transition name="fade">
    <div
      v-if="showBackToTop"
      class="fixed right-6 bottom-6 md:right-10 md:bottom-10 z-40 flex flex-col gap-4"
    >
      <button
        @click="scrollToTop"
        class="floating-action"
        title="回到顶部"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  mode: String,
  showBackToTop: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['scroll-top', 'back'])

const scrollToTop = () => {
  emit('scroll-top')
}
</script>