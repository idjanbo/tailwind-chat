<template>
  <img v-if="state === 'delivered'" class="w-[14px] h-[14px]" :src="GrayChecks" />
  <img v-else-if="state === 'read'" class="w-[14px] h-[14px]" :src="GreenChecks" />
</template>
<script setup lang="ts">
import GrayChecks from '/@/assets/vectors/gray_checks.svg'
import GreenChecks from '/@/assets/vectors/green_checks.svg'
defineOptions({
  name: 'DoubleChecks',
})

defineProps({
  state: {
    type: String,
    default: 'delivered',
  },
})
</script>
