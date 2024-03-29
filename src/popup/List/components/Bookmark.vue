<template>
    <a
        :href="!active && data.url ? data.url : null"
        class="bookmark"
        :class="{
            'bookmark--active': active,
            'bookmark--focused': focused,
            'bookmark--unbookmarked': unbookmarked,
            'bookmark--missing': notFound
        }"
        :title="data.title"
        tabindex="-1"
        @click="open()"
    >
        <Button
            v-if="unbookmarked && !notFound"
            class="bookmark__add-btn"
            title="Add bookmark"
            @click.stop="$emit('add-bookmark')"
        >
            <Icon icon="plus"/>
        </Button>

        <Button
            v-if="notFound && !unbookmarked && canAdd"
            class="bookmark__replace-btn"
            title="Replace bookmark"
            @click.stop="$emit('replace-bookmark')"
        >
            <Icon icon="sync"/>
        </Button>
        <div class="bookmark__content">
            <div class="bookmark__image-container">
                <img
                    v-if="!notFound"
                    :src="'https://img.youtube.com/vi/' + data.youtubeId + '/mqdefault.jpg'"
                    class="bookmark__image"
                    ref="thumbnail"
                    @load="checkValidity"
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
import Button from "./../../components/Button"
import Icon from "./../../components/Icon"
export default {
    components: { Animation, Button, Icon },
    props: {
        data: { type: Object, default: () => {} },
        active: { type: Boolean, default: false },
        playing: { type: Boolean, default: false },
        focused: { type: Boolean, default: false },
        unbookmarked: { type: Boolean, default: false },
        canAdd: { type: Boolean, default: false }
    },
    data () {
        return {
            notFound: false
        }
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
        },
        checkValidity () {
            const thumbnail = this.$refs.thumbnail
            if (thumbnail && thumbnail.naturalWidth === 120) {
                this.notFound = true
                this.$emit("not-found")
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
    .bookmark__add-btn,
    .bookmark__replace-btn {
        position: absolute;
        border-radius: 3px;
        z-index: 2;
        padding: 0;
        margin: 0;
        svg {
            width: 16px;
            height: 16px;
        }
    }
    .bookmark__add-btn {
        left: 49px;
        width: 24px;
        height: 24px;
        &:not(:hover):not(:active) {
            background: rgba(#292a2d, 0.9);
            color: rgba(white, 0.9);
        }
    }
    .bookmark__replace-btn {
        left: 43px;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        color: white;
        &:hover {
            background-color: #484b4e;
        }
        &:active {
            background-color: lighten(#484b4e, 4%);
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
        transition: all 0.1s;
        .bookmark__image-container {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 100px;
            min-width: 100px;
            height: 56px;
            .bookmark__image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 2px;
            }
            .bookmark__play-animation {
                position: absolute;
                z-index: 1;
            }
            .bookmark__play-icon {
                position: absolute;
                color: rgba(white, 1);
                width: 17px;
                height: 17px;
                z-index: 1;
                transition: all 0.1s;
                opacity: 0;
            }
            &:hover {
                .bookmark__play-icon {
                    opacity: 0.8;
                }
            }
        }
        .bookmark__title {
            font-size: 13px;
            line-height: 17px;
            max-height: 34px;
            padding: 0 15px 0 11px;
            margin-top: 3px;
            color: rgba(white, 0.75);
            transition: all 0.1s;
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
            .bookmark__image-container {
                .bookmark__play-icon {
                    opacity: 0.8;
                }
            }
        }
    }
    &--unbookmarked {
        .bookmark__content {
            .bookmark__image-container {
                .bookmark__play-animation {
                    width: 16px;
                    height: 16px;
                    left: 5px;
                    bottom: 5px;
                }
            }
        }
    }
    &--missing {
        .bookmark__content {
            .bookmark__image-container {
                border-radius: 2px;
                background: #353639;
            }
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
    &--missing {
        .bookmark {
            &--active {
                bottom: 34px;
            }
        }
    }
}
</style>
