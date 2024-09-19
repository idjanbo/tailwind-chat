<template>
  <div class="text-sm font-light text-gray-500 dark:text-gray-400 leading-8">
    <p>
      1.please make sure
      <span class="text-blue-500 font-semibold">username</span>
      and
      <span class="text-red-500 font-semibold">regiser name</span>
      are the same
    </p>
    <p>
      2.if the name is not the same, the process will be
      <span class="text-blue-500 font-semibold">username</span>
    </p>
    <p>
      3.if not vilidate, the process will be
      <span class="line-through">exit</span>
    </p>
    <p>4.we promise user's persional private</p>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'Watchout',
})
</script>
