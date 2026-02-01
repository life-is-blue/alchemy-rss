import { ref, computed } from 'vue'

// Content Types
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

// Category Labels (Source Categories from rss.json)
export const CATEGORY_LABELS: Record<string, string> = {
  'Artificial_Intelligence': '人工智能',
  'Programming_Technology': '编程开发',
  'Business_Tech': '商业科技',
  'Product_Development': '产品设计',
  'other': '其他'
}

// Icons
export const CONTENT_TYPE_ICONS: Record<string, string> = {
  ARTICLE: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>`,
  VIDEO: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>`,
  PODCAST: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
  TWITTER: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
  rss: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>`
}

// Shared Singleton State
const articles = ref<any[]>([])
const rssData = ref<any[]>([])
const loading = ref(true)
const currentTab = ref('全部')
const currentCategory = ref('全部')
const currentView = ref('reader')
const selectedUrl = ref('')
const searchValue = ref('')
const favorites = ref<Record<string, any>>({})
const currentPage = ref(1)
const pageSize = 40

export const useArticles = () => {
  // Load Favorites from LocalStorage
  const loadFavorites = () => {
    if (process.client) {
      const stored = localStorage.getItem('article-favorites')
      if (stored) favorites.value = JSON.parse(stored)
    }
  }

  const toggleFavorite = (article: any) => {
    if (!article.link) return
    const newFavorites = { ...favorites.value }
    if (newFavorites[article.link]) {
      delete newFavorites[article.link]
    } else {
      newFavorites[article.link] = { 
        title: article.title, 
        rssTitle: article.rssTitle,
        date: article.date,
        savedAt: new Date().toISOString() 
      }
    }
    favorites.value = newFavorites
    if (process.client) {
      localStorage.setItem('article-favorites', JSON.stringify(favorites.value))
    }
  }

  const isFavorited = (link: string) => !!favorites.value[link]

  // Load Data & Enrich
  const loadData = async () => {
    if (articles.value.length > 0) return // Singleton pattern
    loading.value = true
    loadFavorites()
    try {
      const [articlesResp, rssResp] = await Promise.all([
        $fetch('/api/articles').catch(() => $fetch('/data/links.json')),
        $fetch('/data/rss.json').catch(() => [])
      ])

      rssData.value = Array.isArray(rssResp) ? rssResp : []
      const sourceMap = new Map(rssData.value.map(s => [s.title, s]))

      if (Array.isArray(articlesResp)) {
        const now = new Date().getTime()
        articles.value = articlesResp.flatMap(curr => {
          let config = sourceMap.get(curr.title)
          if (!config) {
             const normalized = curr.title.replace(/\s*\([^)]*\)/, '').trim()
             config = rssData.value.find(s => s.title.includes(normalized))
          }

          return curr.items.map(item => {
            const publishDate = new Date(item.date).getTime()
            return {
              ...item,
              rssTitle: curr.title,
              contentType: config?.type || 'ARTICLE',
              sourceCategory: config?.category || 'other',
              qualified: config?.qualifiedFilter === 'true',
              isNew: (now - publishDate) < 24 * 60 * 60 * 1000 // Last 24h
            }
          })
        }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      }
    } catch (e) {
      console.error('Failed to load data', e)
    } finally {
      loading.value = false
    }
  }

  // Filter Logic
  const filteredArticles = computed(() => {
    let list = articles.value

    // 0. Favorites View
    if (currentView.value === 'favorites') {
      return list.filter(a => !!favorites.value[a.link])
    }

    // 1. Content Type Filter
    if (currentTab.value !== '全部') {
       const typeEntry = Object.entries(CONTENT_TYPE_LABELS).find(([_, label]) => label === currentTab.value)
       const targetType = typeEntry ? typeEntry[0] : currentTab.value
       if (targetType && targetType !== '全部') list = list.filter(a => a.contentType === targetType)
    }

    // 2. Category OR Source Title Filter
    if (currentCategory.value !== '全部') {
      list = list.filter(a => a.sourceCategory === currentCategory.value || a.rssTitle === currentCategory.value)
    }

    // 3. Search
    if (searchValue.value) {
      const search = searchValue.value.toLowerCase()
      list = list.filter(a => 
        a.title.toLowerCase().includes(search) || 
        (a.summary && a.summary.toLowerCase().includes(search))
      )
    }

    return list
  })

  // Taxonomy Tree
  const categoryGroups = computed(() => {
    const groups: Record<string, number> = {}
    articles.value.forEach(article => {
      const cat = article.sourceCategory
      if (cat && CATEGORY_LABELS[cat]) {
        groups[cat] = (groups[cat] || 0) + 1
      }
    })
    return Object.entries(groups)
      .map(([key, count]) => ({ key, label: CATEGORY_LABELS[key] || key, count }))
      .sort((a, b) => b.count - a.count)
  })

  const sourceFeeds = computed(() => {
    const counts: Record<string, number> = {}
    articles.value.forEach(a => {
      if (a.rssTitle) counts[a.rssTitle] = (counts[a.rssTitle] || 0) + 1
    })
    return rssData.value.map(s => ({
      title: s.title,
      type: s.type,
      count: counts[s.title] || 0
    })).filter(s => s.count > 0)
  })

  const displayedArticles = computed(() => filteredArticles.value.slice(0, currentPage.value * pageSize))
  const hasMore = computed(() => displayedArticles.value.length < filteredArticles.value.length)
  const loadMore = () => { if (hasMore.value) currentPage.value++ }

  const scrollToTop = () => {
    if (process.client) {
      document.querySelector('.overflow-y-auto')?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const selectTab = (type: string) => {
    currentTab.value = type
    currentCategory.value = '全部' // Reset category when changing format
    currentPage.value = 1
    currentView.value = 'reader'
    selectedUrl.value = ''
    scrollToTop()
  }

  const selectCategory = (id: string) => {
    currentCategory.value = id
    currentTab.value = '全部' // Reset format when changing category
    currentPage.value = 1
    currentView.value = 'reader'
    selectedUrl.value = ''
    scrollToTop()
  }

  const handleNav = (id: string) => {
    currentView.value = id
    currentCategory.value = '全部'
    currentTab.value = '全部'
    selectedUrl.value = ''
    scrollToTop()
  }

  return {
    articles,
    rssData,
    loading,
    currentTab,
    currentCategory,
    currentView,
    selectedUrl,
    searchValue,
    categoryGroups,
    sourceFeeds,
    displayedArticles,
    filteredArticles,
    hasMore,
    loadData,
    loadMore,
    selectTab,
    selectCategory,
    handleNav,
    toggleFavorite,
    isFavorited
  }
}