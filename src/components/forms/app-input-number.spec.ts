import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { createMockInputNumberData } from '../mocks/data'
import AppInputNumber from './app-input-number.vue'
import { DEFAULT_REQUIRED_INDICATOR } from './utils'

describe('app-input-number', () => {
  const data = createMockInputNumberData()

  it('shows the input number', async () => {
    render(AppInputNumber, {
      props: {
        field: data.field,
        label: data.label,
      },
    })

    expect(screen.getByRole('spinbutton', { name: data.label })).toBeTruthy()
  })

  it('shows the input number as required', async () => {
    render(AppInputNumber, {
      props: {
        field: data.field,
        label: data.label,
        isRequired: true,
      },
    })

    const name = `${DEFAULT_REQUIRED_INDICATOR}${data.label}`
    expect(screen.getByRole('spinbutton', { name: name })).toBeTruthy()
  })

  it('shows the input number as disabled', async () => {
    render(AppInputNumber, {
      props: {
        field: data.field,
        label: data.label,
        isDisabled: true,
      },
    })

    const inputNumber = screen.getByRole<HTMLInputElement>('spinbutton', { name: data.label })
    expect(inputNumber.disabled).toBe(true)
  })

  it('shows the input number value', async () => {
    render(AppInputNumber, {
      props: {
        field: data.field,
        label: data.label,
      },
    })

    const inputNumber = screen.getByRole<HTMLInputElement>('spinbutton', { name: data.label })
    await userEvent.type(inputNumber, data.value)
    expect(inputNumber.value).toBe(data.value)
  })

  it('shows the input number min and max limits', async () => {
    render(AppInputNumber, {
      props: {
        field: data.field,
        label: data.label,
        max: data.max,
        min: data.min,
      },
    })

    const inputNumber = screen.getByRole<HTMLInputElement>('spinbutton', { name: data.label })
    await userEvent.type(inputNumber, data.value)
    expect(inputNumber.value).toBe(data.value)
  })

  it('emits event on input', async () => {
    const { emitted } = render(AppInputNumber, {
      props: {
        field: data.field,
        label: data.label,
      },
    })

    expect(emitted('input')).toBeUndefined()

    const inputNumber = screen.getByRole<HTMLInputElement>('spinbutton', { name: data.label })
    await userEvent.type(inputNumber, data.value)

    expect(emitted('input')).toBeDefined()
  })

  it('emits event on v-model update', async () => {
    const { emitted } = render(AppInputNumber, {
      props: {
        field: data.field,
        label: data.label,
      },
    })

    expect(emitted('update:modelValue')).toBeUndefined()

    const inputNumber = screen.getByRole<HTMLInputElement>('spinbutton', { name: data.label })
    await userEvent.type(inputNumber, data.value)
    await userEvent.keyboard('{Enter}')

    expect(emitted('update:modelValue')).toBeDefined()
    expect(emitted('update:modelValue').flat().pop()).toBe(Number.parseInt(data.value))
  })
})
