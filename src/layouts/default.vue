<template>
  <div class="min-h-screen flex flex-col" data-theme="cupcake">
    <!-- Navigation Bar -->
    <header class="sticky top-0 z-50 bg-base-100 shadow-md">
      <div class="navbar max-w-7xl mx-auto px-4">
        <!-- Logo -->
        <div class="navbar-start flex-none">
          <router-link to="/" class="flex items-center gap-2">
            <PhPlant class="h-6 w-6 text-primary" />
            <span class="text-lg font-semibold text-base-content"> 321農農安心平台 </span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="navbar-center flex-none">
          <div class="flex gap-2">
            <router-link
              v-for="item in navItems"
              :key="item.to"
              v-show="item.show"
              :to="item.to"
              class="btn btn-ghost btn-sm"
              active-class="btn-primary"
            >
              {{ item.title }}
            </router-link>
          </div>
        </div>

        <!-- Empty navbar-end for balance -->
        <div class="navbar-end"></div>

        <!-- Mobile Menu Button -->
        <div class="hidden">
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <PhList class="h-6 w-6" />
            </div>
            <ul
              tabindex="0"
              class="dropdown-content menu menu-sm bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border"
            >
              <li v-for="item in navItems" :key="item.to" v-show="item.show">
                <router-link :to="item.to" class="py-3" active-class="active">
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 bg-base-50">
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
  </div>
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
])
</script>
