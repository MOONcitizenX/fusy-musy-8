import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useJokeStore = defineStore('counter', () => {
  const minLength = 3
  const pageSize = 8
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

  const searchInput = ref('')

  const noData = ref(false)

  const jokes = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  const loadedJokesCount = ref(0)

  const totalJokesCount = computed(() => jokes.value.length)

  const loadedJokes = computed(() => {
    return jokes.value.slice(0, loadedJokesCount.value)
  })

  const canLoadMore = computed(() => {
    return jokes.value.length > loadedJokes.value.length
  })

  const loadMore = () => {
    if (loadedJokesCount.value >= pageSize) {
      loadedJokesCount.value += pageSize + 1
    }
  }

  const resetState = () => {
    error.value = null
    isLoading.value = true
    error.value = null
    loadedJokesCount.value = 0
    noData.value = false
  }

  const getJokes = async () => {
    if (searchInput.value.length <= minLength) {
      error.value = `search.query: size must be between 3 and 120`
      jokes.value = []

      return
    }
    resetState()
    try {
      const res = await fetch(`${apiBaseUrl}jokes/search?query=${searchInput.value}`)

      const data = await res.json()

      jokes.value = data?.result

      if (!data?.result?.length) {
        noData.value = true
      }

      if (data?.result.length > pageSize) {
        loadedJokesCount.value = pageSize
      } else {
        loadedJokesCount.value = data?.result?.length + 1
      }
    } catch (error) {
      console.log(error)
      error.value = error.message
    } finally {
      isLoading.value = false
    }
  }

  return {
    searchInput,
    jokes,
    loadedJokes,
    isLoading,
    error,
    totalJokesCount,
    getJokes,
    loadMore,
    canLoadMore,
    noData
  }
})
