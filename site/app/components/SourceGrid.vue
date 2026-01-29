<template>
  <div class="mx-auto">
    <header class="mb-12">
      <h2 class="text-3xl font-black mb-4 tracking-tight">炼金工坊</h2>
      <p class="text-text-sub text-sm leading-relaxed">以下是当前系统正在监听并提炼的所有信息原矿源。你可以将这些链接添加到你的 RSS 阅读器中。</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        v-for="source in sources" 
        :key="source.title"
        class="group p-6 rounded-[20px] bg-black/[0.02] border border-outline/5 hover:bg-white hover:shadow-wechat transition-all duration-500"
      >
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
            </div>
            <div>
              <h4 class="font-bold text-[16px] text-text-main">{{ source.title }}</h4>
              <span class="text-[10px] font-bold text-primary/60 uppercase tracking-widest">Verified Source</span>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="p-3 rounded-xl bg-black/[0.03] group-hover:bg-black/[0.01] transition-colors">
            <p class="text-[11px] text-text-sub truncate font-mono">{{ Array.isArray(source.rss) ? source.rss[0] : source.rss }}</p>
          </div>
          
          <div class="flex items-center gap-3">
            <button 
              @click="copyLink(source.rss)"
              class="flex-1 py-2 rounded-full bg-white border border-outline text-[12px] font-bold text-text-sub hover:text-primary hover:border-primary transition-all active:scale-95"
            >
              复制订阅源
            </button>
            <a 
              :href="Array.isArray(source.rss) ? source.rss[0] : source.rss" 
              target="_blank"
              class="px-4 py-2 rounded-full bg-primary/10 text-primary text-[12px] font-bold hover:bg-primary hover:text-white transition-all"
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
  alert('订阅链接已复制到剪贴板')
}
</script>
