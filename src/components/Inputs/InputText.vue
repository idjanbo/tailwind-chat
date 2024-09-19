<template>
  <textarea
    ref="textarea"
    class="max-w-full w-full px-5 py-4 rounded-sm content-center outline-none text-sm placeholder:text-black placeholder:opacity-40 text-opacity-70 dark:placeholder:text-white dark:placeholder:opacity-70 focus:outline-none transition duration-200 ease-out border border-gray-200 text-black bg-gray-50 dark:bg-gray-700 dark:text-white dark:bg-opacity-70 dark:focus:bg-opacity-0 focus:bg-opacity-0 focus:border-indigo-300 dark:border-gray-600 z-10"
    onkeydown="if (event.keyCode === 13) event.preventDefault()"
    :value="props.value"
    @input="
      ($event) => {
        handleAutoResize()
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      }
    "
  ></textarea>
</template>

<script setup lang="ts">
const props = defineProps<{
  value?: string
  autoResize?: boolean
}>()

defineOptions({
  name: 'InputText',
})

const textarea: Ref<HTMLTextAreaElement | null> = ref(null)

const handleAutoResize = () => {
  if (props.autoResize && textarea.value) {
    textarea.value.style.height = 'auto'
    textarea.value.style.height = `${textarea.value.scrollHeight}px`
  }
}
</script>
