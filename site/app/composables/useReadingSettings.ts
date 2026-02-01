import { ref, watch, onMounted } from 'vue'

// 关键修复：将状态定义在函数外部，实现全局共享
const fontSize = ref(18)
const theme = ref('white') // white, sepia, parchment, night

let isInitialized = false

export const useReadingSettings = () => {
  
  // 仅在挂载时初始化一次
  onMounted(() => {
    if (isInitialized) return
    
    if (process.client) {
      const savedSize = localStorage.getItem('reading-font-size')
      const savedTheme = localStorage.getItem('reading-theme')
      if (savedSize) fontSize.value = parseInt(savedSize)
      if (savedTheme) theme.value = savedTheme
      isInitialized = true
    }
  })

  // 监听并保存（共享逻辑）
  if (process.client) {
    watch(fontSize, (newSize) => {
      localStorage.setItem('reading-font-size', newSize.toString())
    })

    watch(theme, (newTheme) => {
      localStorage.setItem('reading-theme', newTheme)
    })
  }

  const increaseFont = () => { if (fontSize.value < 24) fontSize.value += 1 }
  const decreaseFont = () => { if (fontSize.value > 14) fontSize.value -= 1 }
  const resetFont = () => { fontSize.value = 18 }

  return {
    fontSize,
    theme,
    increaseFont,
    decreaseFont,
    resetFont
  }
}