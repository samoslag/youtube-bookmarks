<template>
  <div class="list">
    <Search
        v-if="bookmarks.length > 0"
        v-model="filter"
        :selectedFolderTitle="selectedFolderTitle"
        @change-folder="$emit('change-folder')"
        @input="
            focused = null
            initFocused = null
        "
    />
    <div
        v-if="list.length > 0"
        class="list__bookmarks"
        :class="{
            'list__bookmarks--focused': focused !== null,
            'list__bookmarks--missing': !filter && notFound.length
        }"
        @mousemove="
            focused = null
            initFocused = null
        "
    >
        <Bookmark
            v-for="(item, index) in list"
            :key="'bookmark-' + item.id"
            :ref="'bookmark-' + index"
            :data="item"
            :active="activeTab && activeTab.youtubeId === item.youtubeId"
            :playing="activeTab && activeTab.playing"
            :focused="focused === index"
            :unbookmarked="item.unbookmarked"
            @open="activeTab && activeTab.youtubeId === item.youtubeId ? scrollToItem(index) : false"
            @active="
                scrollToItem(index, 'auto')
                initFocused = index
                activeBookmark = index
            "
            @remove-active="activeBookmark = null"
            @set-active="$nextTick(() => { activeBookmark = index })"
            @add-bookmark="addBookmark(activeTab)"
            @not-found="addBookmarkToNotFound(item)"
        />
    </div>
    <EmptyNotice
        v-if="loaded && ((!bookmarks || bookmarks.length <= 0) || (list.length <= 0 && filter))"
        :text="filter ? 'Search couldn\'t find any matching bookmarks.' : 'Your bookmarks list is empty.'"
        :buttons="filter ? null : [{ text: 'Select folder', action: () => { $emit('change-folder') }}]"
    />
    <NotFoundAlert
        v-if="!filter && notFound.length"
        :key="notFound.length"
        :list="notFound"
        @select="scrollToMissingItem"
        @delete="deleteBookmark"
    />
  </div>
</template>

<script>
import Search from "./components/Search"
import Bookmark from "./components/Bookmark"
import EmptyNotice from "./../components/EmptyNotice"
import NotFoundAlert from "./components/NotFoundAlert"

export default {
    components: { Search, Bookmark, EmptyNotice, NotFoundAlert },
    props: {
        selectedFolder: { type: String, default: "" }
    },
    data () {
        return {
            filter: "",
            loaded: false,
            bookmarks: [],
            activeTab: null,
            activeBookmark: null,
            selectedFolderTitle: "",
            focused: null,
            initFocused: null,
            notFound: []
        }
    },
    computed: {
        list () {
            let output = []
            if (!this.filter) {
                output = [ ...this.bookmarks ]
                if (this.activeTab && !output.find(bookmark => bookmark.youtubeId === this.activeTab.youtubeId)) {
                    output.unshift({
                        ...this.activeTab,
                        unbookmarked: true
                    })
                }
            } else {
                let filter = this.filter.toLowerCase().trim().split(" ")
                let list = [ ...this.bookmarks ]
                if (this.activeTab && !list.find(bookmark => bookmark.youtubeId === this.activeTab.youtubeId)) {
                    list.unshift({
                        ...this.activeTab,
                        unbookmarked: true
                    })
                }
                list = list.filter((item) => {
                    let title = item.title.toLowerCase().trim().split(" ")
                    let fullMatch = true
                    
                    for (let i = 0; i < filter.length; i++) {
                        let match = false
                        for (let j = 0; j < title.length; j++) {
                            if (title[j].indexOf(filter[i]) > -1) {
                                match = true
                                title.splice(j, 1)
                                break
                            }
                        }
                        if (!match) {
                            fullMatch = false
                            break
                        }
                    }
                    
                    if (fullMatch) return item
                })

                output = list
            }

            return output
        }
    },
    created () {
        this.getActiveTab()
        this.getBookmarks()
        this.setListeners()

        // eslint-disable-next-line no-undef
        chrome.tabs.onUpdated.addListener(() => { this.getActiveTab() })
        
        window.GetList = () => { console.log(this.generateOutput()) }
    },
    beforeDestroy () {
        this.removeListeners()
    },
    methods: {
        getBookmarks () {
            // eslint-disable-next-line no-undef
            chrome.bookmarks.getTree((bookmarks) => {
                this.notFound = []
                this.bookmarks = this.getYoutubeBookmarks(bookmarks)
                this.loaded = true
            })
        },
        getYoutubeBookmarks (bookmarks) {
            try {
                const data = [ ...bookmarks ]
                const all = data.find(item => item.id === "0").children
                const folders = all.find(item => item.title.toLowerCase() === "bookmarks bar").children
                const selectedFolder = this.getSelectedFolder(folders)
                let output = []
                for (let i = 0; i < selectedFolder.length; i++) {
                    let item = { ...selectedFolder[i] }
                    const exists = output.find(existing => item.url === existing.url)
                    if (!exists && this.isYoutube(item)) {
                        item.youtubeId = this.getYoutubeId(item)
                        item.title = this.cleanTitle(item)
                        output.push(item)
                    }

                }
                return output
            // eslint-disable-next-line no-empty
            } catch {}
            return []
        },
        getSelectedFolder (folders) {
            if (this.selectedFolder === "") return folders
            
            let path = this.selectedFolder.split("-")
            if (path.length > 0) {
                let currentFolder = folders
                for (let i = 0; i < path.length; i++) {
                    const nextFolderId = path[i]
                    let folder
                    try { folder = currentFolder.find(item => item.id === nextFolderId) }
                    catch { return [] }
                    if (folder === undefined) return []
                    if (i + 1 === path.length) {
                        this.selectedFolderTitle = folder.title
                    }
                    currentFolder = folder.children
                }
                return currentFolder
            }
            return []
        },
        isYoutube (data) {
            const url = data.url
            if (data.title && url) {
                let regExp = /^(?:https?:\/\/)?(?:m\.|music\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
                if (url.match(regExp)) {
                    return true
                }
            }
            return false
        },
        getYoutubeId(data) {
            let url = data.url
            let id = ""
            url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)
            if (url[2] !== undefined) {
                id = url[2].split(/[^0-9a-z_-]/i)
                id = id[0]
            } else { id = url }

            return id
        },
        cleanTitle (data) {
            let title = data.title
            return title.split(" - YouTube")[0]
        },
        getActiveTab () {
            // eslint-disable-next-line no-undef
            chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
                const activeTab = tabs[0]
                if (this.isYoutube(activeTab)) {
                    this.activeTab = {
                        title: this.cleanTitle(activeTab),
                        youtubeId: this.getYoutubeId(activeTab),
                        playing: activeTab.audible,
                        url: activeTab.url,
                        originalTitle: activeTab.title
                    }
                }
            })
        },
        scrollToItem (index, behavior = "smooth") {
            const itemHeight = 66
            const headerHeight = 37
            const padding = 6
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
            const offset = Math.ceil(index * itemHeight + padding - ((vh - headerHeight - itemHeight) / 2))
            window.scroll({ top: offset, left: 0, behavior })
        },
        setListeners () {
            document.addEventListener("keydown", this.handleKey)
        },
        removeListeners () {
            document.removeEventListener("keydown", this.handleKey)
        },
        handleKey (event) {
            const arrowUp = 38
            const arrowDown = 40
            const enter = 13
            if (event.keyCode === enter && this.focused !== null && this.focused > -1) {
                event.preventDefault()
                const bookmark = this.$refs["bookmark-" + this.focused][0]
                if (bookmark) bookmark.open()
                return
            }
            if (event.keyCode === arrowUp || event.keyCode === arrowDown) {
                event.preventDefault()

                let currentFocused
                if (this.initFocused !== null) {
                    currentFocused = this.initFocused
                    this.initFocused = null
                } else {
                    currentFocused = this.focused !== null ? this.focused : -1
                }

                let focused
                if (event.keyCode === arrowUp) {
                    focused = currentFocused - 1
                    if (focused < 0) focused = this.list.length - 1
                }
                if (event.keyCode === arrowDown) {
                    focused = currentFocused + 1
                    if (focused > (this.list.length - 1)) focused = 0
                }

                this.focused = focused
                
                this.scrollToFocused()
            }
        },
        scrollToFocused () {
            const index = this.focused
            const itemHeight = 66
            const headerHeight = 37
            const padding = 5
            const viewportOffset = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0)
            const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
            const itemPosition = this.$refs["bookmark-" + index][0].$el.getBoundingClientRect().top + viewportOffset
            const itemOffset = Math.ceil(index * itemHeight + padding)
            const activeBookmark = this.$refs["bookmark-" + this.activeBookmark]
            let additionalOffset = 0
            if (activeBookmark && activeBookmark[0]) {
                const activeOffset = activeBookmark[0].$el.getBoundingClientRect().top
                if (activeOffset === headerHeight && itemPosition - viewportOffset < itemHeight + headerHeight) additionalOffset = itemHeight
                if (activeOffset === viewportHeight - itemHeight && itemPosition - viewportOffset > activeOffset - itemHeight) additionalOffset = itemHeight * -1
            }
            let offset = null
            if (itemPosition - headerHeight < (additionalOffset > 0 ? viewportOffset + additionalOffset : viewportOffset)) {
                offset = itemOffset - additionalOffset
            } else if (itemPosition + itemHeight > viewportOffset + (additionalOffset < 0 ? viewportHeight + additionalOffset : viewportHeight)) {
                offset = itemOffset - (viewportHeight - itemHeight - headerHeight) - additionalOffset
            }

            if (offset) window.scroll({ top: offset, left: 0, behavior: "smooth" })
        },
        addBookmark (tab) {
            let url = this.clearTimestamp(tab.url)
            // eslint-disable-next-line no-undef
            chrome.bookmarks.create({
                parentId: this.getSelectedFolderId(),
                title: tab.originalTitle,
                url
            }, res => {
                // eslint-disable-next-line no-undef
                chrome.bookmarks.move(res.id, { index: 0 }, () => { this.getBookmarks() })
            })
        },
        deleteBookmark (id) {
            // eslint-disable-next-line no-undef
            chrome.bookmarks.remove(id, () => { this.getBookmarks() })
        },
        getSelectedFolderId () {
            if (this.selectedFolder) {
                const folders = this.selectedFolder.split("-")
                return folders[folders.length - 1]
            }
            return null
        },
        clearTimestamp (url) {
            if (url.split(".com/").length === 2) {
                url = url.split(".com/")[0] + ".com/watch?v=" + this.getYoutubeId({ url })
            }
            return url
        },
        generateOutput () {
            const getDate = () => {
                const now = new Date
                let d = now.getDate()
                if (d < 10) d = `0${d}`
                let m = now.getMonth() + 1
                if (m < 10) m = `0${m}`
                const y = now.getFullYear()
                return `${m}-${d}-${y}`
            }
            const getList = () => {
                let list = ""
                this.bookmarks.forEach(bookmark => { list += `\n\n${bookmark.title}\n${bookmark.url}` })
                return list
            }
            const output = `Folder: ${this.selectedFolderTitle}\nDate: ${getDate()}\nCount: ${this.bookmarks.length}${getList()}`
            return output
        },
        addBookmarkToNotFound (bookmark) {
            if (!bookmark.id) return

            const exists = this.notFound.find(item => item.url === bookmark.url) !== undefined
            if (!exists) this.notFound.push(bookmark)
        },
        scrollToMissingItem (id) {
            const item = this.list.find(item => item.id === id)
            if (item) this.scrollToItem(this.list.indexOf(item))
        }
    }
}
</script>

<style lang="scss">
.list {
    width: 100%;
    .list__bookmarks {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 5px 0;
    }
}
</style>
