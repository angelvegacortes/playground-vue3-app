import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { worker } from '@/mocks/browser'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { abilitiesPlugin } from '@casl/vue'
import ability from '@/auth/ability-config-advanced'

import App from './App.vue'
import router from './router'

// enable msw only for development
async function prepare() {
  if (import.meta.env.DEV) {
    return worker.start({
      onUnhandledRequest: 'bypass',
    })
  }
}

// create and run app after prepare
prepare().then(() => {
  const app = createApp(App)

  app.use(createPinia())
  app.use(abilitiesPlugin, ability)
  app.use(router)
  app.use(PrimeVue, {
    // Default theme configuration
    theme: {
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: false,
      },
    },
    ripple: true,
  })

  app.mount('#app')
})
