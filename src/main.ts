import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { worker } from '@/mocks/browser'

import App from './App.vue'
import router from './router'

// enable msw only for development
async function prepare() {
  if (import.meta.env.DEV) {
    return worker.start()
  }
}

// create and run app after prepare
prepare().then(() => {
  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  app.mount('#app')
})
