import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { worker } from '@/mocks/browser'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'
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

  const customPreset = definePreset(Aura, {
    semantic: {
      primary: {
        50: '{indigo.50}',
        100: '{indigo.100}',
        200: '{indigo.200}',
        300: '{indigo.300}',
        400: '{indigo.400}',
        500: '{indigo.500}',
        600: '{indigo.600}',
        700: '{indigo.700}',
        800: '{indigo.800}',
        900: '{indigo.900}',
        950: '{indigo.950}',
      },
    },
  })

  app.use(createPinia())
  app.use(abilitiesPlugin, ability)
  app.use(router)
  app.use(PrimeVue, {
    // Default theme configuration
    theme: {
      preset: customPreset,
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
