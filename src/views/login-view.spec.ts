import router from '@app/router'
import { useUserStore } from '@app/stores/user'
import { createTestingPinia } from '@pinia/testing'
import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import LoginView from './login-view.vue'

describe('login-view', () => {
  it('shows a dialog', () => {
    const { getByRole } = render(LoginView, {
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    expect(getByRole('dialog', { name: 'Login' })).toBeDefined()
  })

  it('shows the login link', () => {
    const { getByRole } = render(LoginView, {
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    expect(getByRole('link', { name: 'Login' })).toBeDefined()
  })

  it('calls userStore when login link is clicked', async () => {
    const { getByRole } = render(LoginView, {
      global: {
        plugins: [createTestingPinia(), router],
      },
    })
    const link = getByRole('link', { name: 'Login' })
    await link.click()
    const userStore = useUserStore()

    expect(userStore.login).toHaveBeenCalledOnce()
  })
})
