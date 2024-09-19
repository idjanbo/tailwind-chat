<template>
  <div class="w-full my-3 flex items-center justify-center">
    <div class="w-1/3 h-0 border-t border-dashed dark:border-gray-600 dark:bg-opacity-0"></div>
    <p
      class="outline-none text-xs font-light text-black opacity-60 dark:text-white dark:opacity-70 leading-4 tracking-[0.16px] text-center flex-auto"
    >
      {{ info }}
    </p>
    <div class="w-1/3 h-0 border-t border-dashed dark:border-gray-600 dark:bg-opacity-0"></div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'InformationDivider',
})
defineProps({
  info: {
    type: String,
    default: null,
  },
})
</script>
