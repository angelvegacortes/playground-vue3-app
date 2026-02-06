import router from '@app/router'
import { server } from '@app/services/mocks/node'
import { createTestingPinia } from '@pinia/testing'
import { render, screen } from '@testing-library/vue'
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'
import AppHeader from './app-header.vue'

describe('app-header', () => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  it('shows app title', () => {
    render(AppHeader, {
      global: {
        plugins: [router, createTestingPinia({ stubActions: false })],
      },
    })

    expect(screen.getByText('Vue 3 Playground')).toBeTruthy()
  })

  it('shows menu links', () => {
    render(AppHeader, {
      global: {
        plugins: [router, createTestingPinia({ stubActions: false })],
      },
    })

    expect(screen.getByRole('link', { name: 'Home' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Permissions' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Tabs' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Data Tables' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Calendars' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Forms' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Inputs' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Logout' })).toBeTruthy()
  })
})
