<template>
  <div class="empty-notice">{{ text }}</div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "Your YouTube bookmarks list is empty." }
  }
}
</script>

<style lang="scss">
.empty-notice {
  color: rgba(white, 0.5);
  font-size: 13px;
  text-align: center;
  padding: 23px 15px 25px 15px;
  font-weight: 400;
  margin: 0;
}
</style>