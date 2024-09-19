<template>
  <div class="xs:mb-0 md:mb-6">
    <button :aria-label="title" class="group relative focus:outline-none" :title="title">
      <!--icon-->
      <component
        :is="icon"
        class="w-7 h-6 group-focus:text-indigo-400 hover:text-indigo-400 active:text-indigo-400 active:scale-110 dark:text-gray-500 transition ease-out duration-200"
        :class="(active as boolean) ? ['text-indigo-400', 'dark:text-indigo-400'] : [' text-gray-300']"
      />
    </button>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'DarkMode',
})
defineProps<{
  icon: Component
  title: string
  active?: boolean
}>()
</script>
