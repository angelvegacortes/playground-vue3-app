import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import boundaries from 'eslint-plugin-boundaries'
import importPlugin from 'eslint-plugin-import'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import pluginVue from 'eslint-plugin-vue'

export default defineConfigWithVueTs(
  {
    name: 'app/defaults/files',
    files: ['**/*.{ts,vue}'],
  },
  {
    name: 'app/defaults/ignores',
    ignores: ['coverage/**', 'dist/**', 'docker/**', 'public/**', '*.d.ts'],
  },
  {
    // NOTE: Check all source files except spec files
    name: 'app/rules/files',
    ignores: ['**/*.spec.ts'],
    rules: {
      'default-case': 'error',
      'default-case-last': 'error',
      'max-lines': [
        'error',
        {
          max: 1000,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      'no-console': ['error', { allow: ['error'] }],
      'no-useless-concat': 'error',
    },
  },
  {
    // NOTE: Check all source files except spec and store files
    name: 'app/rules/functions',
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
  {
    name: 'app/rules/boundaries',
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
          type: 'plugin-resources',
          pattern: ['src/plugins/**'],
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
              allow: ['global-resources', 'router-resources'],
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
              allow: [
                'view-resources',
                'global-resources',
                'router-resources',
                'feature-resources',
              ],
            },
            {
              from: 'plugin-resources',
              allow: ['global-resources', 'router-resources'],
            },
            {
              from: 'app-root-resources',
              allow: [
                'app-root-resources',
                'global-resources',
                'plugin-resources',
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
  pluginVue.configs['flat/recommended'],
  {
    name: 'vue/extended/rules',
    rules: {
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/no-extra-parens': 'error',
      'vue/define-emits-declaration': 'error',
      'vue/define-props-declaration': 'error',
      'vue/enforce-style-attribute': ['error', { allow: ['scoped'] }],
      'vue/no-empty-component-block': 'error',
      'vue/no-duplicate-class-names': 'error',
      'vue/no-multiple-objects-in-class': 'error',
      'vue/no-template-target-blank': 'error',
      'vue/no-static-inline-styles': 'error',
      'vue/eqeqeq': 'error',
      'vue/comma-dangle': 'error',
      'vue/no-v-text': 'error',
      'vue/no-undef-properties': 'error',
      'vue/no-unused-emit-declarations': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/no-useless-mustaches': 'error',
      'vue/no-unused-refs': 'error',
      'vue/no-use-v-else-with-v-for': 'error',
      'vue/v-for-delimiter-style': 'error',
      'vue/padding-line-between-blocks': 'error',
      'vue/prefer-use-template-ref': 'error',
      'vue/prefer-separate-static-class': 'error',
      'vue/require-emit-validator': 'error',
      'vue/slot-name-casing': 'error',
      'vue/no-console': 'error',
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
    extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
        alias: {
          map: [['@app', './src']],
          extensions: ['.ts', '.vue'],
        },
      },
    },
  },
  pluginVitest.configs.recommended,
  {
    name: 'vitest/extended/rules',
    files: ['src/**/*.spec.ts'],
    rules: {
      'vitest/consistent-test-filename': ['error', { pattern: String.raw`.*\.spec\.ts?$` }],
      'vitest/consistent-test-it': 'error',
      'vitest/consistent-vitest-vi': 'error',
      'vitest/no-conditional-in-test': 'error',
      'vitest/no-conditional-tests': 'error',
      'vitest/no-duplicate-hooks': 'error',
      'vitest/no-focused-tests': 'error',
      'vitest/no-test-prefixes': 'error',
      'vitest/no-test-return-statement': 'error',
      'vitest/padding-around-after-all-blocks': 'error',
      'vitest/padding-around-after-each-blocks': 'error',
      'vitest/padding-around-before-all-blocks': 'error',
      'vitest/padding-around-before-each-blocks': 'error',
      'vitest/padding-around-describe-blocks': 'error',
      'vitest/padding-around-test-blocks': 'error',
      'vitest/require-top-level-describe': 'error',
    },
  },
  skipFormatting,
)
