import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { createMockInputTextData } from '../mocks/data'
import AppInputText from './app-input-text.vue'
import { DEFAULT_REQUIRED_INDICATOR } from './utils'

describe('app-input-text', () => {
  const data = createMockInputTextData()

  it('shows the input text', async () => {
    const { getByRole } = render(AppInputText, {
      props: {
        field: data.field,
        label: data.label,
      },
    })

    expect(getByRole('textbox', { name: data.label })).toBeTruthy()
  })

  it('shows the input text as required', async () => {
    const { getByRole } = render(AppInputText, {
      props: {
        field: data.field,
        label: data.label,
        isRequired: true,
      },
    })

    const name = `${DEFAULT_REQUIRED_INDICATOR}${data.label}`
    expect(getByRole('textbox', { name: name })).toBeTruthy()
  })

  it('shows the input text as disabled', async () => {
    const { getByRole } = render(AppInputText, {
      props: {
        field: data.field,
        label: data.label,
        isDisabled: true,
      },
    })

    const inputText = getByRole<HTMLInputElement>('textbox', { name: data.label })
    expect(inputText.disabled).toBe(true)
  })

  it('shows the input text value', async () => {
    const { getByRole } = render(AppInputText, {
      props: {
        field: data.field,
        label: data.label,
      },
    })

    const inputText = getByRole<HTMLInputElement>('textbox', { name: data.label })
    await userEvent.type(inputText, data.value)
    expect(inputText.value).toBe(data.value)
  })

  it('shows the input text max length', async () => {
    const { getByText, getByRole } = render(AppInputText, {
      props: {
        field: data.field,
        label: data.label,
        maxLength: data.maxLength,
      },
    })

    expect(getByText(`0 / ${data.maxLength}`)).toBeTruthy()

    const inputText = getByRole<HTMLInputElement>('textbox', { name: data.label })
    await userEvent.type(inputText, data.value)

    expect(getByText(`${data.value.length} / ${data.maxLength}`)).toBeTruthy()
  })

  it('emits event on input', async () => {
    const { getByRole, emitted } = render(AppInputText, {
      props: {
        field: data.field,
        label: data.label,
      },
    })

    expect(emitted('input')).toBeUndefined()

    const inputText = getByRole<HTMLInputElement>('textbox', { name: data.label })
    await userEvent.type(inputText, 'hello')

    expect(emitted('input')).toBeDefined()
  })

  it('emits event on v-model update', async () => {
    const { getByRole, emitted } = render(AppInputText, {
      props: {
        field: data.field,
        label: data.label,
      },
    })

    expect(emitted('update:modelValue')).toBeUndefined()

    const inputText = getByRole<HTMLInputElement>('textbox', { name: data.label })
    await userEvent.type(inputText, data.value)

    expect(emitted('update:modelValue')).toBeDefined()
    expect(emitted('update:modelValue').flat().pop()).toBe(data.value)
  })
})
