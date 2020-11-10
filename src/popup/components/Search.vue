<template>
  <div class="search">
    <button
        class="search__icon"
        :class="{'search__clear': value}"
        :key="value ? 'search-icon' : 'search-clear'"
        @click="value ? $emit('input', '') : false"
    >
        <Icon :icon="value ? 'times' : 'search'"/>
    </button>
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
import Icon from "./Icon"
export default {
components: { Icon },
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
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    position: sticky;
    background: #2f3033;
    top: 0;
    z-index: 3;
    .search__icon {
        position: absolute;
        padding: 5px;
        left: 5px;
        background: transparent;
        border: none;
        color: rgba(white, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        animation: search-icon 0.15s;
        @keyframes search-icon {
            from {
                opacity: 0.5;
                transform: scale(0.5);
            }
        }
        svg {
            width: 13px;
        }
        &.search__clear {
            pointer-events: initial;
            cursor: pointer;
            color: #ff3333;
            transition: all 0.18s;
            svg {
                width: 11px;
            }
            &:hover {
                transform: scale(1.2);
            }
            &:active {
                transform: scale(1.1);
                color: #ff4949;
            }
        }
    }
    .search__input {
        width: 100%;
        height: 35px;
        padding: 0 10px 0 30px;
        margin: 0;
        border: 0;
        background: transparent;
        color: white;
        transition: all 0.18s;
        font-size: 13px;
        line-height: 16px;
        font-weight: 500;
        padding-bottom: 2px;
        &::placeholder {
            color: rgba(white, 0.4);
            font-weight: 400;
        }
    }
}
</style>