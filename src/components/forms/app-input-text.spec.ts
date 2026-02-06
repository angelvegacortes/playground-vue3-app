import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { createMockInputTextData } from '../mocks/data'
import AppInputText from './app-input-text.vue'
import { DEFAULT_REQUIRED_INDICATOR } from './utils'

describe('app-input-text', () => {
  const data = createMockInputTextData()

  it('shows the input text', async () => {
    render(AppInputText, {
      props: {
        field: data.field,
        label: data.label,
      },
    })

    expect(screen.getByRole('textbox', { name: data.label })).toBeTruthy()
  })

  it('shows the input text as required', async () => {
    render(AppInputText, {
      props: {
        field: data.field,
        label: data.label,
        isRequired: true,
      },
    })

    const name = `${DEFAULT_REQUIRED_INDICATOR}${data.label}`
    expect(screen.getByRole('textbox', { name: name })).toBeTruthy()
  })

  it('shows the input text as disabled', async () => {
    render(AppInputText, {
      props: {
        field: data.field,
        label: data.label,
        isDisabled: true,
      },
    })

    const inputText = screen.getByRole<HTMLInputElement>('textbox', { name: data.label })
    expect(inputText.disabled).toBe(true)
  })

  it('shows the input text value', async () => {
    render(AppInputText, {
      props: {
        field: data.field,
        label: data.label,
      },
    })

    const inputText = screen.getByRole<HTMLInputElement>('textbox', { name: data.label })
    await userEvent.type(inputText, data.value)
    expect(inputText.value).toBe(data.value)
  })

  it('shows the input text max length', async () => {
    render(AppInputText, {
      props: {
        field: data.field,
        label: data.label,
        maxLength: data.maxLength,
      },
    })

    expect(screen.getByText(`0 / ${data.maxLength}`)).toBeTruthy()

    const inputText = screen.getByRole<HTMLInputElement>('textbox', { name: data.label })
    await userEvent.type(inputText, data.value)

    expect(screen.getByText(`${data.value.length} / ${data.maxLength}`)).toBeTruthy()
  })

  it('emits event on input', async () => {
    const { emitted } = render(AppInputText, {
      props: {
        field: data.field,
        label: data.label,
      },
    })

    expect(emitted('input')).toBeUndefined()

    const inputText = screen.getByRole<HTMLInputElement>('textbox', { name: data.label })
    await userEvent.type(inputText, 'hello')

    expect(emitted('input')).toBeDefined()
  })

  it('emits event on v-model update', async () => {
    const { emitted } = render(AppInputText, {
      props: {
        field: data.field,
        label: data.label,
      },
    })

    expect(emitted('update:modelValue')).toBeUndefined()

    const inputText = screen.getByRole<HTMLInputElement>('textbox', { name: data.label })
    await userEvent.type(inputText, data.value)

    expect(emitted('update:modelValue')).toBeDefined()
    expect(emitted('update:modelValue').flat().pop()).toBe(data.value)
  })
})
