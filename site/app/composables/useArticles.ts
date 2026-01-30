import { ref, computed } from 'vue'

export const useArticles = () => {
  const articles = ref([])
  const rssData = ref([])
  const loading = ref(true)
  const currentTab = ref('全部')
  const searchValue = ref('')

  // 1. 定义分类映射 (把后端可能的英文标签/分类转为优雅的中文)
  const CATEGORY_MAP: Record<string, string> = {
    'Artificial_Intelligence': '人工智能',
    'Programming_Technology': '软件工程',
    'Business_Tech': '商业科技',
    'Product_Development': '产品设计',
    'Deep_Dive': '深度探索'
  }

  // 2. 动态提取分类
  const categories = computed(() => {
    const counts: Record<string, number> = { '全部': articles.value.length }
    
    articles.value.forEach(article => {
      // 优先从 tags 里找分类 (如果 tags 里包含分类名)
      let found = false
      const tags = article.tags || []
      
      // 简单的关键词匹配或映射
      for (const [key, label] of Object.entries(CATEGORY_MAP)) {
        if (tags.includes(key) || tags.includes(label)) {
          counts[label] = (counts[label] || 0) + 1
          found = true
        }
      }
      // 不再将 RSS Source 作为侧边栏分类，保持侧边栏纯净
    })

    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .filter(c => c.name === '全部' || Object.values(CATEGORY_MAP).includes(c.name)) // 严格白名单过滤
      .sort((a, b) => {
        if (a.name === '全部') return -1
        return b.count - a.count
      })
  })

  const loadData = async () => {
    loading.value = true
    try {
      let data;
      let rss;
      
      try {
        // 并行加载文章和源数据
        const [articlesResp, rssResp] = await Promise.all([
          $fetch('/api/articles').catch(() => $fetch('/data/links.json')),
          $fetch('/data/rss.json').catch(() => [])
        ])
        data = articlesResp
        rss = rssResp
      } catch (e) {
        console.error('Data fetch failed', e)
        return
      }
      
      if (!Array.isArray(data)) {
        console.warn('⚠️ Invalid articles data format:', data)
        return
      }

      articles.value = data.reduce((prev, curr) => {
        return [...prev, ...curr.items.map(item => ({ 
          ...item, 
          rssTitle: curr.title 
        }))]
      }, []).sort((a, b) => a.date < b.date ? 1 : -1)
      
      // 直接使用 rss.json 的原始数据
      rssData.value = rss || []
    } catch (e) {
      console.error('Failed to load articles', e)
    } finally {
      loading.value = false
    }
  }

  const filteredArticles = computed(() => {
    let list = articles.value

    if (currentTab.value !== '全部') {
      list = list.filter(a => {
        const tags = a.tags || []
        const mappedCat = Object.keys(CATEGORY_MAP).find(k => CATEGORY_MAP[k] === currentTab.value)
        
        // 匹配规则：1. 标签匹配 2. 映射分类匹配 3. 来源标题简化后匹配
        const isTagMatch = tags.includes(currentTab.value) || (mappedCat && tags.includes(mappedCat))
        const isTitleMatch = a.rssTitle && a.rssTitle.split('(')[0].trim() === currentTab.value
        
        return isTagMatch || isTitleMatch
      })
    }

    if (searchValue.value) {
      const search = searchValue.value.toLowerCase()
      list = list.filter(a => 
        a.title.toLowerCase().includes(search) || 
        (a.summary && a.summary.toLowerCase().includes(search))
      )
    }

    return list
  })

  const selectTab = (title) => {
    currentTab.value = title
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
    loadData,
    filteredArticles,
    selectTab
  }
}
