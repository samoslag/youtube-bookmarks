<template>
  <button class="button" @click="$emit('click', $event)">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "" }
  }
}
</script>

<style lang="scss">
.button {
  border: none;
  background: #353639;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  color: rgba(white, 0.75);
  transition: all 0.18s;
  padding: 9px 15px 10px 15px;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #414245;
  }
  &:active {
    color: white;
    background-color: #484b4e;
  }
}
</style>