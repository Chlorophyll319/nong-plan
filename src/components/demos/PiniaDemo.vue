<template>
  <div class="space-y-6">
    <div class="alert alert-info">
      <PhInfo class="w-6 h-6" />
      <span>Pinia v3.0.3 - Vue 官方推薦的狀態管理庫</span>
    </div>

    <!-- Installation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📦 安裝與設定</h3>
      <div class="mockup-code">
        <pre><code># 安裝
npm install pinia
npm install pinia-plugin-persistedstate

# main.js 設定
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)</code></pre>
      </div>
    </div>

    <!-- Counter Example -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🔢 計數器示範</h3>
      <div class="card bg-base-200">
        <div class="card-body text-center">
          <div class="stat">
            <div class="stat-title">當前計數</div>
            <div class="stat-value">{{ demoStore.count }}</div>
            <div class="stat-desc">雙倍數值: {{ demoStore.doubleCount }}</div>
          </div>
          <div class="card-actions justify-center">
            <button @click="demoStore.decrement()" class="btn btn-error">-</button>
            <button @click="demoStore.reset()" class="btn btn-ghost">重置</button>
            <button @click="demoStore.increment()" class="btn btn-success">+</button>
          </div>
        </div>
      </div>
      <div class="mockup-code">
        <pre><code>// stores/demo.js
export const useDemoStore = defineStore('demo', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  function increment() { count.value++ }
  function decrement() { count.value-- }

  return { count, doubleCount, increment, decrement }
})

// 在組件中使用
const demoStore = useDemoStore()</code></pre>
      </div>
    </div>

    <!-- Todo List Example -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📝 Todo 列表示範</h3>
      <div class="card bg-base-200">
        <div class="card-body">
          <div class="flex gap-2 mb-4">
            <input
              v-model="newTodoText"
              @keyup.enter="addTodo"
              type="text"
              placeholder="新增待辦事項..."
              class="input input-bordered flex-1"
            />
            <button @click="addTodo" class="btn btn-primary">
              <PhPlus class="w-4 h-4" />
            </button>
          </div>

          <div class="stats mb-4">
            <div class="stat">
              <div class="stat-title">總計</div>
              <div class="stat-value text-sm">{{ demoStore.todos.length }}</div>
            </div>
            <div class="stat">
              <div class="stat-title">已完成</div>
              <div class="stat-value text-sm">{{ demoStore.completedTodos.length }}</div>
            </div>
            <div class="stat">
              <div class="stat-title">待完成</div>
              <div class="stat-value text-sm">{{ demoStore.pendingTodos.length }}</div>
            </div>
          </div>

          <div class="space-y-2">
            <div
              v-for="todo in demoStore.todos"
              :key="todo.id"
              class="flex items-center gap-3 p-2 bg-base-100 rounded"
            >
              <input
                :checked="todo.completed"
                @change="demoStore.toggleTodo(todo.id)"
                type="checkbox"
                class="checkbox checkbox-primary"
              />
              <span :class="{ 'line-through text-base-content/50': todo.completed }" class="flex-1">
                {{ todo.text }}
              </span>
              <button
                @click="demoStore.removeTodo(todo.id)"
                class="btn btn-ghost btn-sm text-error"
              >
                <PhTrash class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- User State Example -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">👤 用戶狀態管理</h3>
      <div class="card bg-base-200">
        <div class="card-body">
          <div v-if="!demoStore.isLoggedIn" class="space-y-4">
            <div class="text-center text-base-content/70">未登入狀態</div>
            <div class="form-control">
              <input
                v-model="loginForm.name"
                type="text"
                placeholder="用戶名稱"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <input
                v-model="loginForm.email"
                type="email"
                placeholder="電子郵件"
                class="input input-bordered"
              />
            </div>
            <button @click="login" class="btn btn-primary w-full">
              <PhSignIn class="w-4 h-4 mr-2" />
              登入
            </button>
          </div>

          <div v-else class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="avatar placeholder">
                <div class="bg-primary text-primary-content rounded-full w-12">
                  <span>{{ demoStore.user.name[0] }}</span>
                </div>
              </div>
              <div>
                <div class="font-bold">{{ demoStore.user.name }}</div>
                <div class="text-sm text-base-content/70">{{ demoStore.user.email }}</div>
              </div>
            </div>
            <button @click="demoStore.logout()" class="btn btn-outline w-full">
              <PhSignOut class="w-4 h-4 mr-2" />
              登出
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Settings Example -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">⚙️ 設定管理</h3>
      <div class="card bg-base-200">
        <div class="card-body space-y-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">主題</span>
            </label>
            <select
              :value="demoStore.settings.theme"
              @change="updateSetting('theme', $event.target.value)"
              class="select select-bordered"
            >
              <option value="light">淺色</option>
              <option value="dark">深色</option>
              <option value="cupcake">杯子蛋糕</option>
            </select>
          </div>

          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">啟用通知</span>
              <input
                :checked="demoStore.settings.notifications"
                @change="updateSetting('notifications', $event.target.checked)"
                type="checkbox"
                class="toggle toggle-primary"
              />
            </label>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">語言</span>
            </label>
            <select
              :value="demoStore.settings.language"
              @change="updateSetting('language', $event.target.value)"
              class="select select-bordered"
            >
              <option value="zh-TW">繁體中文</option>
              <option value="zh-CN">简体中文</option>
              <option value="en">English</option>
            </select>
          </div>

          <div class="alert alert-info">
            <PhInfo class="w-6 h-6" />
            <span>設定已自動保存 (持久化)</span>
          </div>
        </div>
      </div>
    </div>

    <!-- DevTools -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🛠️ DevTools 支援</h3>
      <div class="alert alert-success">
        <PhCheck class="w-6 h-6" />
        <div>
          <div class="font-bold">Vue DevTools 整合</div>
          <div class="text-sm">打開瀏覽器 DevTools → Vue 頁籤 → Pinia 可查看完整狀態樹</div>
        </div>
      </div>
    </div>

    <!-- Code Examples -->
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">查看完整 Store 定義</div>
      <div class="collapse-content">
        <div class="mockup-code">
          <pre><code>// stores/demo.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useDemoStore = defineStore('demo', () => {
  // State (使用 ref)
  const count = ref(0)
  const todos = ref([])
  const user = ref(null)
  const settings = ref({
    theme: 'light',
    notifications: true,
    language: 'zh-TW'
  })

  // Getters (使用 computed)
  const doubleCount = computed(() => count.value * 2)
  const completedTodos = computed(() =>
    todos.value.filter(todo => todo.completed)
  )
  const isLoggedIn = computed(() => !!user.value)

  // Actions (普通函數)
  function increment() {
    count.value++
  }

  function addTodo(text) {
    todos.value.push({
      id: Date.now(),
      text,
      completed: false
    })
  }

  function login(userData) {
    user.value = userData
  }

  function updateSettings(newSettings) {
    settings.value = { ...settings.value, ...newSettings }
    // 如果是主題設定，直接應用到 DOM
    if (newSettings.theme) {
      document.documentElement.setAttribute('data-theme', newSettings.theme)
    }
  }

  return {
    // 記得要返回所有要暴露的 state、getters、actions
    count,
    todos,
    user,
    settings,
    doubleCount,
    completedTodos,
    isLoggedIn,
    increment,
    addTodo,
    login,
    updateSettings
  }
}, {
  persist: true // 啟用持久化
})

// 在組件中使用
&lt;script setup&gt;
import { useDemoStore } from '@/stores/demo'

const demoStore = useDemoStore()

// 直接使用
console.log(demoStore.count)
demoStore.increment()
&lt;/script&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useDemoStore } from '../../stores/demo'
import { PhInfo, PhPlus, PhTrash, PhSignIn, PhSignOut, PhCheck } from '@phosphor-icons/vue'

const demoStore = useDemoStore()

const newTodoText = ref('')
const loginForm = reactive({
  name: '',
  email: '',
})

const addTodo = () => {
  if (newTodoText.value.trim()) {
    demoStore.addTodo(newTodoText.value.trim())
    newTodoText.value = ''
  }
}

const login = () => {
  if (loginForm.name && loginForm.email) {
    demoStore.login({
      name: loginForm.name,
      email: loginForm.email,
    })
    loginForm.name = ''
    loginForm.email = ''
  }
}

const updateSetting = (key, value) => {
  demoStore.updateSettings({
    [key]: value,
  })
}

// 初始化時應用保存的主題
onMounted(() => {
  if (demoStore.settings.theme) {
    document.documentElement.setAttribute('data-theme', demoStore.settings.theme)
  }
})
</script>
