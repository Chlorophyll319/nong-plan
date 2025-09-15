<template>
  <div class="space-y-6">
    <div class="alert alert-info">
      <PhInfo class="w-6 h-6" />
      <span>Axios v1.12.2 - 基於 Promise 的 HTTP 客戶端</span>
    </div>

    <!-- Installation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📦 安裝與設定</h3>
      <div class="mockup-code">
        <pre><code># 安裝
npm install axios

# 基本導入
import axios from 'axios'

# 建立實例
const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})</code></pre>
      </div>
    </div>

    <!-- Basic Requests -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🌐 基本請求</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="card bg-base-200">
          <div class="card-body">
            <h4 class="card-title">GET 請求</h4>
            <button @click="fetchUsers" class="btn btn-primary" :class="{ loading: loading.users }">
              <PhDownload v-if="!loading.users" class="w-4 h-4 mr-2" />
              取得用戶列表
            </button>
            <div v-if="users.length" class="mt-4">
              <div class="text-sm text-base-content/70 mb-2">找到 {{ users.length }} 個用戶:</div>
              <div class="space-y-1 max-h-32 overflow-y-auto">
                <div
                  v-for="user in users.slice(0, 5)"
                  :key="user.id"
                  class="flex items-center gap-2 text-sm"
                >
                  <div class="avatar placeholder">
                    <div class="bg-neutral text-neutral-content rounded-full w-6">
                      <span class="text-xs">{{ user.name[0] }}</span>
                    </div>
                  </div>
                  {{ user.name }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card bg-base-200">
          <div class="card-body">
            <h4 class="card-title">POST 請求</h4>
            <div class="form-control">
              <input
                v-model="newPost.title"
                type="text"
                placeholder="文章標題"
                class="input input-bordered input-sm mb-2"
              />
              <textarea
                v-model="newPost.body"
                placeholder="文章內容"
                class="textarea textarea-bordered textarea-sm mb-2"
              ></textarea>
            </div>
            <button @click="createPost" class="btn btn-success" :class="{ loading: loading.post }">
              <PhPlus v-if="!loading.post" class="w-4 h-4 mr-2" />
              建立文章
            </button>
            <div v-if="createdPost" class="alert alert-success mt-2">
              <PhCheck class="w-4 h-4" />
              <span>文章建立成功! ID: {{ createdPost.id }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Request Configuration -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">⚙️ 請求配置</h3>
      <div class="space-y-4">
        <div class="form-control">
          <label class="label">
            <span class="label-text">API 基礎 URL</span>
          </label>
          <input v-model="apiConfig.baseURL" type="text" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">超時時間 (毫秒)</span>
          </label>
          <input v-model.number="apiConfig.timeout" type="number" class="input input-bordered" />
        </div>
        <button @click="testConfig" class="btn btn-outline">
          <PhGear class="w-4 h-4 mr-2" />
          測試配置
        </button>
      </div>
      <div class="mockup-code">
        <pre><code>const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  }
})</code></pre>
      </div>
    </div>

    <!-- Interceptors -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🔄 攔截器</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="card bg-base-200">
          <div class="card-body">
            <h4 class="card-title text-lg">請求攔截器</h4>
            <div class="text-sm text-base-content/70 mb-2">自動添加認證 token</div>
            <div class="form-control">
              <input
                v-model="authToken"
                type="text"
                placeholder="輸入 Token"
                class="input input-bordered input-sm"
              />
            </div>
            <button
              @click="toggleRequestInterceptor"
              class="btn btn-sm mt-2"
              :class="requestInterceptorEnabled ? 'btn-error' : 'btn-success'"
            >
              {{ requestInterceptorEnabled ? '停用' : '啟用' }} 請求攔截器
            </button>
          </div>
        </div>

        <div class="card bg-base-200">
          <div class="card-body">
            <h4 class="card-title text-lg">響應攔截器</h4>
            <div class="text-sm text-base-content/70 mb-2">自動處理錯誤</div>
            <div class="space-y-1">
              <div class="text-xs">✅ 自動重試失敗請求</div>
              <div class="text-xs">✅ 統一錯誤處理</div>
              <div class="text-xs">✅ 響應數據轉換</div>
            </div>
            <button
              @click="toggleResponseInterceptor"
              class="btn btn-sm mt-2"
              :class="responseInterceptorEnabled ? 'btn-error' : 'btn-success'"
            >
              {{ responseInterceptorEnabled ? '停用' : '啟用' }} 響應攔截器
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Error Handling -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">❌ 錯誤處理</h3>
      <div class="space-y-2">
        <button @click="testError(404)" class="btn btn-error btn-sm">測試 404 錯誤</button>
        <button @click="testError(500)" class="btn btn-error btn-sm">測試 500 錯誤</button>
        <button @click="testTimeout" class="btn btn-warning btn-sm">測試超時</button>
        <button @click="testNetworkError" class="btn btn-neutral btn-sm">測試網路錯誤</button>
      </div>
      <div v-if="lastError" class="alert alert-error">
        <PhWarning class="w-6 h-6" />
        <div>
          <div class="font-bold">{{ lastError.type }}</div>
          <div class="text-sm">{{ lastError.message }}</div>
        </div>
      </div>
    </div>

    <!-- Request History -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📜 請求歷史</h3>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th>時間</th>
              <th>方法</th>
              <th>URL</th>
              <th>狀態</th>
              <th>耗時</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in requestHistory.slice(-10)" :key="request.id">
              <td class="text-xs">{{ formatTime(request.timestamp) }}</td>
              <td>
                <div class="badge badge-sm" :class="getMethodClass(request.method)">
                  {{ request.method }}
                </div>
              </td>
              <td class="text-xs">{{ request.url }}</td>
              <td>
                <div class="badge badge-sm" :class="getStatusClass(request.status)">
                  {{ request.status }}
                </div>
              </td>
              <td class="text-xs">{{ request.duration }}ms</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Code Examples -->
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">查看完整程式碼範例</div>
      <div class="collapse-content">
        <div class="mockup-code">
          <pre><code>// api.js - API 實例設定
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 請求攔截器
api.interceptors.request.use(
  (config) => {
    // 添加認證 token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    // 請求日誌
    console.log('發送請求:', config.method?.toUpperCase(), config.url)

    return config
  },
  (error) => Promise.reject(error)
)

// 響應攔截器
api.interceptors.response.use(
  (response) => {
    // 響應日誌
    console.log('收到響應:', response.status, response.config.url)
    return response
  },
  async (error) => {
    // 統一錯誤處理
    if (error.response?.status === 401) {
      // 未授權，重定向到登錄頁
      localStorage.removeItem('token')
      window.location.href = '/login'
    }

    // 自動重試
    if (error.config && !error.config.__isRetryRequest) {
      error.config.__isRetryRequest = true
      return api.request(error.config)
    }

    return Promise.reject(error)
  }
)

// 使用範例
const { data } = await api.get('/users')
const newUser = await api.post('/users', { name: 'John' })
const updatedUser = await api.put('/users/1', { name: 'Jane' })
await api.delete('/users/1')</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'
import { PhInfo, PhDownload, PhPlus, PhCheck, PhGear, PhWarning } from '@phosphor-icons/vue'

// State
const users = ref([])
const newPost = reactive({ title: '', body: '' })
const createdPost = ref(null)
const loading = reactive({ users: false, post: false })
const lastError = ref(null)
const requestHistory = ref([])

// Config
const apiConfig = reactive({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
})

const authToken = ref('your-auth-token-here')
const requestInterceptorEnabled = ref(false)
const responseInterceptorEnabled = ref(false)

// Create axios instance
const api = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: apiConfig.timeout,
})

// Request interceptor
let requestInterceptor = null
let responseInterceptor = null

const addRequestToHistory = (config = {}, status, duration) => {
  requestHistory.value.push({
    id: Date.now(),
    timestamp: new Date(),
    method: config.method?.toUpperCase?.() || 'N/A',
    url: config.url || 'N/A',
    status: status,
    duration: duration,
  })
}

const fetchUsers = async () => {
  loading.users = true
  lastError.value = null
  const startTime = Date.now()

  try {
    const response = await api.get('/users')
    users.value = response.data
    addRequestToHistory(response.config, response.status, Date.now() - startTime)
  } catch (error) {
    handleError(error, 'GET Users Failed')
    addRequestToHistory(error.config, error.response?.status || 0, Date.now() - startTime)
  } finally {
    loading.users = false
  }
}

const createPost = async () => {
  if (!newPost.title || !newPost.body) return

  loading.post = true
  lastError.value = null
  const startTime = Date.now()

  try {
    const response = await api.post('/posts', {
      title: newPost.title,
      body: newPost.body,
      userId: 1,
    })
    createdPost.value = response.data
    newPost.title = ''
    newPost.body = ''
    addRequestToHistory(response.config, response.status, Date.now() - startTime)
  } catch (error) {
    handleError(error, 'Create Post Failed')
    addRequestToHistory(error.config, error.response?.status || 0, Date.now() - startTime)
  } finally {
    loading.post = false
  }
}

const testConfig = async () => {
  try {
    // Update axios instance config
    api.defaults.baseURL = apiConfig.baseURL
    api.defaults.timeout = apiConfig.timeout

    const response = await api.get('/posts/1')
    alert('配置測試成功!')
  } catch (error) {
    handleError(error, 'Config Test Failed')
  }
}

const toggleRequestInterceptor = () => {
  if (requestInterceptorEnabled.value) {
    if (requestInterceptor) {
      api.interceptors.request.eject(requestInterceptor)
      requestInterceptor = null
    }
    requestInterceptorEnabled.value = false
  } else {
    requestInterceptor = api.interceptors.request.use(
      (config) => {
        if (authToken.value) {
          config.headers.Authorization = `Bearer ${authToken.value}`
        }
        console.log('Request interceptor:', config.method?.toUpperCase(), config.url)
        return config
      },
      (error) => Promise.reject(error),
    )
    requestInterceptorEnabled.value = true
  }
}

const toggleResponseInterceptor = () => {
  if (responseInterceptorEnabled.value) {
    if (responseInterceptor) {
      api.interceptors.response.eject(responseInterceptor)
      responseInterceptor = null
    }
    responseInterceptorEnabled.value = false
  } else {
    responseInterceptor = api.interceptors.response.use(
      (response) => {
        console.log('Response interceptor:', response.status, response.config.url)
        return response
      },
      (error) => {
        console.log('Response error interceptor:', error.message)
        return Promise.reject(error)
      },
    )
    responseInterceptorEnabled.value = true
  }
}

const testError = async (statusCode) => {
  const startTime = Date.now()
  try {
    await api.get(`/posts/${statusCode === 404 ? 999999 : 1}`, {
      transformResponse: [
        function (data) {
          if (statusCode === 500) {
            throw new Error('Simulated 500 error')
          }
          return data
        },
      ],
    })
  } catch (error) {
    handleError(error, `Test ${statusCode} Error`)
    addRequestToHistory(error.config, statusCode, Date.now() - startTime)
  }
}

const testTimeout = async () => {
  const startTime = Date.now()
  try {
    await api.get('/posts/1', { timeout: 1 })
  } catch (error) {
    handleError(error, 'Timeout Test')
    addRequestToHistory(error.config, 0, Date.now() - startTime)
  }
}

const testNetworkError = async () => {
  const startTime = Date.now()
  try {
    await axios.get('https://example.invalid')
  } catch (error) {
    handleError(error, 'Network Error Test')
    addRequestToHistory(error.config, 0, Date.now() - startTime)
  }
}

const handleError = (error, type) => {
  lastError.value = {
    type: type,
    message: error.response?.data?.message || error.message || 'Unknown error',
  }

  setTimeout(() => {
    lastError.value = null
  }, 5000)
}

const formatTime = (timestamp) => {
  return timestamp.toLocaleTimeString()
}

const getMethodClass = (method) => {
  const classes = {
    GET: 'badge-info',
    POST: 'badge-success',
    PUT: 'badge-warning',
    DELETE: 'badge-error',
  }
  return classes[method] || 'badge-neutral'
}

const getStatusClass = (status) => {
  if (status >= 200 && status < 300) return 'badge-success'
  if (status >= 400 && status < 500) return 'badge-warning'
  if (status >= 500) return 'badge-error'
  return 'badge-neutral'
}
</script>
