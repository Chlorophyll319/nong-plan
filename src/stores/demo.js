import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useDemoStore = defineStore(
  'demo',
  () => {
    // State
    const count = ref(0)
    const todos = ref([
      { id: 1, text: '學習 Vue 3', completed: false },
      { id: 2, text: '使用 Pinia', completed: false },
      { id: 3, text: '建立示範專案', completed: true },
    ])
    const user = ref(null)
    const settings = ref({
      theme: 'light',
      notifications: true,
      language: 'zh-TW',
    })

    // Getters
    const doubleCount = computed(() => count.value * 2)
    const completedTodos = computed(() => todos.value.filter((todo) => todo.completed))
    const pendingTodos = computed(() => todos.value.filter((todo) => !todo.completed))
    const isLoggedIn = computed(() => !!user.value)

    // Actions
    function increment() {
      count.value++
    }

    function decrement() {
      count.value--
    }

    function reset() {
      count.value = 0
    }

    function addTodo(text) {
      const id = Math.max(...todos.value.map((t) => t.id), 0) + 1
      todos.value.push({
        id,
        text,
        completed: false,
      })
    }

    function toggleTodo(id) {
      const todo = todos.value.find((t) => t.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    }

    function removeTodo(id) {
      const index = todos.value.findIndex((t) => t.id === id)
      if (index > -1) {
        todos.value.splice(index, 1)
      }
    }

    function login(userData) {
      user.value = userData
    }

    function logout() {
      user.value = null
    }

    function updateSettings(newSettings) {
      Object.assign(settings.value, newSettings)
    }

    return {
      // State
      count,
      todos,
      user,
      settings,
      // Getters
      doubleCount,
      completedTodos,
      pendingTodos,
      isLoggedIn,
      // Actions
      increment,
      decrement,
      reset,
      addTodo,
      toggleTodo,
      removeTodo,
      login,
      logout,
      updateSettings,
    }
  },
  {
    persist: true, // 啟用持久化
  },
)
