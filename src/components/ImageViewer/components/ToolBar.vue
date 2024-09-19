<template>
  <div class="w-full flex justify-center mt-5">
    <!--decrease zoom-->
    <icon-button
      v-show="props.isImage"
      aria-label="decrease zoom"
      class="mr-5"
      title="decrease zoom"
      variant="ghost"
      @click="props.handleDecreaseZoom()"
    >
      <magnifying-glass-minus-icon class="md:w-6 md:h-6 xs:w-5 xs:h-5 text-white opacity-80 hover:opacity-100" />
    </icon-button>

    <!--increase zoom-->
    <icon-button
      v-show="props.isImage"
      aria-label="increase zoom"
      class="mr-5"
      title="increase zoom"
      variant="ghost"
      @click="props.handleIncreaseZoom()"
    >
      <magnifying-glass-plus-icon class="md:w-6 md:h-6 xs:w-5 xs:h-5 text-white opacity-80 hover:opacity-100" />
    </icon-button>

    <!--close carousel-->
    <icon-button aria-label="close carousel" title="close carousel" variant="ghost" @click="props.handleClose()">
      <x-mark-icon class="md:w-6 md:h-6 xs:w-5 xs:h-5 text-white opacity-80 hover:opacity-100" />
    </icon-button>
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon, MagnifyingGlassPlusIcon, MagnifyingGlassMinusIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  handleClose: () => void
  handleIncreaseZoom: () => void
  handleDecreaseZoom: () => void
  isImage: boolean
}>()
defineOptions({
  name: 'ToolBar',
})
</script>
