import { createWebHashHistory, createRouter } from 'vue-router'
import HomeComponent from '../components/pages/home/HomeComponent'
import AboutComponent from '../components/pages/about/AboutComponent'
import PortfolioComponent from '../components/pages/portfolio/PortfolioComponent'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: '/about',
    name: 'about',
    component: AboutComponent
  }

]

const router = createRouter({
  scrollBehavior (to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  mode: 'hash',
  history: createWebHashHistory(),
  routes
})

export default router
