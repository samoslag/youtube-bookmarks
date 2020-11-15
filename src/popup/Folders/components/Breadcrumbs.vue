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
  padding: 9px 10px 8px 33px;
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
    transition: all 0.18s;
    svg {
        position: relative;
        z-index: 1;
        width: 10px;
        height: 15px;
    }
    &:hover {
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
        transition: all 0.18s;
        padding: 0 7px;
        &:hover {
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
</style>
