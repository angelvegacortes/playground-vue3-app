import router from '@app/router'
import { server } from '@app/services/mocks/node'
import { createTestingPinia } from '@pinia/testing'
import { render } from '@testing-library/vue'
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'
import AppHeader from './app-header.vue'

describe('app-header', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('shows app title', () => {
    const { getByText } = render(AppHeader, {
      global: {
        plugins: [router, createTestingPinia({ stubActions: false })],
      },
    })

    expect(getByText('Vue 3 Playground')).toBeTruthy()
  })

  it('shows menu links', () => {
    const { getByRole } = render(AppHeader, {
      global: {
        plugins: [router, createTestingPinia({ stubActions: false })],
      },
    })

    expect(getByRole('link', { name: 'Home' })).toBeTruthy()
    expect(getByRole('link', { name: 'Test 1' })).toBeTruthy()
    expect(getByRole('link', { name: 'Test 2' })).toBeTruthy()
    expect(getByRole('link', { name: 'Test 3' })).toBeTruthy()
    expect(getByRole('link', { name: 'Test 4' })).toBeTruthy()
    expect(getByRole('link', { name: 'Test 5' })).toBeTruthy()
    expect(getByRole('link', { name: 'Logout' })).toBeTruthy()
  })
})
