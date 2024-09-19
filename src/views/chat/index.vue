<template>
  <div class="h-full flex flex-col scrollbar-hidden">
    <chat-top />
    <information-divider :info="information" />
    <chat-middle :information="information" :messages="messages" />
    <chat-bottom @send-message="sendMessage" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Chat',
})

const emit = defineEmits(['send-message'])

defineProps({
  messages: {
    type: Object,
    default: () => {},
  },
  information: {
    type: String,
    default: '',
  },
})

const sendMessage = (message: any) => {
  emit('send-message', message)
}
</script>
