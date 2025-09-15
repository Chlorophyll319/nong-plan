<template>
  <div class="space-y-6">
    <div class="alert alert-info">
      <PhInfo class="w-6 h-6" />
      <span>VueUse Motion v3.0.3 - 聲明式動畫庫</span>
    </div>

    <!-- Installation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📦 安裝與掛載</h3>
      <div class="mockup-code">
        <pre><code># 安裝
npm install @vueuse/motion

# 在 main.js 中全域註冊
import { MotionPlugin } from '@vueuse/motion'
app.use(MotionPlugin)

# 或在組件中按需導入
import { useMotion } from '@vueuse/motion'</code></pre>
      </div>
    </div>

    <!-- Basic Animation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🎬 基本動畫</h3>
      <div class="flex gap-4">
        <div
          ref="basicElement"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0 }"
          class="w-20 h-20 bg-primary rounded-lg flex items-center justify-center text-primary-content font-bold"
        >
          Basic
        </div>
        <button @click="resetBasic" class="btn btn-primary">重新播放</button>
      </div>
      <div class="mockup-code">
        <pre><code>&lt;div
  v-motion
  :initial="{ opacity: 0, y: 100 }"
  :enter="{ opacity: 1, y: 0 }"
&gt;
  內容
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <!-- Hover Animation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🖱️ 懸停動畫</h3>
      <div class="flex justify-center p-8">
        <div
          v-motion
          :initial="{ scale: 1, rotate: 0 }"
          :hovered="{ scale: 1.2, rotate: 10 }"
          :transition="{ duration: 300, type: 'spring' }"
          class="w-32 h-32 bg-secondary rounded-lg flex items-center justify-center text-secondary-content font-bold cursor-pointer"
        >
          Hover Me
        </div>
      </div>
      <div class="mockup-code">
        <pre><code>&lt;div
  v-motion
  :initial="{ scale: 1 }"
  :hovered="{ scale: 1.2, rotate: 10 }"
&gt;
  懸停我
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <!-- Visibility Animation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">👁️ 滾動觸發動畫</h3>
      <div class="h-32 overflow-y-scroll bg-base-200 rounded-lg p-4">
        <div class="h-80 space-y-4">
          <div
            v-for="n in 6"
            :key="n"
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="n * 100"
            class="p-4 bg-accent text-accent-content rounded"
          >
            滾動項目 {{ n }}
          </div>
        </div>
      </div>
      <div class="mockup-code">
        <pre><code>&lt;div
  v-motion
  :initial="{ opacity: 0, x: -100 }"
  :visible="{ opacity: 1, x: 0 }"
  :delay="200"
&gt;
  滾動出現
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <!-- Custom Motion -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🎯 自定義動畫控制</h3>
      <div class="space-y-4">
        <div
          ref="customElement"
          class="w-24 h-24 bg-warning rounded-full flex items-center justify-center text-warning-content font-bold mx-auto"
        >
          Custom
        </div>
        <div class="flex gap-2 justify-center">
          <button @click="animateCustom('bounce')" class="btn btn-sm">彈跳</button>
          <button @click="animateCustom('spin')" class="btn btn-sm">旋轉</button>
          <button @click="animateCustom('shake')" class="btn btn-sm">搖晃</button>
          <button @click="animateCustom('pulse')" class="btn btn-sm">脈動</button>
        </div>
      </div>
      <div class="mockup-code">
        <pre><code>import { useMotion } from '@vueuse/motion'

const { apply } = useMotion(element, {
  initial: { scale: 1, rotate: 0 },
  bounce: { scale: [1, 1.3, 1], transition: { duration: 600 } },
  spin: { rotate: 360, transition: { duration: 1000 } }
})

// 觸發動畫
apply('bounce')</code></pre>
      </div>
    </div>

    <!-- Motion Groups -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🎭 動畫群組</h3>
      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="n in 6"
          :key="n"
          v-motion
          :initial="{ opacity: 0, scale: 0 }"
          :enter="{ opacity: 1, scale: 1 }"
          :delay="n * 100"
          class="aspect-square bg-info rounded-lg flex items-center justify-center text-info-content font-bold group-item"
          :data-group-index="n"
        >
          {{ n }}
        </div>
      </div>
      <button @click="resetGroup" class="btn btn-info w-full">重新播放群組</button>
      <div class="mockup-code">
        <pre><code>&lt;div
  v-for="(item, index) in items"
  v-motion
  :initial="{ opacity: 0, scale: 0 }"
  :enter="{ opacity: 1, scale: 1 }"
  :delay="index * 100"
&gt;
  &#123;&#123; item &#125;&#125;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <!-- Spring Animation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🌀 彈簧動畫</h3>
      <div
        ref="springElement"
        class="w-16 h-16 bg-error rounded-lg flex items-center justify-center text-error-content font-bold"
      >
        Spring
      </div>
      <input v-model="springX" type="range" min="0" max="300" class="range range-error" />
      <div class="mockup-code">
        <pre><code>const springX = ref(0)
const { apply } = useMotion(element)

watch(springX, (value) => {
  apply({
    x: value,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30
    }
  })
})</code></pre>
      </div>
    </div>

    <!-- Complete Example -->
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">完整設定範例</div>
      <div class="collapse-content">
        <div class="mockup-code">
          <pre><code>// main.js
import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'

const app = createApp(App)
app.use(MotionPlugin)
app.mount('#app')

// 組件中使用
&lt;template&gt;
  &lt;div
    v-motion="motionConfig"
    :initial="{ opacity: 0, y: 100, scale: 0.5 }"
    :enter="{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 25,
        mass: 0.5
      }
    }"
    :leave="{ opacity: 0, y: -100, scale: 0.5 }"
    :hovered="{ scale: 1.1, rotate: 5 }"
    :tapped="{ scale: 0.95 }"
    :focused="{ scale: 1.05 }"
    :visible="{
      opacity: 1,
      y: 0,
      transition: { delay: 200 }
    }"
  &gt;
    複雜動畫元素
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useMotion } from '@vueuse/motion'

// 程式化控制
const element = ref()
const { variant, apply } = useMotion(element, {
  initial: { opacity: 0 },
  visible: { opacity: 1 }
})

// 切換動畫狀態
const toggleAnimation = () => {
  apply(variant.value === 'initial' ? 'visible' : 'initial')
}
&lt;/script&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import { PhInfo } from '@phosphor-icons/vue'

const basicElement = ref()
const customElement = ref()
const springElement = ref()
const springX = ref(0)

// Setup custom motion
let customMotion = null
let springMotion = null

const resetBasic = () => {
  // 使用 VueUse Motion API 重新觸發動畫
  if (basicElement.value) {
    const { apply } = useMotion(basicElement.value, {
      initial: { opacity: 0, y: 100 },
      enter: { opacity: 1, y: 0, transition: { duration: 600 } },
    })

    // 重置到初始狀態
    apply('initial')

    // 延遲後播放進入動畫
    setTimeout(() => {
      apply('enter')
    }, 100)
  }
}

const animateCustom = (type) => {
  if (customElement.value) {
    // 每次都重新初始化確保動畫正常執行
    customMotion = useMotion(customElement.value, {
      initial: { scale: 1, rotate: 0, x: 0 },
      bounce: {
        scale: [1, 1.3, 1],
        transition: { duration: 600 },
      },
      spin: {
        rotate: 360,
        transition: { duration: 1000 },
      },
      shake: {
        x: [0, -10, 10, -10, 10, 0],
        transition: { duration: 500 },
      },
      pulse: {
        scale: [1, 1.1, 1],
        transition: { duration: 800, repeat: 2 },
      },
    })

    // 立即執行動畫
    customMotion.apply(type)
  }
}

const resetGroup = () => {
  // 重新觸發群組動畫
  const elements = document.querySelectorAll('.group-item')
  elements.forEach((el, index) => {
    const { apply } = useMotion(el, {
      initial: { opacity: 0, scale: 0 },
      enter: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 600,
          delay: index * 100,
        },
      },
    })

    // 重置到初始狀態
    apply('initial')

    // 延遲後播放進入動畫
    setTimeout(() => {
      apply('enter')
    }, 50)
  })
}

// Spring animation - 使用 VueUse Motion 正確實現
onMounted(() => {
  if (springElement.value) {
    springMotion = useMotion(springElement.value, {
      initial: { x: 0 },
    })
  }
})

watch(
  springX,
  (value) => {
    if (springMotion) {
      springMotion.apply({
        x: value,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 30,
        },
      })
    }
  },
  { immediate: false },
)
</script>
