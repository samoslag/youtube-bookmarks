<template>
  <div class="breadcrumbs">
    <button
      class="breadcrumbs__back"
      @click="$emit('select')"
    >
      <Icon icon="chevron-left"/>
    </button>
    <div class="breadcrumbs__list">
      <div
        class="breadcrumbs__item"
        :class="{'breadcrumbs__item--current': list.length <= 0}"
      >
        <button
          class="breadcrumbs__item-btn"
          @click="$emit('select', list.length)"
        >
          Bookmarks
        </button>
        <Icon
          v-if="list.length > 0"
          icon="chevron-left"
          class="breadcrumbs__item-next"
        />
      </div>
      <div
        class="breadcrumbs__item"
        :class="{'breadcrumbs__item--current': index === list.length - 1}"
        v-for="(folder, index) in list"
        :key="'breadcrumb-' + index"
      >
        <button
          class="breadcrumbs__item-btn"
          @click="select(index)"
        >
          {{ folder }}
        </button>
        <Icon
          v-if="index < list.length - 1"
          icon="chevron-left"
          class="breadcrumbs__item-next"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./../../components/Icon"
export default {
  components: { Icon },
  props: {
    list: { type: Array, default: () => [] }
  },
  methods: {
    select (index) {
      let target = this.list.length - index - 1
      if (target !== 0) this.$emit("select", target)
    }
  }
}
</script>

<style lang="scss">
.breadcrumbs {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 7px 10px 7px 33px;
  position: relative;
  .breadcrumbs__back {
    padding: 5px;
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 10px;
    cursor: pointer;
    color: rgba(white, 0.25);
    transition: all 0.15s;
    svg {
        position: relative;
        z-index: 1;
        width: 10px;
        height: 15px;
    }
    &:hover {
        transition: all 0.1s;
        color: rgba(white, 0.75);
    }
    &:active {
        color: white;
    }
  }
  .breadcrumbs__list {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    max-width: 100%;
    .breadcrumbs__item {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      .breadcrumbs__item-btn {
        border: none;
        background: transparent;
        font-size: 13px;
        line-height: 15px;
        font-weight: 500;
        color: rgba(white, 0.25);
        white-space: nowrap;
        transition: all 0.15s;
        padding: 0 7px;
        &:hover {
          transition: all 0.1s;
          cursor: pointer;
          color:rgba(white, 0.75);
        }
        &:active {
          color: white;
        }
      }
      .breadcrumbs__item-next {
        color: rgba(white, 0.25);
        width: 7px;
        height: 10px;
        transform: scaleX(-1);
      }
      &--current {
        .breadcrumbs__item-btn {
          &, &:hover, &:active {
            cursor: initial;
            color: rgba(white, 0.75);
          }
        }
      }
    }
  }
}
.breadcrumbs-enter-active,
.breadcrumbs-leave-active {
    width: 100%;
    transition: transform 0.4s;
    & + .folders__list-animation-wrapper {
      .folders-move-left-leave-active {
        top: 29px !important;
        height: calc(100% - 29px) !important;
      }
      .folders-move-right-leave-active {
        top: -29px !important;
      }
    }
}
.breadcrumbs-leave-active {
    position: absolute;
    left: 0;
    top: 8px;
}
.breadcrumbs-enter,
.breadcrumbs-leave-to {
    transform: translateX(100%);
}
.view-move-right-enter-active,
.view-move-right-leave-active,
.view-move-left-enter-active,
.view-move-left-leave-active {
  .breadcrumbs-enter-active,
  .breadcrumbs-leave-active {
    transition: none !important;
  }
}
</style>
