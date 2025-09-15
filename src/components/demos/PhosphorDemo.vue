<template>
  <div class="space-y-6">
    <div class="alert alert-info">
      <PhInfo class="w-6 h-6" />
      <span>Phosphor Icons v2.2.1 - 現代化圖示庫</span>
    </div>

    <!-- Installation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📦 安裝與掛載</h3>
      <div class="mockup-code">
        <pre><code># 安裝
npm install @phosphor-icons/vue

# 在組件中導入
import { PhHeart, PhStar, PhUser } from '@phosphor-icons/vue'

# 或導入全部（不推薦）
import * as Ph from '@phosphor-icons/vue'</code></pre>
      </div>
    </div>

    <!-- Basic Usage -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🎯 基本使用</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="card bg-base-200 p-4 text-center">
          <PhHeart class="w-8 h-8 mx-auto mb-2 text-red-500" />
          <code class="text-sm">PhHeart</code>
        </div>
        <div class="card bg-base-200 p-4 text-center">
          <PhStar class="w-8 h-8 mx-auto mb-2 text-yellow-500" />
          <code class="text-sm">PhStar</code>
        </div>
        <div class="card bg-base-200 p-4 text-center">
          <PhUser class="w-8 h-8 mx-auto mb-2 text-blue-500" />
          <code class="text-sm">PhUser</code>
        </div>
        <div class="card bg-base-200 p-4 text-center">
          <PhShoppingCart class="w-8 h-8 mx-auto mb-2 text-green-500" />
          <code class="text-sm">PhShoppingCart</code>
        </div>
      </div>
    </div>

    <!-- Icon Weights -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">⚖️ 圖示權重</h3>
      <div class="grid grid-cols-2 md:grid-cols-6 gap-2">
        <div class="text-center p-2">
          <PhHeart class="w-8 h-8 mx-auto mb-1" weight="thin" />
          <div class="text-xs">thin</div>
        </div>
        <div class="text-center p-2">
          <PhHeart class="w-8 h-8 mx-auto mb-1" weight="light" />
          <div class="text-xs">light</div>
        </div>
        <div class="text-center p-2">
          <PhHeart class="w-8 h-8 mx-auto mb-1" weight="regular" />
          <div class="text-xs">regular</div>
        </div>
        <div class="text-center p-2">
          <PhHeart class="w-8 h-8 mx-auto mb-1" weight="bold" />
          <div class="text-xs">bold</div>
        </div>
        <div class="text-center p-2">
          <PhHeart class="w-8 h-8 mx-auto mb-1" weight="fill" />
          <div class="text-xs">fill</div>
        </div>
        <div class="text-center p-2">
          <PhHeart class="w-8 h-8 mx-auto mb-1" weight="duotone" />
          <div class="text-xs">duotone</div>
        </div>
      </div>
    </div>

    <!-- Icon Sizes -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📏 尺寸控制</h3>
      <div class="flex items-center gap-4">
        <PhGear class="w-4 h-4 text-primary" />
        <PhGear class="w-6 h-6 text-primary" />
        <PhGear class="w-8 h-8 text-primary" />
        <PhGear class="w-12 h-12 text-primary" />
        <PhGear class="w-16 h-16 text-primary" />
      </div>
      <div class="mockup-code">
        <pre><code>&lt;PhGear class="w-4 h-4" /&gt;   <!-- 16px -->
&lt;PhGear class="w-6 h-6" /&gt;   <!-- 24px -->
&lt;PhGear class="w-8 h-8" /&gt;   <!-- 32px -->
&lt;PhGear class="w-12 h-12" /&gt; <!-- 48px -->
&lt;PhGear class="w-16 h-16" /&gt; <!-- 64px --></code></pre>
      </div>
    </div>

    <!-- Interactive Icons -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🎮 互動效果</h3>
      <div class="flex gap-4">
        <button
          @click="liked = !liked"
          class="btn btn-circle btn-lg"
          :class="liked ? 'btn-error' : 'btn-outline'"
        >
          <PhHeart
            class="w-6 h-6"
            :weight="liked ? 'fill' : 'regular'"
            :class="liked ? 'text-white' : ''"
          />
        </button>

        <button
          @click="bookmarked = !bookmarked"
          class="btn btn-circle btn-lg"
          :class="bookmarked ? 'btn-warning' : 'btn-outline'"
        >
          <PhBookmark
            class="w-6 h-6"
            :weight="bookmarked ? 'fill' : 'regular'"
            :class="bookmarked ? 'text-white' : ''"
          />
        </button>

        <button @click="togglePlay" class="btn btn-circle btn-lg btn-primary">
          <PhPlay v-if="!playing" class="w-6 h-6" weight="fill" />
          <PhPause v-else class="w-6 h-6" weight="fill" />
        </button>
      </div>
    </div>

    <!-- Icon Search -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🔍 圖示搜尋</h3>
      <div class="form-control">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="搜尋圖示..."
          class="input input-bordered"
        />
      </div>
      <div class="grid grid-cols-4 md:grid-cols-8 gap-2 max-h-64 overflow-y-auto">
        <div
          v-for="icon in filteredIcons"
          :key="icon.name"
          class="card bg-base-200 p-2 text-center hover:bg-base-300 cursor-pointer"
          @click="copyIconName(icon.name)"
        >
          <component :is="icon.component" class="w-6 h-6 mx-auto mb-1" />
          <div class="text-xs truncate">{{ icon.name }}</div>
        </div>
      </div>
    </div>

    <!-- Code Examples -->
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">查看完整程式碼範例</div>
      <div class="collapse-content">
        <div class="mockup-code">
          <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- 基本使用 --&gt;
    &lt;PhHeart class="w-6 h-6 text-red-500" /&gt;

    &lt;!-- 不同權重 --&gt;
    &lt;PhStar weight="thin" /&gt;
    &lt;PhStar weight="light" /&gt;
    &lt;PhStar weight="regular" /&gt;
    &lt;PhStar weight="bold" /&gt;
    &lt;PhStar weight="fill" /&gt;
    &lt;PhStar weight="duotone" /&gt;

    &lt;!-- 互動式圖示 --&gt;
    &lt;button @click="toggle"&gt;
      &lt;PhHeart
        :weight="liked ? 'fill' : 'regular'"
        :class="liked ? 'text-red-500' : 'text-gray-400'"
      /&gt;
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
import { PhHeart, PhStar } from '@phosphor-icons/vue'

const liked = ref(false)
const toggle = () => liked.value = !liked.value
&lt;/script&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  PhInfo,
  PhHeart,
  PhStar,
  PhUser,
  PhShoppingCart,
  PhGear,
  PhBookmark,
  PhPlay,
  PhPause,
  PhHouse,
  PhEnvelope,
  PhPhone,
  PhCamera,
  PhCalendar,
  PhClock,
  PhDownload,
  PhUpload,
  PhMagnifyingGlass,
  PhBell,
  PhTrash,
  PhPencil,
  PhPlus,
  PhMinus,
  PhCheck,
  PhX,
} from '@phosphor-icons/vue'

const liked = ref(false)
const bookmarked = ref(false)
const playing = ref(false)
const searchTerm = ref('')

const togglePlay = () => {
  playing.value = !playing.value
}

const copyIconName = (name) => {
  navigator.clipboard.writeText(`Ph${name}`)
  // 可以加上提示
}

const allIcons = [
  { name: 'Heart', component: PhHeart },
  { name: 'Star', component: PhStar },
  { name: 'User', component: PhUser },
  { name: 'ShoppingCart', component: PhShoppingCart },
  { name: 'Gear', component: PhGear },
  { name: 'Bookmark', component: PhBookmark },
  { name: 'House', component: PhHouse },
  { name: 'Envelope', component: PhEnvelope },
  { name: 'Phone', component: PhPhone },
  { name: 'Camera', component: PhCamera },
  { name: 'Calendar', component: PhCalendar },
  { name: 'Clock', component: PhClock },
  { name: 'Download', component: PhDownload },
  { name: 'Upload', component: PhUpload },
  { name: 'MagnifyingGlass', component: PhMagnifyingGlass },
  { name: 'Bell', component: PhBell },
  { name: 'Trash', component: PhTrash },
  { name: 'Pencil', component: PhPencil },
  { name: 'Plus', component: PhPlus },
  { name: 'Minus', component: PhMinus },
  { name: 'Check', component: PhCheck },
  { name: 'X', component: PhX },
]

const filteredIcons = computed(() => {
  if (!searchTerm.value) return allIcons
  return allIcons.filter((icon) => icon.name.toLowerCase().includes(searchTerm.value.toLowerCase()))
})
</script>
