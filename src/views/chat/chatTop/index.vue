<template>
  <div class="w-full min-h-[50px] px-5 pt-4">
    <!--conversation info-->
    <div class="w-full flex justify-center items-center">
      <div class="flex grow">
        <!--avatar-->
        <avatar class="mr-5" :src="src" />
        <!--name and online status-->
        <div class="flex flex-col">
          <description>
            <span class="font-semibold opacity-60">{{ name }}</span>
          </description>
          <description>
            <span class="inline-block w-[8px] h-[8px] bg-green-700 dark:bg-white rounded-full"></span>
            <span class="font-extralight ml-2">Online</span>
          </description>
        </div>
      </div>
      <div class="relative">
        <dark-mode
          :icon="store.settings.darkMode ? SunIcon : MoonIcon"
          title="切换主题"
          @click="store.settings.darkMode = !store.settings.darkMode"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSettingsStore } from '/@/store/modules/settings'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

import { supporter } from '/@/api'

const route = useRoute()
const fooId = ref<string | any>(route.params.fooId)

defineOptions({
  name: 'ChatTop',
})

const store = useSettingsStore()
const name = ref<string>('Customer - TOM')
const src = ref<string>('')

const getConfig = async () => {
  const { data }: any = await supporter({ deposit_id: fooId.value })
  // console.log(data)
  if (data.data?.name) name.value = data.data?.name
  src.value = data.data?.avatar
}

onMounted(() => {
  getConfig()
})
</script>
