<template>
  <div class="search">
    <button
        class="search__change-folder"
        @click="$emit('change-folder')"
        title="Select folder"
    >
        <Icon icon="bars"/>
    </button>
    <div class="search__input-wrapper">
        <button
            class="search__icon"
            :class="{'search__clear': value}"
            @click="clear()"
            title="Clear search"
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
        if (!this.$root._data.initSearchFocus) {
            this.focusInput()
            this.$root._data.initSearchFocus = true
        } else {
            setTimeout(() => {
                this.focusInput()
            }, 400)
        }
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
    .search__input-wrapper {
        position: relative;
        flex-grow: 1;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        .search__icon {
            position: absolute;
            padding: 5px;
            right: 7px;
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
                transition: color 0.18s;
                transform: translateY(-1px);
                svg {
                    position: relative;
                    z-index: 1;
                    width: 10px;
                }
                &::after {
                    content: "";
                    position: absolute;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: #414245;
                    opacity: 0;
                    transition: all 0.18s;
                }
                &:hover {
                    color: rgba(white, 0.8);
                    &::after {
                        opacity: 1;
                    }
                }
                &:active {
                    color: rgba(white, 0.95);
                    &::after {
                        background:  #484b4e;
                        opacity: 1;
                    }
                }
            }
        }
        .search__input {
            flex-grow: 1;
            height: 37px;
            padding: 0 37px 0 1px;
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
    .search__change-folder {
        width: 38px;
        height: 37px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        background: transparent;
        border: none;
        transition: all 0.18s;
        color: rgba(white, 0.3);
        svg {
            height: 16px;
            transform: translateY(-1px);
        }
        &:hover {
            cursor: pointer;
            background: #414245;
            color: rgba(white, 0.75);
        }
        &:active {
            cursor: pointer;
            background:  #484b4e;
            color: rgba(white, 0.95);
        }
    }
}
</style>