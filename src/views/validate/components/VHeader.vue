<template>
  <div class="w-full min-h-[75px] px-5 pt-6">
    <div class="w-full flex justify-center items-center">
      <div class="flex grow">
        <a class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white" href="#">
          <img alt="logo" class="w-8 h-8 mr-2" src="/src/assets/logo.svg" />
          <span>{{ name }}</span>
        </a>
      </div>
      <div class="relative">
        <dark-mode
          :icon="store.settings.darkMode ? SunIcon : MoonIcon"
          title="switch dark mode"
          @click="store.settings.darkMode = !store.settings.darkMode"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useSettingsStore } from '/@/store/modules/settings'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'
import { name } from '~/package.json'

const store = useSettingsStore()
defineOptions({
  name: 'VHeader',
})
</script>
