import Menu from '../components/Menu.vue'

export default {
  install (Vue) {
    let instance = null

    function getInstance () {
      if (!instance) {
        const component = Vue.extend(Menu)
        instance = new component()
        instance.$mount()
        document.body.appendChild(instance.$el)
      }
      return instance
    }

    Vue.prototype.$menu = function (event, items, onClose) {
      if (!event || typeof event.clientX !== 'number') {
        throw new Error('Menu expects a mouse event as its first argument.')
      }
      if (event.type === 'contextmenu') event.preventDefault()

      return getInstance().open(event, items, onClose)
    }
  }
}