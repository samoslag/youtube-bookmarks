(function(t){function e(e){for(var i,l,r=e[0],c=e[1],a=e[2],d=0,f=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&f.push(n[l][0]),n[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,a||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],i=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=l(l.s=o[0]))}return t}var i={},n={popup:0},s=[];function l(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=i,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(o,i,function(e){return t[e]}.bind(null,i));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var a=0;a<r.length;a++)e(r[a]);var u=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("0a3d")},"0224":function(t,e,o){},"0381":function(t,e,o){"use strict";o("9ac0")},"04e6":function(t,e,o){"use strict";o("88d9")},"0a3d":function(t,e,o){"use strict";o.r(e);var i=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.loaded?o("main",{staticClass:"app"},[o("transition",{attrs:{name:"view-move-"+t.animationDirection}},[o("div",{key:t.showFolders,staticClass:"app__view"},[t.showFolders?t._e():o("List",{attrs:{selectedFolder:t.selectedFolder},on:{"change-folder":function(e){t.showFolders=!0,t.animationDirection="left"}}}),t.showFolders?o("Folders",{on:{select:t.setSelectedFolder,close:function(e){t.showFolders=!1,t.animationDirection="right"}},model:{value:t.selectedFolder,callback:function(e){t.selectedFolder=e},expression:"selectedFolder"}}):t._e()],1)])],1):t._e()},s=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list"},[t.bookmarks.length>0?o("Search",{attrs:{selectedFolderTitle:t.selectedFolderTitle},on:{"change-folder":function(e){return t.$emit("change-folder")},input:function(e){t.focused=null,t.initFocused=null}},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}):t._e(),t.list.length>0?o("div",{staticClass:"list__bookmarks",class:{"list__bookmarks--focused":null!==t.focused},on:{mousemove:function(e){t.focused=null,t.initFocused=null}}},t._l(t.list,(function(e,i){return o("Bookmark",{key:"bookmark-"+e.id,ref:"bookmark-"+i,refInFor:!0,attrs:{data:e,active:t.activeTab&&t.activeTab.youtubeId===e.youtubeId,playing:t.activeTab&&t.activeTab.playing,focused:t.focused===i,unbookmarked:e.unbookmarked},on:{open:function(o){t.activeTab&&t.activeTab.youtubeId===e.youtubeId&&t.scrollToItem(i)},active:function(e){t.scrollToItem(i,"auto"),t.initFocused=i,t.activeBookmark=i},"remove-active":function(e){t.activeBookmark=null},"set-active":function(e){t.$nextTick((function(){t.activeBookmark=i}))},"add-bookmark":function(e){return t.addBookmark(t.activeTab)}}})})),1):t._e(),t.loaded&&(!t.bookmarks||t.bookmarks.length<=0||t.list.length<=0&&t.filter)?o("EmptyNotice",{attrs:{text:t.filter?"Search couldn't find any matching bookmarks.":"Your bookmarks list is empty.",buttons:t.filter?null:[{text:"Select folder",action:function(){t.$emit("change-folder")}}]}}):t._e()],1)},r=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"search"},[o("button",{staticClass:"search__change-folder",attrs:{title:"Select folder"},on:{click:function(e){return t.$emit("change-folder")}}},[o("Icon",{attrs:{icon:"bars"}}),t.selectedFolderTitle?o("span",[t._v(t._s(t.selectedFolderTitle))]):t._e()],1),o("div",{staticClass:"search__input-wrapper"},[o("button",{staticClass:"search__icon",class:{search__clear:t.value},attrs:{title:"Clear search",tabindex:t.value?"0":"-1"},on:{click:function(e){return t.clear()}}},[o("Icon",{attrs:{icon:t.value?"times":"search"}})],1),o("input",{ref:"input",staticClass:"search__input",attrs:{placeholder:"Search ..."},domProps:{value:t.value},on:{input:function(e){return t.emit(e.target.value)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.clear(e)}}})])])},a=[],u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.icon?o(t.getIcon.import,{tag:"component",staticClass:"icon"}):t._e()},d=[];const f=t=>{try{o("f5e0")("./"+t)}catch(e){return!1}return t};var h={computed:{getIcon(){let t=this.icon+"-icon";return{path:f(t),import:()=>o("19c4")("./"+t)}}},props:{icon:{type:String,default:""}}},m=h,b=(o("64e5"),o("2877")),v=Object(b["a"])(m,u,d,!1,null,null,null),p=v.exports,k={components:{Icon:p},model:{prop:"value",event:"input"},props:{value:{type:String,default:""},selectedFolderTitle:{type:String,default:"Bookmarks"}},mounted(){this.$root._data.initSearchFocus?setTimeout(()=>{this.focusInput()},400):(this.focusInput(),this.$root._data.initSearchFocus=!0)},methods:{focusInput(){this.$refs.input.focus()},clear(t){this.value&&(t&&t.preventDefault(),this.emit(""),this.focusInput())},emit(t){window.scroll({top:0,left:0,behavior:"auto"}),this.$emit("input",t)}}},_=k,g=(o("8a0b"),Object(b["a"])(_,c,a,!1,null,null,null)),y=g.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{staticClass:"bookmark",class:{"bookmark--active":t.active,"bookmark--focused":t.focused},attrs:{href:!t.active&&t.data.url?t.data.url:null,title:t.data.title,tabindex:"-1"},on:{click:function(e){return t.open()}}},[t.unbookmarked?o("Button",{staticClass:"bookmark__add-btn",attrs:{title:"Add bookmark"},on:{click:function(e){return e.stopPropagation(),t.$emit("add-bookmark")}}},[o("Icon",{attrs:{icon:"plus"}})],1):t._e(),o("div",{staticClass:"bookmark__content"},[o("div",{staticClass:"bookmark__image-container"},[o("div",{staticClass:"bookmark__image",style:"background-image: url(https://img.youtube.com/vi/"+t.data.youtubeId+"/default.jpg)"}),!t.unbookmarked&&t.active?o("Animation",{staticClass:"bookmark__play-animation",attrs:{show:t.playing}}):t._e()],1),o("div",{staticClass:"bookmark__title"},[t._v(t._s(t.data.title))])])],1)},x=[],F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"music-animation",class:{"music-animation--hidden":!t.show}},t._l(4,(function(t){return o("div",{key:t,staticClass:"music-animation__bar"})})),0)},C=[],$={props:{show:{type:Boolean,default:!1}}},T=$,I=(o("04e6"),Object(b["a"])(T,F,C,!1,null,null,null)),B=I.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"button",class:{"button--disabled":t.disabled},attrs:{disabled:t.disabled},on:{click:function(e){return t.$emit("click",e)}}},[t._v(" "+t._s(t.text)+" "),t._t("default")],2)},S=[],E={props:{text:{type:String,default:""},disabled:{type:Boolean,default:!1}}},j=E,L=(o("474e"),Object(b["a"])(j,O,S,!1,null,null,null)),M=L.exports,D={components:{Animation:B,Button:M,Icon:p},props:{data:{type:Object,default:()=>{}},active:{type:Boolean,default:!1},playing:{type:Boolean,default:!1},focused:{type:Boolean,default:!1},unbookmarked:{type:Boolean,default:!1}},mounted(){this.active&&this.$emit("active")},watch:{active(){this.active?this.$emit("set-active",this.data):this.$emit("remove-active",this.data)}},methods:{open(){if(this.$emit("open"),this.active)return;const t=this.data.url;t&&(chrome.tabs.update({active:!0,url:t}),window.close())}}},H=D,A=(o("b665"),Object(b["a"])(H,w,x,!1,null,null,null)),z=A.exports,Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"empty-notice"},[t.text?o("p",{staticClass:"empty-notice__text",domProps:{innerHTML:t._s(t.text)}}):t._e(),t.buttons?o("div",{staticClass:"empty-notice__buttons"},t._l(t.buttons,(function(t,e){return o("Button",{key:"button-"+e,staticClass:"empty-notice__button",attrs:{text:t.text,disabled:t.disabled||!1},on:{click:function(e){return t.action()}}})})),1):t._e()])},N=[],P={components:{Button:M},props:{text:{type:String,default:"Your YouTube bookmarks list is empty."},buttons:{type:Array,default:null}}},V=P,U=(o("c669"),Object(b["a"])(V,Y,N,!1,null,null,null)),K=U.exports,J={components:{Search:y,Bookmark:z,EmptyNotice:K},props:{selectedFolder:{type:String,default:""}},data(){return{filter:"",loaded:!1,bookmarks:[],activeTab:null,activeBookmark:null,selectedFolderTitle:"",focused:null,initFocused:null}},computed:{list(){let t=[];if(this.filter){let e=this.filter.toLowerCase().trim().split(" "),o=[...this.bookmarks];this.activeTab&&!o.find(t=>t.youtubeId===this.activeTab.youtubeId)&&o.unshift({...this.activeTab,unbookmarked:!0}),o=o.filter(t=>{let o=t.title.toLowerCase().trim().split(" "),i=!0;for(let n=0;n<e.length;n++){let t=!1;for(let i=0;i<o.length;i++)if(o[i].indexOf(e[n])>-1){t=!0,o.splice(i,1);break}if(!t){i=!1;break}}if(i)return t}),t=o}else t=[...this.bookmarks],this.activeTab&&!t.find(t=>t.youtubeId===this.activeTab.youtubeId)&&t.unshift({...this.activeTab,unbookmarked:!0});return t}},created(){this.getActiveTab(),this.getBookmarks(),this.setListeners(),chrome.tabs.onUpdated.addListener(()=>{this.getActiveTab()})},beforeDestroy(){this.removeListeners()},methods:{getBookmarks(){chrome.bookmarks.getTree(t=>{this.bookmarks=this.getYoutubeBookmarks(t),this.loaded=!0})},getYoutubeBookmarks(t){try{const e=[...t],o=e.find(t=>"0"===t.id).children,i=o.find(t=>"bookmarks bar"===t.title.toLowerCase()).children,n=this.getSelectedFolder(i);let s=[];for(let t=0;t<n.length;t++){let e={...n[t]};const o=s.find(t=>e.url===t.url);!o&&this.isYoutube(e)&&(e.youtubeId=this.getYoutubeId(e),e.title=this.cleanTitle(e),s.push(e))}return s}catch{}return[]},getSelectedFolder(t){if(""===this.selectedFolder)return t;let e=this.selectedFolder.split("-");if(e.length>0){let o=t;for(let t=0;t<e.length;t++){const i=e[t];let n;try{n=o.find(t=>t.id===i)}catch{return[]}if(void 0===n)return[];t+1===e.length&&(this.selectedFolderTitle=n.title),o=n.children}return o}return[]},isYoutube(t){const e=t.url;if(t.title&&e){let t=/^(?:https?:\/\/)?(?:m\.|music\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;if(e.match(t))return!0}return!1},getYoutubeId(t){let e=t.url,o="";return e=e.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/),void 0!==e[2]?(o=e[2].split(/[^0-9a-z_-]/i),o=o[0]):o=e,o},cleanTitle(t){let e=t.title;return e.split(" - YouTube")[0]},getActiveTab(){chrome.tabs.query({currentWindow:!0,active:!0},t=>{const e=t[0];this.isYoutube(e)&&(this.activeTab={title:this.cleanTitle(e),youtubeId:this.getYoutubeId(e),playing:e.audible,url:e.url,originalTitle:e.title})})},scrollToItem(t,e="smooth"){const o=66,i=37,n=6,s=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),l=Math.ceil(t*o+n-(s-i-o)/2);window.scroll({top:l,left:0,behavior:e})},setListeners(){document.addEventListener("keydown",this.handleKey)},removeListeners(){document.removeEventListener("keydown",this.handleKey)},handleKey(t){const e=38,o=40,i=13;if(t.keyCode===i&&null!==this.focused&&this.focused>-1){t.preventDefault();const e=this.$refs["bookmark-"+this.focused][0];e&&e.open()}else if(t.keyCode===e||t.keyCode===o){let i,n;t.preventDefault(),null!==this.initFocused?(i=this.initFocused,this.initFocused=null):i=null!==this.focused?this.focused:-1,t.keyCode===e&&(n=i-1,n<0&&(n=this.list.length-1)),t.keyCode===o&&(n=i+1,n>this.list.length-1&&(n=0)),this.focused=n,this.scrollToFocused()}},scrollToFocused(){const t=this.focused,e=66,o=37,i=5,n=(window.pageYOffset||document.documentElement.scrollTop)-(document.documentElement.clientTop||0),s=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),l=this.$refs["bookmark-"+t][0].$el.getBoundingClientRect().top+n,r=Math.ceil(t*e+i),c=this.$refs["bookmark-"+this.activeBookmark];let a=0;if(c&&c[0]){const t=c[0].$el.getBoundingClientRect().top;t===o&&(a=e),t===s-e&&(a=-1*e)}let u=null;l-o<(a>0?n+a:n)?u=r-a:l+e>n+(a<0?s+a:s)&&(u=r-(s-e-o)-a),u&&window.scroll({top:u,left:0,behavior:"smooth"})},addBookmark(t){chrome.bookmarks.create({parentId:this.getSelectedFolderId(),title:t.originalTitle,url:t.url},t=>{chrome.bookmarks.move(t.id,{index:0},()=>{this.getBookmarks()})})},getSelectedFolderId(){if(this.selectedFolder){const t=this.selectedFolder.split("-");return t[t.length-1]}return null}}},R=J,q=(o("c90e"),Object(b["a"])(R,l,r,!1,null,null,null)),G=q.exports,W=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"folders"},[o("Head",{on:{close:function(e){return t.close()}}}),o("div",{staticClass:"folders__list"},[o("transition",{attrs:{name:"breadcrumbs"}},[t.breadcrumbs.length>0?o("Breadcrumbs",{attrs:{list:t.breadcrumbs},on:{select:function(e){return t.goBack(e)}}}):t._e()],1),o("div",{staticClass:"folders__list-animation-wrapper"},[o("transition",{attrs:{name:"folders-move-"+t.animationDirection}},[o("div",{key:t.active,staticClass:"folders__list-content"},[t._l(t.folders,(function(e){return o("Folder",{key:e.id,attrs:{data:e,selected:t.selected,active:t.active},on:{"set-active":function(e){t.active=e,t.animationDirection="right"},select:function(e){return t.selectFolder(e)},close:function(e){return t.close()}}})})),t.loaded&&t.folders.length<=0?o("EmptyNotice",{attrs:{text:t.emptyNoticeText,buttons:t.active?[{text:"Go back",action:t.goBack},t.active===t.selected?{text:"Selected",disabled:!0}:{text:"Select this folder",action:t.selectCurrentFolder}]:null}}):t._e()],2)])],1)],1)],1)},Q=[],X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"folders__head"},[o("span",{staticClass:"folders__title"},[t._v("Select folder")]),o("button",{staticClass:"folders__close",attrs:{title:"Close"},on:{click:function(e){return t.$emit("close")}}},[o("Icon",{attrs:{icon:"times"}})],1)])},Z=[],tt={components:{Icon:p}},et=tt,ot=(o("3715"),Object(b["a"])(et,X,Z,!1,null,null,null)),it=ot.exports,nt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"breadcrumbs"},[o("button",{staticClass:"breadcrumbs__back",on:{click:function(e){return t.$emit("select")}}},[o("Icon",{attrs:{icon:"chevron-left"}})],1),o("div",{staticClass:"breadcrumbs__list"},[o("div",{staticClass:"breadcrumbs__item",class:{"breadcrumbs__item--current":t.list.length<=0}},[o("button",{staticClass:"breadcrumbs__item-btn",on:{click:function(e){return t.$emit("select",t.list.length)}}},[t._v(" Bookmarks ")]),t.list.length>0?o("Icon",{staticClass:"breadcrumbs__item-next",attrs:{icon:"chevron-left"}}):t._e()],1),t._l(t.list,(function(e,i){return o("div",{key:"breadcrumb-"+i,staticClass:"breadcrumbs__item",class:{"breadcrumbs__item--current":i===t.list.length-1}},[o("button",{staticClass:"breadcrumbs__item-btn",on:{click:function(e){return t.select(i)}}},[t._v(" "+t._s(e)+" ")]),i<t.list.length-1?o("Icon",{staticClass:"breadcrumbs__item-next",attrs:{icon:"chevron-left"}}):t._e()],1)}))],2)])},st=[],lt={components:{Icon:p},props:{list:{type:Array,default:()=>[]}},methods:{select(t){let e=this.list.length-t-1;0!==e&&this.$emit("select",e)}}},rt=lt,ct=(o("6065"),Object(b["a"])(rt,nt,st,!1,null,null,null)),at=ct.exports,ut=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"folders__folder-wrapper",class:{"folders__folder-wrapper--highlight":t.isInSelected,"folders__folder-wrapper--selected":t.isSelected,"folders__folder-wrapper--disabled":!t.hasId}},[o("button",{staticClass:"folders__folder-icon",attrs:{title:"Open "+t.data.title},on:{click:function(e){return t.openFolder()}}},[o("Icon",{staticClass:"folders__folder-icon-default",attrs:{icon:t.hasId?"folder":"bookmark"}}),t.isSelected?o("Icon",{staticClass:"folders__folder-icon-selected",attrs:{icon:"check"}}):t._e()],1),o("button",{staticClass:"folders__folder",attrs:{title:"Select "+t.data.title},on:{click:function(e){return t.selectFolder()}}},[t._v(t._s(t.data.title))])])},dt=[],ft={components:{Icon:p},props:{data:{type:Object,default:()=>{}},selected:{type:String,default:""},active:{type:String,default:""}},computed:{isInSelected(){const t=this.data.id;let e=this.selected.split("-");return e.includes(t)},isSelected(){const t=this.data.id;let e=this.selected.split("-");return e=e[e.length-1],t==e},hasId(){return!!this.data.id}},methods:{selectFolder(){const t=this.data.id;this.isSelected?this.$emit("close"):this.$emit("select",t)},openFolder(){const t=this.data.id;if(!this.hasId)return;let e=this.active;e&&(e+="-"),e+=t,this.$emit("set-active",e)}}},ht=ft,mt=(o("a6b7"),Object(b["a"])(ht,ut,dt,!1,null,null,null)),bt=mt.exports,vt={components:{Head:it,Folder:bt,Breadcrumbs:at,EmptyNotice:K},model:{prop:"selected",event:"select"},props:{selected:{type:String,default:""}},data(){return{breadcrumbs:[],active:"",allFolders:[],loaded:!1,animationDirection:"left"}},computed:{folders(){if(!this.loaded)return[];let t=this.getActiveFolder(),e=[];if(t){this.breadcrumbs.length<=0&&e.push({id:"",title:"Bookmarks bar"});const o=t.filter(t=>!t.url);for(let t=0;t<o.length;t++){const i=o[t];e.push({id:i.id,title:i.title})}return e}return[]},emptyNoticeText(){let t=this.breadcrumbs[this.breadcrumbs.length-1];return t||(t="Bookmarks"),"No folders to select in <b>"+t+"</b>"}},created(){this.setInitialActive(),this.getBookmarks()},methods:{setInitialActive(){this.active=this.selected,this.goBack()},getBookmarks(){chrome.bookmarks.getTree(t=>{this.allFolders=this.getAllFolders(t),this.loaded=!0})},getAllFolders(t){try{const e=[...t],o=e.find(t=>"0"===t.id).children,i=o.find(t=>"bookmarks bar"===t.title.toLowerCase()).children;return i.filter(t=>!t.url)}catch{}return[]},getActiveFolder(){let t=this.active,e=t.split("-"),o=[...e],i=!1,n=this.allFolders,s=[];for(let l=0;l<e.length;l++){const t=e[l];if(t){let e;try{e=n.find(e=>e.id===t)}catch{}e?(s.push(e.title),n=e.children):i||o.splice(l,o.length-l+1)}}return this.active=o.join("-"),this.breadcrumbs=s,n},goBack(t=1){if(this.animationDirection="left",!this.active.includes("-"))return void(this.active="");let e=this.active.split("-");e.splice(e.length-t,t);let o=e.join("-");this.active=o},close(){this.$emit("close")},selectFolder(t){let e=this.active+(this.active?"-":"")+t;this.setSelected(e)},selectCurrentFolder(){this.setSelected(this.active)},setSelected(t){this.$emit("select",t),this.close()}}},pt=vt,kt=(o("0381"),Object(b["a"])(pt,W,Q,!1,null,null,null)),_t=kt.exports,gt={components:{List:G,Folders:_t},data(){return{loaded:!1,showFolders:!1,selectedFolder:"",animationDirection:"right"}},created(){document.addEventListener("contextmenu",t=>t.preventDefault()),this.getSelectedFolder()},methods:{getSelectedFolder(){chrome.storage.local.get(["selectedFolder"],t=>{void 0!==t.selectedFolder?this.selectedFolder=t.selectedFolder:this.setSelectedFolder(""),this.loaded=!0})},setSelectedFolder(t){chrome.storage.local.set({selectedFolder:t})}}},yt=gt,wt=(o("11aa"),Object(b["a"])(yt,n,s,!1,null,null,null)),xt=wt.exports;i["a"].config.productionTip=!1,new i["a"]({render:t=>t(xt),data(){return{initSearchFocus:!1}}}).$mount("#app")},"11aa":function(t,e,o){"use strict";o("0224")},"19c4":function(t,e,o){var i={"./bars-icon":"b7cb","./bars-icon.vue":"b7cb","./bookmark-icon":"c32d","./bookmark-icon.vue":"c32d","./check-icon":"6c5c","./check-icon.vue":"6c5c","./chevron-left-icon":"92fb","./chevron-left-icon.vue":"92fb","./folder-icon":"9e31","./folder-icon.vue":"9e31","./folder-open-icon":"5390","./folder-open-icon.vue":"5390","./play-icon":"9f72","./play-icon.vue":"9f72","./plus-icon":"719a","./plus-icon.vue":"719a","./search-icon":"eb3d","./search-icon.vue":"eb3d","./times-icon":"d9c1","./times-icon.vue":"d9c1"};function n(t){return Promise.resolve().then((function(){if(!o.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}var n=i[t];return o(n)}))}n.keys=function(){return Object.keys(i)},n.id="19c4",t.exports=n},"1dd9":function(t,e,o){},3715:function(t,e,o){"use strict";o("e22f")},"376f":function(t,e,o){},"474e":function(t,e,o){"use strict";o("cbb6")},4776:function(t,e,o){},5390:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"}},[o("g",[o("path",{staticClass:"secondary",attrs:{d:"M69.08 271.63L0 390.05V112a48 48 0 0 1 48-48h160l64 64h160a48 48 0 0 1 48 48v48H152a96.31 96.31 0 0 0-82.92 47.63z"}}),o("path",{staticClass:"primary",attrs:{d:"M152 256h400a24 24 0 0 1 20.73 36.09l-72.46 124.16A64 64 0 0 1 445 448H45a24 24 0 0 1-20.73-36.09l72.45-124.16A64 64 0 0 1 152 256z"}})])])},n=[],s=o("2877"),l={},r=Object(s["a"])(l,i,n,!1,null,null,null);e["default"]=r.exports},6065:function(t,e,o){"use strict";o("376f")},"64e5":function(t,e,o){"use strict";o("4776")},"6c5c":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[o("path",{attrs:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])},n=[],s=o("2877"),l={},r=Object(s["a"])(l,i,n,!1,null,null,null);e["default"]=r.exports},"719a":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"}},[o("path",{attrs:{d:"M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"}})])},n=[],s=o("2877"),l={},r=Object(s["a"])(l,i,n,!1,null,null,null);e["default"]=r.exports},"88d9":function(t,e,o){},"8a0b":function(t,e,o){"use strict";o("1dd9")},"92fb":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[o("path",{attrs:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}})])},n=[],s=o("2877"),l={},r=Object(s["a"])(l,i,n,!1,null,null,null);e["default"]=r.exports},"9ac0":function(t,e,o){},"9bfb":function(t,e,o){},"9e31":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[o("path",{attrs:{d:"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"}})])},n=[],s=o("2877"),l={},r=Object(s["a"])(l,i,n,!1,null,null,null);e["default"]=r.exports},"9f72":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[o("path",{attrs:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}})])},n=[],s=o("2877"),l={},r=Object(s["a"])(l,i,n,!1,null,null,null);e["default"]=r.exports},a6b7:function(t,e,o){"use strict";o("fefa")},b665:function(t,e,o){"use strict";o("f37f")},b7cb:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[o("path",{attrs:{d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])},n=[],s=o("2877"),l={},r=Object(s["a"])(l,i,n,!1,null,null,null);e["default"]=r.exports},c32d:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"}},[o("path",{attrs:{d:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"}})])},n=[],s=o("2877"),l={},r=Object(s["a"])(l,i,n,!1,null,null,null);e["default"]=r.exports},c669:function(t,e,o){"use strict";o("cfa1")},c90e:function(t,e,o){"use strict";o("9bfb")},cbb6:function(t,e,o){},cfa1:function(t,e,o){},d9c1:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[o("path",{attrs:{d:"M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"}})])},n=[],s=o("2877"),l={},r=Object(s["a"])(l,i,n,!1,null,null,null);e["default"]=r.exports},e22f:function(t,e,o){},eb3d:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[o("path",{attrs:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}})])},n=[],s=o("2877"),l={},r=Object(s["a"])(l,i,n,!1,null,null,null);e["default"]=r.exports},f37f:function(t,e,o){},f5e0:function(t,e,o){var i={"./bars-icon":"b7cb","./bars-icon.vue":"b7cb","./bookmark-icon":"c32d","./bookmark-icon.vue":"c32d","./check-icon":"6c5c","./check-icon.vue":"6c5c","./chevron-left-icon":"92fb","./chevron-left-icon.vue":"92fb","./folder-icon":"9e31","./folder-icon.vue":"9e31","./folder-open-icon":"5390","./folder-open-icon.vue":"5390","./play-icon":"9f72","./play-icon.vue":"9f72","./plus-icon":"719a","./plus-icon.vue":"719a","./search-icon":"eb3d","./search-icon.vue":"eb3d","./times-icon":"d9c1","./times-icon.vue":"d9c1"};function n(t){var e=s(t);return o(e)}function s(t){if(!o.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="f5e0"},fefa:function(t,e,o){}});
//# sourceMappingURL=popup.220bd3ef.js.map