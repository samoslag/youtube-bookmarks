<template>
  <a
      :href="data.url"
      class="bookmark"
      @click="openUrl(data.url)"
      :title="data.title"
  >
      <div
          :style="'background-image: url(' + 'https://img.youtube.com/vi/' + data.youtubeId + '/default.jpg' + ')'"
          class="bookmark__background-image"
      />
      <div class="bookmark__content">
          <div class="bookmark__image-container">
              <img
                  :src="'https://img.youtube.com/vi/' + data.youtubeId + '/default.jpg'"
                  class="bookmark__image"
              />
          </div>
          <div class="bookmark__title">{{ data.title }}</div>
      </div>
  </a>
</template>

<script>
export default {
  props: {
        data: { type: Object, default: () => {} }
    },
    methods: {
        openUrl (url) {
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
            .bookmark__image {
                width: 100px;
                height: 56px;
                object-fit: cover;
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
    &:hover {
        background-color: #414245;
    }

    &:hover,
    &:active {
        .bookmark__title {

            color: white;
        }
    }

    &:hover .bookmark__background-image {
        opacity: 0.2;
    }

    &:active {
        background-color: #484b4e;
    }
}
</style>