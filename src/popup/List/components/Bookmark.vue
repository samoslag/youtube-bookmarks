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
        <div class="bookmark__content">
            <div class="bookmark__image-container">
                <div
                    :style="'background-image: url(' + 'https://img.youtube.com/vi/' + data.youtubeId + '/default.jpg' + ')'"
                    class="bookmark__image"
                />
                <Animation
                    v-if="active"
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
export default {
    components: { Animation },
    props: {
        data: { type: Object, default: () => {} },
        active: { type: Boolean, default: false },
        playing: { type: Boolean, default: false },
        focused: { type: Boolean, default: false }
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
    cursor: pointer;
    background-color: #414245;
    .bookmark__content {
        .bookmark__title {
            color: white;
        }
    }
}
.bookmark {
    width: 100%;
    text-decoration: none;
    color: white;
    transition: all 0.125s;
    position: relative;
    animation: bookmark 0.25s;
    overflow: hidden;
    background-color: #292a2d;
    cursor: default;
    @keyframes bookmark {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    .bookmark__content {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 5px 10px;
        position: relative;
        z-index: 1;
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
        background: #353639;
        cursor: pointer;
        animation: none;
        .bookmark__content {
            .bookmark__title {
                color: white;
            }
        }
    }
    &--focused {
        @include bookmark-hover();
    }
}
.list__bookmarks {
    &:not(.list__bookmarks--focused) {
        .bookmark {
            &:active,
            &:hover {
                @include bookmark-hover();
            }
            &:active {
                background-color: #484b4e;
            }
        }
    }
}
</style>
