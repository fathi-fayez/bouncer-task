import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage,
      meta: { withoutCrumps: true },
    },
    {
      path: '/productDetails/:category/:id',
      name: 'productDetails',
      component: () => import('../views/productDetails.vue'),
    },
    {
      path: '/productsList/:category',
      name: 'productsList',
      component: () => import('../views/productsList.vue'),
    },
    {
      path: '/cartPage',
      name: 'cartPage',
      component: () => import('../views/cartPage.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.name === 'productDetails') {
      return { el: '#product-details', behavior: 'smooth' }
    } else if (to.name === 'productsList') {
      return { el: '#products-list', behavior: 'smooth' }
    }
    return savedPosition || { top: 0 }
  },
})

export default router
