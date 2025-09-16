<template>
  <div class="fixed top-0 left-0 w-full z-50 navbar bg-base-100 shadow-sm box-border">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost text-xl normal-case h-auto flex-col items-start">
        <!-- Logo -->
        <!-- 課程標籤 -->
        <span class="text-xs text-base-content/70 font-light leading-tight">農業部黑客松</span>
        <!-- 標題 -->
        <span class="text-xl leading-tight">農農安心平台</span>
      </router-link>
    </div>
    <!-- 桌機版選單 -->
    <div class="flex-none hidden md:block">
      <ul class="menu menu-horizontal px-1">
        <template v-for="item in navItems" :key="item.to">
          <li v-if="item.show">
            <router-link :to="item.to" class="btn btn-ghost">
              {{ item.title }}
            </router-link>
          </li>
        </template>
      </ul>
    </div>
    <!-- 手機版漢堡選單 -->
    <div class="flex-none md:hidden">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost">
          <PhList class="h-6 w-6" />
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu menu-sm mt-3 z-[1] p-2 shadow bg-base-100 rounded-xl w-52"
        >
          <template v-for="item in navItems" :key="item.to">
            <li v-if="item.show">
              <router-link
                :to="item.to"
                class="btn btn-ghost rounded-lg text-base py-2 px-4 w-full justify-start"
              >
                {{ item.title }}
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <main class="p-4 box-border pt-[72px]">
    <div class="max-w-7xl mx-auto px-4 py-6">
      <router-view />
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-base-200 border-t">
    <div class="footer footer-center max-w-7xl mx-auto px-4 py-8">
      <aside>
        <div class="flex items-center gap-2 mb-2">
          <PhPlant class="h-6 w-6 text-primary" />
          <span class="font-semibold text-lg">農農安心平台</span>
        </div>
        <p class="text-base-content/70">
          © {{ new Date().getFullYear() }} 農業部黑客松. 保留所有權利.
        </p>
      </aside>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { PhPlant, PhList } from '@phosphor-icons/vue'

const navItems = computed(() => [
  { title: '首頁', to: '/', show: true },
  { title: '市場價格', to: '/market-price', show: true },
  { title: '食品安全', to: '/food-safety', show: true },
  { title: '農業教育', to: '/education', show: true },
  { title: '農旅觀光', to: '/tourism', show: true },
  { title: '關於我們', to: '/aboutUs', show: true },
  { title: '測試示範區', to: '/test', show: true },
])
</script>
