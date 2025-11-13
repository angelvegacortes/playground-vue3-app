import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { createMockLabelData } from '../mocks/data'
import AppLabel from './app-label.vue'
import { DEFAULT_REQUIRED_INDICATOR } from './utils'

describe('app-label', () => {
  const data = createMockLabelData()

  it('shows the label', async () => {
    const { getByText } = render(AppLabel, {
      props: {
        field: data.field,
        label: data.label,
        isRequired: false,
      },
    })

    expect(getByText(data.label)).toBeTruthy()
  })

  it('shows the label as required', async () => {
    const { getByText } = render(AppLabel, {
      props: {
        field: data.field,
        label: data.label,
        isRequired: true,
      },
    })

    expect(getByText(DEFAULT_REQUIRED_INDICATOR)).toBeTruthy()
    expect(getByText(data.label)).toBeTruthy()
  })
})
