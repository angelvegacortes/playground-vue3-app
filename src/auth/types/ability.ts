import { type MongoAbility } from '@casl/ability'
import { type Action } from './action'
import { type Resource } from './resource'

export type AppAbility = MongoAbility<[Action, Resource]>
