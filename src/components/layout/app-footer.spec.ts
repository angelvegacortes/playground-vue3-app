import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import AppFooter from './app-footer.vue'

describe('app-footer', () => {
  it('shows app title', () => {
    const { getByText } = render(AppFooter)

    expect(getByText('Vue 3 Playground')).toBeTruthy()
  })

  it('shows app version', () => {
    const { getByText } = render(AppFooter)

    expect(getByText('Version: latest')).toBeTruthy()
  })

  it('shows date', () => {
    const { getByText } = render(AppFooter)

    expect(getByText('August 2025')).toBeTruthy()
  })
})
