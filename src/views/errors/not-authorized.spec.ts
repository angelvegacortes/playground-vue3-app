import router from '@/router'
import { createTestingPinia } from '@pinia/testing'
import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import NotAuthorizedView from './not-authorized.vue'

describe('consent-view', () => {
  it('shows title', () => {
    const { getByText } = render(NotAuthorizedView)

    expect(getByText('Unauthorized')).toBeTruthy()
  })

  it('shows the back to home page', () => {
    const { getByRole } = render(NotAuthorizedView, {
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    expect(getByRole('link', { name: 'Back to home page' })).toBeTruthy()
  })
})
