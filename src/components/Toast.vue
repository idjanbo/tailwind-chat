<template>
  <div ref="alertRef" class="relative w-screen">
    <transition
      enter-active-class="ease-in duration-500"
      enter-from-class="opacity-0 -translate-y-20"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="ease-out duration-500"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-20 opacity-0"
      mode="in-out"
    >
      <div
        v-show="visible"
        class="fixed z-[9999] top-0 flex space-x-10 w-[280px] flex-wrap left-0 right-0 mx-auto items-center justify-center rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
      >
        <!-- Component Start -->
        <div class="flex items-center pr-4 w-full h-full max-w-md shadow-lg">
          <check-circle-icon v-if="message.messageType === 'success'" class="w-[32px] h-[32px] text-[#67C23A] dark:text-green-400" />
          <exclamation-circle-icon v-else-if="message.messageType === 'error'" class="w-[32px] h-[32px] text-red-600 dark:text-red-400" />

          <div class="px-6 py-3">
            <h5 class="font-semibold">{{ message.title }}</h5>
            <p class="text-sm">{{ message.message }}</p>
          </div>
          <button class="ml-auto" @click="close"><x-mark-icon class="w-[20px] h-[20px]" /></button>
        </div>
        <!-- Component End  -->
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/vue/24/solid'
import { XMarkIcon } from '@heroicons/vue/24/outline'

defineOptions({
  name: 'Toast',
})

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  message: {
    type: Object,
    default: () => {},
  },
})

const visible = ref<boolean>(props.show)

const close = () => {
  visible.value = false
}

watch(
  () => props.show,
  (showing) => {
    visible.value = showing
  }
)
</script>
