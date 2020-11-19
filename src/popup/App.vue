<template>
  <main v-if="loaded" class="app">
    <transition :name="'view-move-' + animationDirection">
        <div class="app__view" :key="showFolders">
            <List
                v-if="!showFolders"
                :selectedFolder="selectedFolder"
                @change-folder="showFolders = true; animationDirection = 'left'"
            />
            <Folders
                v-if="showFolders"
                v-model="selectedFolder"
                @select="setSelectedFolder"
                @close="showFolders = false; animationDirection = 'right'"
            />
        </div>
    </transition>
  </main>
</template>

<script>
import List from "./List"
import Folders from "./Folders"
export default {
    components: { List, Folders },
    data () {
        return {
            loaded: false,
            showFolders: false,
            selectedFolder: "",
            animationDirection: "right"
        }
    },
    created () {
        document.addEventListener('contextmenu', event => event.preventDefault())
        this.getSelectedFolder()
    },
    methods: {
        getSelectedFolder () {
            // eslint-disable-next-line no-undef
            chrome.storage.local.get(['selectedFolder'], (res) =>  {
                if (res.selectedFolder !== undefined) {
                    this.selectedFolder = res.selectedFolder
                } else {
                    this.setSelectedFolder("")
                }
                this.loaded = true
            })
        },
        setSelectedFolder (value) {
            // eslint-disable-next-line no-undef
            chrome.storage.local.set({ selectedFolder: value })
        }
    }
}
</script>

<style lang="scss">
@import url("../scss/index.scss");
.app {
    width: 100%;
    position: relative;
    .app__view {
        width: 100%;
    }
    .view-move-right-enter-active,
    .view-move-right-leave-active,
    .view-move-left-enter-active,
    .view-move-left-leave-active {
        transition: transform 0.4s !important;
    }
    .view-move-right-leave-active,
    .view-move-left-leave-active {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        overflow: hidden;
    }
    .view-move-right-enter,
    .view-move-left-leave-to {
        transform: translateX(100%);
    }
    .view-move-right-leave-to,
    .view-move-left-enter {
        transform: translateX(-100%);
    }
}
</style>
