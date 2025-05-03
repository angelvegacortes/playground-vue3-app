import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import boundaries from "eslint-plugin-boundaries";
import importPlugin from "eslint-plugin-import";
// import typescriptParser from "@typescript-eslint/parser";
// import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import pluginVitest from '@vitest/eslint-plugin'
import pluginPlaywright from 'eslint-plugin-playwright'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import cspellPlugin from '@cspell/eslint-plugin';

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: [
      '**/dist/**',
      '**/coverage/**'
    ],
  },
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    plugins: {
      boundaries
    },
    settings: {
      "boundaries/include": ["src/**/*"],
      "boundaries/elements": [
        {
          mode: "full",
          type: "global-level-resource",
          pattern: [
            "src/assets/**",
            "src/components/**",
            "src/mocks/**",
            "src/stores/**",
            "src/types/**",
            "src/router/**"
          ]
        },
        {
          mode: "full",
          type: "app-level-resource",
          pattern: [
            "src/views/**",
            "src/*",
          ]
        },
        {
          mode: "full",
          type: "feature-level-resource",
          capture: ["featureName"],
          pattern: "src/features/*/**/*"
        }
      ]
    },
    rules: {
      "boundaries/no-unknown": ["error"],
      "boundaries/no-unknown-files": ["error"],
      "boundaries/element-types": [
        "error", {
          "default": "disallow",
          "rules": [
            {
              "from": ["global-level-resource"],
              "allow": ["app-level-resource", "global-level-resource"],
            },
            {
              "from": ["app-level-resource"],
              "allow": ["app-level-resource", "global-level-resource"],
            },
            {
              "from": ["feature-level-resource"],
              "allow": [
                "global-level-resource",
                ["feature-level-resource", { "featureName": "${from.featureName}"}]
              ],
            }
          ] 
        }
      ]
    }
  },
  {
    extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    rules: {
      'no-unused-vars': 'off',
      'import/no-unresolved': 'off'
    }
  },
  {
    plugins: { '@cspell': cspellPlugin },
    files: ['src/**/*.{ts,vue}'],
    rules: {
      '@cspell/spellchecker': ['warn', {}]
    }
  },
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  skipFormatting,
)
