<template>
  <base-message :message="message">
    <p
      class="text-sm font-normal leading-4 tracking-[0.16px] outline-none text-black opacity-60 dark:text-white dark:opacity-70 whitespace-pre-wrap"
      tabindex="0"
    >
      {{ message.content }}
    </p>
  </base-message>
</template>
<script setup lang="ts">
defineOptions({
  name: 'TextMessage',
})

defineProps({
  message: {
    type: Object,
    default: () => {},
  },
})
</script>
