(function(t){function e(e){for(var o,a,c=e[0],l=e[1],u=e[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);s&&s(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],o=!0,c=1;c<r.length;c++){var l=r[c];0!==n[l]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var o={},n={popup:0},i=[];function a(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=o,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(r,o,function(e){return t[e]}.bind(null,o));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("0a3d")},"0224":function(t,e,r){},"0a3d":function(t,e,r){"use strict";r.r(e);var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[t.bookmarks.length>0?r("Search",{model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}):t._e(),t.list.length>0?r("div",{staticClass:"bookmarks"},t._l(t.list,(function(e,o){return r("Bookmark",{key:"bookmark-"+e.id,attrs:{data:e,active:t.active&&t.active.youtubeId===e.youtubeId},on:{open:function(e){t.active&&t.scrollToItem(o)}}})})),1):t._e(),t.loaded&&(!t.bookmarks||t.bookmarks.length<=0||t.list.length<=0&&t.filter)?r("EmptyNotice",{attrs:{text:t.filter?"Search couldn't find any matching bookmarks.":"Your YouTube bookmarks list is empty."}}):t._e()],1)},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("button",{key:t.value?"search-icon":"search-clear",staticClass:"search__icon",class:{search__clear:t.value},on:{click:function(e){t.value&&t.$emit("input","")}}},[r("Icon",{attrs:{icon:t.value?"times":"search"}})],1),r("input",{ref:"input",staticClass:"search__input",attrs:{placeholder:"Search ..."},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])},c=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.icon?r(t.getIcon.import,{tag:"component",staticClass:"icon"}):t._e()},u=[];const s=t=>{try{r("f5e0")("./"+t)}catch(e){return!1}return t};var f={computed:{getIcon(){let t=this.icon+"-icon";return{path:s(t),import:()=>r("19c4")("./"+t)}}},props:{icon:{type:String,default:""}}},d=f,p=(r("64e5"),r("2877")),m=Object(p["a"])(d,l,u,!1,null,null,null),h=m.exports,v={components:{Icon:h},model:{prop:"value",event:"input"},props:{value:{type:String,default:""}},mounted(){this.$refs.input.focus()}},b=v,k=(r("d6c0"),Object(p["a"])(b,a,c,!1,null,null,null)),g=k.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"bookmark",class:{"bookmark--active":t.active},attrs:{href:!t.active&&t.data.url?t.data.url:null,title:t.data.title},on:{click:function(e){return t.open(t.data.url)}}},[r("div",{staticClass:"bookmark__background-image",style:"background-image: url(https://img.youtube.com/vi/"+t.data.youtubeId+"/default.jpg)"}),r("div",{staticClass:"bookmark__content"},[r("div",{staticClass:"bookmark__image-container"},[r("img",{staticClass:"bookmark__image",attrs:{src:"https://img.youtube.com/vi/"+t.data.youtubeId+"/default.jpg"}}),t.active?r("Icon",{staticClass:"bookmark__play-icon",attrs:{icon:"play"}}):t._e()],1),r("div",{staticClass:"bookmark__title"},[t._v(t._s(t.data.title))])])])},_=[],w={components:{Icon:h},props:{data:{type:Object,default:()=>{}},active:{type:Boolean,default:!1}},methods:{open(t){this.$emit("open"),this.active||t&&(chrome.tabs.update({active:!0,url:t}),window.close())}}},O=w,x=(r("4dcf"),Object(p["a"])(O,y,_,!1,null,null,null)),j=x.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"empty-notice"},[t._v(t._s(t.text))])},I=[],T={props:{text:{type:String,default:"Your YouTube bookmarks list is empty."}}},E=T,S=(r("c669"),Object(p["a"])(E,C,I,!1,null,null,null)),$=S.exports,L={components:{Search:g,Bookmark:j,EmptyNotice:$},data(){return{filter:"",loaded:!1,bookmarks:[],active:null}},computed:{list(){if(this.filter){let t=this.filter.toLowerCase().trim().split(" "),e=this.bookmarks.filter(e=>{let r=e.title.toLowerCase().trim().split(" "),o=!0;for(let n=0;n<t.length;n++){let e=!1;for(let o=0;o<r.length;o++)if(r[o].indexOf(t[n])>-1){e=!0,r.splice(o,1);break}if(!e){o=!1;break}}if(o)return e});return e}return this.bookmarks}},created(){this.getActiveTab(),this.getBookmarks()},methods:{getBookmarks(){chrome.bookmarks.getTree(t=>{this.bookmarks=this.getYoutubeBookmarks(t),this.loaded=!0})},getYoutubeBookmarks(t){try{const e=[...t],r=e.filter(t=>"0"===t.id)[0].children,o=r.filter(t=>"bookmarks bar"===t.title.toLowerCase())[0].children,n=o.filter(t=>"youtube"===t.title.toLowerCase())[0].children;let i=[];for(let t=0;t<n.length;t++){let e={...n[t]};this.isYoutube(e)&&(e.youtubeId=this.getYoutubeId(e),e.title=this.cleanTitle(e),i.push(e))}return i}catch{}return[]},isYoutube(t){const e=t.url;if(t.title&&e){let t=/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;if(e.match(t))return!0}return!1},getYoutubeId(t){let e=t.url,r="";return e=e.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/),void 0!==e[2]?(r=e[2].split(/[^0-9a-z_-]/i),r=r[0]):r=e,r},cleanTitle(t){let e=t.title;return e.split(" - YouTube")[0]},getActiveTab(){chrome.tabs.query({currentWindow:!0,active:!0},t=>{const e=t[0];this.isYoutube(e)&&(this.active={title:this.cleanTitle(e),youtubeId:this.getYoutubeId(e)})})},scrollToItem(t){const e=66,r=t*e;window.scroll({top:r,left:0,behavior:"smooth"})}}},Y=L,B=(r("11aa"),Object(p["a"])(Y,n,i,!1,null,null,null)),M=B.exports;o["a"].config.productionTip=!1,new o["a"]({render:t=>t(M)}).$mount("#app")},"11aa":function(t,e,r){"use strict";r("0224")},"19c4":function(t,e,r){var o={"./play-icon":"9f72","./play-icon.vue":"9f72","./search-icon":"eb3d","./search-icon.vue":"eb3d","./times-icon":"d9c1","./times-icon.vue":"d9c1"};function n(t){return Promise.resolve().then((function(){if(!r.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}var n=o[t];return r(n)}))}n.keys=function(){return Object.keys(o)},n.id="19c4",t.exports=n},"3fc9":function(t,e,r){},4776:function(t,e,r){},"4dcf":function(t,e,r){"use strict";r("7829")},"64e5":function(t,e,r){"use strict";r("4776")},7829:function(t,e,r){},"9f72":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[r("path",{attrs:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}})])},n=[],i=r("2877"),a={},c=Object(i["a"])(a,o,n,!1,null,null,null);e["default"]=c.exports},c669:function(t,e,r){"use strict";r("cfa1")},cfa1:function(t,e,r){},d6c0:function(t,e,r){"use strict";r("3fc9")},d9c1:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[r("path",{attrs:{d:"M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"}})])},n=[],i=r("2877"),a={},c=Object(i["a"])(a,o,n,!1,null,null,null);e["default"]=c.exports},eb3d:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[r("path",{attrs:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}})])},n=[],i=r("2877"),a={},c=Object(i["a"])(a,o,n,!1,null,null,null);e["default"]=c.exports},f5e0:function(t,e,r){var o={"./play-icon":"9f72","./play-icon.vue":"9f72","./search-icon":"eb3d","./search-icon.vue":"eb3d","./times-icon":"d9c1","./times-icon.vue":"d9c1"};function n(t){var e=i(t);return r(e)}function i(t){if(!r.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=i,t.exports=n,n.id="f5e0"}});
//# sourceMappingURL=popup.b3dacc49.js.map