<template>
  <div class="search">
    <button
        class="search__icon"
        :class="{'search__clear': value}"
        @click="clear()"
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
import Icon from "./../../components/Icon"
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
        this.focusInput()
    },
    methods: {
        focusInput () {
            this.$refs.input.focus()
        },
        clear () {
            if (this.value) {
                this.$emit("input", "")
                this.focusInput()
            }
        }
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
        svg {
            width: 13px;
        }
        &.search__clear {
            pointer-events: initial;
            cursor: pointer;
            color: rgba(white, 0.4);
            transition: all 0.18s;
            display: flex;
            justify-content: center;
            align-items: center;
            svg {
                position: relative;
                z-index: 1;
                width: 11px;
            }
            &::after {
                content: "";
                position: absolute;
                width: 25px;
                height: 25px;
                border-radius: 50%;
                background: rgba(white, 0.125);
                opacity: 0;
                transform: scale(0);
                transition: all 0.18s;
            }
            &:hover {
                color: rgba(white, 0.8);
                &::after {
                    opacity: 1;
                    transform: none;
                }
            }
            &:active {
                color: rgba(white, 0.95);
                &::after {
                    background: rgba(white, 0.175);
                    opacity: 1;
                    transform: scale(0.95);
                }
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