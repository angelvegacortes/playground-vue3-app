import Aura from '@primeuix/themes/aura'

/**
 * Custom theme configuration for PrimeVue.
 */
export const themeOptions = {
  // Default theme configuration
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: false,
      cssLayer: false,
    },
  },
  ripple: true,
}
