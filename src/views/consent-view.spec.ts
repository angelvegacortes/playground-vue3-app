import router from '@app/router'
import { useUserStore } from '@app/stores/user-store'
import { createTestingPinia } from '@pinia/testing'
import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import ConsentView from './consent-view.vue'

describe('consent-view', () => {
  it('shows a dialog', () => {
    render(ConsentView, {
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    expect(screen.getByRole('dialog', { name: 'EULA' })).toBeDefined()
  })

  it('shows the accept link', () => {
    render(ConsentView, {
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    expect(screen.getByRole('link', { name: 'Accept' })).toBeDefined()
  })

  it('calls userStore when login link is clicked', async () => {
    render(ConsentView, {
      global: {
        plugins: [createTestingPinia(), router],
      },
    })
    const link = screen.getByRole('link', { name: 'Accept' })
    await link.click()

    const userStore = useUserStore()
    expect(userStore.acceptTerms).toHaveBeenCalledOnce()
  })
})
