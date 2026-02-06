import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import AppErrorMessage from './app-error-message.vue'

describe('app-error-message', () => {
  it('should show error message when defined', async () => {
    const error = 'sample error message'
    render(AppErrorMessage, {
      props: {
        error: error,
      },
    })

    expect(screen.getByRole('alert')).toBeTruthy()
    expect(screen.getByText(error)).toBeTruthy()
  })

  it('should not show error message when undefined', async () => {
    render(AppErrorMessage, {
      props: {
        error: undefined,
      },
    })

    expect(screen.queryByRole('alert')).toBeFalsy()
  })
})
