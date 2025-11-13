import HomeView from '../views/home-view.vue'

const routes = [
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
        component: () => import('@app/features/feature1/components/test-parent-a.vue'),
      },
      {
        path: 'feature/a',
        name: 'feature/a',
        component: () => import('@app/features/feature1/components/test-parent-a.vue'),
      },
      {
        path: 'feature/b',
        name: 'feature/b',
        component: () => import('@app/features/feature1/components/test-parent-b.vue'),
      },
      {
        path: 'feature/c',
        name: 'feature/c',
        component: () => import('@app/features/feature1/components/test-parent-c.vue'),
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
    path: '/test/4',
    name: 'test4',
    component: () => import('../views/examples/test4-view.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/test/5',
    name: 'test5',
    component: () => import('../views/examples/test5-view.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/test/6',
    name: 'test6',
    component: () => import('../views/examples/test6-view.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: () => import('../views/errors/not-authorized.vue'),
    meta: { requiresAuth: false },
  },
]

export default routes
