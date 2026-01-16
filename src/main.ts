import './assets/main.css'

import ability from '@app/auth/ability-config-advanced'
import { abilitiesPlugin } from '@casl/vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'
import { createApp } from 'vue'
import { themeOptions } from './config/theme'
import keyboardShortcuts from './plugins/keyboard-shortcuts'

import App from './app.vue'
import router from './router'
import { worker } from './services/mocks/browser'

/**
 * Enable MSW browser worker if running in development mode
 * @returns
 */
async function startMockServiceWorker() {
  if (import.meta.env.DEV) {
    return worker.start({
      onUnhandledRequest: 'bypass',
    })
  }
}

await startMockServiceWorker()

// setup pinia config
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// setup app config
const app = createApp(App)
app.use(VueQueryPlugin)
app.use(ToastService)
app.use(pinia)
app.use(router)
app.use(PrimeVue, themeOptions)
app.use(keyboardShortcuts)
app.use(abilitiesPlugin, ability)
app.directive('tooltip', Tooltip)

// run app
app.mount('#app')
