<template>
  <div class="xs:mb-6 md:mb-5 flex" :class="isSupport ? '' : 'justify-end'">
    <!--avatar-->
    <div v-if="isSupport" class="mr-3">
      <div aria-label="客服" class="outline-none">
        <avatar :src="src" />
      </div>
    </div>
    <div class="flex items-end">
      <!--bubble-->
      <div
        class="group m-w-[300px] p-4 rounded-b transition duration-500 bg-white dark:bg-gray-800"
        :class="isSupport ? 'bg-gray-50 rounded-tr mr-4' : 'bg-indigo-50 rounded-tl ml-4 order-2'"
      >
        <slot></slot>
      </div>
      <double-checks v-if="!isSupport && store.settings.lastSeen" />
      <!--date-->
      <div class="mr-4">
        <p
          class="outline-none text-xs text-black opacity-60 dark:text-white dark:opacity-70 font-light leading-4 tracking-[0.16px] whitespace-pre"
        >
          {{ dayjs(message.date).format('HH:mm') }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'
import { useSettingsStore } from '/@/store/modules/settings'
defineOptions({
  name: 'BaseMessage',
})

const props = defineProps({
  message: {
    type: Object,
    default: () => {},
  },
})
const isSupport = props.message.sender.role === 'Support'
const store = useSettingsStore()
const src = ref<string>(props.message.sender?.avatar)
</script>
