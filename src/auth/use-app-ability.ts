import { useAbility } from '@casl/vue'
import { type AppAbility } from './types/ability'

export const useAppAbility = () => useAbility<AppAbility>()
