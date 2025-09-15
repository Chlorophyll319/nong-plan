<template>
  <div class="space-y-6">
    <div class="alert alert-info">
      <PhInfo class="w-6 h-6" />
      <span>DaisyUI v5.1.12 - 基於 Tailwind CSS 的語義化組件庫</span>
    </div>

    <!-- Installation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📦 安裝與設定</h3>
      <div class="mockup-code">
        <pre><code># 安裝
npm install daisyui

# tailwind.config.js 設定
module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "cyberpunk"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true
  }
}</code></pre>
      </div>
    </div>

    <!-- Buttons -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🔘 按鈕組件</h3>
      <div class="space-y-4">
        <div class="flex flex-wrap gap-2">
          <button class="btn">默認</button>
          <button class="btn btn-primary">主要</button>
          <button class="btn btn-secondary">次要</button>
          <button class="btn btn-accent">強調</button>
          <button class="btn btn-info">信息</button>
          <button class="btn btn-success">成功</button>
          <button class="btn btn-warning">警告</button>
          <button class="btn btn-error">錯誤</button>
        </div>

        <div class="flex flex-wrap gap-2">
          <button class="btn btn-outline">線框</button>
          <button class="btn btn-ghost">幽靈</button>
          <button class="btn btn-link">連結</button>
          <button class="btn btn-circle">
            <PhPlus class="w-4 h-4" />
          </button>
          <button class="btn btn-square">
            <PhGear class="w-4 h-4" />
          </button>
        </div>

        <div class="flex flex-wrap gap-2">
          <button class="btn btn-xs">極小</button>
          <button class="btn btn-sm">小</button>
          <button class="btn btn-md">中</button>
          <button class="btn btn-lg">大</button>
        </div>

        <div class="flex flex-wrap gap-2">
          <button class="btn loading">載入中</button>
          <button class="btn btn-disabled">禁用</button>
        </div>
      </div>
      <div class="mockup-code">
        <pre><code>&lt;button class="btn btn-primary"&gt;主要按鈕&lt;/button&gt;
&lt;button class="btn btn-outline btn-secondary"&gt;線框次要&lt;/button&gt;
&lt;button class="btn btn-ghost btn-lg"&gt;大型幽靈按鈕&lt;/button&gt;</code></pre>
      </div>
    </div>

    <!-- Alerts -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">⚠️ 警告組件</h3>
      <div class="space-y-4">
        <div class="alert">
          <PhInfo class="w-6 h-6" />
          <span>這是一個默認警告。</span>
        </div>

        <div class="alert alert-info">
          <PhInfo class="w-6 h-6" />
          <span>這是一個信息警告。</span>
        </div>

        <div class="alert alert-success">
          <PhCheck class="w-6 h-6" />
          <span>操作已成功完成！</span>
        </div>

        <div class="alert alert-warning">
          <PhWarning class="w-6 h-6" />
          <span>請注意這個重要提醒。</span>
        </div>

        <div class="alert alert-error">
          <PhX class="w-6 h-6" />
          <span>發生了錯誤，請重試。</span>
        </div>
      </div>
    </div>

    <!-- Cards -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🃏 卡片組件</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <div
              class="bg-gradient-to-r from-primary to-secondary h-32 w-full flex items-center justify-center"
            >
              <PhImage class="w-12 h-12 text-white" />
            </div>
          </figure>
          <div class="card-body">
            <h2 class="card-title">基本卡片</h2>
            <p>這是一個包含圖片和內容的基本卡片。</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">立即購買</button>
            </div>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              新產品!
              <div class="badge badge-secondary">新</div>
            </h2>
            <p>帶有徽章的卡片標題。</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">時尚</div>
              <div class="badge badge-outline">產品</div>
            </div>
          </div>
        </div>

        <div class="card bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">彩色卡片</h2>
            <p>使用主題色彩的卡片。</p>
            <div class="card-actions justify-end">
              <button class="btn">了解更多</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Forms -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📝 表單組件</h3>
      <div class="card bg-base-200">
        <div class="card-body">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="form-control">
              <label class="label">
                <span class="label-text">用戶名稱</span>
              </label>
              <input type="text" placeholder="輸入用戶名稱" class="input input-bordered" />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">電子郵件</span>
              </label>
              <input type="email" placeholder="輸入電子郵件" class="input input-bordered" />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">選擇國家</span>
              </label>
              <select class="select select-bordered">
                <option disabled selected>選擇一個國家</option>
                <option>台灣</option>
                <option>香港</option>
                <option>新加坡</option>
              </select>
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">文件上傳</span>
              </label>
              <input type="file" class="file-input file-input-bordered" />
            </div>

            <div class="form-control md:col-span-2">
              <label class="label">
                <span class="label-text">訊息內容</span>
              </label>
              <textarea class="textarea textarea-bordered" placeholder="輸入您的訊息"></textarea>
            </div>

            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text">記住我</span>
                <input type="checkbox" class="checkbox checkbox-primary" />
              </label>
            </div>

            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text">訂閱電子報</span>
                <input type="checkbox" class="toggle toggle-primary" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🖼️ 模態框組件</h3>
      <div class="flex gap-2">
        <button class="btn" onclick="modal_1.showModal()">開啟模態框</button>
        <button class="btn btn-primary" onclick="modal_2.showModal()">開啟操作模態框</button>
      </div>

      <!-- Modal 1 -->
      <dialog id="modal_1" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Hello!</h3>
          <p class="py-4">這是一個簡單的模態框示例。</p>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn">關閉</button>
            </form>
          </div>
        </div>
      </dialog>

      <!-- Modal 2 -->
      <dialog id="modal_2" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">確認操作</h3>
          <p class="py-4">您確定要執行這個操作嗎？</p>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn">取消</button>
              <button class="btn btn-error">確認</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>

    <!-- Navigation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🧭 導航組件</h3>
      <div class="space-y-4">
        <!-- Navbar -->
        <div class="navbar bg-base-200 rounded-lg">
          <div class="navbar-start">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <PhList class="w-5 h-5" />
              </div>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><a>首頁</a></li>
                <li><a>關於我們</a></li>
                <li><a>聯絡我們</a></li>
              </ul>
            </div>
          </div>
          <div class="navbar-center">
            <a class="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div class="navbar-end">
            <button class="btn btn-ghost btn-circle">
              <PhBell class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Breadcrumbs -->
        <div class="breadcrumbs text-sm">
          <ul>
            <li><a>首頁</a></li>
            <li><a>文檔</a></li>
            <li>組件</li>
          </ul>
        </div>

        <!-- Tabs -->
        <div class="tabs tabs-boxed">
          <a class="tab">標籤一</a>
          <a class="tab tab-active">標籤二</a>
          <a class="tab">標籤三</a>
        </div>
      </div>
    </div>

    <!-- Theme Switcher -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🎨 主題切換</h3>
      <div class="form-control">
        <label class="label">
          <span class="label-text">選擇主題</span>
        </label>
        <select v-model="currentTheme" @change="changeTheme" class="select select-bordered">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="cupcake">Cupcake</option>
          <option value="bumblebee">Bumblebee</option>
          <option value="emerald">Emerald</option>
          <option value="corporate">Corporate</option>
          <option value="synthwave">Synthwave</option>
          <option value="retro">Retro</option>
          <option value="cyberpunk">Cyberpunk</option>
          <option value="valentine">Valentine</option>
          <option value="halloween">Halloween</option>
          <option value="garden">Garden</option>
          <option value="forest">Forest</option>
          <option value="aqua">Aqua</option>
          <option value="lofi">Lofi</option>
        </select>
      </div>
    </div>

    <!-- Code Examples -->
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">查看 DaisyUI 配置範例</div>
      <div class="collapse-content">
        <div class="mockup-code">
          <pre><code>// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
    ],
    darkTheme: "dark", // 預設深色主題
    base: true, // 基礎樣式
    styled: true, // 組件樣式
    utils: true, // 工具類
    rtl: false, // RTL 支援
    prefix: "", // 類名前綴
    logs: true, // 日誌
  },
}

// 主題切換 JavaScript
document.documentElement.setAttribute('data-theme', 'light')

// Vue 中使用
&lt;div data-theme="cyberpunk"&gt;
  &lt;button class="btn btn-primary"&gt;按鈕&lt;/button&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  PhInfo,
  PhPlus,
  PhGear,
  PhCheck,
  PhWarning,
  PhX,
  PhImage,
  PhList,
  PhBell,
} from '@phosphor-icons/vue'

const currentTheme = ref('light')

const changeTheme = () => {
  document.documentElement.setAttribute('data-theme', currentTheme.value)
  // 可以保存到 localStorage
  localStorage.setItem('theme', currentTheme.value)
}

onMounted(() => {
  // 從 localStorage 讀取保存的主題
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    currentTheme.value = savedTheme
    changeTheme()
  }
})
</script>
