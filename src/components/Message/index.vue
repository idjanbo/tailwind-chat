<template>
  <div v-for="(message, index) in messages" :key="index" ref="msgListRef">
    <text-message v-if="message.type === 'text'" :message="message" />
    <payment-message v-if="message.type === 'payment'" :message="message" />
    <image-message v-if="message.type === 'image'" :message="message" />
    <video-message v-if="message.type === 'video'" :message="message" />
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'Message',
})

const props = defineProps({
  messages: {
    type: Object,
    default: () => {},
  },
})

const msgListRef = ref()

watch(
  () => props.messages,
  (newVal) => {
    nextTick(() => {
      msgListRef.value[newVal.length - 1].scrollIntoView() // 滚动到最新消息
    })
  },
  {
    deep: true,
  }
)
</script>
