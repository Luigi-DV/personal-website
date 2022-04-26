import { createWebHistory, createRouter } from 'vue-router'
import HomeComponent from '../components/pages/home/HomeComponent'
import NewsComponent from '../components/pages/news/NewsComponent'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/news',
    name: 'news',
    component: NewsComponent
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router