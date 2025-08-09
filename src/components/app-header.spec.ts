import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/vue'
import AppHeader from './app-header.vue'
import { createTestingPinia } from '@pinia/testing'
import router from '@/router'

describe('app-header', () => {
  it('can view drawer', () => {
    const { getByRole } = render(AppHeader, {
      global: {
        plugins: [router, createTestingPinia({ stubActions: true })],
      },
    })

    expect(getByRole('link', { name: 'Home' })).toBeTruthy()
    expect(getByRole('link', { name: 'Test' })).toBeTruthy()
  })
})
