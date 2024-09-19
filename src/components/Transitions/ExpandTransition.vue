<template>
  <transition name="expand">
    <slot></slot>
  </transition>
</template>

<style scoped>
.expand-enter-active {
  animation: expand reverse 300ms ease;
}

.expand-leave-active {
  animation: expand 300ms ease;
}

@keyframes expand {
  100% {
    max-height: 0px;
    opacity: 0;
    transform: scale(0.9);
  }

  50% {
    max-height: 400px;
  }

  0% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
