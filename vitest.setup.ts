import { vi } from 'vitest'
import { config } from '@vue/test-utils'
import { abilitiesPlugin } from '@casl/vue'
import ability from './src/auth/ability-config-advanced'

config.global.plugins = [[abilitiesPlugin, ability]]

// In your setupTests.js or a similar setup file
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false, // Default value, adjust as needed for your tests
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated, but often still expected
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
