<template>
    <div class="menu">
        <div
            v-if="visible"
            ref="menu"
            tabindex="-1"
            class="menu__dropdown"
            :style="`top: ${pos.y}px; left: ${pos.x}px; visibility: ${positioned ? 'visible' : 'hidden'};`"
            @contextmenu.prevent="close()"
        >
            <component
                v-for="(item, index) in items"
                :key="index"
                :is="item.type === 'divider' ? 'div' : 'button'"
                :class="{
                  'menu__item': item.type !== 'divider',
                  'menu__divider': item.type === 'divider'
                }"
                :disabled="item.disabled"
                :title="item.text"
                @click="select(item)"
            >
                <template v-if="item.type !== 'divider'">
                    <div
                      v-if="item.icon"
                      class="menu__item-icon"
                    >
                        <Icon :icon="item.icon"/>
                    </div>
                    <span>{{ item.text }}</span>
                </template>
            </component>
        </div>

        <transition name="overlay">
            <div
                v-if="visible"
                class="menu__overlay"
                @contextmenu.prevent="close()"
                @click="close()"
            />
        </transition>
    </div>
</template>

<script>
import Icon from "./Icon"

export default {
    components: { Icon },
    data () {
        return {
            positioned: false,
            visible: false,
            items: [],
            pos: { x: 0, y: 0 },
            onClose: null
        }
    },
    mounted () {
        document.addEventListener('keydown', this.onKeydown, true)
    },
    beforeDestroy () {
        document.removeEventListener('keydown', this.onKeydown, true)
    },
    methods: {
        open (event, items, onClose) {
            if (event.type === 'contextmenu') event.preventDefault()
            
            this.items = items || []
            this.pos.x = event.clientX
            this.pos.y = event.clientY
            this.visible = true
            this.positioned = false
            this.onClose = onClose || null

            this.$nextTick(() => {
                const el = this.$refs.menu
                if (!el) return
                const rect = el.getBoundingClientRect()
                const VIEWPORT_MARGIN = 10
                const maxX = window.innerWidth - rect.width - VIEWPORT_MARGIN
                const maxY = window.innerHeight - rect.height - VIEWPORT_MARGIN
                this.pos.x = Math.max(VIEWPORT_MARGIN, Math.min(this.pos.x, maxX))
                this.pos.y = Math.max(VIEWPORT_MARGIN, Math.min(this.pos.y, maxY))
                this.positioned = true
            })
        },
        select (item) {
            if (item.disabled) return
            if (typeof item.action === 'function') {
              item.action(item)
              if (item.closeOnAction !== false) this.close(item)
            }
        },
        close () {
            this.visible = false
            if (typeof this.onClose === 'function') {
                this.onClose()
            }
        },
        onKeydown (event) {
            if (!this.visible) return
            if (event.key === "Escape") {
                event.preventDefault()
                this.close()
            }
        }
    }
}
</script>

<style lang="scss">
.menu {
    .menu__dropdown {
        position: fixed;
        z-index: 1001;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: #242528;
        padding: 5px 0;
        .menu__item {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            padding: 6px 30px 6px 12px;
            font-size: 13px;
            line-height: 17px;
            color: rgba(white, 0.7);
            background-color: transparent;
            border: none;
            white-space: nowrap;
            user-select: none;
            font-weight: 500;
            transition: all 0.1s;
            &[disabled] {
              pointer-events: none;
            }
            .menu__item-icon {
                display: flex;
                flex-flow: row nowrap;
                justify-content: center;
                align-items: center;
                color: rgba(white, 0.4);
                margin-right: 11px;
                transition: all 0.1s;
                .icon {
                    height: 13px;
                    width: 13px;
                }
            }
            &:hover {
                cursor: pointer;
                background-color: #343538;
                color: white;
                .menu__item-icon {
                    color: rgba(white, 0.5);
                }
            }
            &:active {
                background-color: #414245;
                color: white;
                .menu__item-icon {
                    color: rgba(white, 0.5);
                }
            }
        }
        .menu__divider {
            width: 100%;
            margin: 5px 0;
            height: 0;
            border-top: solid 1px #343538;
        }
    }
    .menu__overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
    }
}
</style>
