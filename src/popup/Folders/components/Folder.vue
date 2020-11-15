<template>
  <div
    class="folders__folder-wrapper"
    :class="{
      'folders__folder-wrapper--highlight': isInSelected(data.id),
      'folders__folder-wrapper--selected': isSelected(data.id)
    }"
  >
    <button
      class="folders__folder-select"
      @mouseenter="$emit('set-selecting', true)"
      @mouseleave="$emit('set-selecting', false)"
      @click="selectFolder(data.id)"
    >
      <Icon icon="check"/>
    </button>
    <button class="folders__folder" @click="openFolder(data.id)">{{ data.title }}</button>
  </div>
</template>

<script>
import Icon from "./../../components/Icon"
export default {
  components: { Icon },
  props: {
    data: { type: Object, default: () => {} },
    selected: { type: String, default: "" },
    active: { type: String, default: "" }
  },
  methods: {
    isInSelected (id) {
      let selected = this.selected.split("-")
      return selected.includes(id)
    },
    isSelected (id) {
      let selected = this.selected.split("-")
      selected = selected[selected.length - 1]
      return id == selected
    },
    selectFolder (id) {
      if (this.isSelected(id)) {
        this.$emit("close")
        return
      }
      this.$emit("select", id)
    },
    openFolder (id) {
      let active = this.active
      if (active) active += "-"
      active += id
      this.$emit("set-active", active)
    }
  }
}
</script>

<style lang="scss">
.folders__folder-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  .folders__folder {
    color: rgba(white, 0.75);
    padding: 7px 10px 7px 41px;
    width: 100%;
    border: none;
    background-color: #292a2d;
    transition: all 0.18s;
    overflow: hidden;
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    user-select: none;
    white-space: nowrap;
    display: block;
    text-overflow: ellipsis;
    text-align: left;
    &:hover {
      cursor: pointer;
      background-color: #414245;
      color: white;
    }
    &:active {
      background-color: #484b4e;
      color: white;
    }
  }
  .folders__folder-select {
    width: 40px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    background: transparent;
    z-index: 1;
    border: none;
    padding: 0 0 0 1px;
    svg {
      width: 10px;
      height: 9px;
      color: white;
      transform: scale(0);
      opacity: 0;
      position: absolute;
      transition: all 0.18s;
    }
    &::before {
      content: "";
      position: absolute;
      width: 14px;
      height: 14px;
      border: solid 2px rgba(white, 0.15);
      transition: all 0.18s;
      border-radius: 50%;
    }
    &::after {
      content: "";
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: rgba(white, 0.2);
      opacity: 0;
      transform: scale(0);
      transition: all 0.18s;
    }
    &:hover {
      cursor: pointer;
      svg {
        opacity: 1;
        transform: none;
      }
      &::before {
        border-color: transparent;
      }
      &::after {
        opacity: 1;
        transform: none;
      }
      & + .folders__folder {
        color: white;
      }
    }
    &:active {
      svg {
        opacity: 1;
        transform: none;
      }
      &::before {
        border-color: transparent;
      }
      &::after {
        opacity: 1;
        transform: none;
        background: rgba(white, 0.4);
      }
    }
  }
  &--highlight {
    .folders__folder {
      background: rgba(#353639, 0.5);
      color: white;
    }
  }
  &--selected {
    .folders__folder-select {
      svg {
        opacity: 1;
        transform: none;
      }
      &::before {
        border-color: transparent;
        background: rgba(white, 0.165);
      }
      &:hover {
        &::before {
          border-color: transparent;
          background: rgba(white, 0.165);
        }
        &::after {
          display: none;
        }
      }
      &:active {
        &::before {
          background: rgba(white, 0.4);
        }
        &::after {
          display: none;
        }
      }
    }
    .folders__folder {
      color: white;
      background: #353639;
    }
  }
}
.folders__list {
  &--selecting {
    .folders__folder-wrapper {
      &--selected:not(:hover):not(:active) {
        .folders__folder-select {
          &::before {
            border-color: rgba(white, 0.15);
            background: transparent;
          }
          svg {
            opacity: 0;
            transform: scale(0);
          }
        }
      }
    }
  }
}
</style>