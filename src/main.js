import { createApp } from 'vue'
import App from './App.vue'
import './css/tailwind.css'
import './assets/tailwind.css'
import router from './router/router'
import axios from 'axios'
import VuePaginate from 'vue-paginate'
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App).use(router, axios, VuePaginate)
app.use(VueSmoothScroll, {
  duration: 1200,
  updateHistory: false
})

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

app.mount('#app')
