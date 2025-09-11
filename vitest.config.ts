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
          thresholds: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
          },
          include: ['src/**/*.{ts,vue}'],
          exclude: [
            'public/**',
            'src/app.vue',
            'src/main.ts',
            'src/**/types/**',
            'src/config/**',
            'src/mocks/**',
          ],
        },
      },
    }),
  ),
)
