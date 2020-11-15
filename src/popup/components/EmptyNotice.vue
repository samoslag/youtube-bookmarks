<template>
  <div class="empty-notice">
    <p v-if="text" class="empty-notice__text" v-html="text"/>
    <div v-if="buttons" class="empty-notice__buttons">
      <Button
        v-for="(button, index) in buttons"
        :key="'button-' + index"
        class="empty-notice__button"
        :text="button.text"
        @click="button.action()"
      />
    </div>
  </div>
</template>

<script>
import Button from "./Button"
export default {
  components: { Button },
  props: {
    text: { type: String, default: "Your YouTube bookmarks list is empty." },
    buttons: { type: Array, default: null }
  }
}
</script>

<style lang="scss">
.empty-notice {
  margin: 0;
  padding: 23px 15px 25px 15px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .empty-notice__text {
    color: rgba(white, 0.5);
    font-size: 13px;
    text-align: center;
    font-weight: 400;
    padding: 0;
    margin: 0;
    b {
      color: rgba(white, 0.6);
      font-weight: 400;
    }
  }
  .empty-notice__buttons {
    margin-top: 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    .empty-notice__button {
      & + .empty-notice__button {
        margin-left: 10px;
      }
    }
  }
}
</style>