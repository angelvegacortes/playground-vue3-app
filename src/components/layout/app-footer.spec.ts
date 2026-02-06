import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import AppFooter from './app-footer.vue'

describe('app-footer', () => {
  it('shows app title', () => {
    render(AppFooter)

    expect(screen.getByText('Vue 3 Playground')).toBeTruthy()
  })

  it('shows app version', () => {
    render(AppFooter)

    expect(screen.getByText('Version: latest')).toBeTruthy()
  })

  it('shows date', () => {
    render(AppFooter)

    expect(screen.getByText('August 2025')).toBeTruthy()
  })
})
