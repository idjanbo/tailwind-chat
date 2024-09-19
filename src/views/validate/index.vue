<template>
  <keep-alive>
    <div class="dark:bg-gray-900 h-full flex xs:flex-col overflow-hidden sm:w-full max-w-[600px] mx-auto shadow-xl">
      <v-header />
      <div class="flex flex-col items-center justify-center px-6 h-full">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">please input username</h1>
            <form action="#" class="space-y-4 md:space-y-6" @submit.prevent>
              <input
                v-model="form.username"
                autocomplete="off"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block rounded-md w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username"
                @keyup.enter="handleCheck"
              />
              <p v-show="isShow" class="text-xs text-red-400 leading-8">*please input username</p>
              <button
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm rounded-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                :class="loading ? 'cursor-not-allowed bg-primary-400 hover:bg-primary-400 ' : 'cursor-pointer'"
                type="button"
                @click.prevent="handleCheck"
              >
                <arrow-path-icon v-show="loading" class="w-[17px] h-[17px] text-white inline-block animate-spin" />
                Confirm
              </button>
            </form>
            <watchout />
          </div>
        </div>
      </div>
      <toast :message="toastMessage" :show="toasting" />
    </div>
  </keep-alive>
</template>

<script lang="ts" setup>
import router from '/@/router'
import { ArrowPathIcon } from '@heroicons/vue/24/outline'
import { validate, checkDeposit } from '/@/api'

defineOptions({
  name: 'Validate',
})

const route = useRoute()

const loading = ref<boolean>(false)
const isShow = ref<boolean>(false)

const form = reactive({
  username: '',
  deposit_id: route.params.fooId,
  record: 1,
})

const toasting = ref<boolean>(false)
let toastMessage: any = {}
const timer = ref<any>(null)

const validateUsername = (username: string) => {
  const reg = /^[\u4e00-\u9fa5]{2,}$/
  return reg.test(username) && username !== ''
}

watch(
  () => form.username,
  (val) => (isShow.value = validateUsername(val) || val === '' ? false : true)
)

onMounted(async () => {
  const { data } = await checkDeposit(form)
  if (data.detail) showToast('出错了', 'error', data.detail)
  else {
    const response = data.data
    if (response.status !== 0 || response.countdown <= 10) {
      router.push('/403')
    }
  }
})

const showToast = (title: string, messageType: string, message: string) => {
  toasting.value = false
  toasting.value = true
  toastMessage = reactive<any>({
    title,
    message,
    messageType,
  })
  clearTimeout(timer.value)
  timer.value = setTimeout(() => {
    toasting.value = false
  }, 3000)
}

const handleCheck = async () => {
  if (!validateUsername(form.username)) {
    isShow.value = true
    return
  }

  loading.value = true

  const { data } = await validate(form)
  loading.value = false
  if (data.detail) showToast('出错了', 'error', data.detail)
  else {
    router.push(`/b2b/${form.deposit_id}`)
  }
}
</script>
