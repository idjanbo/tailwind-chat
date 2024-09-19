<template>
  <div ref="middleChatRef" class="grow px-5 pt-2 flex flex-col overflow-y-scroll overflow-x-hidden scrollbar-hidden">
    <message :messages="messages" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ChatMiddle',
})

defineProps({
  messages: {
    type: Object,
    default: () => {},
  },
})
</script>
