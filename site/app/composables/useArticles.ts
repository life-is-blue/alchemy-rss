import { ref, computed } from 'vue'

export const useArticles = () => {
  const articles = ref([])
  const rssData = ref([])
  const loading = ref(true)
  const currentTab = ref('全部')
  const searchValue = ref('')
  
  // 分页状态
  const pageSize = 40
  const currentPage = ref(1)

  const CATEGORY_MAP: Record<string, string> = {
    'Artificial_Intelligence': '人工智能',
    'Programming_Technology': '软件工程',
    'Business_Tech': '商业科技',
    'Product_Development': '产品设计',
    'Deep_Dive': '深度探索'
  }

  const categories = computed(() => {
    const counts: Record<string, number> = { '全部': articles.value.length }
    articles.value.forEach(article => {
      let found = false
      const tags = article.tags || []
      for (const [key, label] of Object.entries(CATEGORY_MAP)) {
        if (tags.includes(key) || tags.includes(label)) {
          counts[label] = (counts[label] || 0) + 1
          found = true
        }
      }
      if (!found && article.rssTitle) {
        const simplifiedTitle = article.rssTitle.split('(')[0].trim()
        counts[simplifiedTitle] = (counts[simplifiedTitle] || 0) + 1
      }
    })
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => {
        if (a.name === '全部') return -1
        const isAInMap = Object.values(CATEGORY_MAP).includes(a.name)
        const isBInMap = Object.values(CATEGORY_MAP).includes(b.name)
        if (isAInMap && !isBInMap) return -1
        if (!isAInMap && isBInMap) return 1
        return b.count - a.count
      })
  })

  const loadData = async () => {
    loading.value = true
    try {
      const [articlesResp, rssResp] = await Promise.all([
        $fetch('/api/articles').catch(() => $fetch('/data/links.json')),
        $fetch('/data/rss.json').catch(() => [])
      ])
      
      if (Array.isArray(articlesResp)) {
        articles.value = articlesResp.reduce((prev, curr) => {
          return [...prev, ...curr.items.map(item => ({ ...item, rssTitle: curr.title }))]
        }, []).sort((a, b) => a.date < b.date ? 1 : -1)
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
    if (currentTab.value !== '全部') {
      list = list.filter(a => {
        const tags = a.tags || []
        const mappedCat = Object.keys(CATEGORY_MAP).find(k => CATEGORY_MAP[k] === currentTab.value)
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