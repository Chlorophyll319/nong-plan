<template>
  <div class="space-y-6">
    <div class="alert alert-info">
      <PhInfo class="w-6 h-6" />
      <span>GSAP v3.13.0 - 專業級動畫引擎</span>
    </div>

    <!-- Installation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📦 安裝與掛載</h3>
      <div class="mockup-code">
        <pre><code># 安裝
npm install gsap

# 基本導入
import { gsap } from 'gsap'

# 外掛導入
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

# 註冊外掛
gsap.registerPlugin(ScrollTrigger, TextPlugin)</code></pre>
      </div>
    </div>

    <!-- Configuration -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">⚙️ 基本設定</h3>
      <div class="mockup-code">
        <pre><code>// 基本動畫語法
gsap.to('.element', { duration: 1, x: 100, rotation: 360 })

// 時間軸動畫
const tl = gsap.timeline()
tl.to('.box1', { duration: 0.5, x: 100 })
  .to('.box2', { duration: 0.5, y: 100 }, '-=0.2') // 重疊 0.2 秒
  .to('.box3', { duration: 0.5, rotation: 360 })

// ScrollTrigger 配置
gsap.to('.element', {
  scrollTrigger: {
    trigger: '.element',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: true
  },
  x: 100
})</code></pre>
      </div>
    </div>

    <!-- Basic Animation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🎬 基本動畫</h3>
      <div class="flex gap-4 items-center">
        <div ref="basicBox" class="w-16 h-16 bg-primary rounded-lg"></div>
        <button @click="animateBasic" class="btn btn-primary">開始動畫</button>
      </div>
    </div>

    <!-- Timeline Animation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">⏱️ 時間軸動畫</h3>
      <div class="flex gap-2 mb-4">
        <div
          v-for="n in 4"
          :key="n"
          :ref="
            (el) => {
              if (el) timelineBoxes[n - 1] = el
            }
          "
          class="w-12 h-12 bg-secondary rounded-lg transition-all duration-300"
          :id="`timeline-box-${n}`"
        ></div>
      </div>
      <div class="flex gap-2">
        <button @click="playTimelineNew" class="btn btn-secondary">播放序列</button>
        <button @click="playTimelineReverse" class="btn btn-ghost">反向播放</button>
        <button @click="resetTimeline" class="btn btn-accent btn-sm">重置</button>
      </div>
      <div class="text-xs text-base-content/70 mt-2">
        狀態: <span id="timeline-status">待機中</span>
      </div>
    </div>

    <!-- Text Animation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">✏️ 文字動畫</h3>
      <div class="card bg-base-200 p-6">
        <div ref="textContainer" class="text-2xl font-bold text-center overflow-hidden">
          <div>歡迎來到</div>
          <div>GSAP 動畫世界</div>
        </div>
      </div>
      <button @click="animateText" class="btn btn-accent">文字動畫</button>
    </div>

    <!-- Interactive Animation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🎮 互動動畫</h3>
      <div class="relative h-32 bg-base-200 rounded-lg overflow-hidden">
        <div
          ref="hoverBox"
          class="absolute w-16 h-16 bg-accent rounded-lg cursor-pointer transform translate-x-4 translate-y-4"
          @mouseenter="onHover"
          @mouseleave="onLeave"
        >
          <div class="w-full h-full flex items-center justify-center text-accent-content">
            hover
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Trigger -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📜 滾動觸發</h3>
      <div class="h-32 overflow-y-scroll bg-base-200 rounded-lg p-4" ref="scrollContainer">
        <div class="h-80 space-y-4">
          <div
            v-for="n in 6"
            :key="n"
            :ref="(el) => (scrollItems[n - 1] = el)"
            class="p-4 bg-primary text-primary-content rounded opacity-0 transform translate-x-8"
          >
            滾動項目 {{ n }}
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced Features -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🚀 進階功能</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="card bg-base-200">
          <div class="card-body">
            <h4 class="card-title text-lg">緩動函數</h4>
            <div class="mockup-code">
              <pre><code>// 預設緩動
ease: "power2.out"
ease: "bounce.out"
ease: "elastic.out"

// 自定義貝塞爾曲線
ease: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"</code></pre>
            </div>
          </div>
        </div>

        <div class="card bg-base-200">
          <div class="card-body">
            <h4 class="card-title text-lg">控制方法</h4>
            <div class="mockup-code">
              <pre><code>// 時間軸控制
tl.play()
tl.pause()
tl.reverse()
tl.restart()
tl.seek(1.5) // 跳到 1.5 秒</code></pre>
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
          <pre><code>import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 基本動畫
gsap.to('.element', { duration: 1, x: 100, rotation: 360 })

// 時間軸動畫
const tl = gsap.timeline()
tl.to('.box1', { duration: 0.5, x: 100 })
  .to('.box2', { duration: 0.5, y: 100 }, '-=0.2')
  .to('.box3', { duration: 0.5, rotation: 360 })

// 滾動觸發
gsap.to('.scroll-item', {
  scrollTrigger: '.scroll-item',
  x: 100,
  opacity: 1,
  duration: 1
})</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PhInfo } from '@phosphor-icons/vue'

gsap.registerPlugin(ScrollTrigger)

const basicBox = ref()
const timelineBoxes = ref([])
const textContainer = ref()
const hoverBox = ref()
const scrollContainer = ref()
const scrollItems = ref([])

let timeline = ref()
let scrollTriggers = []

const animateBasic = () => {
  gsap.to(basicBox.value, {
    duration: 1,
    x: 200,
    rotation: 360,
    scale: 1.2,
    ease: 'bounce.out',
    yoyo: true,
    repeat: 1,
  })
}

const playTimelineNew = async () => {
  const statusElement = document.getElementById('timeline-status')
  if (statusElement) statusElement.textContent = '播放中...'

  // 先重置所有元素
  resetTimeline()

  // 使用正確的 GSAP Timeline
  const tl = gsap.timeline({
    onComplete: () => {
      if (statusElement) statusElement.textContent = '播放完成'
    },
  })

  // 添加動畫到時間軸，使用 stagger 創建序列效果
  tl.to('#timeline-box-1', {
    duration: 0.6,
    y: -50,
    rotation: 180,
    scale: 1.2,
    backgroundColor: '#ff6b6b',
    ease: 'back.out(1.7)',
  })
    .to(
      '#timeline-box-2',
      {
        duration: 0.6,
        y: -50,
        rotation: 180,
        scale: 1.2,
        backgroundColor: '#ff6b6b',
        ease: 'back.out(1.7)',
      },
      '-=0.3',
    ) // 重疊 0.3 秒
    .to(
      '#timeline-box-3',
      {
        duration: 0.6,
        y: -50,
        rotation: 180,
        scale: 1.2,
        backgroundColor: '#ff6b6b',
        ease: 'back.out(1.7)',
      },
      '-=0.3',
    )
    .to(
      '#timeline-box-4',
      {
        duration: 0.6,
        y: -50,
        rotation: 180,
        scale: 1.2,
        backgroundColor: '#ff6b6b',
        ease: 'back.out(1.7)',
      },
      '-=0.3',
    )

  // 儲存時間軸實例供反向播放使用
  timeline.value = tl
}

const playTimelineReverse = async () => {
  const statusElement = document.getElementById('timeline-status')
  if (statusElement) statusElement.textContent = '反向播放中...'

  // 使用 timeline 的 reverse() 方法
  if (timeline.value) {
    timeline.value.reverse()
    timeline.value.eventCallback('onReverseComplete', () => {
      if (statusElement) statusElement.textContent = '反向播放完成'
    })
  } else {
    // 如果沒有 timeline，先播放再反向
    playTimelineNew().then(() => {
      setTimeout(() => {
        if (timeline.value) {
          timeline.value.reverse()
          timeline.value.eventCallback('onReverseComplete', () => {
            if (statusElement) statusElement.textContent = '反向播放完成'
          })
        }
      }, 100)
    })
  }
}

const resetTimeline = () => {
  const statusElement = document.getElementById('timeline-status')
  if (statusElement) statusElement.textContent = '重置中...'

  // 殺死現有的 timeline
  if (timeline.value) {
    timeline.value.kill()
    timeline.value = null
  }

  // 重置所有元素狀態
  for (let i = 1; i <= 4; i++) {
    const box = document.getElementById(`timeline-box-${i}`)
    if (box) {
      gsap.set(box, {
        y: 0,
        rotation: 0,
        scale: 1,
        backgroundColor: '',
        clearProps: 'all',
      })
    }
  }

  setTimeout(() => {
    if (statusElement) statusElement.textContent = '待機中'
  }, 100)
}

const animateText = () => {
  const lines = textContainer.value.children
  gsap.fromTo(
    lines,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.3,
      ease: 'power3.out',
    },
  )
}

const onHover = () => {
  gsap.to(hoverBox.value, {
    duration: 0.3,
    scale: 1.2,
    rotation: 15,
    ease: 'power2.out',
  })
}

const onLeave = () => {
  gsap.to(hoverBox.value, {
    duration: 0.3,
    scale: 1,
    rotation: 0,
    ease: 'power2.out',
  })
}

onMounted(() => {
  // 設置滾動觸發動畫
  scrollItems.value.forEach((item, index) => {
    if (item) {
      const trigger = ScrollTrigger.create({
        trigger: item,
        scroller: scrollContainer.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        animation: gsap.to(item, {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        }),
      })
      scrollTriggers.push(trigger)
    }
  })
})

onUnmounted(() => {
  // 清理 ScrollTrigger
  scrollTriggers.forEach((trigger) => trigger.kill())
  ScrollTrigger.refresh()
})
</script>
