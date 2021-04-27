(function(t){function e(e){for(var i,l,r=e[0],c=e[1],a=e[2],d=0,h=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&h.push(o[l][0]),o[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,a||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(s.splice(e--,1),t=l(l.s=n[0]))}return t}var i={},o={popup:0},s=[];function l(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=i,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(n,i,function(e){return t[e]}.bind(null,i));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var a=0;a<r.length;a++)e(r[a]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("0a3d")},"0224":function(t,e,n){},"0381":function(t,e,n){"use strict";n("9ac0")},"04e6":function(t,e,n){"use strict";n("88d9")},"0a3d":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loaded?n("main",{staticClass:"app"},[n("transition",{attrs:{name:"view-move-"+t.animationDirection}},[n("div",{key:t.showFolders,staticClass:"app__view"},[t.showFolders?t._e():n("List",{attrs:{selectedFolder:t.selectedFolder},on:{"change-folder":function(e){t.showFolders=!0,t.animationDirection="left"}}}),t.showFolders?n("Folders",{on:{select:t.setSelectedFolder,close:function(e){t.showFolders=!1,t.animationDirection="right"}},model:{value:t.selectedFolder,callback:function(e){t.selectedFolder=e},expression:"selectedFolder"}}):t._e()],1)])],1):t._e()},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[t.bookmarks.length>0?n("Search",{attrs:{selectedFolderTitle:t.selectedFolderTitle},on:{"change-folder":function(e){return t.$emit("change-folder")},input:function(e){t.focused=null,t.initFocused=null}},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}):t._e(),t.list.length>0?n("div",{staticClass:"list__bookmarks",class:{"list__bookmarks--focused":null!==t.focused,"list__bookmarks--missing":t.notFound.length},on:{mousemove:function(e){t.focused=null,t.initFocused=null}}},t._l(t.list,(function(e,i){return n("Bookmark",{key:"bookmark-"+e.id,ref:"bookmark-"+i,refInFor:!0,attrs:{data:e,active:t.activeTab&&t.activeTab.youtubeId===e.youtubeId,playing:t.activeTab&&t.activeTab.playing,focused:t.focused===i,unbookmarked:e.unbookmarked},on:{open:function(n){t.activeTab&&t.activeTab.youtubeId===e.youtubeId&&t.scrollToItem(i)},active:function(e){t.scrollToItem(i,"auto"),t.initFocused=i,t.activeBookmark=i},"remove-active":function(e){t.activeBookmark=null},"set-active":function(e){t.$nextTick((function(){t.activeBookmark=i}))},"add-bookmark":function(e){return t.addBookmark(t.activeTab)},"not-found":function(n){return t.addBookmarkToNotFound(e)}}})})),1):t._e(),t.loaded&&(!t.bookmarks||t.bookmarks.length<=0||t.list.length<=0&&t.filter)?n("EmptyNotice",{attrs:{text:t.filter?"Search couldn't find any matching bookmarks.":"Your bookmarks list is empty.",buttons:t.filter?null:[{text:"Select folder",action:function(){t.$emit("change-folder")}}]}}):t._e(),!t.filter&&t.notFound.length?n("NotFoundAlert",{key:t.notFound.length,attrs:{list:t.notFound},on:{select:t.scrollToMissingItem}}):t._e()],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("button",{staticClass:"search__change-folder",attrs:{title:"Select folder"},on:{click:function(e){return t.$emit("change-folder")}}},[n("Icon",{attrs:{icon:"bars"}}),t.selectedFolderTitle?n("span",[t._v(t._s(t.selectedFolderTitle))]):t._e()],1),n("div",{staticClass:"search__input-wrapper"},[n("button",{staticClass:"search__icon",class:{search__clear:t.value},attrs:{title:"Clear search",tabindex:t.value?"0":"-1"},on:{click:function(e){return t.clear()}}},[n("Icon",{attrs:{icon:t.value?"times":"search"}})],1),n("input",{ref:"input",staticClass:"search__input",attrs:{placeholder:"Search ..."},domProps:{value:t.value},on:{input:function(e){return t.emit(e.target.value)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.clear(e)}}})])])},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.icon?n(t.getIcon.import,{tag:"component",staticClass:"icon"}):t._e()},d=[];const h=t=>{try{n("f5e0")("./"+t)}catch(e){return!1}return t};var f={computed:{getIcon(){let t=this.icon+"-icon";return{path:h(t),import:()=>n("19c4")("./"+t)}}},props:{icon:{type:String,default:""}}},m=f,p=(n("64e5"),n("2877")),b=Object(p["a"])(m,u,d,!1,null,null,null),v=b.exports,k={components:{Icon:v},model:{prop:"value",event:"input"},props:{value:{type:String,default:""},selectedFolderTitle:{type:String,default:"Bookmarks"}},mounted(){this.$root._data.initSearchFocus?setTimeout(()=>{this.focusInput()},400):(this.focusInput(),this.$root._data.initSearchFocus=!0)},methods:{focusInput(){this.$refs.input.focus()},clear(t){this.value&&(t&&t.preventDefault(),this.emit(""),this.focusInput())},emit(t){window.scroll({top:0,left:0,behavior:"auto"}),this.$emit("input",t)}}},_=k,g=(n("8a0b"),Object(p["a"])(_,c,a,!1,null,null,null)),y=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"bookmark",class:{"bookmark--active":t.active,"bookmark--focused":t.focused,"bookmark--unbookmarked":t.unbookmarked,"bookmark--missing":t.notFound},attrs:{href:!t.active&&t.data.url?t.data.url:null,title:t.data.title,tabindex:"-1"},on:{click:function(e){return t.open()}}},[t.unbookmarked?n("Button",{staticClass:"bookmark__add-btn",attrs:{title:"Add bookmark"},on:{click:function(e){return e.stopPropagation(),t.$emit("add-bookmark")}}},[n("Icon",{attrs:{icon:"plus"}})],1):t._e(),n("div",{staticClass:"bookmark__content"},[n("div",{staticClass:"bookmark__image-container"},[t.notFound?t._e():n("img",{ref:"thumbnail",staticClass:"bookmark__image",attrs:{src:"https://img.youtube.com/vi/"+t.data.youtubeId+"/mqdefault.jpg"},on:{load:t.checkValidity}}),t.active?n("Animation",{staticClass:"bookmark__play-animation",attrs:{show:t.playing}}):t._e()],1),n("div",{staticClass:"bookmark__title"},[t._v(t._s(t.data.title))])])],1)},F=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"music-animation",class:{"music-animation--hidden":!t.show}},t._l(4,(function(t){return n("div",{key:t,staticClass:"music-animation__bar"})})),0)},C=[],$={props:{show:{type:Boolean,default:!1}}},T=$,I=(n("04e6"),Object(p["a"])(T,x,C,!1,null,null,null)),O=I.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",class:{"button--disabled":t.disabled},attrs:{disabled:t.disabled},on:{click:function(e){return t.$emit("click",e)}}},[t._v(" "+t._s(t.text)+" "),t._t("default")],2)},S=[],E={props:{text:{type:String,default:""},disabled:{type:Boolean,default:!1}}},j=E,L=(n("474e"),Object(p["a"])(j,B,S,!1,null,null,null)),M=L.exports,A={components:{Animation:O,Button:M,Icon:v},props:{data:{type:Object,default:()=>{}},active:{type:Boolean,default:!1},playing:{type:Boolean,default:!1},focused:{type:Boolean,default:!1},unbookmarked:{type:Boolean,default:!1}},data(){return{notFound:!1}},mounted(){this.active&&this.$emit("active")},watch:{active(){this.active?this.$emit("set-active",this.data):this.$emit("remove-active",this.data)}},methods:{open(){if(this.$emit("open"),this.active)return;const t=this.data.url;t&&(chrome.tabs.update({active:!0,url:t}),window.close())},checkValidity(){const t=this.$refs.thumbnail;t&&120===t.naturalWidth&&(this.notFound=!0,this.$emit("not-found"))}}},z=A,D=(n("b665"),Object(p["a"])(z,w,F,!1,null,null,null)),H=D.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"empty-notice"},[t.text?n("p",{staticClass:"empty-notice__text",domProps:{innerHTML:t._s(t.text)}}):t._e(),t.buttons?n("div",{staticClass:"empty-notice__buttons"},t._l(t.buttons,(function(t,e){return n("Button",{key:"button-"+e,staticClass:"empty-notice__button",attrs:{text:t.text,disabled:t.disabled||!1},on:{click:function(e){return t.action()}}})})),1):t._e()])},Y=[],P={components:{Button:M},props:{text:{type:String,default:"Your YouTube bookmarks list is empty."},buttons:{type:Array,default:null}}},V=P,U=(n("c669"),Object(p["a"])(V,N,Y,!1,null,null,null)),q=U.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"not-found-alert",class:{"not-found-alert--open":t.open}},[n("button",{staticClass:"not-found-alert__head",on:{click:function(e){return t.openList()}}},[n("div",{staticClass:"not-found-alert__title"},[n("Icon",{attrs:{icon:"exclemation-circle"}}),n("span",{attrs:{title:t.title}},[t._v(t._s(t.title))])],1),t.open?n("button",{staticClass:"not-found-alert__close-btn",attrs:{title:"Close"},on:{click:function(e){return e.stopPropagation(),t.closeList()}}},[n("Icon",{attrs:{icon:"times"}})],1):t._e()]),n("Expand",[t.open?n("div",{staticClass:"not-found-alert__list"},t._l(t.list,(function(e){return n("button",{key:e.id,staticClass:"not-found-alert__item",attrs:{title:e.title},on:{click:function(n){return t.selectBookmark(e)}}},[t._v(t._s(e.title))])})),0):t._e()])],1)},K=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"expand"},on:{"before-enter":t.setup,"before-leave":t.setup,enter:t.animateEnter,leave:t.animateLeave,"after-enter":function(e){return t.finish("enter",e)},"after-leave":function(e){return t.finish("leave",e)}}},[t._t("default")],2)},R=[],W={methods:{setup(t){this.$options.init={width:t.style.width||null,height:t.style.height||0,style:t.getAttribute("style")||""}},animateEnter(t){const e=getComputedStyle(t).width;this.style(t,{width:e,position:"absolute",visibility:"hidden",height:this.$options.init.height||"auto"});let n=getComputedStyle(t).height;0===parseInt(n)&&(n=this.$options.init.height),this.style(t,{width:this.$options.init.width,position:null,visibility:null,height:0}),this.repaint(t),requestAnimationFrame(()=>{this.style(t,{height:n})})},animateLeave(t){const e=getComputedStyle(t).height;this.style(t,{height:e}),this.repaint(t),requestAnimationFrame(()=>{this.style(t,{height:0})})},finish(t,e){"enter"===t&&this.style(e,{height:null}),this.$nextTick(()=>{e.setAttribute("style",this.$options.init.style),this.$options.init={}})},style(t,e){for(const n in e)t.style[n]=e[n]},repaint(t){getComputedStyle(t).height}},init:{}},Q=W,X=(n("f0d4"),Object(p["a"])(Q,G,R,!1,null,"3665377a",null)),Z=X.exports,tt={components:{Icon:v,Expand:Z},data(){return{open:!1}},props:{list:{type:Array,default(){}}},computed:{title(){const t=this.list.length;let e="bookmark is";return t>1&&(e="bookmarks are"),`${t} ${e} no longer available.`}},methods:{openList(){this.open||(this.open=!0)},closeList(){this.open=!1},selectBookmark(t){this.open=!1,this.$emit("select",t.id)}}},et=tt,nt=(n("6950"),Object(p["a"])(et,J,K,!1,null,null,null)),it=nt.exports,ot={components:{Search:y,Bookmark:H,EmptyNotice:q,NotFoundAlert:it},props:{selectedFolder:{type:String,default:""}},data(){return{filter:"",loaded:!1,bookmarks:[],activeTab:null,activeBookmark:null,selectedFolderTitle:"",focused:null,initFocused:null,notFound:[]}},computed:{list(){let t=[];if(this.filter){let e=this.filter.toLowerCase().trim().split(" "),n=[...this.bookmarks];this.activeTab&&!n.find(t=>t.youtubeId===this.activeTab.youtubeId)&&n.unshift({...this.activeTab,unbookmarked:!0}),n=n.filter(t=>{let n=t.title.toLowerCase().trim().split(" "),i=!0;for(let o=0;o<e.length;o++){let t=!1;for(let i=0;i<n.length;i++)if(n[i].indexOf(e[o])>-1){t=!0,n.splice(i,1);break}if(!t){i=!1;break}}if(i)return t}),t=n}else t=[...this.bookmarks],this.activeTab&&!t.find(t=>t.youtubeId===this.activeTab.youtubeId)&&t.unshift({...this.activeTab,unbookmarked:!0});return t}},created(){this.getActiveTab(),this.getBookmarks(),this.setListeners(),chrome.tabs.onUpdated.addListener(()=>{this.getActiveTab()}),window.GetList=()=>{console.log(this.generateOutput())}},beforeDestroy(){this.removeListeners()},methods:{getBookmarks(){chrome.bookmarks.getTree(t=>{this.bookmarks=this.getYoutubeBookmarks(t),this.loaded=!0})},getYoutubeBookmarks(t){try{const e=[...t],n=e.find(t=>"0"===t.id).children,i=n.find(t=>"bookmarks bar"===t.title.toLowerCase()).children,o=this.getSelectedFolder(i);let s=[];for(let t=0;t<o.length;t++){let e={...o[t]};const n=s.find(t=>e.url===t.url);!n&&this.isYoutube(e)&&(e.youtubeId=this.getYoutubeId(e),e.title=this.cleanTitle(e),s.push(e))}return s}catch{}return[]},getSelectedFolder(t){if(""===this.selectedFolder)return t;let e=this.selectedFolder.split("-");if(e.length>0){let n=t;for(let t=0;t<e.length;t++){const i=e[t];let o;try{o=n.find(t=>t.id===i)}catch{return[]}if(void 0===o)return[];t+1===e.length&&(this.selectedFolderTitle=o.title),n=o.children}return n}return[]},isYoutube(t){const e=t.url;if(t.title&&e){let t=/^(?:https?:\/\/)?(?:m\.|music\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;if(e.match(t))return!0}return!1},getYoutubeId(t){let e=t.url,n="";return e=e.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/),void 0!==e[2]?(n=e[2].split(/[^0-9a-z_-]/i),n=n[0]):n=e,n},cleanTitle(t){let e=t.title;return e.split(" - YouTube")[0]},getActiveTab(){chrome.tabs.query({currentWindow:!0,active:!0},t=>{const e=t[0];this.isYoutube(e)&&(this.activeTab={title:this.cleanTitle(e),youtubeId:this.getYoutubeId(e),playing:e.audible,url:e.url,originalTitle:e.title})})},scrollToItem(t,e="smooth"){const n=66,i=37,o=6,s=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),l=Math.ceil(t*n+o-(s-i-n)/2);window.scroll({top:l,left:0,behavior:e})},setListeners(){document.addEventListener("keydown",this.handleKey)},removeListeners(){document.removeEventListener("keydown",this.handleKey)},handleKey(t){const e=38,n=40,i=13;if(t.keyCode===i&&null!==this.focused&&this.focused>-1){t.preventDefault();const e=this.$refs["bookmark-"+this.focused][0];e&&e.open()}else if(t.keyCode===e||t.keyCode===n){let i,o;t.preventDefault(),null!==this.initFocused?(i=this.initFocused,this.initFocused=null):i=null!==this.focused?this.focused:-1,t.keyCode===e&&(o=i-1,o<0&&(o=this.list.length-1)),t.keyCode===n&&(o=i+1,o>this.list.length-1&&(o=0)),this.focused=o,this.scrollToFocused()}},scrollToFocused(){const t=this.focused,e=66,n=37,i=5,o=(window.pageYOffset||document.documentElement.scrollTop)-(document.documentElement.clientTop||0),s=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),l=this.$refs["bookmark-"+t][0].$el.getBoundingClientRect().top+o,r=Math.ceil(t*e+i),c=this.$refs["bookmark-"+this.activeBookmark];let a=0;if(c&&c[0]){const t=c[0].$el.getBoundingClientRect().top;t===n&&l-o<e+n&&(a=e),t===s-e&&l-o>t-e&&(a=-1*e)}let u=null;l-n<(a>0?o+a:o)?u=r-a:l+e>o+(a<0?s+a:s)&&(u=r-(s-e-n)-a),u&&window.scroll({top:u,left:0,behavior:"smooth"})},addBookmark(t){let e=this.clearTimestamp(t.url);chrome.bookmarks.create({parentId:this.getSelectedFolderId(),title:t.originalTitle,url:e},t=>{chrome.bookmarks.move(t.id,{index:0},()=>{this.getBookmarks()})})},getSelectedFolderId(){if(this.selectedFolder){const t=this.selectedFolder.split("-");return t[t.length-1]}return null},clearTimestamp(t){return 2===t.split(".com/").length&&(t=t.split(".com/")[0]+".com/watch?v="+this.getYoutubeId({url:t})),t},generateOutput(){const t=()=>{const t=new Date;let e=t.getDate();e<10&&(e="0"+e);let n=t.getMonth()+1;n<10&&(n="0"+n);const i=t.getFullYear();return`${n}-${e}-${i}`},e=()=>{let t="";return this.bookmarks.forEach(e=>{t+=`\n\n${e.title}\n${e.url}`}),t},n=`Folder: ${this.selectedFolderTitle}\nDate: ${t()}\nCount: ${this.bookmarks.length}${e()}`;return n},addBookmarkToNotFound(t){const e=void 0!==this.notFound.find(e=>e.url===t.url);e||this.notFound.push(t)},scrollToMissingItem(t){const e=this.list.find(e=>e.id===t);e&&this.scrollToItem(this.list.indexOf(e))}}},st=ot,lt=(n("c90e"),Object(p["a"])(st,l,r,!1,null,null,null)),rt=lt.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"folders"},[n("Head",{on:{close:function(e){return t.close()}}}),n("div",{staticClass:"folders__list"},[n("transition",{attrs:{name:"breadcrumbs"}},[t.breadcrumbs.length>0?n("Breadcrumbs",{attrs:{list:t.breadcrumbs},on:{select:function(e){return t.goBack(e)}}}):t._e()],1),n("div",{staticClass:"folders__list-animation-wrapper"},[n("transition",{attrs:{name:"folders-move-"+t.animationDirection}},[n("div",{key:t.active,staticClass:"folders__list-content"},[t._l(t.folders,(function(e){return n("Folder",{key:e.id,attrs:{data:e,selected:t.selectedFolderFound?t.selected:"",active:t.active},on:{"set-active":function(e){t.active=e,t.animationDirection="right"},select:function(e){return t.selectFolder(e)},close:function(e){return t.close()}}})})),t.loaded&&t.folders.length<=0?n("EmptyNotice",{attrs:{text:t.emptyNoticeText,buttons:t.active?[{text:"Go back",action:t.goBack},t.active===t.selected?{text:"Selected",disabled:!0}:{text:"Select this folder",action:t.selectCurrentFolder}]:null}}):t._e()],2)])],1)],1)],1)},at=[],ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"folders__head"},[n("span",{staticClass:"folders__title"},[t._v("Select folder")]),n("button",{staticClass:"folders__close",attrs:{title:"Close"},on:{click:function(e){return t.$emit("close")}}},[n("Icon",{attrs:{icon:"times"}})],1)])},dt=[],ht={components:{Icon:v}},ft=ht,mt=(n("3715"),Object(p["a"])(ft,ut,dt,!1,null,null,null)),pt=mt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumbs"},[n("button",{staticClass:"breadcrumbs__back",on:{click:function(e){return t.$emit("select")}}},[n("Icon",{attrs:{icon:"chevron-left"}})],1),n("div",{staticClass:"breadcrumbs__list"},[n("div",{staticClass:"breadcrumbs__item",class:{"breadcrumbs__item--current":t.list.length<=0}},[n("button",{staticClass:"breadcrumbs__item-btn",on:{click:function(e){return t.$emit("select",t.list.length)}}},[t._v(" Bookmarks ")]),t.list.length>0?n("Icon",{staticClass:"breadcrumbs__item-next",attrs:{icon:"chevron-left"}}):t._e()],1),t._l(t.list,(function(e,i){return n("div",{key:"breadcrumb-"+i,staticClass:"breadcrumbs__item",class:{"breadcrumbs__item--current":i===t.list.length-1}},[n("button",{staticClass:"breadcrumbs__item-btn",on:{click:function(e){return t.select(i)}}},[t._v(" "+t._s(e)+" ")]),i<t.list.length-1?n("Icon",{staticClass:"breadcrumbs__item-next",attrs:{icon:"chevron-left"}}):t._e()],1)}))],2)])},vt=[],kt={components:{Icon:v},props:{list:{type:Array,default:()=>[]}},methods:{select(t){let e=this.list.length-t-1;0!==e&&this.$emit("select",e)}}},_t=kt,gt=(n("6065"),Object(p["a"])(_t,bt,vt,!1,null,null,null)),yt=gt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"folders__folder-wrapper",class:{"folders__folder-wrapper--highlight":t.isInSelected,"folders__folder-wrapper--selected":t.isSelected,"folders__folder-wrapper--disabled":!t.hasId}},[n("button",{staticClass:"folders__folder-icon",attrs:{title:"Open "+t.data.title},on:{click:function(e){return t.openFolder()}}},[n("Icon",{staticClass:"folders__folder-icon-default",attrs:{icon:t.hasId?"folder":"bookmark"}}),t.isSelected?n("Icon",{staticClass:"folders__folder-icon-selected",attrs:{icon:"check"}}):t._e()],1),n("button",{staticClass:"folders__folder",attrs:{title:"Select "+t.data.title},on:{click:function(e){return t.selectFolder()}}},[t._v(t._s(t.data.title))])])},Ft=[],xt={components:{Icon:v},props:{data:{type:Object,default:()=>{}},selected:{type:String,default:""},active:{type:String,default:""}},computed:{isInSelected(){const t=this.data.id;let e=this.selected.split("-");return e.includes(t)},isSelected(){const t=this.data.id;let e=this.selected.split("-");return e=e[e.length-1],t==e},hasId(){return!!this.data.id}},methods:{selectFolder(){const t=this.data.id;this.isSelected?this.$emit("close"):this.$emit("select",t)},openFolder(){const t=this.data.id;if(!this.hasId)return;let e=this.active;e&&(e+="-"),e+=t,this.$emit("set-active",e)}}},Ct=xt,$t=(n("a6b7"),Object(p["a"])(Ct,wt,Ft,!1,null,null,null)),Tt=$t.exports,It={components:{Head:pt,Folder:Tt,Breadcrumbs:yt,EmptyNotice:q},model:{prop:"selected",event:"select"},props:{selected:{type:String,default:""}},data(){return{breadcrumbs:[],active:"",allFolders:[],loaded:!1,animationDirection:"left"}},computed:{folders(){if(!this.loaded)return[];let t=this.getActiveFolder(),e=[];if(t){this.breadcrumbs.length<=0&&e.push({id:"",title:"Bookmarks bar"});const n=t.filter(t=>!t.url);for(let t=0;t<n.length;t++){const i=n[t];e.push({id:i.id,title:i.title})}return e}return[]},emptyNoticeText(){let t=this.breadcrumbs[this.breadcrumbs.length-1];return t||(t="Bookmarks"),"No folders to select in <b>"+t+"</b>"},selectedFolderFound(){const t=this.selected.split("-");if(t.length>0){let e=JSON.parse(JSON.stringify(this.allFolders));for(let n=0;n<t.length;n++){const i=t[n];let o;try{o=e.find(t=>t.id===i)}catch{return!1}if(void 0===o)return!1;e=o.children}}return!0}},created(){this.setInitialActive(),this.getBookmarks()},methods:{setInitialActive(){this.active=this.selected,this.goBack()},getBookmarks(){chrome.bookmarks.getTree(t=>{this.allFolders=this.getAllFolders(t),this.loaded=!0})},getAllFolders(t){try{const e=[...t],n=e.find(t=>"0"===t.id).children,i=n.find(t=>"bookmarks bar"===t.title.toLowerCase()).children;return i.filter(t=>!t.url)}catch{}return[]},getActiveFolder(){let t=this.active,e=t.split("-"),n=[...e],i=this.allFolders,o=[];for(let s=0;s<e.length;s++){const t=e[s];if(t){let e;try{e=i.find(e=>e.id===t)}catch{}e?(o.push(e.title),i=e.children):n.splice(s,n.length-s+1)}}return this.active=n.join("-"),this.breadcrumbs=o,i},goBack(t=1){if(this.animationDirection="left",!this.active.includes("-"))return void(this.active="");let e=this.active.split("-");e.splice(e.length-t,t);let n=e.join("-");this.active=n},close(){this.$emit("close")},selectFolder(t){let e=this.active+(this.active?"-":"")+t;this.setSelected(e)},selectCurrentFolder(){this.setSelected(this.active)},setSelected(t){this.$emit("select",t),this.close()}}},Ot=It,Bt=(n("0381"),Object(p["a"])(Ot,ct,at,!1,null,null,null)),St=Bt.exports,Et={components:{List:rt,Folders:St},data(){return{loaded:!1,showFolders:!1,selectedFolder:"",animationDirection:"right"}},created(){this.getSelectedFolder()},methods:{getSelectedFolder(){chrome.storage.local.get(["selectedFolder"],t=>{void 0!==t.selectedFolder?this.selectedFolder=t.selectedFolder:this.setSelectedFolder(""),this.loaded=!0})},setSelectedFolder(t){chrome.storage.local.set({selectedFolder:t})}}},jt=Et,Lt=(n("11aa"),Object(p["a"])(jt,o,s,!1,null,null,null)),Mt=Lt.exports;i["a"].config.productionTip=!1,new i["a"]({render:t=>t(Mt),data(){return{initSearchFocus:!1}}}).$mount("#app")},"11aa":function(t,e,n){"use strict";n("0224")},"19c4":function(t,e,n){var i={"./bars-icon":"b7cb","./bars-icon.vue":"b7cb","./bookmark-icon":"c32d","./bookmark-icon.vue":"c32d","./check-icon":"6c5c","./check-icon.vue":"6c5c","./chevron-left-icon":"92fb","./chevron-left-icon.vue":"92fb","./exclemation-circle-icon":"2c81","./exclemation-circle-icon.vue":"2c81","./folder-icon":"9e31","./folder-icon.vue":"9e31","./folder-open-icon":"5390","./folder-open-icon.vue":"5390","./play-icon":"9f72","./play-icon.vue":"9f72","./plus-icon":"719a","./plus-icon.vue":"719a","./search-icon":"eb3d","./search-icon.vue":"eb3d","./times-icon":"d9c1","./times-icon.vue":"d9c1"};function o(t){return Promise.resolve().then((function(){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}var o=i[t];return n(o)}))}o.keys=function(){return Object.keys(i)},o.id="19c4",t.exports=o},"1dd9":function(t,e,n){},"2c81":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm42-104c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42zm-81.37-211.401l6.8 136c.319 6.387 5.591 11.401 11.985 11.401h41.17c6.394 0 11.666-5.014 11.985-11.401l6.8-136c.343-6.854-5.122-12.599-11.985-12.599h-54.77c-6.863 0-12.328 5.745-11.985 12.599z"}})])},o=[],s=n("2877"),l={},r=Object(s["a"])(l,i,o,!1,null,null,null);e["default"]=r.exports},3715:function(t,e,n){"use strict";n("e22f")},"376f":function(t,e,n){},"3cbb":function(t,e,n){},"474e":function(t,e,n){"use strict";n("cbb6")},4776:function(t,e,n){},5390:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"}},[n("g",[n("path",{staticClass:"secondary",attrs:{d:"M69.08 271.63L0 390.05V112a48 48 0 0 1 48-48h160l64 64h160a48 48 0 0 1 48 48v48H152a96.31 96.31 0 0 0-82.92 47.63z"}}),n("path",{staticClass:"primary",attrs:{d:"M152 256h400a24 24 0 0 1 20.73 36.09l-72.46 124.16A64 64 0 0 1 445 448H45a24 24 0 0 1-20.73-36.09l72.45-124.16A64 64 0 0 1 152 256z"}})])])},o=[],s=n("2877"),l={},r=Object(s["a"])(l,i,o,!1,null,null,null);e["default"]=r.exports},6065:function(t,e,n){"use strict";n("376f")},"64e5":function(t,e,n){"use strict";n("4776")},6950:function(t,e,n){"use strict";n("e7fd")},"6c5c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])},o=[],s=n("2877"),l={},r=Object(s["a"])(l,i,o,!1,null,null,null);e["default"]=r.exports},"719a":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"}},[n("path",{attrs:{d:"M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"}})])},o=[],s=n("2877"),l={},r=Object(s["a"])(l,i,o,!1,null,null,null);e["default"]=r.exports},"88d9":function(t,e,n){},"8a0b":function(t,e,n){"use strict";n("1dd9")},"92fb":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[n("path",{attrs:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}})])},o=[],s=n("2877"),l={},r=Object(s["a"])(l,i,o,!1,null,null,null);e["default"]=r.exports},"9ac0":function(t,e,n){},"9bfb":function(t,e,n){},"9e31":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"}})])},o=[],s=n("2877"),l={},r=Object(s["a"])(l,i,o,!1,null,null,null);e["default"]=r.exports},"9f72":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[n("path",{attrs:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}})])},o=[],s=n("2877"),l={},r=Object(s["a"])(l,i,o,!1,null,null,null);e["default"]=r.exports},a6b7:function(t,e,n){"use strict";n("fefa")},b665:function(t,e,n){"use strict";n("f37f")},b7cb:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[n("path",{attrs:{d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])},o=[],s=n("2877"),l={},r=Object(s["a"])(l,i,o,!1,null,null,null);e["default"]=r.exports},c32d:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"}},[n("path",{attrs:{d:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"}})])},o=[],s=n("2877"),l={},r=Object(s["a"])(l,i,o,!1,null,null,null);e["default"]=r.exports},c669:function(t,e,n){"use strict";n("cfa1")},c90e:function(t,e,n){"use strict";n("9bfb")},cbb6:function(t,e,n){},cfa1:function(t,e,n){},d9c1:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[n("path",{attrs:{d:"M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"}})])},o=[],s=n("2877"),l={},r=Object(s["a"])(l,i,o,!1,null,null,null);e["default"]=r.exports},e22f:function(t,e,n){},e7fd:function(t,e,n){},eb3d:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}})])},o=[],s=n("2877"),l={},r=Object(s["a"])(l,i,o,!1,null,null,null);e["default"]=r.exports},f0d4:function(t,e,n){"use strict";n("3cbb")},f37f:function(t,e,n){},f5e0:function(t,e,n){var i={"./bars-icon":"b7cb","./bars-icon.vue":"b7cb","./bookmark-icon":"c32d","./bookmark-icon.vue":"c32d","./check-icon":"6c5c","./check-icon.vue":"6c5c","./chevron-left-icon":"92fb","./chevron-left-icon.vue":"92fb","./exclemation-circle-icon":"2c81","./exclemation-circle-icon.vue":"2c81","./folder-icon":"9e31","./folder-icon.vue":"9e31","./folder-open-icon":"5390","./folder-open-icon.vue":"5390","./play-icon":"9f72","./play-icon.vue":"9f72","./plus-icon":"719a","./plus-icon.vue":"719a","./search-icon":"eb3d","./search-icon.vue":"eb3d","./times-icon":"d9c1","./times-icon.vue":"d9c1"};function o(t){var e=s(t);return n(e)}function s(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=s,t.exports=o,o.id="f5e0"},fefa:function(t,e,n){}});
//# sourceMappingURL=popup.b72a82ec.js.map