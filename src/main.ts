import './assets/main.css'

import ability from '@app/auth/ability-config-advanced'
import { worker } from '@app/services/mocks/browser'
import { abilitiesPlugin } from '@casl/vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'
import { createApp } from 'vue'
import { themeOptions } from './config/theme'

import App from './app.vue'
import router from './router'

// enable msw only for development
async function prepare() {
  if (import.meta.env.DEV || import.meta.env.PROD) {
    return worker.start({
      onUnhandledRequest: 'bypass',
    })
  }
}

// create and run app after prepare
prepare().then(() => {
  const app = createApp(App)

  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)

  app.use(VueQueryPlugin)
  app.use(ToastService)
  app.use(pinia)
  app.use(router)
  app.use(PrimeVue, themeOptions)
  app.directive('tooltip', Tooltip)
  app.use(abilitiesPlugin, ability)

  app.mount('#app')
})
