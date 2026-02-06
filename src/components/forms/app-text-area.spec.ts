import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { createMockTextAreaData } from '../mocks/data'
import AppTextArea from './app-text-area.vue'
import { DEFAULT_REQUIRED_INDICATOR } from './utils'

describe('app-text-area', () => {
  const data = createMockTextAreaData()

  it('shows the input text area', async () => {
    render(AppTextArea, {
      props: {
        field: data.field,
        label: data.label,
        cols: data.cols,
        rows: data.rows,
      },
    })

    expect(screen.getByRole('textbox', { name: data.label })).toBeTruthy()
  })

  it('shows the input text area as required', async () => {
    render(AppTextArea, {
      props: {
        field: data.field,
        label: data.label,
        cols: data.cols,
        rows: data.rows,
        isRequired: true,
      },
    })

    const name = `${DEFAULT_REQUIRED_INDICATOR}${data.label}`
    expect(screen.getByRole('textbox', { name: name })).toBeTruthy()
  })

  it('shows the input text area as disabled', async () => {
    render(AppTextArea, {
      props: {
        field: data.field,
        label: data.label,
        cols: data.cols,
        rows: data.rows,
        isDisabled: true,
      },
    })

    const textArea = screen.getByRole<HTMLInputElement>('textbox', { name: data.label })
    expect(textArea.disabled).toBe(true)
  })

  it('shows the input text area value', async () => {
    render(AppTextArea, {
      props: {
        field: data.field,
        label: data.label,
        cols: data.cols,
        rows: data.rows,
      },
    })

    const textArea = screen.getByRole<HTMLInputElement>('textbox', { name: data.label })
    await userEvent.type(textArea, data.value)
    expect(textArea.value).toBe(data.value)
  })

  it('shows the input text area max length', async () => {
    render(AppTextArea, {
      props: {
        field: data.field,
        label: data.label,
        cols: data.cols,
        rows: data.rows,
        maxLength: data.maxLength,
      },
    })

    expect(screen.getByText(`0 / ${data.maxLength}`)).toBeTruthy()

    const textArea = screen.getByRole<HTMLInputElement>('textbox', { name: data.label })
    await userEvent.type(textArea, data.value)

    expect(screen.getByText(`${data.value.length} / ${data.maxLength}`)).toBeTruthy()
  })

  it('emits event on input', async () => {
    const { emitted } = render(AppTextArea, {
      props: {
        field: data.field,
        label: data.label,
        cols: data.cols,
        rows: data.rows,
      },
    })

    expect(emitted('input')).toBeUndefined()

    const textArea = screen.getByRole<HTMLInputElement>('textbox', { name: data.label })
    await userEvent.type(textArea, 'hello')

    expect(emitted('input')).toBeDefined()
  })

  it('emits event on v-model update', async () => {
    const { emitted } = render(AppTextArea, {
      props: {
        field: data.field,
        label: data.label,
        cols: data.cols,
        rows: data.rows,
      },
    })

    expect(emitted('update:modelValue')).toBeUndefined()

    const textArea = screen.getByRole<HTMLInputElement>('textbox', { name: data.label })
    await userEvent.type(textArea, data.value)

    expect(emitted('update:modelValue')).toBeDefined()
    expect(emitted('update:modelValue').flat().pop()).toBe(data.value)
  })
})
