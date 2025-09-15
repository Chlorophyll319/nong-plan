import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts-next'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Fonts from 'unplugin-fonts/vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // Vue Router Plugin - 需要在 Vue 插件之前
    VueRouter({
      routesFolder: 'src/pages',
      dts: true,
    }),

    // Vue Plugin
    vue(),

    // Pages Plugin - 自動生成路由
    Pages({
      dirs: 'src/pages',
      extensions: ['vue'],
    }),

    // Layouts Plugin - 自動布局
    Layouts({
      layoutsDir: 'src/layouts',
      defaultLayout: 'default',
    }),

    // Tailwind CSS with DaisyUI
    tailwindcss({
      plugins: ['daisyui'],
    }),

    // Auto Import - 自動導入 Vue API
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
        {
          '@unhead/vue': ['useHead', 'useSeoMeta'],
          'vee-validate': ['useField', 'useForm', 'defineRule'],
          yup: ['*'],
          '@vueuse/motion': ['useMotion'],
          '@vueuse/gesture': ['useGesture'],
        },
      ],
      dirs: ['src/composables/**', 'src/stores/**'],
      dts: true,
      vueTemplate: true,
    }),

    // Components - 自動註冊組件
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      dts: true,
    }),

    // Fonts Plugin
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

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  css: {
    devSourcemap: true,
  },

  server: {
    port: 3000,
    host: true,
  },
})
