import TestParentA from '@app/features/general/components/test-parent-a.vue'
import TestParentB from '@app/features/general/components/test-parent-b.vue'
import TestParentC from '@app/features/general/components/test-parent-c.vue'
import ConsentView from '../views/consent-view.vue'
import NotAuthorized from '../views/errors/not-authorized.vue'
import CalendarsView from '../views/examples/calendars-view.vue'
import DataTablesView from '../views/examples/data-tables-view.vue'
import FormsView from '../views/examples/forms-view.vue'
import InputsView from '../views/examples/inputs-view.vue'
import PermissionsView from '../views/examples/permissions-view.vue'
import TabsView from '../views/examples/tabs-view.vue'
import HomeView from '../views/home-view.vue'
import LoginView from '../views/login-view.vue'

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
    component: LoginView,
    meta: { requiresAuth: false },
  },
  {
    path: '/consent',
    name: 'consent',
    component: ConsentView,
    meta: { requiresAuth: true },
  },
  {
    path: '/examples/permissions',
    name: 'permissions',
    component: PermissionsView,
    meta: { requiresAuth: true },
  },
  {
    path: '/examples/tabs',
    component: TabsView,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'tabs',
        component: TestParentA,
      },
      {
        path: 'a',
        name: 'tabs-a',
        component: TestParentA,
      },
      {
        path: 'b',
        name: 'tabs-b',
        component: TestParentB,
      },
      {
        path: 'c',
        name: 'tabs-c',
        component: TestParentC,
      },
    ],
  },
  {
    path: '/examples/calendars',
    name: 'calendars',
    component: CalendarsView,
    meta: { requiresAuth: true },
  },
  {
    path: '/examples/data-tables',
    name: 'data-tables',
    component: DataTablesView,
    meta: { requiresAuth: true },
  },
  {
    path: '/examples/forms',
    name: 'forms',
    component: FormsView,
    meta: { requiresAuth: true },
  },
  {
    path: '/examples/inputs',
    name: 'inputs',
    component: InputsView,
    meta: { requiresAuth: true },
  },
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: NotAuthorized,
    meta: { requiresAuth: false },
  },
]

export default routes
