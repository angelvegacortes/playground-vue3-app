import { useAbility } from '@casl/vue'
import { type AppAbility } from './ability-types'

export const useAppAbility = () => useAbility<AppAbility>()
