<template>
  <button
    class="button"
    :class="{'button--disabled': disabled}"
    @click="$emit('click', $event)"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "" },
    disabled: { type: Boolean, default: false }
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
  &--disabled {
    &, &:hover, &:active {
      background: rgba(black, 0.2);
      color: rgba(white, 0.65);
    }
  }
}
</style>