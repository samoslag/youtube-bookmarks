<template>
  <component class="icon" v-if="icon" :is="getIcon.import"/>
</template>

<script>
const importComponentCheck = (target) => {
  try {
    require("./icons/" + target)
  } catch (e) {
    return false
  }
  return target
}
export default {
  computed: {
    getIcon () {
      let target = this.icon + "-icon"
      return {
        path: importComponentCheck(target),
        import: () => import("./icons/" + target)
      }
    }
  },
  props: {
		icon: { type: String, default: "" }
	}
}
</script>

<style lang="scss">
.icon {
  fill: currentColor;
}
</style>