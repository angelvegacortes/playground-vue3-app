import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import boundaries from 'eslint-plugin-boundaries'
import importPlugin from 'eslint-plugin-import'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import pluginVue from 'eslint-plugin-vue'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['coverage/**', 'dist/**', 'docker/**', 'public/**', '*.d.ts'],
  },
  {
    // NOTE: Check all source files except spec files
    ignores: ['**/*.spec.ts'],
    rules: {
      'max-lines': [
        'error',
        {
          max: 1000,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
    },
  },
  {
    // NOTE: Check all source files except spec and store files
    ignores: ['**/*.spec.ts', '**/*store.ts'],
    rules: {
      'max-lines-per-function': [
        'error',
        {
          max: 100,
          skipBlankLines: true,
          skipComments: true,
          IIFEs: true,
        },
      ],
    },
  },
  pluginVue.configs['flat/recommended'],
  {
    rules: {
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/block-order': [
        'error',
        {
          order: [['template', 'script'], 'style'],
        },
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
          ignores: [],
        },
      ],
    },
  },
  eslintPluginUnicorn.configs.recommended,
  vueTsConfigs.recommended,
  {
    files: ['src/**/*'],
    plugins: {
      boundaries,
    },
    settings: {
      'boundaries/elements': [
        {
          type: 'global-resources',
          pattern: [
            'src/assets/**',
            'src/auth/**',
            'src/components/**',
            'src/config/**',
            'src/mocks/**',
            'src/schemas/**',
            'src/services/**',
            'src/stores/**',
            'src/types/**',
          ],
        },
        {
          type: 'router-resources',
          pattern: ['src/router/**'],
        },
        {
          mode: 'full',
          type: 'app-root-resources',
          pattern: ['src/app.vue', 'src/main.ts'],
        },
        {
          mode: 'full',
          type: 'view-resources',
          pattern: ['src/views/**'],
        },
        {
          mode: 'full',
          type: 'feature-resources',
          capture: ['featureName'],
          pattern: ['src/features/*/**/*'],
        },
      ],
      'import/resolver': {
        alias: {
          map: [['@app', './src']],
        },
      },
    },
    rules: {
      ...boundaries.configs.recommended.rules,
      'boundaries/no-private': 'off',
      'boundaries/no-unknown': 'error',
      'boundaries/no-unknown-files': 'error',
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: 'global-resources',
              allow: ['global-resources'],
            },
            {
              from: 'router-resources',
              allow: [
                'router-resources',
                'global-resources',
                'feature-resources',
                'view-resources',
              ],
            },
            {
              from: 'view-resources',
              allow: ['view-resources', 'global-resources', 'feature-resources'],
            },
            {
              from: 'app-root-resources',
              allow: [
                'app-root-resources',
                'global-resources',
                'router-resources',
                ['feature-resources', { featureName: 'notifications' }],
              ],
            },
            {
              from: 'feature-resources',
              allow: [
                'global-resources',
                ['feature-resources', { featureName: '${from.featureName}' }],
              ],
            },
          ],
        },
      ],
    },
  },
  {
    extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    rules: {
      'no-unused-vars': 'off',
      'import/no-unresolved': 'off',
      'import/namespace': 'off',
    },
  },
  pluginVitest.configs.recommended,
  {
    files: ['src/**/*.spec.ts'],
    rules: {
      'vitest/consistent-test-it': 'error',
      'vitest/consistent-test-filename': ['error', { pattern: String.raw`.*\.spec\.ts?$` }],
    },
  },
  skipFormatting,
)
