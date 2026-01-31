import { ref, computed, onMounted } from 'vue'

// Reading state interface
interface ReadingState {
  progress: number  // 0-100
  read: boolean
  lastReadAt: string
}

// Global state (shared across components)
const readingStates = ref<Record<string, ReadingState>>({})
let isInitialized = false

export const useReadingProgress = () => {
  // Initialize from localStorage
  onMounted(() => {
    if (isInitialized) return

    if (process.client) {
      const saved = localStorage.getItem('reading-progress')
      if (saved) {
        try {
          readingStates.value = JSON.parse(saved)
        } catch (e) {
          console.warn('Failed to parse reading progress:', e)
          readingStates.value = {}
        }
      }
      isInitialized = true
    }
  })

  // Get reading state for an article
  const getReadingState = (articleUrl: string): ReadingState | null => {
    return readingStates.value[articleUrl] || null
  }

  // Check if article is read
  const isRead = (articleUrl: string): boolean => {
    return readingStates.value[articleUrl]?.read || false
  }

  // Get reading progress percentage
  const getProgress = (articleUrl: string): number => {
    return readingStates.value[articleUrl]?.progress || 0
  }

  // Update reading progress
  const updateProgress = (articleUrl: string, progress: number) => {
    if (!articleUrl) return

    const isComplete = progress > 90

    readingStates.value[articleUrl] = {
      progress: Math.min(100, Math.round(progress)),
      read: isComplete,
      lastReadAt: new Date().toISOString()
    }

    // Persist to localStorage
    if (process.client) {
      localStorage.setItem('reading-progress', JSON.stringify(readingStates.value))
    }
  }

  // Mark article as read
  const markAsRead = (articleUrl: string) => {
    if (!articleUrl) return

    readingStates.value[articleUrl] = {
      progress: 100,
      read: true,
      lastReadAt: new Date().toISOString()
    }

    if (process.client) {
      localStorage.setItem('reading-progress', JSON.stringify(readingStates.value))
    }
  }

  // Mark article as unread
  const markAsUnread = (articleUrl: string) => {
    if (!articleUrl) return

    delete readingStates.value[articleUrl]

    if (process.client) {
      localStorage.setItem('reading-progress', JSON.stringify(readingStates.value))
    }
  }

  // Get all read articles count
  const readCount = computed(() => {
    return Object.values(readingStates.value).filter(s => s.read).length
  })

  // Get recently read articles (sorted by lastReadAt)
  const recentlyRead = computed(() => {
    return Object.entries(readingStates.value)
      .filter(([_, state]) => state.read)
      .sort((a, b) => new Date(b[1].lastReadAt).getTime() - new Date(a[1].lastReadAt).getTime())
      .slice(0, 20)
      .map(([url, state]) => ({ url, ...state }))
  })

  // Clear all reading progress
  const clearAll = () => {
    readingStates.value = {}
    if (process.client) {
      localStorage.removeItem('reading-progress')
    }
  }

  return {
    readingStates,
    getReadingState,
    isRead,
    getProgress,
    updateProgress,
    markAsRead,
    markAsUnread,
    readCount,
    recentlyRead,
    clearAll
  }
}
