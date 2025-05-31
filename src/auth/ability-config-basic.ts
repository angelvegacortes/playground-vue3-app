import { defineAbility } from '@casl/ability'

export default defineAbility((can, cannot) => {
  can('read', 'featureA')
  can('read', 'featureB')
  cannot('read', 'featureC')
})
