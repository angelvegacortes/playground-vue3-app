import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import AppInputText from './app-input-text.vue'

describe('app-input-text', () => {
  const inputField = 'order'
  const inputLabel = 'My Order'

  it('shows the input text', async () => {
    const { getByRole } = render(AppInputText, {
      props: {
        field: inputField,
        label: inputLabel,
      },
    })

    expect(getByRole('textbox', { name: inputLabel })).toBeTruthy()
  })

  it('shows the input text as required', async () => {
    const { getByRole } = render(AppInputText, {
      props: {
        field: inputField,
        label: inputLabel,
        isRequired: true,
      },
    })

    expect(getByRole('textbox', { name: `*${inputLabel}` })).toBeTruthy()
  })
})
