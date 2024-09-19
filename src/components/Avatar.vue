<template>
  <div class="w-[36px] h-[36px] rounded-full outline-none bg-cover bg-center" :style="{ backgroundImage: `url('${avatarUrl}')` }"></div>
</template>

<script setup lang="ts">
import defaultAvatar from '/@/assets/avatar.jpeg'
defineOptions({
  name: 'Avatar',
})

const props = defineProps({
  src: {
    type: String,
    default: defaultAvatar,
  },
})
const avatarUrl = ref<string>(props.src || defaultAvatar)
</script>
