import { ref, computed } from 'vue'

export const useArticles = () => {
  const articles = ref([])
  const rssData = ref([])
  const loading = ref(true)
  const currentTab = ref('全部')
  const searchValue = ref('')

  // 智能分类规则
  const SMART_CATEGORIES = [
    { name: '人工智能', keywords: ['AI', 'GPT', 'LLM', '模型', 'RAG', 'Agent', 'Claude', 'Gemini', 'Transformer', 'Neural'] },
    { name: '软件工程', keywords: ['Code', 'Dev', '架构', 'Frontend', 'Backend', 'Rust', 'Go', 'Vue', 'React', 'Nuxt', 'API'] },
    { name: '产品与设计', keywords: ['Product', 'Design', 'User', 'Growth', 'UX', 'UI', '设计', '用户', '增长'] },
    { name: '商业科技', keywords: ['Business', 'Tech', 'Startup', 'VC', 'IPO', '商业', '融资', '公司'] }
  ]

  // 动态生成侧边栏菜单
  const categories = computed(() => {
    const cats = SMART_CATEGORIES.map(c => ({
      name: c.name,
      count: articles.value.filter(a => testCategory(a, c.keywords)).length
    })).filter(c => c.count > 0) // 只显示有文章的分类

    return [
      { name: '全部', count: articles.value.length },
      ...cats
    ]
  })

  // 辅助函数：测试文章是否属于某分类
  const testCategory = (article, keywords) => {
    const text = (article.title + ' ' + (article.summary || '')).toLowerCase()
    return keywords.some(k => text.includes(k.toLowerCase()))
  }

  const loadData = async () => {
    loading.value = true
    try {
      let data;
      try {
        data = await $fetch('/api/articles')
      } catch (e) {
        data = await $fetch('/data/links.json')
      }
      
      // 展平数据结构
      articles.value = data.reduce((prev, curr) => {
        return [...prev, ...curr.items.map(item => ({ 
          ...item, 
          rssTitle: curr.title // 保留源标题作为元数据，但不作为主分类
        }))]
      }, []).sort((a, b) => a.date < b.date ? 1 : -1)
      
      // 提取源数据供 SourceGrid 使用
      rssData.value = data.map(d => ({
        title: d.title,
        rss: d.rss
      }))
      
    } catch (e) {
      console.error('Failed to load articles', e)
    } finally {
      loading.value = false
    }
  }

  const filteredArticles = computed(() => {
    let list = articles.value

    // 1. 分类过滤
    if (currentTab.value !== '全部') {
      const category = SMART_CATEGORIES.find(c => c.name === currentTab.value)
      if (category) {
        list = list.filter(a => testCategory(a, category.keywords))
      } else {
        // 兜底：如果是旧的源名称
        list = list.filter(a => a.rssTitle === currentTab.value)
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