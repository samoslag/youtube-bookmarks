<template>
    <a
      :href="!active && data.url ? data.url : null"
      class="bookmark"
      :class="{'bookmark--active': active}"
      @click="open(data.url)"
      :title="data.title"
    >
        <div
            :style="'background-image: url(' + 'https://img.youtube.com/vi/' + data.youtubeId + '/default.jpg' + ')'"
            class="bookmark__background-image"
        />
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
        playing: { type: Boolean, default: false }
    },
    methods: {
        open (url) {
            this.$emit("open")
            if (this.active) return
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
.bookmark {
    width: 100%;
    text-decoration: none;
    color: white;
    transition: all 0.18s;
    position: relative;
    animation: bookmark 0.25s;
    overflow: hidden;
    background-color: #292a2d;
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
            .bookmark__image {
                width: 100%;
                height: 100%;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                transition: all 0.18s;
            }
            .bookmark__play-animation {
                position: absolute;
                z-index: 1;
            }
        }
        .bookmark__title {
            font-size: 13px;
            line-height: 1.3;
            padding: 2px 15px 0 10px;
            color: rgba(white, 0.75);
            transition: all 0.18s;
            max-height: 50px;
            overflow: hidden;
            font-weight: 500;
            user-select: none;
        }
    }
    .bookmark__background-image {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 500%;
        z-index: 0;
        background-size: cover;
        background-position: center;
        opacity: 0;
        transition: all 0.18s;
        &::after {
            content: "";
            position: absolute;
            width: 20%;
            height: 100%;
            top: 0;
            left: 0;
            background: linear-gradient(90deg, rgba(#414245, 0), #414245 50%);
        }
    }
    &:hover,
    &:active,
    &:focus {
        background-color: #414245;
        .bookmark__background-image {
            opacity: 0.2;
        }
        .bookmark__title {
            color: white;
        }
    }
    &:active {
        background-color: #484b4e;
    }
    &--active {
        position: sticky;
        top: 36px;
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
        .bookmark__background-image {
            opacity: 0.2;
        }
    }
}
</style>