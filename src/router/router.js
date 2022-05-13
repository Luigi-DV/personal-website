import { createWebHistory, createRouter } from 'vue-router'
import HomeComponent from '../components/pages/home/HomeComponent'
import AboutComponent from '../components/pages/about/AboutComponent'
import PortfolioComponent from '../components/pages/portfolio/PortfolioComponent'
import PageNotFoundComponent from '../components/pages/errors/PageNotFoundComponent'
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
  },
  // And finally the default route, when none of the above matches:
  {
    path: '/404',
    name: 'PageNotExist',
    component: PageNotFoundComponent
  },
  {
    path: '/:catchAll(.*)', // Unrecognized path automatically matches 404
    redirect: '/404'
  }
]

const router = createRouter({
  scrollBehavior (to, from, savedPosition) {
    // always scroll to top
    return {
      top: 0,
      behavior: 'smooth'
    }
  },
  history: createWebHistory(),
  routes
})

export default router
