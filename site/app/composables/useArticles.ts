import { ref, computed } from 'vue'

export const useArticles = () => {
  const articles = ref([])
  const rssData = ref([])
  const tagsData = ref([])
  const loading = ref(true)
  const currentTab = ref('全部')
  const searchValue = ref('')
  const matchSkill = ref(false)

  const loadData = async () => {
    loading.value = true
    try {
      // 直接请求 public 目录下的静态 JSON
      const data = await $fetch('/data/links.json')
      articles.value = data.reduce((prev, curr) => {
        return [...prev, ...curr.items.map(item => ({ ...item, rssTitle: curr.title }))]
      }, []).sort((a, b) => a.date < b.date ? 1 : -1)
      
      // Extract RSS categories
      rssData.value = data.map(d => ({ title: d.title }))
    } catch (e) {
      console.error('Failed to load articles', e)
    } finally {
      loading.value = false
    }
  }

  const filteredArticles = computed(() => {
    let list = articles.value

    if (currentTab.value !== '全部') {
      list = list.filter(a => a.rssTitle === currentTab.value)
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
    // Scroll to top when changing tabs
    if (process.client) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return {
    articles,
    rssData,
    loading,
    currentTab,
    searchValue,
    matchSkill,
    loadData,
    filteredArticles,
    selectTab
  }
}
