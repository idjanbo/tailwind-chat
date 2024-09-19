<template>
  <div class="error-container dark:text-white">
    <div class="error-content">
      <div class="pic-error">
        <no-symbol-icon class="error-svg" />
      </div>
      <div class="bullshit">
        <div class="bullshit-oops">{{ oops }}</div>
        <div class="bullshit-headline">{{ headline }}</div>
        <div class="bullshit-info">{{ info }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NoSymbolIcon } from '@heroicons/vue/24/solid'
const oops = ref<string>('sorry！')
const headline = ref<string>('the page is not exist。')
const info = ref<string>('please check the url or click the button below to return to the homepage')
</script>

<style lang="scss">
@import './scss/error';
</style>
