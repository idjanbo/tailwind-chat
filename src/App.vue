<template>
  <div :class="{ dark: store.settings.darkMode }">
    <div class="bg-gray-50 dark:bg-gray-800 transition-colors duration-500" :style="{ height: height }">
      <router-view v-slot="{ Component }">
        <fade-transition>
          <component :is="Component" />
        </fade-transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSettingsStore } from '/@/store/modules/settings'

defineOptions({
  name: 'App',
})

const store = useSettingsStore()

// update localStorage with state changes
store.$subscribe((_mutation, state) => {
  localStorage.setItem('settings', JSON.stringify(state))
})

// the app height
const height = ref(`${window.innerHeight}px`)

// change the app height to the window hight.
const resizeWindow = () => {
  height.value = `${window.innerHeight}px`
}

// and add the resize event when the component mounts.
onMounted(() => {
  window.addEventListener('resize', resizeWindow)
})

// remove the event when un-mounting the component.
onUnmounted(() => {
  window.removeEventListener('resize', resizeWindow)
})
</script>
