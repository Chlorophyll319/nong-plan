import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
  scrollBehavior(to, from, savedPosition) {
    // 如果有儲存的位置 (瀏覽器前進/後退)，使用儲存的位置
    if (savedPosition) {
      return savedPosition
    }
    // 否則捲動到頂部
    return { top: 0 }
  },
})

router.afterEach((to) => {
  // eslint-disable-next-line no-undef
  document.title = `${to.meta.title} | 農農安心平台`
})

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    // eslint-disable-next-line no-undef
    if (localStorage.getItem('router:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      // eslint-disable-next-line no-undef
      localStorage.setItem('router:dynamic-reload', 'true')
      // eslint-disable-next-line no-undef
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem('router:dynamic-reload')
})

export default router
