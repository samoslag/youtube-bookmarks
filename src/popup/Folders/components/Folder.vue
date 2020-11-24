<template>
  <div
    class="folders__folder-wrapper"
    :class="{
      'folders__folder-wrapper--highlight': isInSelected,
      'folders__folder-wrapper--selected': isSelected,
      'folders__folder-wrapper--disabled': !hasId
    }"
  >
    <button
      class="folders__folder-icon"
      :title="'Open ' + data.title"
      @click="openFolder()"
    >
      <Icon :icon="hasId ? 'folder' : 'bookmark'" class="folders__folder-icon-default"/>
      <Icon v-if="isSelected" icon="check" class="folders__folder-icon-selected"/>
    </button>
    <button
      class="folders__folder"
      :title="'Select ' + data.title"
      @click="selectFolder()"
    >{{ data.title }}</button>
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
  computed: {
    isInSelected () {
      const id = this.data.id
      let selected = this.selected.split("-")
      return selected.includes(id)
    },
    isSelected () {
      const id = this.data.id
      let selected = this.selected.split("-")
      selected = selected[selected.length - 1]
      return id == selected
    },
    hasId () {
      return !!this.data.id
    }
  },
  methods: {
    selectFolder () {
      const id = this.data.id
      if (this.isSelected) {
        this.$emit("close")
        return
      }
      this.$emit("select", id)
    },
    openFolder () {
      const id = this.data.id
      if (!this.hasId) return
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
    padding: 8px 10px 8px 41px;
    width: 100%;
    border: none;
    background-color: #292a2d;
    transition: all 0.125s;
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
  .folders__folder-icon {
    width: 40px;
    height: 34px;
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
      color: rgba(white, 0.25);
      position: absolute;
      transition: all 0.125s;
    }
    .folders__folder-icon-default {
      width: 16px;
    }
    .folders__folder-icon-selected {
      opacity: 0;
      transform: scale(0);
      width: 14px;
    }
    &:hover {
      cursor: pointer;
      svg {
        color: rgba(white, 0.6);
      }
      & + .folders__folder {
        color: white;
      }
    }
    &:active {
      svg {
        color: rgba(white, 0.8);
      }
      & + .folders__folder {
        color: white;
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
    .folders__folder-icon {
      .folders__folder-icon-default {
        opacity: 0;
        transform: scale(0);
      }
      .folders__folder-icon-selected {
        opacity: 1;
        transform: none;
        color: rgba(white, 0.6);
      }
      &:hover {
        .folders__folder-icon-default {
          opacity: 1;
          transform: none;
          color: rgba(white, 0.6);
        }
        .folders__folder-icon-selected {
          opacity: 0;
          transform: scale(0);
        }
      }
      &:active {
        .folders__folder-icon-default {
          opacity: 1;
          transform: none;
          color: rgba(white, 0.8);
        }
        .folders__folder-icon-selected {
          opacity: 0;
          transform: scale(0);
        }
      }
    }
    .folders__folder {
      color: white;
      background: #353639;
    }
  }
  &--disabled {
    .folders__folder-icon {
      pointer-events: none;
      .folders__folder-icon-default {
        width: 12px;
      }
    }
  }
}
</style>