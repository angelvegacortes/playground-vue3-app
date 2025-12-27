import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { createMockSelectData } from '../mocks/data'
import AppMultiSelect from './app-multi-select.vue'
import { DEFAULT_REQUIRED_INDICATOR } from './utils'

describe('app-multi-select', () => {
  const data = createMockSelectData()

  it('shows the multi select', async () => {
    const { getByRole } = render(AppMultiSelect, {
      props: {
        field: data.field,
        label: data.label,
        options: data.options.strings,
      },
    })

    expect(getByRole('combobox', { name: data.label })).toBeTruthy()
  })

  it('shows the multi select as required', async () => {
    const { getByRole } = render(AppMultiSelect, {
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

  it('shows the multi select as disabled', async () => {
    const { getByRole } = render(AppMultiSelect, {
      props: {
        field: data.field,
        label: data.label,
        options: data.options.strings,
        isDisabled: true,
      },
    })

    const multiSelect = getByRole<HTMLSelectElement>('combobox', { name: data.label })
    expect(multiSelect.disabled).toBe(true)
  })

  it('shows the multi select string options', async () => {
    const { getByRole, queryAllByRole } = render(AppMultiSelect, {
      props: {
        field: data.field,
        label: data.label,
        options: data.options.strings,
      },
    })

    const multiSelect = getByRole<HTMLSelectElement>('combobox', { name: data.label })
    expect(multiSelect).toBeTruthy()

    await userEvent.tab()
    await userEvent.keyboard('{Enter}')

    const multiSelectOptions = getByRole('listbox')
    expect(multiSelectOptions).toBeTruthy()

    expect(queryAllByRole('option')).toHaveLength(data.options.strings.length)

    for (const option of data.options.strings) {
      expect(queryAllByRole('option', { name: option })).toBeTruthy()
    }
  })

  it('shows the multi select number options', async () => {
    const { getByRole, queryAllByRole } = render(AppMultiSelect, {
      props: {
        field: data.field,
        label: data.label,
        options: data.options.numbers,
      },
    })

    const multiSelect = getByRole<HTMLSelectElement>('combobox', { name: data.label })
    expect(multiSelect).toBeTruthy()

    await userEvent.tab()
    await userEvent.keyboard('{Enter}')

    const multiSelectOptions = getByRole('listbox')
    expect(multiSelectOptions).toBeTruthy()

    expect(queryAllByRole('option')).toHaveLength(data.options.numbers.length)

    for (const option of data.options.numbers) {
      expect(queryAllByRole('option', { name: `${option}` })).toBeTruthy()
    }
  })

  it('shows the multi select object options', async () => {
    const { getByRole, queryAllByRole } = render(AppMultiSelect, {
      props: {
        field: data.field,
        label: data.label,
        options: data.options.objects,
      },
    })

    const multiSelect = getByRole<HTMLSelectElement>('combobox', { name: data.label })
    expect(multiSelect).toBeTruthy()

    await userEvent.tab()
    await userEvent.keyboard('{Enter}')

    const multiSelectOptions = getByRole('listbox')
    expect(multiSelectOptions).toBeTruthy()

    expect(queryAllByRole('option')).toHaveLength(data.options.objects.length)

    for (const option of data.options.objects) {
      expect(queryAllByRole('option', { name: option.label })).toBeTruthy()
    }
  })

  it('emits event on change', async () => {
    const { getByRole, emitted } = render(AppMultiSelect, {
      props: {
        field: data.field,
        label: data.label,
        options: data.options.strings,
      },
    })

    expect(emitted('change')).toBeUndefined()

    const multiSelect = getByRole<HTMLSelectElement>('combobox', { name: data.label })
    expect(multiSelect).toBeTruthy()

    await userEvent.tab()
    await userEvent.keyboard('{Enter}')
    const selectOption = getByRole('option', { name: data.options.strings[0]! })
    await userEvent.click(selectOption)

    expect(emitted('change')).toBeDefined()
  })

  it('emits event on v-model update', async () => {
    const { getByRole, emitted } = render(AppMultiSelect, {
      props: {
        field: data.field,
        label: data.label,
        options: data.options.strings,
      },
    })

    expect(emitted('update:modelValue')).toBeUndefined()

    const multiSelect = getByRole<HTMLSelectElement>('combobox', { name: data.label })
    expect(multiSelect).toBeTruthy()

    await userEvent.tab()
    await userEvent.keyboard('{Enter}')
    const selectOption = getByRole('option', { name: data.options.strings[0]! })
    await userEvent.click(selectOption)

    const DEFAULT_ARRAY_DEPTH = 2
    expect(emitted('update:modelValue')).toBeDefined()
    expect(emitted('update:modelValue').flat(DEFAULT_ARRAY_DEPTH).pop()).toBe(
      data.options.strings[0],
    )
  })
})
