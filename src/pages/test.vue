<template>
  <div class="min-h-screen bg-base-100">
    <!-- Header -->
    <div class="hero bg-gradient-to-r from-primary to-secondary text-primary-content py-12">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">套件示範區</h1>
          <p class="py-6">展示專案中使用的核心前端套件功能</p>
        </div>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="tabs tabs-boxed justify-center bg-base-200 p-4">
      <button
        v-for="(demo, key) in demos"
        :key="key"
        class="tab"
        :class="{ 'tab-active': activeTab === key }"
        @click="activeTab = key"
      >
        {{ demo.title }}
      </button>
    </div>

    <!-- Demo Content -->
    <div class="container mx-auto p-6">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">{{ demos[activeTab].title }}</h2>
          <p class="text-base-content/70 mb-6">{{ demos[activeTab].description }}</p>

          <!-- Dynamic Demo Component -->
          <component :is="demos[activeTab].component" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SwiperDemo from '../components/demos/SwiperDemo.vue'
import GSAPDemo from '../components/demos/GSAPDemo.vue'
import ChartDemo from '../components/demos/ChartDemo.vue'
import PhosphorDemo from '../components/demos/PhosphorDemo.vue'
import VueUseDemo from '../components/demos/VueUseDemo.vue'
import VueUseMotionDemo from '../components/demos/VueUseMotionDemo.vue'
import AxiosDemo from '../components/demos/AxiosDemo.vue'
import PiniaDemo from '../components/demos/PiniaDemo.vue'
import VeeValidateDemo from '../components/demos/VeeValidateDemo.vue'
import DaisyUIDemo from '../components/demos/DaisyUIDemo.vue'

const activeTab = ref('swiper')

const demos = {
  swiper: {
    title: 'Swiper 輪播組件',
    description: '現代化的觸控滑動輪播組件，支援多種效果和響應式設計',
    component: SwiperDemo,
  },
  gsap: {
    title: 'GSAP 動畫引擎',
    description: '專業級動畫庫，提供高性能的時間軸動畫控制',
    component: GSAPDemo,
  },
  chart: {
    title: 'Chart.js 圖表庫',
    description: '靈活的圖表庫，支援多種圖表類型和客製化選項',
    component: ChartDemo,
  },
  phosphor: {
    title: 'Phosphor Icons',
    description: '現代化的圖示庫，提供1000+個精美的圖示組件',
    component: PhosphorDemo,
  },
  vueuse: {
    title: 'VueUse 工具庫',
    description: 'Vue 3 Composition API 實用工具庫，提供豐富的組合式函數',
    component: VueUseDemo,
  },
  motion: {
    title: 'VueUse Motion',
    description: '基於 VueUse 的動畫庫，提供聲明式動畫控制',
    component: VueUseMotionDemo,
  },
  axios: {
    title: 'Axios HTTP 客戶端',
    description: '基於 Promise 的 HTTP 庫，支援請求/響應攔截器',
    component: AxiosDemo,
  },
  pinia: {
    title: 'Pinia 狀態管理',
    description: 'Vue 官方推薦的狀態管理庫，類型安全且支援 DevTools',
    component: PiniaDemo,
  },
  validate: {
    title: 'VeeValidate 表單驗證',
    description: '強大的 Vue 表單驗證庫，支援 Yup 架構驗證',
    component: VeeValidateDemo,
  },
  daisyui: {
    title: 'DaisyUI 組件庫',
    description: '基於 Tailwind CSS 的語義化組件庫',
    component: DaisyUIDemo,
  },
}
</script>
