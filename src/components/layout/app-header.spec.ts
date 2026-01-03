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
    expect(getByRole('link', { name: 'Permissions' })).toBeTruthy()
    expect(getByRole('link', { name: 'Tabs' })).toBeTruthy()
    expect(getByRole('link', { name: 'Data Tables' })).toBeTruthy()
    expect(getByRole('link', { name: 'Calendars' })).toBeTruthy()
    expect(getByRole('link', { name: 'Forms' })).toBeTruthy()
    expect(getByRole('link', { name: 'Inputs' })).toBeTruthy()
    expect(getByRole('link', { name: 'Logout' })).toBeTruthy()
  })
})
