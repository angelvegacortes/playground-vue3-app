import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home-view.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login-view.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/consent',
      name: 'consent',
      component: () => import('../views/consent-view.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/test-view.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: () => import('../views/not-authorized.vue'),
      meta: { requiresAuth: false },
    },
  ],
})

router.beforeEach((to) => {
  const userStore = useUserStore()

  if (to.meta.requiresAuth && !userStore.isAuthenticated()) {
    return { name: 'login' }
  }
})

export default router
