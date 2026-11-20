import Vue from 'vue'
import App from './App.vue'
import MenuPlugin from './plugins/menu.js'

Vue.config.productionTip = false
Vue.use(MenuPlugin)

new Vue({
  render: h => h(App),
  data () {
    return {
      initSearchFocus: false
    }
  }
}).$mount('#app')
