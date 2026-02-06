import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { createMockLabelData } from '../mocks/data'
import AppLabel from './app-label.vue'
import { DEFAULT_REQUIRED_INDICATOR } from './utils'

describe('app-label', () => {
  const data = createMockLabelData()

  it('shows the label', async () => {
    render(AppLabel, {
      props: {
        field: data.field,
        label: data.label,
        isRequired: false,
      },
    })

    expect(screen.getByText(data.label)).toBeTruthy()
  })

  it('shows the label as required', async () => {
    render(AppLabel, {
      props: {
        field: data.field,
        label: data.label,
        isRequired: true,
      },
    })

    expect(screen.getByText(DEFAULT_REQUIRED_INDICATOR)).toBeTruthy()
    expect(screen.getByText(data.label)).toBeTruthy()
  })
})
