import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import boundaries from 'eslint-plugin-boundaries'
import importPlugin from 'eslint-plugin-import'
import sonarjs from 'eslint-plugin-sonarjs'
import testingLibrary from 'eslint-plugin-testing-library'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import pluginVue from 'eslint-plugin-vue'

export default defineConfigWithVueTs(
  {
    name: 'app/defaults/files',
    files: ['src/**/*.{ts,vue}'],
  },
  {
    name: 'app/defaults/ignores',
    ignores: ['coverage/**', 'dist/**', 'docker/**', 'public/**', '*.d.ts'],
  },
  // @ts-expect-error due to sonarjs typescript issue
  sonarjs.configs.recommended,
  eslintPluginUnicorn.configs.recommended,
  testingLibrary.configs['flat/vue'],
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
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: ['ts'],
          },
        },
      ],
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
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
      // Note: you must disable the base rule as it can report incorrect errors
      'no-magic-numbers': 'off',
      '@typescript-eslint/no-magic-numbers': [
        'error',
        { ignoreArrayIndexes: true, ignore: [0, 1] },
      ],
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
          type: 'globals',
          pattern: [
            'src/assets/**',
            'src/auth/**',
            'src/components/**',
            'src/config/**',
            'src/constants/**',
            'src/enums/**',
            'src/mocks/**',
            'src/schemas/**',
            'src/services/**',
            'src/stores/**',
            'src/types/**',
          ],
        },
        {
          type: 'plugins',
          pattern: ['src/plugins/**'],
        },
        {
          type: 'router',
          pattern: ['src/router/**'],
        },
        {
          mode: 'full',
          type: 'root',
          pattern: ['src/app.vue'],
        },
        {
          mode: 'full',
          type: 'entrypoint',
          pattern: ['src/main.ts'],
        },
        {
          type: 'views',
          pattern: ['src/views/**'],
        },
        {
          mode: 'full',
          type: 'features',
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
      'boundaries/dependencies': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: { type: 'globals' },
              allow: [{ to: { type: 'globals' } }, { to: { type: 'router' } }],
            },
            {
              from: { type: 'router' },
              allow: [
                { to: { type: 'router' } },
                { to: { type: 'globals' } },
                { to: { type: 'features' } },
                { to: { type: 'views' } },
              ],
            },
            {
              from: { type: 'views' },
              allow: [
                { to: { type: 'views' } },
                { to: { type: 'globals' } },
                { to: { type: 'router' } },
                { to: { type: 'features' } },
              ],
            },
            {
              from: { type: 'plugins' },
              allow: [{ to: { type: 'globals' } }, { to: { type: 'router' } }],
            },
            {
              from: { type: 'root' },
              allow: [
                { to: { type: 'globals' } },
                { to: { type: 'router' } },
                {
                  to: {
                    type: 'features',
                    captured: { featureName: 'notifications' },
                  },
                },
              ],
            },
            {
              from: { type: 'entrypoint' },
              allow: [
                { to: { type: 'root' } },
                { to: { type: 'globals' } },
                { to: { type: 'plugins' } },
                { to: { type: 'router' } },
              ],
            },
            {
              from: { type: 'features' },
              allow: [
                { to: { type: 'globals' } },
                {
                  to: {
                    type: 'features',
                    captured: { featureName: '{{ from.captured.featureName }}' },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    name: 'app/rules/constants',
    files: ['src/**/constants/**'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['UPPER_CASE'],
        },
      ],
    },
  },
  {
    name: 'app/rules/enums',
    files: ['src/**/enums/**'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'enum',
          format: ['StrictPascalCase'],
        },
      ],
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
