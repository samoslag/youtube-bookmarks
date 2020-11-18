<template>
  <div class="search">
    <button
        class="search__change-folder"
        @click="$emit('change-folder')"
        title="Select folder"
    >
        <Icon icon="bars"/>
        <span v-if="selectedFolderTitle">{{ selectedFolderTitle }}</span>
    </button>
    <div class="search__input-wrapper">
        <button
            class="search__icon"
            :class="{'search__clear': value}"
            @click="clear()"
            title="Clear search"
            :tabindex="value ? '0' : '-1'"
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
        value: { type: String, default: "" },
        selectedFolderTitle: { type: String, default: "Bookmarks" }
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
            left: 7px;
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
            padding: 0 10px 0 32px;
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
        padding: 0 12px;
        height: 37px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        background: transparent;
        border: none;
        border-right: solid 1px transparent;
        transition: all 0.18s;
        max-width: 50%;
        position: relative;
        svg {
            color: rgba(white, 0.3);
            height: 16px;
            transform: translateY(-1px);
            transition: all 0.18s;
        }
        span {
            color: rgba(white, 0.75);
            transition: all 0.18s;
            font-size: 13px;
            line-height: 1;
            padding-left: 10px;
            white-space: nowrap;
            max-width: calc(100% - 14px);
            text-overflow: ellipsis;
            overflow: hidden;
            text-align: left;
            font-weight: 500;
        }
        &:hover {
            cursor: pointer;
            background: #414245;
            border-color: #414245;
            svg {
                color: rgba(white, 0.75);
            }
            span {
                color: white;
            }
            &::after {
                opacity: 0;
            }
        }
        &:active {
            cursor: pointer;
            background: #484b4e;
            border-color: #484b4e;
            svg {
                color: rgba(white, 0.95);
            }
            span {
                color: white;
            }
            &::after {
                opacity: 0;
            }
        }
        &::after {
            content: "";
            position: absolute;
            right: -1px;
            height: 50%;
            width: 1px;
            background: rgba(#414245, 0.75);
            transition: all 0.18s;
        }
    }
}
</style>