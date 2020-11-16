<template>
  <div class="folders">
    <Head @close="close()"/>
    <div class="folders__list">
      <transition name="breadcrumbs">
        <Breadcrumbs
          v-if="breadcrumbs.length > 0"
          :list="breadcrumbs"
          @select="goBack($event)"
        />
      </transition>
      <div class="folders__list-animation-wrapper">
        <transition :name="'folders-move-' + animationDirection">
          <div :key="active" class="folders__list-content">
            <Folder
              v-for="item in folders"
              :key="item.id"
              :data="item"
              :selected="selected"
              :active="active"
              @set-active="active = $event; animationDirection = 'right'"
              @select="selectFolder($event)"
              @close="close()"
            />
            <EmptyNotice
              v-if="loaded && folders.length <= 0"
              :text="emptyNoticeText"
              :buttons="active ? [
                { text: 'Go back', action: goBack },
                { text: 'Select this folder', action: selectCurrentFolder }
              ] : null"
            />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "./components/Head"
import Breadcrumbs from "./components/Breadcrumbs"
import Folder from "./components/Folder"
import EmptyNotice from "./../components/EmptyNotice"
export default {
  components: { Head, Folder, Breadcrumbs, EmptyNotice },
  model: {
    prop: "selected",
    event: "select"
  },
  props: {
    selected: { type: String, default: "" }
  },
  data () {
    return {
      breadcrumbs: [],
      active: "",
      allFolders: [],
      loaded: false,
      animationDirection: "left"
    }
  },
  computed: {
    folders () {
      if (!this.loaded) return []

      let activeFolder = this.getActiveFolder()
      let output = []
      if (activeFolder) {
        if (this.breadcrumbs.length <= 0) {
          output.push({
            id: "",
            title: "Bookmarks bar"
          })
        }
        const folders = activeFolder.filter(item => !item.url)
        for (let i = 0; i < folders.length; i++) {
          const folder = folders[i]
          output.push({
              id: folder.id,
              title: folder.title
          })
        }
        return output
      }
      return []
    },
    emptyNoticeText () {
      let folder = this.breadcrumbs[this.breadcrumbs.length - 1]
      if (!folder) folder = "Bookmarks"
      return "No folders to select in <b>" + folder + "</b>"
    }
  },
  created () {
    this.setInitialActive()
    this.getBookmarks()
  },
  methods: {
    setInitialActive () {
      this.active = this.selected
      this.goBack()
    },
    getBookmarks () {
      // eslint-disable-next-line no-undef
      chrome.bookmarks.getTree((bookmarks) => {
          this.allFolders = this.getAllFolders(bookmarks)
          this.loaded = true
      })
    },
    getAllFolders (bookmarks) {
      try {
          const data = [ ...bookmarks ]
          const all = data.find(item => item.id === "0").children
          const folders = all.find(item => item.title.toLowerCase() === "bookmarks bar").children
          return folders.filter(item => !item.url)
      // eslint-disable-next-line no-empty
      } catch {}
      return []
    },
    getActiveFolder () {
      let active = this.active
      let path = active.split("-")
      let verifiedPath = [ ...path ]
      let pathChanged = false
      let currentFolder = this.allFolders
      let breadcrumbs = []
      for (let i = 0; i < path.length; i++) {
          const nextFolderId = path[i]
          if (nextFolderId) {
            let folder
            try {
              folder = currentFolder.find(item => item.id === nextFolderId)
            }
            // eslint-disable-next-line no-empty
            catch {}
            if (folder) {
              breadcrumbs.push(folder.title)
              currentFolder = folder.children
            } else {
              if (!pathChanged) verifiedPath.splice(i, verifiedPath.length - i + 1)
            }
          }
      }
      this.active = verifiedPath.join("-")
      this.breadcrumbs = breadcrumbs
      return currentFolder
    },
    goBack (amount = 1) {
      this.animationDirection = "left"
      if (!this.active.includes("-")) {
        this.active = ""
        return
      }
      let path = this.active.split("-")
      path.splice(path.length - amount, amount)
      let newActive = path.join("-")
      this.active = newActive
    },
    close () {
      this.$emit("close")
    },
    selectFolder (id) {
      let value = this.active + (this.active ? "-" : "") + id
      this.setSelected(value)
    },
    selectCurrentFolder () {
      this.setSelected(this.active)
    },
    setSelected (value) {
      this.$emit("select", value)
      this.close()
    }
  }
}
</script>

<style lang="scss">
.folders {
  width: 100%;
  .folders__list {
    width: 100%;
    padding: 8px 0;
    position: relative;
    .folders__list-animation-wrapper {
      width: 100%;
      position: relative;
      .folders__list-content {
        width: 100%;
      } 
    }
    .folders-move-right-enter-active,
    .folders-move-right-leave-active,
    .folders-move-left-enter-active,
    .folders-move-left-leave-active {
      transition: transform 0.4s;
    }
    .folders-move-right-leave-active,
    .folders-move-left-leave-active {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      overflow: hidden;
    }
    .folders-move-right-enter,
    .folders-move-left-leave-to {
      transform: translateX(100%);
    }
    .folders-move-right-leave-to,
    .folders-move-left-enter {
      transform: translateX(-100%);
    }
  }
}
</style>