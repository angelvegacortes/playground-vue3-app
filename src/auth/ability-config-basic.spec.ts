import { describe, expect, it } from 'vitest'
import abilityConfigBasic from './ability-config-basic'

describe('ability-config-basic', () => {
  it('can read featureA', () => {
    const ability = abilityConfigBasic
    expect(ability.can('read', 'featureA')).toBeTruthy()
  })

  it('can read featureB', () => {
    const ability = abilityConfigBasic
    expect(ability.can('read', 'featureB')).toBeTruthy()
  })

  it('cannot read featureC', () => {
    const ability = abilityConfigBasic
    expect(ability.cannot('read', 'featureC')).toBeTruthy()
  })
})
