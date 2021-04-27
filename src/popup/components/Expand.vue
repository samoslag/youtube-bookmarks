<template>
    <transition
        name="expand"
        @before-enter="setup"
        @before-leave="setup"
        @enter="animateEnter"
        @leave="animateLeave"
        @after-enter="finish('enter', $event)"
        @after-leave="finish('leave', $event)"
    >
        <slot/>
    </transition>
</template>

<script>

export default {
  methods: {
    /**
     * Prepares data for animation
     */
    setup (el) {
      this.$options.init = {
        width: el.style.width || null,
        height: el.style.height || 0,
        style: el.getAttribute("style") || ""
      }
    },
    /**
     * Creates entering animation
     */
    animateEnter (el) {
      const width = getComputedStyle(el).width
      this.style(el, {
        width,
        position: "absolute",
        visibility: "hidden",
        height: this.$options.init.height || "auto"
      })

      let height = getComputedStyle(el).height
      if (parseInt(height) === 0) height = this.$options.init.height

      this.style(el, {
        width: this.$options.init.width,
        position: null,
        visibility: null,
        height: 0
      })

      this.repaint(el)

      requestAnimationFrame(() => {
        this.style(el, { height })
      })
    },
    /**
     * Creates leaving animation
     */
    animateLeave (el) {
      const height = getComputedStyle(el).height
      this.style(el, { height })

      this.repaint(el)

      requestAnimationFrame(() => {
        this.style(el, { height: 0 })
      })
    },
    /**
     * Cleans up changes made by animation
     */
    finish (type, el) {
      if (type === "enter") {
        this.style(el, { height: null })
      }

      this.$nextTick(() => {
        el.setAttribute("style", this.$options.init.style)
        this.$options.init = {}
      })
    },
    /**
     * Applies styles to element
     */
    style (el, styles) {
      for (const property in styles) el.style[property] = styles[property]
    },
    /**
     * Forces browser to repaint element
     */
    repaint (el) {
      getComputedStyle(el).height // eslint-disable-line
    }
  },
  init: {}
}
</script>

<style lang="scss" scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.25s;
  min-width: unset !important;
  min-height: unset !important;
  &, * {
    overflow: hidden !important;
  }
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
