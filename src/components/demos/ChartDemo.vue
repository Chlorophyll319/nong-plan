<template>
  <div class="space-y-6">
    <div class="alert alert-info">
      <PhInfo class="w-6 h-6" />
      <span>Chart.js v4.5.0 - 靈活的圖表庫</span>
    </div>

    <!-- Installation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📦 安裝與掛載</h3>
      <div class="mockup-code">
        <pre><code># 安裝
npm install chart.js
npm install chartjs-plugin-datalabels

# 導入核心組件和控制器
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineController,
  BarController,
  RadarController,
  PolarAreaController,
  PieController,
  DoughnutController
} from 'chart.js'

# 導入外掛
import ChartDataLabels from 'chartjs-plugin-datalabels'

# 註冊組件和控制器
ChartJS.register(
  CategoryScale, LinearScale, RadialLinearScale,
  PointElement, LineElement, BarElement, Title,
  Tooltip, Legend, ArcElement, LineController,
  BarController, RadarController, PolarAreaController,
  PieController, DoughnutController, ChartDataLabels
)</code></pre>
      </div>
    </div>

    <!-- Configuration -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">⚙️ 基本設定</h3>
      <div class="mockup-code">
        <pre><code>// 創建圖表實例
const chart = new ChartJS(ctx, {
  type: 'line', // 圖表類型
  data: {
    labels: ['1月', '2月', '3月', '4月'],
    datasets: [{
      label: '銷售額',
      data: [12, 19, 3, 5],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: { display: true, text: '銷售報表' },
      legend: { position: 'top' },
      datalabels: { display: true }
    }
  }
})</code></pre>
      </div>
    </div>

    <!-- Chart Controls -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📊 圖表類型切換</h3>
      <div class="flex gap-2 flex-wrap">
        <button
          v-for="type in chartTypes"
          :key="type"
          @click="activeChart = type"
          class="btn btn-sm"
          :class="{ 'btn-primary': activeChart === type, 'btn-outline': activeChart !== type }"
        >
          {{ type }}
        </button>
      </div>
    </div>

    <!-- Chart Container -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🎯 動態圖表示範</h3>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h4 class="card-title">{{ chartConfigs[activeChart].title }}</h4>
          <div class="w-full h-64">
            <canvas ref="chartCanvas"></canvas>
          </div>
          <div class="card-actions justify-end">
            <button @click="updateData" class="btn btn-sm btn-primary">更新數據</button>
            <button @click="addData" class="btn btn-sm btn-secondary">添加數據</button>
            <button @click="removeData" class="btn btn-sm btn-error">移除數據</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Chart Stats -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📈 圖表統計</h3>
      <div class="stats shadow w-full">
        <div class="stat">
          <div class="stat-title">數據點數量</div>
          <div class="stat-value">{{ currentData.length }}</div>
          <div class="stat-desc">當前圖表</div>
        </div>
        <div class="stat">
          <div class="stat-title">最大值</div>
          <div class="stat-value">{{ Math.max(...currentData) }}</div>
          <div class="stat-desc">數據最大值</div>
        </div>
        <div class="stat">
          <div class="stat-title">平均值</div>
          <div class="stat-value">
            {{ Math.round(currentData.reduce((a, b) => a + b, 0) / currentData.length) }}
          </div>
          <div class="stat-desc">數據平均值</div>
        </div>
      </div>
    </div>

    <!-- Multiple Charts Grid -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📊 多圖表展示</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="card bg-base-100 shadow">
          <div class="card-body">
            <h4 class="card-title text-lg">餅圖範例</h4>
            <div class="h-40">
              <canvas ref="pieChart"></canvas>
            </div>
          </div>
        </div>
        <div class="card bg-base-100 shadow">
          <div class="card-body">
            <h4 class="card-title text-lg">甜甜圈圖</h4>
            <div class="h-40">
              <canvas ref="doughnutChart"></canvas>
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
              <h4 class="card-title text-lg">自定義外掛</h4>
              <div class="mockup-code">
                <pre><code>const customPlugin = {
  id: 'customPlugin',
  beforeDraw: (chart) => {
    // 自定義繪製邏輯
  },
  afterDatasetsDraw: (chart) => {
    // 在數據集繪製後執行
  }
}

// 註冊外掛
chart.plugins.register(customPlugin)</code></pre>
              </div>
            </div>
          </div>

          <div class="card bg-base-200">
            <div class="card-body">
              <h4 class="card-title text-lg">動畫配置</h4>
              <div class="mockup-code">
                <pre><code>animation: {
  duration: 2000,
  easing: 'easeInOutQuart',
  onComplete: function() {
    // 動畫完成回調
  }
}

// 禁用動畫
animation: false</code></pre>
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
            <pre><code>import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartDataLabels
)

// 創建圖表
const chart = new ChartJS(ctx, {
  type: 'line',
  data: {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
    datasets: [{
      label: '銷售額',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      datalabels: {
        display: true,
        color: 'white'
      }
    }
  }
})</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef, onMounted, onUnmounted, watch, nextTick } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineController,
  BarController,
  RadarController,
  PolarAreaController,
  PieController,
  DoughnutController,
  RadialLinearScale,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { PhInfo } from '@phosphor-icons/vue'

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineController,
  BarController,
  RadarController,
  PolarAreaController,
  PieController,
  DoughnutController,
  ChartDataLabels,
)

const chartCanvas = ref()
const pieChart = ref()
const doughnutChart = ref()

const activeChart = ref('line')
const chartTypes = ['line', 'bar', 'radar', 'polarArea']

let mainChart = null
let pieChartInstance = null
let doughnutChartInstance = null
let isUpdating = false

const currentData = shallowRef([65, 59, 80, 81, 56, 55, 40])
const labels = shallowRef(['一月', '二月', '三月', '四月', '五月', '六月', '七月'])

const chartConfigs = {
  line: {
    title: '折線圖 - 趨勢分析',
    type: 'line',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          backgroundColor: 'rgba(75, 192, 192, 0.8)',
          borderRadius: 4,
          color: 'white',
          font: { weight: 'bold' },
          padding: 4,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  },
  bar: {
    title: '柱狀圖 - 比較分析',
    type: 'bar',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          color: 'black',
          font: { weight: 'bold' },
        },
      },
    },
  },
  radar: {
    title: '雷達圖 - 多維分析',
    type: 'radar',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          display: false,
        },
      },
    },
  },
  polarArea: {
    title: '極座標圖 - 數據分布',
    type: 'polarArea',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          color: 'white',
          font: { weight: 'bold' },
        },
      },
    },
  },
}

const createMainChart = () => {
  if (mainChart) {
    mainChart.destroy()
    mainChart = null
  }

  if (!chartCanvas.value) return

  const config = chartConfigs[activeChart.value]
  const ctx = chartCanvas.value.getContext('2d')

  mainChart = new ChartJS(ctx, {
    type: config.type,
    data: {
      labels: labels.value,
      datasets: [
        {
          label: '數據集',
          data: currentData.value,
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(199, 199, 199, 0.8)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(199, 199, 199, 1)',
          ],
          borderWidth: 2,
          tension: 0.1,
        },
      ],
    },
    options: config.options,
  })
}

const createPieChart = () => {
  const ctx = pieChart.value.getContext('2d')
  pieChartInstance = new ChartJS(ctx, {
    type: 'pie',
    data: {
      labels: ['紅色', '藍色', '黃色', '綠色'],
      datasets: [
        {
          data: [30, 25, 25, 20],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          color: 'white',
          font: { weight: 'bold' },
          formatter: (value, ctx) => {
            const total = ctx.dataset.data.reduce((a, b) => a + b, 0)
            const percentage = Math.round((value / total) * 100)
            return percentage + '%'
          },
        },
      },
    },
  })
}

const createDoughnutChart = () => {
  const ctx = doughnutChart.value.getContext('2d')
  doughnutChartInstance = new ChartJS(ctx, {
    type: 'doughnut',
    data: {
      labels: ['桌面', '手機', '平板'],
      datasets: [
        {
          data: [60, 35, 5],
          backgroundColor: [
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          color: 'white',
          font: { weight: 'bold' },
        },
      },
    },
  })
}

const updateData = () => {
  if (!mainChart || isUpdating) return
  isUpdating = true

  // 創建新的數據數組
  const newData = Array.from({ length: currentData.value.length }, () =>
    Math.floor(Math.random() * 100),
  )

  // 直接替換 Chart.js 數據
  mainChart.data.datasets[0].data = newData

  // 完全替換 shallowRef 數據
  currentData.value = newData

  mainChart.update()

  setTimeout(() => {
    isUpdating = false
  }, 100)
}

const addData = () => {
  if (!mainChart || isUpdating) return
  isUpdating = true

  // 創建新的數組而不是修改現有數組
  const newLabels = [...labels.value, `${labels.value.length + 1}月`]
  const newData = [...currentData.value, Math.floor(Math.random() * 100)]

  // 直接替換 Chart.js 數據
  mainChart.data.labels = newLabels
  mainChart.data.datasets[0].data = newData

  // 完全替換 shallowRef 數據
  labels.value = newLabels
  currentData.value = newData

  mainChart.update()

  setTimeout(() => {
    isUpdating = false
  }, 100)
}

const removeData = () => {
  if (!mainChart || labels.value.length <= 1 || isUpdating) return
  isUpdating = true

  // 創建新的數組而不是修改現有數組
  const newLabels = labels.value.slice(0, -1)
  const newData = currentData.value.slice(0, -1)

  // 直接替換 Chart.js 數據
  mainChart.data.labels = newLabels
  mainChart.data.datasets[0].data = newData

  // 完全替換 shallowRef 數據
  labels.value = newLabels
  currentData.value = newData

  mainChart.update()

  setTimeout(() => {
    isUpdating = false
  }, 100)
}

watch(activeChart, () => {
  nextTick(() => {
    createMainChart()
  })
})

onMounted(() => {
  nextTick(() => {
    createMainChart()
    createPieChart()
    createDoughnutChart()
  })
})

onUnmounted(() => {
  if (mainChart) mainChart.destroy()
  if (pieChartInstance) pieChartInstance.destroy()
  if (doughnutChartInstance) doughnutChartInstance.destroy()
})
</script>
