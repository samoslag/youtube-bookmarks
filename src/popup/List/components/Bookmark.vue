<template>
    <a
        :href="!active && data.url ? data.url : null"
        class="bookmark"
        :class="{
            'bookmark--active': active,
            'bookmark--focused': focused
        }"
        :title="data.title"
        tabindex="-1"
        @click="open()"
    >
        <Button
            v-if="unbookmarked"
            class="bookmark__add-btn"
            title="Add bookmark"
            @click.stop="$emit('add-bookmark')"
        >
            <Icon icon="plus"/>
        </Button>
        <div class="bookmark__content">
            <div class="bookmark__image-container">
                <div
                    :style="'background-image: url(' + 'https://img.youtube.com/vi/' + data.youtubeId + '/default.jpg' + ')'"
                    class="bookmark__image"
                />
                <Animation
                    v-if="!unbookmarked && active"
                    :show="playing"
                    class="bookmark__play-animation"
                />
            </div>
            <div class="bookmark__title">{{ data.title }}</div>
        </div>
    </a>
</template>

<script>
import Animation from "./Animation"
import Button from "./../../components/Button"
import Icon from "./../../components/Icon"
export default {
    components: { Animation, Button, Icon },
    props: {
        data: { type: Object, default: () => {} },
        active: { type: Boolean, default: false },
        playing: { type: Boolean, default: false },
        focused: { type: Boolean, default: false },
        unbookmarked: { type: Boolean, default: false }
    },
    mounted () {
        if (this.active) this.$emit("active")
    },
    watch: {
        active () {
            if (this.active) this.$emit("set-active", this.data)
            else this.$emit("remove-active", this.data)
        }
    },
    methods: {
        open () {
            this.$emit("open")
            if (this.active) return
            const url = this.data.url
            if (url) {
                // eslint-disable-next-line no-undef
                chrome.tabs.update({ active: true, url })
                window.close()
            }
        }
    }
}
</script>

<style lang="scss">
@mixin bookmark-hover {
    background-color: #414245;
    .bookmark__title {
        color: white;
    }
}
.bookmark {
    width: 100%;
    text-decoration: none;
    color: white;
    position: relative;
    animation: bookmark 0.25s;
    overflow: hidden;
    cursor: default;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    @keyframes bookmark {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    .bookmark__add-btn {
        position: absolute;
        left: 49px;
        z-index: 2;
        padding: 0;
        margin: 0;
        width: 24px;
        height: 24px;
        border-radius: 2px;
        svg {
            width: 16px;
            height: 16px;
        }
    }
    .bookmark__content {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        flex-grow: 1;
        padding: 5px 10px;
        position: relative;
        z-index: 1;
        background-color: #292a2d;
        transition: all 0.125s;
        .bookmark__image-container {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 100px;
            min-width: 100px;
            height: 56px;
            border-radius: 2px;
            .bookmark__image {
                width: 100%;
                height: 100%;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                transition: all 0.125s;
            }
            .bookmark__play-animation {
                position: absolute;
                z-index: 1;
            }
        }
        .bookmark__title {
            font-size: 12.5px;
            line-height: 1.4;
            padding: 2px 15px 0 10px;
            color: rgba(white, 0.75);
            transition: all 0.125s;
            max-height: 53px;
            overflow: hidden;
            font-weight: 500;
            user-select: none;
        }
    }
    &--active {
        position: sticky;
        top: 37px;
        bottom: 0;
        z-index: 3;
        animation: none;
        .bookmark__content {
            background: #353639;
            .bookmark__title {
                color: white;
            }
        }
        &:hover {
            .bookmark__content {
                cursor: default !important;
            }
        }
    }
    &--focused {
        .bookmark__content {
            cursor: pointer;
            @include bookmark-hover();
        }
    }
}
.list__bookmarks {
    &:not(.list__bookmarks--focused) {
        .bookmark {
            .bookmark__content {
                &:active,
                &:hover {
                    cursor: pointer;
                    @include bookmark-hover();
                }
            }
            .bookmark__content {
                &:active {
                    background-color: #484b4e;
                }
            }
        }
    }
}
</style>
