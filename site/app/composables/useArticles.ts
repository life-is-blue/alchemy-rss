import { ref, computed } from 'vue'

// 内容类型常量
export const CONTENT_TYPES = {
  ARTICLE: 'ARTICLE',
  VIDEO: 'VIDEO',
  PODCAST: 'PODCAST',
  TWITTER: 'TWITTER',
  RSS: 'rss'
} as const

export const CONTENT_TYPE_LABELS = {
  ARTICLE: '文章',
  VIDEO: '视频',
  PODCAST: '播客',
  TWITTER: '动态',
  rss: '外部订阅'
} as const

// SVG 图标组件（替换 emoji）
export const CONTENT_TYPE_ICONS = {
  ARTICLE: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>`,
  VIDEO: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>`,
  PODCAST: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
  TWITTER: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
  rss: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>`
} as const

export const useArticles = () => {
  const articles = ref([])
  const rssData = ref([])
  const sourcesMap = ref(new Map()) // 源配置映射
  const loading = ref(true)
  const currentTab = ref('全部')
  const searchValue = ref('')

  // 分页状态
  const pageSize = 40
  const currentPage = ref(1)

  const categories = computed(() => {
    // 初始化计数
    const counts: Record<string, number> = { '全部': articles.value.length }

    // 初始化所有类型的计数为 0
    Object.values(CONTENT_TYPE_LABELS).forEach(label => {
      counts[label] = 0
    })

    // 统计每种类型的文章数量
    articles.value.forEach(article => {
      const type = article.contentType
      if (type && CONTENT_TYPE_LABELS[type as keyof typeof CONTENT_TYPE_LABELS]) {
        const label = CONTENT_TYPE_LABELS[type as keyof typeof CONTENT_TYPE_LABELS]
        counts[label] = (counts[label] || 0) + 1
      }
    })

    // 定义固定的排序顺序
    const sortOrder = ['全部', '文章', '视频', '播客', '动态', '外部订阅']

    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .filter(item => item.count > 0 || item.name === '全部') // 仅显示有内容的分类（全部除外）
      .sort((a, b) => {
        const indexA = sortOrder.indexOf(a.name)
        const indexB = sortOrder.indexOf(b.name)
        // 如果不在排序列表中，放到最后
        return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB)
      })
  })

  const loadData = async () => {
    loading.value = true
    try {
      const [articlesResp, rssResp] = await Promise.all([
        $fetch('/api/articles').catch(() => $fetch('/data/links.json')),
        $fetch('/data/rss.json').catch(() => [])
      ])

      // 预计算优化结构
      const optimizedSources: { title: string; baseTitle: string; config: any }[] = []

      // 建立源配置映射
      if (Array.isArray(rssResp)) {
        rssResp.forEach(source => {
          sourcesMap.value.set(source.title, source)
          optimizedSources.push({
            title: source.title,
            baseTitle: source.title.split('-')[0]?.trim(),
            config: source
          })
        })
      }

      // 辅助函数：模糊匹配源配置
      const findSourceConfig = (title: string) => {
        // 1. 精确匹配
        if (sourcesMap.value.has(title)) {
          return sourcesMap.value.get(title)
        }

        // 2. 模糊匹配：处理 "精选文章 (BestBlogs)" -> "精选文章 - AI" 等情况
        const normalizedTitle = title.replace(/\s*\([^)]*\)/, '').trim() // 移除括号部分

        for (const item of optimizedSources) {
          // 检查是否包含相同的关键词
          if (item.title.includes(normalizedTitle) || normalizedTitle.includes(item.baseTitle)) {
            return item.config
          }
        }

        return null
      }

      // 合并文章时添加源元数据
      if (Array.isArray(articlesResp)) {
        articles.value = articlesResp.flatMap(curr => {
          const sourceConfig = findSourceConfig(curr.title)

          return curr.items.map(item => ({
            ...item,
            rssTitle: curr.title,
            // 新增字段：内容类型和源分类
            contentType: sourceConfig?.type || 'ARTICLE',
            sourceCategory: sourceConfig?.category,
          }))
        }).sort((a, b) => a.date < b.date ? 1 : -1)
      }
      rssData.value = rssResp || []
    } catch (e) {
      console.error('Failed to load data', e)
    } finally {
      loading.value = false
    }
  }

  // 基础过滤后的全量列表
  const filteredArticles = computed(() => {
    let list = articles.value

    // 1. 类型过滤 (根据 contentType)
    if (currentTab.value !== '全部') {
      // 根据当前选中的标签名称找到对应的 CONTENT_TYPE key
      const targetTypeEntry = Object.entries(CONTENT_TYPE_LABELS).find(([_, label]) => label === currentTab.value)

      if (targetTypeEntry) {
        const targetType = targetTypeEntry[0]
        list = list.filter(a => a.contentType === targetType)
      }
    }

    // 2. 搜索过滤
    if (searchValue.value) {
      const search = searchValue.value.toLowerCase()
      list = list.filter(a =>
        a.title.toLowerCase().includes(search) ||
        (a.summary && a.summary.toLowerCase().includes(search))
      )
    }

    return list
  })

  // 最终显示的切片列表
  const displayedArticles = computed(() => {
    return filteredArticles.value.slice(0, currentPage.value * pageSize)
  })

  const hasMore = computed(() => {
    return displayedArticles.value.length < filteredArticles.value.length
  })

  const loadMore = () => {
    if (hasMore.value) {
      currentPage.value++
    }
  }

  const selectTab = (title) => {
    currentTab.value = title
    currentPage.value = 1 // 切换分类重置页码
    if (process.client) {
      const container = document.querySelector('.overflow-y-scroll')
      if (container) container.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return {
    articles,
    categories,
    rssData,
    loading,
    currentTab,
    searchValue,
    displayedArticles,
    filteredArticles,
    hasMore,
    loadData,
    loadMore,
    selectTab
  }
}