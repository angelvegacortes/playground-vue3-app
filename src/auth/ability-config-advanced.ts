import { AbilityBuilder, createMongoAbility } from '@casl/ability'
import { type AppAbility } from './types/ability'

const { can, cannot, build } = new AbilityBuilder<AppAbility>(createMongoAbility)

can('read', 'featureA')
can('read', 'featureB')
cannot('read', 'featureC')

export default build()
