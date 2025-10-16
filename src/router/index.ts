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
      path: '/test/1',
      name: 'test1',
      component: () => import('../views/examples/test1-view.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/test/2',
      component: () => import('../views/examples/test2-view.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'test2',
          component: () => import('@/features/featureA/ATestParent.vue'),
        },
        {
          path: 'feature/a',
          name: 'feature/a',
          component: () => import('@/features/featureA/ATestParent.vue'),
        },
        {
          path: 'feature/b',
          name: 'feature/b',
          component: () => import('@/features/featureB/BTestParent.vue'),
        },
        {
          path: 'feature/c',
          name: 'feature/c',
          component: () => import('@/features/featureC/CTestParent.vue'),
        },
      ],
    },
    {
      path: '/test/3',
      name: 'test3',
      component: () => import('../views/examples/test3-view.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: () => import('../views/errors/not-authorized.vue'),
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
