import ability from '@app/auth/ability-config-advanced'
import { server } from '@app/services/mocks/node'
import { render, screen } from '@testing-library/vue'
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import PermissionsView from './permissions-view.vue'

describe('permissions-view', () => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  beforeEach(() => {
    // NOTE: disable all permissions before each test
    ability.update([])
  })

  it('shows no features without permissions', async () => {
    await render(PermissionsView)

    expect(screen.queryByText('Feature A Test')).toBeNull()
    expect(screen.queryByText('Feature B Test')).toBeNull()
    expect(screen.queryByText('Feature C Test')).toBeNull()
  })

  it('shows all features with all permissions', () => {
    ability.update([{ action: 'read', subject: 'all' }])

    render(PermissionsView)

    expect(screen.getByText('Feature A Test')).toBeTruthy()
    expect(screen.getByText('Feature B Test')).toBeTruthy()
    expect(screen.getByText('Feature C Test')).toBeTruthy()
  })

  it('shows only feature a when its enabled', () => {
    ability.update([{ action: 'read', subject: 'featureA' }])

    render(PermissionsView)

    expect(screen.getByText('Feature A Test')).toBeTruthy()
    expect(screen.queryByText('Feature B Test')).toBeNull()
    expect(screen.queryByText('Feature C Test')).toBeNull()
  })

  it('shows only feature b when its enabled', () => {
    ability.update([{ action: 'read', subject: 'featureB' }])

    render(PermissionsView)

    expect(screen.queryByText('Feature A Test')).toBeNull()
    expect(screen.getByText('Feature B Test')).toBeTruthy()
    expect(screen.queryByText('Feature C Test')).toBeNull()
  })

  it('shows only feature C when its enabled', () => {
    ability.update([{ action: 'read', subject: 'featureC' }])

    render(PermissionsView)

    expect(screen.queryByText('Feature A Test')).toBeNull()
    expect(screen.queryByText('Feature B Test')).toBeNull()
    expect(screen.getByText('Feature C Test')).toBeTruthy()
  })

  it('shows message when loading', () => {
    render(PermissionsView)
    expect(screen.getByText('Loading test data...')).toBeTruthy()
    expect(screen.queryByText('Is data null?')).toBeFalsy()
    expect(screen.queryByText('Is data undefined?')).toBeFalsy()
  })

  it('shows data when not loading', async () => {
    await render(PermissionsView)

    const data1 = await screen.findByText('Is data null?')
    expect(data1).toBeTruthy()

    const data2 = await screen.findByText('Is data undefined?')
    expect(data2).toBeDefined()

    const loadingMessage = screen.queryByText('Loading test data...')
    expect(loadingMessage).toBeFalsy()
  })
})
