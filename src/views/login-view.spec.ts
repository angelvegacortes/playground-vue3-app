import router from '@app/router'
import { useUserStore } from '@app/stores/user-store'
import { createTestingPinia } from '@pinia/testing'
import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import LoginView from './login-view.vue'

describe('login-view', () => {
  it('shows a dialog', () => {
    render(LoginView, {
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    expect(screen.getByRole('dialog', { name: 'Login' })).toBeDefined()
  })

  it('shows the login link', () => {
    render(LoginView, {
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    expect(screen.getByRole('link', { name: 'Login' })).toBeDefined()
  })

  it('calls userStore when login link is clicked', async () => {
    render(LoginView, {
      global: {
        plugins: [createTestingPinia(), router],
      },
    })
    const link = screen.getByRole('link', { name: 'Login' })
    await link.click()
    const userStore = useUserStore()

    expect(userStore.login).toHaveBeenCalledOnce()
  })
})
