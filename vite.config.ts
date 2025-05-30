import { fileURLToPath, URL } from 'node:url'

import { runtimeEnv } from 'vite-plugin-runtime'
import { defineConfig, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const defaultConfig = {
    plugins: [
      vue(),
      vueDevTools(),
      runtimeEnv({
        name: 'env',
        injectHtml: true,
        envsubstTemplate: true,
      }),
      Components({
        resolvers: [PrimeVueResolver()],
      }),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }

  if (command === 'build' && mode === 'production') {
    // NOTE Temporarily change the default envPrefix so vite-plugin-runtime exports all env vars with VITE_ prefix
    const buildConfig = {
      envPrefix: 'VITEX_',
    }
    return mergeConfig(defaultConfig, buildConfig)
  }

  return defaultConfig
})
