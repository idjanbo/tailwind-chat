<template>
  <div aria-label="media viewer" aria-modal="true" class="relative z-10" role="dialog">
    <!--overlay-->
    <fade-transition>
      <div v-show="props.open" class="fixed inset-0 bg-black bg-opacity-60 transition-opacity"></div>
    </fade-transition>

    <!--content-->
    <scale-transition>
      <div v-show="props.open" class="fixed inset-0 z-10 overflow-y-auto">
        <div ref="mediaViewer" class="h-full flex flex-col p-5">
          <div class="w-full h-full px-5 flex flex-wrap items-center justify-center overflow-hidden">
            <div>
              <!--Image-->
              <img
                class="w-auto min-w-[300px] md:max-w-[700px] xs:max-w-[340px] transition-transform duration-300"
                :src="props.src"
                :style="{ transform: `scale(${zoom})` }"
              />
              <!--toolbar-->
              <div class="fixed left-0 right-0 m-auto">
                <tool-bar
                  :handle-close="handleClose"
                  :handle-decrease-zoom="handleDecreaseZoom"
                  :handle-increase-zoom="handleIncreaseZoom"
                  :is-image="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </scale-transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
  open: boolean
  close: () => void
}>()

defineOptions({
  name: 'ImageViewer',
})
const zoom = ref(1)

const handleIncreaseZoom = () => {
  if (zoom.value < 2) {
    zoom.value += 0.5
  }
}

const handleDecreaseZoom = () => {
  if (zoom.value > 0.5) {
    zoom.value -= 0.5
  }
}
const handleClose = () => {
  props.close()
}
onMounted(() => {
  // set the handleCloseOnEscape when mounting the component
  document.addEventListener('keydown', handleCloseOnEscape)
})

// (event) close modal when typing esc button
const handleCloseOnEscape = (event: KeyboardEvent) => {
  if (['Escape', 'Esc'].includes(event.key)) {
    handleClose()
  }
}
</script>
