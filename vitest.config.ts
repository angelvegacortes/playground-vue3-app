import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig((configEnv) =>
  mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      test: {
        environment: 'jsdom',
        globals: true,
        exclude: [...configDefaults.exclude],
        root: fileURLToPath(new URL('./', import.meta.url)),
        setupFiles: './vitest.setup.ts',
        coverage: {
          provider: 'v8',
          reporter: ['text', 'json', 'html'],
          include: ['src/**/*.{ts,vue}'],
          exclude: [
            'public/**',
            'src/App.vue',
            'src/main.ts',
            'src/**/types/**',
            'src/config/**',
            'src/**/mocks/**',
          ],
        },
      },
    }),
  ),
)
