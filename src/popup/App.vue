<template>
  <main>
      <Search v-if="bookmarks.length > 0" v-model="filter"/>
      <div v-if="list.length > 0" class="bookmarks">
          <Bookmark
              v-for="(item, index) in list"
              :key="'bookmark-' + item.id"
              :data="item"
              :active="active && active.youtubeId === item.youtubeId"
              @open="active ? scrollToItem(index) : false"
          />
      </div>
    <EmptyNotice
        v-if="loaded && ((!bookmarks || bookmarks.length <= 0) || (list.length <= 0 && filter))"
        :text="filter ? 'Search couldn\'t find any matching bookmarks.' : 'Your YouTube bookmarks list is empty.'"
    />
  </main>
</template>

<script>
import Search from "./components/Search"
import Bookmark from "./components/Bookmark"
import EmptyNotice from "./components/EmptyNotice"
export default {
    components: { Search, Bookmark, EmptyNotice },
    data () {
        return {
            filter: "",
            loaded: false,
            bookmarks: [],
            active: null
        }
    },
    computed: {
        list () {
            if (!this.filter) {
                return this.bookmarks
            } else {
                let filter = this.filter.toLowerCase().trim().split(" ")
                let list = this.bookmarks.filter((item) => {
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

                return list
            }
        }
    },
    created () {
        this.getActiveTab()
        this.getBookmarks()
    },
    methods: {
        getBookmarks () {
            // eslint-disable-next-line no-undef
            chrome.bookmarks.getTree((bookmarks) => {
                this.bookmarks = this.getYoutubeBookmarks(bookmarks)
                this.loaded = true
            })
        },
        getYoutubeBookmarks (bookmarks) {
            try {
                const data = [ ...bookmarks ]
                const all = data.filter(item => item.id === "0")[0].children
                const folders = all.filter(item => item.title.toLowerCase() === "bookmarks bar")[0].children
                const ytBookmarks = folders.filter(item => item.title.toLowerCase() === "youtube")[0].children
                let output = []
                for (let i = 0; i < ytBookmarks.length; i++) {
                    let item = { ...ytBookmarks[i] }
                    if (this.isYoutube(item)) {
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
        isYoutube (data) {
            const url = data.url
            if (data.title && url) {
                let regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
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
                    this.active = {
                        title: this.cleanTitle(activeTab),
                        youtubeId: this.getYoutubeId(activeTab)
                    }
                }
            })
        },
        scrollToItem (index) {
            const itemHeight = 66
            const offset = index * itemHeight
            window.scroll({ top: offset, left: 0, behavior: "smooth" });
        }
    }
}
</script>

<style lang="scss">
@import url("../scss/index.scss");

.bookmarks {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5px 0;
}
</style>
