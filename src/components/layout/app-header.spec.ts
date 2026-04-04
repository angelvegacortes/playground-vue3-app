import router from '@app/router'
import { server } from '@app/services/mocks/node'
import { createTestingPinia } from '@pinia/testing'
import userEvent from '@testing-library/user-event'
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

  it('shows menu items', () => {
    render(AppHeader, {
      global: {
        plugins: [router, createTestingPinia({ stubActions: false })],
      },
    })

    expect(screen.getByRole('link', { name: 'Home' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Permissions' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Logout' })).toBeTruthy()
  })

  it('shows layout menu item and its nested links', async () => {
    render(AppHeader, {
      global: {
        plugins: [router, createTestingPinia({ stubActions: false })],
      },
    })

    const button = screen.getByRole('button', { name: 'Layout' })

    expect(button).toBeTruthy()

    await userEvent.click(button)

    expect(screen.getByRole('link', { name: 'Tabs' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Data Tables' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Calendars' })).toBeTruthy()
  })

  it('shows inputs menu item and its nested links', async () => {
    render(AppHeader, {
      global: {
        plugins: [router, createTestingPinia({ stubActions: false })],
      },
    })

    const button = screen.getByRole('button', { name: 'Inputs' })

    expect(button).toBeTruthy()

    await userEvent.click(button)

    expect(screen.getByRole('link', { name: 'Forms' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Input Fields' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Keyboard Shortcuts' })).toBeTruthy()
  })
})
