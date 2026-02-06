import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { createMockCharacterCounter } from '../mocks/data'
import AppCharacterCounter from './app-character-counter.vue'

describe('app-character-counter', () => {
  const data = createMockCharacterCounter()

  it('should show the counter', async () => {
    const text = `${data.value.length} / ${data.maxLength}`
    render(AppCharacterCounter, {
      props: {
        value: data.value,
        maxLength: data.maxLength,
      },
    })

    expect(screen.getByText(text)).toBeTruthy()
  })

  it('should show the counter when value is undefined', async () => {
    const text = `0 / ${data.maxLength}`
    render(AppCharacterCounter, {
      props: {
        value: undefined,
        maxLength: data.maxLength,
      },
    })

    expect(screen.getByText(text)).toBeTruthy()
  })

  it('should not show the counter when max length undefined', async () => {
    const text = `${data.value.length} / ${data.maxLength}`
    render(AppCharacterCounter, {
      props: {
        value: data.value,
        maxLength: undefined,
      },
    })

    expect(screen.queryAllByText(text)).toHaveLength(0)
  })
})
