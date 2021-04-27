<template>
  <div
    class="not-found-alert"
    :class="{'not-found-alert--open': open}"
  >
    <button
      class="not-found-alert__head"
      @click="openList()"
    >
      <div class="not-found-alert__title">
        <Icon icon="exclemation-circle"/>
        <span :title="title">{{ title }}</span>
      </div>
      <button
        v-if="open"
        class="not-found-alert__close-btn"
        @click.stop="closeList()"
        title="Close"
      >
        <Icon icon="times"/>
      </button>
    </button>

    <Expand>
      <div v-if="open" class="not-found-alert__list">
        <button
          v-for="item in list"
          :key="item.id"
          class="not-found-alert__item"
          :title="item.title"
          @click="selectBookmark(item)"
        >{{ item.title }}</button>
      </div>
    </Expand>
  </div>
</template>

<script>
import Icon from "./../../components/Icon"
import Expand from "./../../components/Expand"

export default {
  components: { Icon, Expand },
  data () {
    return {
      open: false
    }
  },
  props: {
    list: { type: Array, default () {} }
  },
  computed: {
    title () {
      const count = this.list.length
      
      let text = "bookmark is"
      if (count > 1) text = "bookmarks are"

      return `${count} ${text} no longer available.`
    }
  },
  methods: {
    openList () {
      if (!this.open) this.open = true
    },
    closeList () {
      this.open = false
    },
    selectBookmark (bookmark) {
      this.open = false
      this.$emit("select", bookmark.id)
    }
  }
}
</script>

<style lang="scss">
.not-found-alert {
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 3;
  animation: not-found-alert 0.2s;
  @keyframes not-found-alert {
    from {
      transform: translateY(35px);
    }
    to {
      transform: none;
    }
  }
  .not-found-alert__head {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background: #2f3033;
    border: none;
    padding: 0;
    position: relative;
    .not-found-alert__title {
      font-size: 13px;
      line-height: 17px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      text-align: left;
      padding: 0 10px;
      height: 34px;
      background: transparent;
      width: 100%;
      transition: all 0.1s;
      span {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgba(white, 0.75);
        transition: all 0.1s;
        padding-right: 25px;
      }
      svg {
        width: 16px;
        height: 16px;
        min-width: 16px;
        margin-right: 8px;
        color: rgba(white, 0.3);
        transition: all 0.1s;
      }
    }
    .not-found-alert__close-btn {
      padding: 5px;
      position: absolute;
      right: 7px;
      margin-left: auto;
      background: transparent;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: rgba(white, 0.5);
      transition: color 0.125s;
      animation: not-found-alert-close 0.2s;
      @keyframes not-found-alert-close {
        from {
          opacity: 0.25;
          transform: scale(0.75);
        }
      }
      svg {
        position: relative;
        z-index: 1;
        width: 10px;
      }
      &::after {
        content: "";
        position: absolute;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background:  #484b4e;
        opacity: 0;
        transition: all 0.125s;
      }
      &:hover {
        color: rgba(white, 0.8);
        transition: none;
        &::after {
            transition: none;
            opacity: 1;
        }
      }
      &:active {
        color: rgba(white, 0.95);
        transition: all 0.125s;
        &::after {
          transition: all 0.125s;
          background:  #56575b;
          opacity: 1;
        }
      }
    }
  }
  .not-found-alert__list {
    width: 100%;
    overflow: auto;
    max-height: calc(100vh - 34px);
    .not-found-alert__item {
      width: 100%;
      font-size: 13px;
      font-weight: 400;
      line-height: 18px;
      background: #2f3033;
      padding: 7px 10px;
      color: rgba(white, 0.75);
      border: none;
      text-align: left;
      white-space: nowrap;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover {
        transition: all 0.05s;
        color: white;
        background: #414245;
        cursor: pointer;
      }
      &:active {
        color: white;
        background: #484b4e;
      }
    }
  }
  &--open {
    .not-found-alert__head {
      .not-found-alert__title {
        background: #3b3c3f;
        span {
          color: white;
        }
        svg {
          color: rgba(white, 0.5);
        }
      }
    }
  }
  &:not(.not-found-alert--open) {
    .not-found-alert__head {
      .not-found-alert__title {
        &:hover {
          cursor: pointer;
          transition: all 0.05s;
          background: #414245;
          span {
            transition: all 0.05s;
            color: white;
          }
          svg {
            transition: all 0.05s;
            color: rgba(white, 0.75);
          }
        }
        &:active {
          background: #484b4e;
          span {
            color: white;
          }
          svg {
            color: rgba(white, 0.95);
          }
        }
      }
    }
  }
}
</style>