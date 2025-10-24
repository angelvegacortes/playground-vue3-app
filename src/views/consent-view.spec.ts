import router from '@/router'
import { useUserStore } from '@/stores/user'
import { createTestingPinia } from '@pinia/testing'
import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import ConsentView from './consent-view.vue'

describe('consent-view', () => {
  it('shows a dialog', () => {
    const { getByRole } = render(ConsentView, {
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    expect(getByRole('dialog', { name: 'EULA' })).toBeDefined()
  })

  it('shows the accept link', () => {
    const { getByRole } = render(ConsentView, {
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    expect(getByRole('link', { name: 'Accept' })).toBeDefined()
  })

  it('calls userStore when login link is clicked', async () => {
    const { getByRole } = render(ConsentView, {
      global: {
        plugins: [createTestingPinia(), router],
      },
    })
    const link = getByRole('link', { name: 'Accept' })
    await link.click()

    const userStore = useUserStore()
    expect(userStore.acceptTerms).toHaveBeenCalledOnce()
  })
})
