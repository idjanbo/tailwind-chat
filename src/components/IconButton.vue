<template>
  <button
    :aria-label="title"
    class="group flex justify-center items-center outline-none rounded-full focus:outline-none transition-all duration-200 focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-600"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'IconButton',
})

defineProps({
  title: {
    type: String,
    default: null,
  },
})
</script>
