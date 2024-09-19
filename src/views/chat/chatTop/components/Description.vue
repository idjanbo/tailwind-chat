<template>
  <p
    class="outline-none text-sm text-black dark:text-white dark:opacity-70 leading-4 tracking-[0.16px] mb-2 default-outline cursor-pointer"
    tabindex="0"
  >
    <slot></slot>
  </p>
</template>
<script setup lang="ts">
defineOptions({
  name: 'Description',
})
</script>
