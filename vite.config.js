import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import Layouts from 'vite-plugin-vue-layouts-next'
import Pages from 'vite-plugin-pages'
import Fonts from 'unplugin-fonts/vite'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  plugins: [
    // Tailwind CSS - 放在最前面
    tailwindcss(),

    // Vue Router Plugin - 根據 'src/pages' 目錄結構自動產生 Vue 路由
    VueRouter({
      dts: true,
    }),

    vue(),

    // Pages Plugin - 自動生成路由
    Pages({
      dirs: 'src/pages',
      extensions: ['vue'],
    }),

    // 自動將 'src/layouts' 中的檔案作為頁面的佈局使用
    Layouts({
      defaultLayout: 'default', // 預設佈局檔案名稱
    }),

    // 自動引入常用的 API，如 'vue'、'pinia' 等
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        '@vueuse/core',
        {
          pinia: ['defineStore', 'storeToRefs'],
          '@unhead/vue': ['useHead', 'useSeoMeta'],
          'vee-validate': ['useField', 'useForm', 'defineRule'],
          yup: ['string', 'number', 'boolean', 'date', 'array', 'object', 'mixed'],
          '@vueuse/motion': ['useMotion'],
          '@vueuse/gesture': ['useGesture'],
        },
      ],
      dts: 'src/auto-imports.d.ts', // 產生自動引入的 TypeScript 定義檔
      dirs: ['src/composables/**', 'src/stores/**'], // 同時自動引入 src/stores 目錄下的 store
      vueTemplate: true, // 在 Vue 模板中也啟用自動引入
    }),

    // 自動按需引入元件
    Components({
      // 指定哪些副檔名的檔案是元件
      extensions: ['.vue'],
      // 指定要去掃描哪些檔案來尋找元件的使用
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),

    // Fonts Plugin - 保留您的字型設定
    Fonts({
      google: {
        families: [
          'Inter:wght@400;500;600;700',
          'Chiron GoRound TC:wght@200;300;400;500;600;700;800;900',
        ],
        preconnect: true,
        display: 'swap',
      },
    }),
  ],

  optimizeDeps: {
    exclude: [
      'vuetify',
      'vue-router',
      'unplugin-vue-router/runtime',
      'unplugin-vue-router/data-loaders',
      'unplugin-vue-router/data-loaders/basic',
    ],
  },

  // 開發伺服器優化
  server: {
    port: 3000,
    hmr: {
      overlay: false, // 關閉錯誤覆蓋層以提升性能
    },
  },

  // 構建優化
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          ui: ['daisyui', 'tailwindcss'],
          charts: ['chart.js', 'chartjs-plugin-datalabels'],
          animation: ['gsap', '@vueuse/motion'],
        },
      },
    },
  },

  define: { 'process.env': {} },

  resolve: {
    // 路徑別名設定
    alias: {
      // 將 '@' 指向 'src' 目錄的絕對路徑
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
    // 在匯入時可以省略的副檔名
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },

  css: {
    devSourcemap: true,
  },
})
