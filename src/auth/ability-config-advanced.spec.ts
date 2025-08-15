import { describe, expect, it } from 'vitest'
import abilityConfigAdvanced from './ability-config-advanced'

describe('ability-config-advanced', () => {
  it('can read featureA', () => {
    const ability = abilityConfigAdvanced
    expect(ability.can('read', 'featureA')).toBeTruthy()
  })

  it('can read featureB', () => {
    const ability = abilityConfigAdvanced
    expect(ability.can('read', 'featureB')).toBeTruthy()
  })

  it('cannot read featureC', () => {
    const ability = abilityConfigAdvanced
    expect(ability.cannot('read', 'featureC')).toBeTruthy()
  })
})
