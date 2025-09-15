<template>
  <div class="space-y-6">
    <div class="alert alert-info">
      <PhInfo class="w-6 h-6" />
      <span>VeeValidate v4.15.1 + Yup v1.7.0 - 強大的表單驗證</span>
    </div>

    <!-- Installation -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📦 安裝與設定</h3>
      <div class="mockup-code">
        <pre><code># 安裝
npm install vee-validate yup

# 基本使用
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

# 全域設定 (可選)
import { configure } from 'vee-validate'
configure({
  validateOnBlur: true,
  validateOnInput: false
})</code></pre>
      </div>
    </div>

    <!-- Basic Form -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">📝 基本表單驗證</h3>
      <form @submit="onSubmitBasic" class="card bg-base-200">
        <div class="card-body space-y-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">用戶名稱 *</span>
            </label>
            <input
              v-model="basicName"
              :class="{ 'input-error': basicNameError }"
              type="text"
              placeholder="輸入用戶名稱"
              class="input input-bordered"
            />
            <label v-if="basicNameError" class="label">
              <span class="label-text-alt text-error">{{ basicNameError }}</span>
            </label>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">電子郵件 *</span>
            </label>
            <input
              v-model="basicEmail"
              :class="{ 'input-error': basicEmailError }"
              type="email"
              placeholder="輸入電子郵件"
              class="input input-bordered"
            />
            <label v-if="basicEmailError" class="label">
              <span class="label-text-alt text-error">{{ basicEmailError }}</span>
            </label>
          </div>

          <button type="submit" class="btn btn-primary">
            <PhCheck class="w-4 h-4 mr-2" />
            提交基本表單
          </button>

          <div v-if="basicSubmitted" class="alert alert-success">
            <PhCheck class="w-6 h-6" />
            <span>基本表單提交成功！</span>
          </div>
        </div>
      </form>
    </div>

    <!-- Advanced Form with Yup -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🚀 進階表單 (Yup 架構驗證)</h3>
      <form @submit="onSubmitAdvanced" class="card bg-base-200">
        <div class="card-body space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="form-control">
              <label class="label">
                <span class="label-text">姓名 *</span>
              </label>
              <input
                v-model="advancedValues.name"
                :class="{ 'input-error': advancedErrors.name }"
                type="text"
                placeholder="輸入姓名"
                class="input input-bordered"
              />
              <label v-if="advancedErrors.name" class="label">
                <span class="label-text-alt text-error">{{ advancedErrors.name }}</span>
              </label>
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">年齡 *</span>
              </label>
              <input
                v-model="advancedValues.age"
                :class="{ 'input-error': advancedErrors.age }"
                type="number"
                placeholder="輸入年齡"
                class="input input-bordered"
              />
              <label v-if="advancedErrors.age" class="label">
                <span class="label-text-alt text-error">{{ advancedErrors.age }}</span>
              </label>
            </div>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">電子郵件 *</span>
            </label>
            <input
              v-model="advancedValues.email"
              :class="{ 'input-error': advancedErrors.email }"
              type="email"
              placeholder="輸入電子郵件"
              class="input input-bordered"
            />
            <label v-if="advancedErrors.email" class="label">
              <span class="label-text-alt text-error">{{ advancedErrors.email }}</span>
            </label>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">密碼 *</span>
            </label>
            <input
              v-model="advancedValues.password"
              :class="{ 'input-error': advancedErrors.password }"
              type="password"
              placeholder="輸入密碼"
              class="input input-bordered"
            />
            <label v-if="advancedErrors.password" class="label">
              <span class="label-text-alt text-error">{{ advancedErrors.password }}</span>
            </label>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">確認密碼 *</span>
            </label>
            <input
              v-model="advancedValues.confirmPassword"
              :class="{ 'input-error': advancedErrors.confirmPassword }"
              type="password"
              placeholder="再次輸入密碼"
              class="input input-bordered"
            />
            <label v-if="advancedErrors.confirmPassword" class="label">
              <span class="label-text-alt text-error">{{ advancedErrors.confirmPassword }}</span>
            </label>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">網站 (可選)</span>
            </label>
            <input
              v-model="advancedValues.website"
              :class="{ 'input-error': advancedErrors.website }"
              type="url"
              placeholder="https://example.com"
              class="input input-bordered"
            />
            <label v-if="advancedErrors.website" class="label">
              <span class="label-text-alt text-error">{{ advancedErrors.website }}</span>
            </label>
          </div>

          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text">我同意服務條款 *</span>
              <input
                v-model="advancedValues.terms"
                :class="{ 'checkbox-error': advancedErrors.terms }"
                type="checkbox"
                class="checkbox checkbox-primary"
              />
            </label>
            <label v-if="advancedErrors.terms" class="label">
              <span class="label-text-alt text-error">{{ advancedErrors.terms }}</span>
            </label>
          </div>

          <div class="card-actions">
            <button type="button" @click="resetAdvancedForm" class="btn btn-ghost">重置</button>
            <button
              type="submit"
              :disabled="!advancedMeta.valid"
              class="btn btn-primary"
              :class="{ 'btn-disabled': !advancedMeta.valid }"
            >
              <PhCheck class="w-4 h-4 mr-2" />
              提交進階表單
            </button>
          </div>

          <div v-if="advancedSubmitted" class="alert alert-success">
            <PhCheck class="w-6 h-6" />
            <span>進階表單提交成功！</span>
          </div>

          <!-- Form Status -->
          <div class="stats shadow">
            <div class="stat">
              <div class="stat-title">表單狀態</div>
              <div
                class="stat-value text-sm"
                :class="advancedMeta.valid ? 'text-success' : 'text-error'"
              >
                {{ advancedMeta.valid ? '有效' : '無效' }}
              </div>
            </div>
            <div class="stat">
              <div class="stat-title">錯誤數量</div>
              <div class="stat-value text-sm text-error">
                {{ Object.keys(advancedErrors).length }}
              </div>
            </div>
            <div class="stat">
              <div class="stat-title">已修改</div>
              <div class="stat-value text-sm">
                {{ advancedMeta.dirty ? '是' : '否' }}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <!-- Dynamic Form -->
    <div class="space-y-4">
      <h3 class="text-xl font-bold">🔄 動態表單</h3>
      <div class="card bg-base-200">
        <div class="card-body space-y-4">
          <div class="flex justify-between items-center">
            <h4 class="text-lg font-semibold">聯絡人列表</h4>
            <button @click="addContact" class="btn btn-sm btn-primary">
              <PhPlus class="w-4 h-4 mr-1" />
              新增聯絡人
            </button>
          </div>

          <div v-for="(contact, index) in contacts" :key="index" class="card bg-base-100">
            <div class="card-body">
              <div class="flex justify-between items-start">
                <h5 class="card-title text-base">聯絡人 {{ index + 1 }}</h5>
                <button @click="removeContact(index)" class="btn btn-ghost btn-sm text-error">
                  <PhTrash class="w-4 h-4" />
                </button>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="form-control">
                  <input
                    v-model="contact.name"
                    type="text"
                    placeholder="姓名"
                    class="input input-bordered input-sm"
                  />
                </div>
                <div class="form-control">
                  <input
                    v-model="contact.phone"
                    type="tel"
                    placeholder="電話"
                    class="input input-bordered input-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <button @click="submitContacts" class="btn btn-success w-full">提交所有聯絡人</button>
        </div>
      </div>
    </div>

    <!-- Code Examples -->
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">查看完整程式碼範例</div>
      <div class="collapse-content">
        <div class="mockup-code">
          <pre><code>// 基本使用
import { useField, useForm } from 'vee-validate'

const { value: basicName, errorMessage: basicNameError } = useField('basicName', (value) => {
  if (!value) return '用戶名稱為必填項目'
  if (value.length < 2) return '用戶名稱至少要2個字符'
  return true
})

const { value: basicEmail, errorMessage: basicEmailError } = useField('basicEmail', (value) => {
  if (!value) return '電子郵件為必填項目'
  if (!/\S+@\S+\.\S+/.test(value)) return '請輸入有效的電子郵件'
  return true
})

// 使用 Yup 架構
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('姓名為必填項目').min(2, '姓名至少要2個字符'),
  age: yup.number().required('年齡為必填項目').min(18, '年齡必須大於18歲'),
  email: yup.string().required('電子郵件為必填項目').email('請輸入有效的電子郵件'),
  password: yup.string()
    .required('密碼為必填項目')
    .min(8, '密碼至少要8個字符')
    .matches(/[A-Z]/, '密碼必須包含大寫字母')
    .matches(/[0-9]/, '密碼必須包含數字'),
  confirmPassword: yup.string()
    .required('確認密碼為必填項目')
    .oneOf([yup.ref('password')], '密碼不匹配'),
  website: yup.string().url('請輸入有效的網址'),
  terms: yup.boolean().isTrue('必須同意服務條款')
})

const { values, errors, meta, handleSubmit, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    website: '',
    terms: false
  }
})

const onSubmit = handleSubmit((values) => {
  console.log('表單數據:', values)
  // 處理提交邏輯
})

// 在模板中使用
&lt;template&gt;
  &lt;form @submit="onSubmit"&gt;
    &lt;input v-model="values.email" :class="{ 'error': errors.email }" /&gt;
    &lt;span v-if="errors.email"&gt;&#123;&#123; errors.email &#125;&#125;&lt;/span&gt;

    &lt;button :disabled="!meta.valid"&gt;提交&lt;/button&gt;
  &lt;/form&gt;
&lt;/template&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { PhInfo, PhCheck, PhPlus, PhTrash } from '@phosphor-icons/vue'

// Basic form
const { value: basicName, errorMessage: basicNameError } = useField('basicName', (value) => {
  if (!value) return '用戶名稱為必填項目'
  if (value.length < 2) return '用戶名稱至少要2個字符'
  return true
})

const { value: basicEmail, errorMessage: basicEmailError } = useField('basicEmail', (value) => {
  if (!value) return '電子郵件為必填項目'
  if (!/\S+@\S+\.\S+/.test(value)) return '請輸入有效的電子郵件'
  return true
})

const basicSubmitted = ref(false)

const onSubmitBasic = (event) => {
  event.preventDefault()
  if (!basicNameError.value && !basicEmailError.value && basicName.value && basicEmail.value) {
    basicSubmitted.value = true
    setTimeout(() => {
      basicSubmitted.value = false
    }, 3000)
  }
}

// Advanced form with Yup
const advancedSchema = yup.object({
  name: yup.string().required('姓名為必填項目').min(2, '姓名至少要2個字符'),
  age: yup
    .number()
    .required('年齡為必填項目')
    .min(18, '年齡必須大於18歲')
    .max(100, '年齡不能超過100歲'),
  email: yup.string().required('電子郵件為必填項目').email('請輸入有效的電子郵件'),
  password: yup
    .string()
    .required('密碼為必填項目')
    .min(8, '密碼至少要8個字符')
    .matches(/[A-Z]/, '密碼必須包含大寫字母')
    .matches(/[0-9]/, '密碼必須包含數字'),
  confirmPassword: yup
    .string()
    .required('確認密碼為必填項目')
    .oneOf([yup.ref('password')], '密碼不匹配'),
  website: yup.string().url('請輸入有效的網址'),
  terms: yup.boolean().isTrue('必須同意服務條款'),
})

const {
  values: advancedValues,
  errors: advancedErrors,
  meta: advancedMeta,
  handleSubmit: handleAdvancedSubmit,
  resetForm: resetAdvancedForm,
} = useForm({
  validationSchema: advancedSchema,
  initialValues: {
    name: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    website: '',
    terms: false,
  },
})

const advancedSubmitted = ref(false)

const onSubmitAdvanced = handleAdvancedSubmit((values) => {
  console.log('Advanced form submitted:', values)
  advancedSubmitted.value = true
  setTimeout(() => {
    advancedSubmitted.value = false
  }, 3000)
})

// Dynamic form
const contacts = ref([{ name: '', phone: '' }])

const addContact = () => {
  contacts.value.push({ name: '', phone: '' })
}

const removeContact = (index) => {
  contacts.value.splice(index, 1)
}

const submitContacts = () => {
  console.log('Contacts submitted:', contacts.value)
  alert('聯絡人列表已提交！')
}
</script>
