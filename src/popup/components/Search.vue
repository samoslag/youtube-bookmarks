<template>
  <div class="search">
      <input
          class="search__input"
          placeholder="Search ..."
          :value="value"
          @input="$emit('input', $event.target.value)"
          ref="input"
      />
  </div>
</template>

<script>
export default {
  model: {
        prop: "value",
        event: "input"
    },
    props: {
        value: { type: String, default: "" }
    },
    mounted () {
        this.$refs.input.focus()
    }
}
</script>

<style lang="scss">
.search {

}
</style>