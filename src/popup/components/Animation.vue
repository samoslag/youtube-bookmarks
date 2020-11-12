<template>
  <div class="music-animation">
    <div
      v-for="i in 4"
      :key="i"
      class="music-animation__bar"
    />
  </div>
</template>

<style lang="scss">
.music-animation {
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-end;
  width: 20px;
  height: 20px;
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
}
</style>
