import ability from '@app/auth/ability-config-advanced'
import { render } from '@testing-library/vue'
import { beforeEach, describe, expect, it } from 'vitest'
import Test1View from './test1-view.vue'

describe('test1-view', () => {
  beforeEach(() => {
    // NOTE: disable all permissions before each test
    ability.update([])
  })

  it('shows no features without permissions', async () => {
    const { queryByText } = await render(Test1View)

    expect(queryByText('Feature A Test')).toBeNull()
    expect(queryByText('Feature B Test')).toBeNull()
    expect(queryByText('Feature C Test')).toBeNull()
  })

  it('shows all features with all permissions', () => {
    ability.update([{ action: 'read', subject: 'all' }])

    const { getByText } = render(Test1View)

    expect(getByText('Feature A Test')).toBeTruthy()
    expect(getByText('Feature B Test')).toBeTruthy()
    expect(getByText('Feature C Test')).toBeTruthy()
  })

  it('shows only feature a when its enabled', () => {
    ability.update([{ action: 'read', subject: 'featureA' }])

    const { getByText, queryByText } = render(Test1View)

    expect(getByText('Feature A Test')).toBeTruthy()
    expect(queryByText('Feature B Test')).toBeNull()
    expect(queryByText('Feature C Test')).toBeNull()
  })

  it('shows only feature b when its enabled', () => {
    ability.update([{ action: 'read', subject: 'featureB' }])

    const { getByText, queryByText } = render(Test1View)

    expect(queryByText('Feature A Test')).toBeNull()
    expect(getByText('Feature B Test')).toBeTruthy()
    expect(queryByText('Feature C Test')).toBeNull()
  })

  it('shows only feature C when its enabled', () => {
    ability.update([{ action: 'read', subject: 'featureC' }])

    const { getByText, queryByText } = render(Test1View)

    expect(queryByText('Feature A Test')).toBeNull()
    expect(queryByText('Feature B Test')).toBeNull()
    expect(getByText('Feature C Test')).toBeTruthy()
  })
})
