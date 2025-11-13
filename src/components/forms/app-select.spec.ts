import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { createMockSelectData } from '../mocks/data'
import AppSelect from './app-select.vue'
import { DEFAULT_REQUIRED_INDICATOR } from './utils'

describe('app-select', () => {
  const data = createMockSelectData()

  it('shows the select', async () => {
    const { getByRole } = render(AppSelect, {
      props: {
        field: data.field,
        label: data.label,
        options: data.options.strings,
      },
    })

    expect(getByRole('combobox', { name: data.label })).toBeTruthy()
  })

  it('shows the select as required', async () => {
    const { getByRole } = render(AppSelect, {
      props: {
        field: data.field,
        label: data.label,
        options: data.options.strings,
        isRequired: true,
      },
    })

    const name = `${DEFAULT_REQUIRED_INDICATOR}${data.label}`
    expect(getByRole('combobox', { name: name })).toBeTruthy()
  })

  it('shows the select as disabled', async () => {
    const { getByRole } = render(AppSelect, {
      props: {
        field: data.field,
        label: data.label,
        options: data.options.strings,
        isDisabled: true,
      },
    })

    const select = getByRole<HTMLSelectElement>('combobox', { name: data.label })
    expect(select.ariaDisabled).toBeTruthy()
  })

  it('shows the select string options', async () => {
    const { getByRole, queryAllByRole } = render(AppSelect, {
      props: {
        field: data.field,
        label: data.label,
        options: data.options.strings,
      },
    })

    const select = getByRole<HTMLSelectElement>('combobox', { name: data.label })
    await userEvent.click(select)

    expect(getByRole('listbox')).toBeTruthy()
    expect(queryAllByRole('option')).toHaveLength(data.options.strings.length)

    for (const option of data.options.strings) {
      expect(getByRole('option', { name: option })).toBeTruthy()
    }
  })

  it('shows the select number options', async () => {
    const { getByRole, queryAllByRole } = render(AppSelect, {
      props: {
        field: data.field,
        label: data.label,
        options: data.options.numbers,
      },
    })

    const select = getByRole<HTMLSelectElement>('combobox', { name: data.label })
    await userEvent.click(select)

    expect(getByRole('listbox')).toBeTruthy()
    expect(queryAllByRole('option')).toHaveLength(data.options.numbers.length)

    for (const option of data.options.numbers) {
      expect(getByRole('option', { name: `${option}` })).toBeTruthy()
    }
  })

  it('shows the select object options', async () => {
    const { getByRole, queryAllByRole } = render(AppSelect, {
      props: {
        field: data.field,
        label: data.label,
        options: data.options.objects,
      },
    })

    const select = getByRole<HTMLSelectElement>('combobox', { name: data.label })
    await userEvent.click(select)

    expect(getByRole('listbox')).toBeTruthy()
    expect(queryAllByRole('option')).toHaveLength(data.options.objects.length)

    for (const option of data.options.objects) {
      expect(getByRole('option', { name: option.label })).toBeTruthy()
    }
  })

  it('emits event on change', async () => {
    const { getByRole, emitted } = render(AppSelect, {
      props: {
        field: data.field,
        label: data.label,
        options: data.options.strings,
      },
    })

    expect(emitted('change')).toBeUndefined()

    const select = getByRole<HTMLSelectElement>('combobox', { name: data.label })
    await userEvent.click(select)
    const selectOption = getByRole('option', { name: data.options.strings[0]! })
    await userEvent.click(selectOption)

    expect(emitted('change')).toBeDefined()
  })

  it('emits event on v-model update', async () => {
    const { getByRole, emitted } = render(AppSelect, {
      props: {
        field: data.field,
        label: data.label,
        options: data.options.strings,
      },
    })

    expect(emitted('update:modelValue')).toBeUndefined()

    const select = getByRole<HTMLSelectElement>('combobox', { name: data.label })
    await userEvent.click(select)
    const selectOption = getByRole('option', { name: data.options.strings[0]! })
    await userEvent.click(selectOption)

    expect(emitted('update:modelValue')).toBeDefined()
    expect(emitted('update:modelValue').flat().pop()).toBe(data.options.strings[0])
  })
})
