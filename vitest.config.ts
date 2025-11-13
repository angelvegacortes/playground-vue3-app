import { fileURLToPath } from 'node:url'
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'
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
          thresholds: {
            lines: 80,
            statements: 80,
          },
          include: ['src/**/*.{ts,vue}'],
          exclude: [
            'src/app.vue',
            'src/main.ts',
            'src/config/**',
            'src/**/types/**',
            'src/**/mocks/**',
          ],
        },
      },
    }),
  ),
)
