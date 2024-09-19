<template>
  <base-message :message="message">
    <p
      class="mb-2 text-sm leading-4 tracking-[0.16px] outline-none font-light text-gray-600 opacity-60 dark:text-white dark:opacity-70 whitespace-pre-wrap"
      tabindex="0"
    >
      {{ message.desc }}
    </p>
    <div class="md:w-[400px] xs:w-[240px]">
      <video-player :config="configMp4" style="background-color: rgba(0, 0, 0, 0.87)" @player="playerInstance" />
    </div>
  </base-message>
</template>
<script setup lang="ts">
defineOptions({
  name: 'VideoMessage',
})

const props = defineProps({
  message: {
    type: Object,
    default: () => {},
  },
})

const uniqueId = (prefix: string) => {
  return prefix + Math.random().toString(36)
}
const configMp4 = reactive<any>({
  url: props.message.content,
  id: uniqueId('uuid_mp4_'),
  lang: 'zh',
  volume: 0,
  autoplay: false,
  screenShot: false,
  playbackRate: [0.5, 0.75, 1, 1.5, 2],
  fluid: true,
})

let _player: any

const playerInstance = (player: any) => {
  _player = player
}

onActivated(() => {
  _player.play()
})

onDeactivated(() => {
  _player.pause()
})
</script>
