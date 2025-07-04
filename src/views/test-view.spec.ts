import { describe, expect, it } from 'vitest'
import TestView from './test-view.vue'
import { abilitiesPlugin } from '@casl/vue'
import ability from '@/auth/ability-config-advanced'
import { render } from '@testing-library/vue'

describe('test-view', () => {
  it('loads', () => {
    const { queryByText, getByText } = render(TestView, {
      global: {
        stubs: {
          teleport: true,
        },
        plugins: [[abilitiesPlugin, ability]],
      },
    })

    expect(getByText('Feature A Test')).toBeTruthy()
    expect(getByText('Feature B Test')).toBeTruthy()
    expect(queryByText('Feature C Test')).toBeNull()
  })
})
