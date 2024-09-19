<template>
  <base-message :message="message">
    <p
      class="mb-2 text-sm leading-4 tracking-[0.16px] outline-none font-light text-gray-600 opacity-60 dark:text-white dark:opacity-70 whitespace-pre-wrap"
      tabindex="0"
    >
      {{ message.desc }}
    </p>
    <!--image-->
    <button aria-label="图片" class="outline-none" @click="openViewer = true">
      <div
        class="rounded bg-cover bg-center md:w-[110px] md:h-[100px] xs:w-[100px] xs:h-[95px]"
        :style="{ 'background-image': `url(${message.content})` }"
      >
        <!--hover effect-->
        <div
          class="w-full h-full flex justify-center items-center rounded bg-black bg-opacity-20 hover:bg-opacity-10 text-white font-thin text-sm transition duration-200"
        >
          <magnifying-glass-plus-icon class="w-[19px]" />
          点击放大
        </div>
      </div>
    </button>
    <!-- image viewer -->
    <image-viewer :close="() => (openViewer = false)" :open="openViewer" :src="message.content" />
  </base-message>
</template>
<script setup lang="ts">
import { MagnifyingGlassPlusIcon } from '@heroicons/vue/20/solid'
defineOptions({
  name: 'ImageMessage',
})

defineProps({
  message: {
    type: Object,
    default: () => {},
  },
})

const openViewer = ref<boolean>(false)
</script>
