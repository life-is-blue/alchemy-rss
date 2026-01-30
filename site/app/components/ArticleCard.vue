<template>
  <div 
    class="group relative bg-surface rounded-xl p-4 sm:p-5 border border-outline/10 hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-[0.99] mb-4"
  >
    <div class="flex justify-between items-start gap-4">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-2 text-[11px] font-bold text-text-sub uppercase tracking-wider">
          <span class="text-primary">{{ article.rssTitle || 'RSS' }}</span>
          <span class="w-0.5 h-0.5 bg-current rounded-full opacity-50"></span>
          <span>{{ formatDate(article.date) }}</span>
        </div>
        
        <h3 class="text-[17px] font-bold text-text-main leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {{ article.title }}
        </h3>
        
        <p v-if="article.summary" class="text-[13px] text-text-sub leading-relaxed line-clamp-2 opacity-90">
          {{ article.summary.replace(/<[^>]+>/g, '') }}
        </p>
      </div>

      <!-- Action Indicator (Hidden by default, visible on hover) -->
      <div class="opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 top-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  // 保持 ISO 格式 (YYYY-MM-DD)，这更符合档案馆的风格
  // 如果输入已经是格式化好的字符串，直接返回；否则尝试转换
  try {
    const date = new Date(dateStr)
    // 处理无效日期
    if (isNaN(date.getTime())) return dateStr
    
    // 手动拼接 YYYY-MM-DD，避免时区问题导致日期偏差
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  } catch (e) {
    return dateStr
  }
}
</script>
