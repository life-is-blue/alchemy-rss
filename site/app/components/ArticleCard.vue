<template>
  <div
    class="group relative bg-white rounded-lg p-3 border border-black/5 hover:border-primary/30 hover:shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.99]"
  >
    <div class="flex justify-between items-start gap-2">
      <div class="flex-1 min-w-0">
        <!-- 来源 + 类型图标 + 日期 + 时长 -->
        <div class="flex items-center gap-2 mb-1 text-[10px] font-bold text-text-sub/70 uppercase tracking-wider">
          <span class="text-primary/80">{{ article.rssTitle || 'RSS' }}</span>
          <!-- 内容类型图标（SVG） -->
          <span class="inline-flex items-center text-text-sub/60" v-html="getContentTypeIcon(article.contentType)"></span>
          <span class="w-0.5 h-0.5 bg-black/20 rounded-full"></span>
          <span>{{ formatDate(article.date) }}</span>
          <!-- 视频/播客特有：时长 -->
          <template v-if="article.read_time && (article.contentType === 'VIDEO' || article.contentType === 'PODCAST')">
            <span class="w-0.5 h-0.5 bg-black/20 rounded-full"></span>
            <span>{{ article.read_time }} min</span>
          </template>
        </div>

        <h3 class="text-[15px] font-bold text-text-main leading-snug mb-1 group-hover:text-primary transition-colors line-clamp-2">
          {{ article.title }}
        </h3>

        <p v-if="article.summary" class="text-[13px] text-gray-600 leading-relaxed line-clamp-2">
          {{ article.summary.replace(/<[^>]+>/g, '') }}
        </p>

        <!-- 推文特有：互动数据 -->
        <div v-if="article.contentType === 'TWITTER' && article.tweetData" class="flex items-center gap-4 mt-2 text-[11px] text-text-sub">
          <span>❤️ {{ article.tweetData.likeCount || 0 }}</span>
          <span>🔄 {{ article.tweetData.retweetCount || 0 }}</span>
          <span v-if="article.score" class="ml-auto">⭐ {{ article.score }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CONTENT_TYPE_ICONS } from '~/composables/useArticles'

defineProps({
  article: {
    type: Object,
    required: true
  }
})

const getContentTypeIcon = (type) => {
  return CONTENT_TYPE_ICONS[type] || '📄'
}

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
