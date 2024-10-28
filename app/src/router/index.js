import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // lazy loaded
      component: () => import('../views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      // component: () => import('@/views/LoginView.vue'),
      beforeEnter: (to) => {
        window.location.href = `https://${BASE_DOMAIN}/auth/auth0?returnUrl=${window.location.origin}${to.query.redirect || '/'}`;
      },
    },
    {
      path: '/authorize',
      name: 'authorize',
      component: () => import('../views/Authorize.vue')
    }
  ]
})

export default router
