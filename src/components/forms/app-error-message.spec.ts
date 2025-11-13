import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import AppErrorMessage from './app-error-message.vue'

describe('app-error-message', () => {
  it('should show error message when defined', async () => {
    const error = 'sample error message'
    const { getByRole, getByText } = render(AppErrorMessage, {
      props: {
        error: error,
      },
    })

    expect(getByRole('alert')).toBeTruthy()
    expect(getByText(error)).toBeTruthy()
  })

  it('should not show error message when undefined', async () => {
    const { queryByRole } = render(AppErrorMessage, {
      props: {
        error: undefined,
      },
    })

    expect(queryByRole('alert')).toBeFalsy()
  })
})
