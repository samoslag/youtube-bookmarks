<template>
  <div
    class="music-animation"
    :class="{'music-animation--hidden': !show}"
  >
    <div
      v-for="i in 4"
      :key="i"
      class="music-animation__bar"
    />
  </div>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss">
.music-animation {
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-end;
  width: 20px;
  height: 20px;
  transition: opacity 0.2s;
  .music-animation__bar {
    width: calc(25% - 2px);
    height: 3px;
    background: white;
    animation: music-bar 0.9s infinite linear backwards;
    @keyframes music-bar {
      0%, 100% {
        opacity: 0.5;
        height: 3px;
      }
      23.33% {
        height: 50%;
      }
      66.66% {
        opacity: 1;
        height: 100%;
      }
    }
    &:nth-child(2) {
      animation-delay: 0.45s;
    }
    &:nth-child(3) {
      animation-delay: 0.225s;
    }
    &:nth-child(4) {
      animation-delay: 0.675s;
    }
  }
  &--hidden {
    opacity: 0;
  }
}
</style>
