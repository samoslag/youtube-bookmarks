<template>
  <div class="folders__head">
    <span class="folders__title">Select folder</span>
    <button class="folders__close" @click="$emit('close')" title="Close">
      <Icon icon="times"/>
    </button>
  </div>
</template>

<script>
import Icon from "./../../components/Icon"
export default {
  components: { Icon }
}
</script>

<style lang="scss">
.folders__head {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background: #2f3033;
  top: 0;
  z-index: 3;
  height: 37px;
  .folders__title {
    padding: 0 10px;
    font-size: 13px;
    line-height: 16px;
    font-weight: 500;
    padding-bottom: 2px;
    color: rgba(white, 0.8);
  }
  .folders__close {
    width: 37px;
    height: 37px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    transition: all 0.18s;
    color: rgba(white, 0.4);
    svg {
      width: 11px;
    }
    &:hover {
      cursor: pointer;
      background: #414245;
      color: rgba(white, 0.8);
    }
    &:active {
      cursor: pointer;
      background:  #484b4e;
      color: rgba(white, 0.95);
    }
  }
}
</style>