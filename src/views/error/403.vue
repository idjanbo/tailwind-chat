<template>
  <div class="error-container dark:text-white">
    <div class="error-content">
      <div class="pic-error">
        <shield-exclamation-icon class="error-svg" />
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
import { ShieldExclamationIcon } from '@heroicons/vue/24/solid'
const oops = ref<string>('sorry！')
const headline = ref<string>('current order is invalid')
const info = ref<string>('please check the order or click the button below to return to the homepage')
</script>

<style lang="scss">
@import './scss/error';
</style>
