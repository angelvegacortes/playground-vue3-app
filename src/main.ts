import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { worker } from '@/mocks/browser'
import PrimeVue from 'primevue/config'
import { themeOptions } from './config/theme'
import { abilitiesPlugin } from '@casl/vue'
import ability from '@/auth/ability-config-advanced'
import Tooltip from 'primevue/tooltip'

import App from './App.vue'
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

  app.use(pinia)
  app.use(router)
  app.use(PrimeVue, themeOptions)
  app.directive('tooltip', Tooltip)
  app.use(abilitiesPlugin, ability)

  app.mount('#app')
})
