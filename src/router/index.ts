import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: false },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: () => import('../views/NotAuthorized.vue'),
      meta: { requiresAuth: false },
    },
  ],
})

router.beforeEach((to, from) => {
  const userStore = useUserStore()

  if (to.name === 'login') {
    userStore.login()
  }

  if (to.meta.requiresAuth && !userStore.isAuthenticated()) {
    return { name: 'unauthorized' }
  }
})

export default router
