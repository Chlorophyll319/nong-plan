import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import { createHead } from '@unhead/vue/legacy'
import { MotionPlugin } from '@vueuse/motion'
import pinia from './stores'
import './styles/style.css'
import App from './App.vue'

// 設定路由
const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

// 設定 Head 管理
const head = createHead()

// 創建應用程式
const app = createApp(App)

// 安裝插件
app.use(pinia)
app.use(router)
app.use(head)
app.use(MotionPlugin)

// 掛載應用程式
app.mount('#app')
