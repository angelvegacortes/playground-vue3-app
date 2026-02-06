import router from '@app/router'
import { createTestingPinia } from '@pinia/testing'
import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import NotAuthorizedView from './not-authorized.vue'

describe('not-authorized', () => {
  it('shows title', () => {
    render(NotAuthorizedView)

    expect(screen.getByText('Unauthorized')).toBeTruthy()
  })

  it('shows the back to home page', () => {
    render(NotAuthorizedView, {
      global: {
        plugins: [createTestingPinia(), router],
      },
    })

    expect(screen.getByRole('link', { name: 'Back to home page' })).toBeTruthy()
  })
})
