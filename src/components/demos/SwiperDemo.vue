<template>
  <div class="space-y-6">
    <div class="alert alert-info">
      <PhInfo class="w-6 h-6" />
      <span>Swiper v12.0.1 - 現代化輪播組件</span>
    </div>

    <!-- Installation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📦 安裝與掛載</h3>
      <div class="mockup-code">
        <pre><code># 安裝
npm install swiper

# 在組件中導入
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules'

# 導入樣式
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'</code></pre>
      </div>
    </div>

    <!-- Configuration -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">⚙️ 基本設定</h3>
      <div class="mockup-code">
        <pre><code>// 註冊所需模組
const modules = [Navigation, Pagination, Autoplay, EffectCards]

// 基本配置
&lt;swiper
  :modules="modules"
  :slides-per-view="1"
  :space-between="30"
  :pagination="{ clickable: true }"
  :navigation="true"
  :autoplay="{ delay: 3000 }"
&gt;
  &lt;swiper-slide&gt;投影片內容&lt;/swiper-slide&gt;
&lt;/swiper&gt;</code></pre>
      </div>
    </div>

    <!-- Basic Swiper -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🎯 基本輪播</h3>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="30"
        :pagination="{ clickable: true }"
        :navigation="true"
        class="demo-swiper h-64"
      >
        <swiper-slide v-for="n in 5" :key="n" class="flex items-center justify-center">
          <div
            class="bg-gradient-to-br from-primary to-secondary text-primary-content rounded-lg w-full h-full flex items-center justify-center"
          >
            <div class="text-center">
              <h4 class="text-2xl font-bold">Slide {{ n }}</h4>
              <p class="mt-2">這是第{{ n }}張投影片</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Card Effect -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🃏 卡片效果</h3>
      <swiper
        :modules="modules"
        effect="cards"
        :grab-cursor="true"
        class="demo-swiper-cards h-64 w-64 mx-auto"
      >
        <swiper-slide v-for="n in 4" :key="n">
          <div class="card bg-base-200 shadow-xl h-full">
            <div class="card-body items-center text-center">
              <h4 class="card-title">卡片 {{ n }}</h4>
              <p>拖拽我來切換</p>
              <div class="badge badge-primary">{{ n }}</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Auto Play -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">⏯️ 自動播放</h3>
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="20"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
        :loop="true"
        class="demo-swiper h-32"
      >
        <swiper-slide v-for="n in 8" :key="n">
          <div
            class="bg-accent text-accent-content rounded-lg h-full flex items-center justify-center"
          >
            <span class="font-bold text-lg">{{ n }}</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Advanced Features -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🚀 進階功能</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="card bg-base-200">
          <div class="card-body">
            <h4 class="card-title text-lg">響應式設定</h4>
            <div class="mockup-code">
              <pre><code>:breakpoints="{
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  }
}"</code></pre>
            </div>
          </div>
        </div>

        <div class="card bg-base-200">
          <div class="card-body">
            <h4 class="card-title text-lg">事件處理</h4>
            <div class="mockup-code">
              <pre><code>@slideChange="onSlideChange"
@swiper="onSwiper"
@reachEnd="onReachEnd"</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Code Example -->
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">查看完整程式碼範例</div>
      <div class="collapse-content">
        <div class="mockup-code">
          <pre><code>import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'

const modules = [Navigation, Pagination, Autoplay, EffectCards]</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules'
import { PhInfo } from '@phosphor-icons/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'

const modules = [Navigation, Pagination, Autoplay, EffectCards]
</script>

<style scoped>
.demo-swiper {
  --swiper-theme-color: oklch(var(--p));
  --swiper-navigation-color: oklch(var(--p));
}

.demo-swiper-cards {
  --swiper-theme-color: oklch(var(--p));
}
</style>
