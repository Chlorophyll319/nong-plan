<template>
  <div class="space-y-6">
    <div class="alert alert-info">
      <PhInfo class="w-6 h-6" />
      <span>VueUse v13.9.0 - Vue Composition API 實用工具庫</span>
    </div>

    <!-- Installation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📦 安裝與掛載</h3>
      <div class="mockup-code">
        <pre><code># 安裝
npm install @vueuse/core

# 在組件中導入
import { useLocalStorage, useMouse, useWindowSize } from '@vueuse/core'

# 自動導入 (推薦)
// vite.config.js 中配置 unplugin-auto-import</code></pre>
      </div>
    </div>

    <!-- Mouse Position -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🖱️ useMouse - 滑鼠位置追蹤</h3>
      <div class="card bg-base-200 p-6">
        <div class="text-center space-y-4">
          <div class="text-2xl font-mono">X: {{ x }} | Y: {{ y }}</div>
          <div
            class="relative h-32 bg-base-300 rounded-lg overflow-hidden"
            ref="mouseTrackingArea"
            @mousemove="onMouseMove"
            @mouseleave="onMouseLeave"
          >
            <div
              class="absolute w-4 h-4 bg-primary rounded-full transition-none"
              :style="{
                left: `${relativeX - 8}px`,
                top: `${relativeY - 8}px`,
                opacity: isInTrackingArea ? 1 : 0.3,
                transform: 'none',
              }"
            ></div>
            <div
              class="absolute inset-0 flex items-center justify-center text-base-content/50 pointer-events-none"
            >
              移動滑鼠到這裡
            </div>
          </div>
          <div class="text-sm text-base-content/70">
            相對位置: X: {{ Math.round(relativeX) }} | Y: {{ Math.round(relativeY) }}
            <span v-if="isInTrackingArea" class="text-primary">• 滑鼠在追蹤區域內</span>
          </div>
          <div class="text-xs text-base-content/50">全域滑鼠座標: ({{ x }}, {{ y }})</div>
        </div>
      </div>
      <div class="mockup-code">
        <pre><code>import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()</code></pre>
      </div>
    </div>

    <!-- Window Size -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📱 useWindowSize - 視窗尺寸</h3>
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">寬度</div>
          <div class="stat-value">{{ width }}px</div>
        </div>
        <div class="stat">
          <div class="stat-title">高度</div>
          <div class="stat-value">{{ height }}px</div>
        </div>
        <div class="stat">
          <div class="stat-title">比例</div>
          <div class="stat-value">{{ aspectRatio }}</div>
        </div>
      </div>
      <div class="mockup-code">
        <pre><code>import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
const aspectRatio = computed(() => (width.value / height.value).toFixed(2))</code></pre>
      </div>
    </div>

    <!-- Local Storage -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">💾 useLocalStorage - 本地存儲</h3>
      <div class="space-y-4">
        <div class="form-control">
          <label class="label">
            <span class="label-text">設定偏好主題</span>
          </label>
          <select v-model="theme" class="select select-bordered">
            <option value="light">淺色</option>
            <option value="dark">深色</option>
            <option value="cupcake">杯子蛋糕</option>
            <option value="cyberpunk">賽博朋克</option>
          </select>
        </div>
        <div class="alert">
          <PhInfo class="w-6 h-6" />
          <span>當前主題: {{ theme }} (已自動保存到 localStorage)</span>
        </div>
      </div>
      <div class="mockup-code">
        <pre><code>import { useLocalStorage } from '@vueuse/core'
import { watch } from 'vue'

// 自動同步到 localStorage
const theme = useLocalStorage('theme', 'light')

// 監聽主題變化並應用到 DOM
watch(theme, (newTheme) => {
  document.documentElement.setAttribute('data-theme', newTheme)
}, { immediate: true })</code></pre>
      </div>
    </div>

    <!-- Dark Mode -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🌙 useDark - 深色模式</h3>
      <div class="flex items-center gap-4">
        <button @click="toggleDark()" class="btn">
          <PhSun v-if="isDark" class="w-5 h-5" />
          <PhMoon v-else class="w-5 h-5" />
          {{ isDark ? '切換到淺色' : '切換到深色' }}
        </button>
        <div class="badge" :class="isDark ? 'badge-neutral' : 'badge-primary'">
          {{ isDark ? '深色模式' : '淺色模式' }}
        </div>
      </div>
      <div class="mockup-code">
        <pre><code>import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)</code></pre>
      </div>
    </div>

    <!-- Online Status -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🌐 useOnline - 網路狀態</h3>
      <div class="alert" :class="isOnline ? 'alert-success' : 'alert-error'">
        <PhWifiHigh v-if="isOnline" class="w-6 h-6" />
        <PhWifiX v-else class="w-6 h-6" />
        <span>{{ isOnline ? '已連接網路' : '網路已斷線' }}</span>
      </div>
      <div class="mockup-code">
        <pre><code>import { useOnline } from '@vueuse/core'

const isOnline = useOnline()</code></pre>
      </div>
    </div>

    <!-- Counter -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🔢 useCounter - 計數器</h3>
      <div class="flex items-center gap-4">
        <button @click="dec()" class="btn btn-error">-</button>
        <div class="stat">
          <div class="stat-value text-center">{{ count }}</div>
        </div>
        <button @click="inc()" class="btn btn-success">+</button>
        <button @click="reset()" class="btn btn-ghost">重置</button>
      </div>
      <div class="mockup-code">
        <pre><code>import { useCounter } from '@vueuse/core'

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 100 })</code></pre>
      </div>
    </div>

    <!-- Clipboard -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📋 useClipboard - 剪貼簿</h3>
      <div class="space-y-2">
        <div class="form-control">
          <input
            v-model="textToCopy"
            type="text"
            placeholder="輸入要複製的文字"
            class="input input-bordered"
          />
        </div>
        <div class="flex gap-2">
          <button @click="copy(textToCopy)" class="btn btn-primary">
            <PhCopy class="w-4 h-4" />
            複製
          </button>
          <div v-if="copied" class="alert alert-success flex-1">
            <PhCheck class="w-6 h-6" />
            <span>已複製到剪貼簿！</span>
          </div>
        </div>
        <div class="text-sm text-base-content/70">剪貼簿內容: {{ text || '(空)' }}</div>
      </div>
      <div class="mockup-code">
        <pre><code>import { useClipboard } from '@vueuse/core'

const { text, copy, copied } = useClipboard()</code></pre>
      </div>
    </div>

    <!-- More Examples -->
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">更多 VueUse 組合式函數</div>
      <div class="collapse-content">
        <div class="mockup-code">
          <pre><code>// 時間相關
import { useNow, useDateFormat } from '@vueuse/core'
const now = useNow()
const formatted = useDateFormat(now, 'YYYY-MM-DD HH:mm:ss')

// 元素相關
import { useElementSize, useElementVisible } from '@vueuse/core'
const { width, height } = useElementSize(el)
const isVisible = useElementVisible(el)

// 事件相關
import { useEventListener, useKeyModifier } from '@vueuse/core'
useEventListener('click', handler)
const ctrl = useKeyModifier('Control')

// 狀態相關
import { useToggle, useBoolean } from '@vueuse/core'
const [value, toggle] = useToggle()
const { value: bool, setTrue, setFalse } = useBoolean()

// 網路相關
import { useFetch } from '@vueuse/core'
const { data, error, isFetching } = useFetch('/api/data')

// 瀏覽器相關
import { useFullscreen, usePermission } from '@vueuse/core'
const { isFullscreen, toggle } = useFullscreen()
const microphoneAccess = usePermission('microphone')</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import {
  useMouse,
  useWindowSize,
  useLocalStorage,
  useDark,
  useToggle,
  useOnline,
  useCounter,
  useClipboard,
  useElementBounding,
} from '@vueuse/core'
import { PhInfo, PhSun, PhMoon, PhWifiHigh, PhWifiX, PhCopy, PhCheck } from '@phosphor-icons/vue'

// Mouse position
const { x, y } = useMouse()
const mouseTrackingArea = ref()

// 區域內滑鼠座標 (使用原生事件修復 Y 軸問題)
const relativeX = ref(0)
const relativeY = ref(0)
const isInTrackingArea = ref(false)

// Use VueUse's useElementBounding for better reactivity
const { left, top, width: areaWidth, height: areaHeight } = useElementBounding(mouseTrackingArea)

const onMouseMove = (event) => {
  const rect = event.currentTarget.getBoundingClientRect()
  relativeX.value = event.clientX - rect.left
  relativeY.value = event.clientY - rect.top
  isInTrackingArea.value = true
}

const onMouseLeave = () => {
  isInTrackingArea.value = false
}

// Window size
const { width, height } = useWindowSize()
const aspectRatio = computed(() => (width.value / height.value).toFixed(2))

// Local storage
const theme = useLocalStorage('theme', 'light')

// 監聽主題變化並應用到 DOM
watch(
  theme,
  (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
  },
  { immediate: true },
)

// Dark mode
const isDark = useDark()
const toggleDark = useToggle(isDark)

// Online status
const isOnline = useOnline()

// Counter
const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 100 })

// Clipboard
const { text, copy, copied } = useClipboard()
const textToCopy = ref('Hello VueUse!')
</script>
