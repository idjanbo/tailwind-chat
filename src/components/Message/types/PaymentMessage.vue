<template>
  <base-message :message="message">
    <div
      class="text-sm font-normal leading-4 tracking-[0.16px] outline-none text-black opacity-60 dark:text-white dark:opacity-70 whitespace-pre-wrap"
      tabindex="0"
    >
      <p v-for="(payment, index) in message.content" :key="index" class="flex items-center justify-center leading-8">
        <b class="mr-[5px]">
          {{ payment.name }}
        </b>

        <span class="mr-[5px] flex-auto font-light">
          {{ payment.value }}
        </span>

        <i class="" @click="copy(payment.value)">
          <document-duplicate-icon class="w-[17px] h-[17px] inline-block cursor-pointer" />
        </i>
      </p>
    </div>
  </base-message>
  <toast :message="toastMessage" :show="toasting" />
</template>
<script setup lang="ts">
import { DocumentDuplicateIcon } from '@heroicons/vue/24/outline'
defineOptions({
  name: 'PaymentMessage',
})

defineProps({
  message: {
    type: Object,
    default: () => {},
  },
})

const toasting = ref<boolean>(false)
let toastMessage: any = {}
const timer = ref<any>(null)

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
  }, 2000)
}

const copy = (value: string) => {
  const { isSupported, copy } = useClipboard()
  if (!isSupported) {
    usePermission('clipboard-write')
  }
  copy(value)
    .then(() => {
      showToast('复制成功', 'success', `成功复制 ${value}`)
    })
    .catch(() => {
      showToast('复制失败', 'error', `系统不支持复制, 请手动复制`)
    })
}
</script>
