<template>
  <div class="mx-auto w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div 
        v-for="source in sources" 
        :key="source.title"
        class="group p-8 rounded-[32px] bg-white shadow-card hover:shadow-paper transition-all duration-500 relative"
      >
        <div class="flex items-start justify-between mb-6">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
            </div>
            <div>
              <h4 class="font-bold text-[18px] text-text-main tracking-tight">{{ source.title }}</h4>
              <span class="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em]">Validated Mineral</span>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="p-4 rounded-2xl bg-black/[0.02] border border-black/[0.01] transition-colors group-hover:bg-black/[0.01]">
            <p class="text-[12px] text-text-sub truncate font-mono opacity-60">{{ Array.isArray(source.rss) ? source.rss[0] : source.rss }}</p>
          </div>
          
          <div class="flex items-center gap-4">
            <button 
              @click="copyLink(source.rss)"
              class="flex-1 py-3 rounded-xl bg-white border border-black/[0.05] text-[13px] font-bold text-text-sub hover:text-primary hover:border-primary transition-all active:scale-95 shadow-sm"
            >
              复制源链接
            </button>
            <a 
              :href="Array.isArray(source.rss) ? source.rss[0] : source.rss" 
              target="_blank"
              class="px-6 py-3 rounded-xl bg-primary/5 text-primary text-[13px] font-bold hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              测试
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sources: Array
})

const copyLink = (link) => {
  const url = Array.isArray(link) ? link[0] : link
  navigator.clipboard.writeText(url)
  alert('矿源链接已复制')
}
</script>