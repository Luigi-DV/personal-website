import { createApp } from 'vue'
import App from './App.vue'
import './css/tailwind.css'
import router from './router/router'
import axios from 'axios'
import VuePaginate from 'vue-paginate'
import VueSmoothScroll from 'vue3-smooth-scroll'
import VueWriter from 'vue-writer'
import store from './store/index'
import AOS from 'aos'
// importing AOS css style globally
import 'aos/dist/aos.css'

const app = createApp(App).use(router, axios, VuePaginate)
app.use(store)
app.use(VueSmoothScroll, {
  duration: 1200,
  updateHistory: false
})
// Vue Writer
app.use(VueWriter)
// AOS
AOS.init()
// Filter
app.config.globalProperties.$filters = {

  str_limit (value, size) {
    if (!value) return ''
    value = value.toString()

    if (value.length <= size) {
      return value
    }
    return value.substr(0, size) + '...'
  }
}

// APP Mount
app.mount('#app')
