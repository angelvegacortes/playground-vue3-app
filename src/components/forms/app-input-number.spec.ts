import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { createMockInputNumberData } from '../mocks/data'
import AppInputNumber from './app-input-number.vue'
import { DEFAULT_REQUIRED_INDICATOR } from './utils'

describe('app-input-number', () => {
  const data = createMockInputNumberData()

  it('shows the input number', async () => {
    const { getByRole } = render(AppInputNumber, {
      props: {
        field: data.field,
        label: data.label,
      },
    })

    expect(getByRole('spinbutton', { name: data.label })).toBeTruthy()
  })

  it('shows the input number as required', async () => {
    const { getByRole } = render(AppInputNumber, {
      props: {
        field: data.field,
        label: data.label,
        isRequired: true,
      },
    })

    const name = `${DEFAULT_REQUIRED_INDICATOR}${data.label}`
    expect(getByRole('spinbutton', { name: name })).toBeTruthy()
  })

  it('shows the input number value', async () => {
    const { getByRole } = render(AppInputNumber, {
      props: {
        field: data.field,
        label: data.label,
      },
    })

    const inputText = getByRole<HTMLInputElement>('spinbutton', { name: data.label })
    await userEvent.type(inputText, data.value)
    expect(inputText.value).toBe(data.value)
  })

  it('shows the input number min and max limits', async () => {
    const { getByRole } = render(AppInputNumber, {
      props: {
        field: data.field,
        label: data.label,
        max: data.max,
        min: data.min,
      },
    })

    const inputText = getByRole<HTMLInputElement>('spinbutton', { name: data.label })
    await userEvent.type(inputText, data.value)
    expect(inputText.value).toBe(data.value)
  })

  it('emits event on input', async () => {
    const { getByRole, emitted } = render(AppInputNumber, {
      props: {
        field: data.field,
        label: data.label,
      },
    })

    expect(emitted('input')).toBeUndefined()

    const inputNumber = getByRole('spinbutton', { name: data.label })
    await userEvent.type(inputNumber, '2')

    expect(emitted('input')).toBeDefined()
  })
})
