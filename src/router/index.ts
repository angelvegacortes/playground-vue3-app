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
      component: HomeView,
      meta: { requiresAuth: false },
    },
    {
      path: '/logout',
      name: 'logout',
      component: HomeView,
      meta: { requiresAuth: false },
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue'),
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
  console.log(
    `user access from [${from.name?.toString()}]-->[${to.name?.toString()}] not authorized`,
  )
  const userStore = useUserStore()

  if (to.name === 'login') {
    userStore.login()
  }

  if (to.name === 'logout') {
    userStore.logout()
  }

  if (to.meta.requiresAuth && !userStore.isAuthenticated()) {
    return { name: 'unauthorized' }
  }
})

export default router
