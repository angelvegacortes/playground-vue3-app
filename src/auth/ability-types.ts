import { type MongoAbility } from '@casl/ability'

// NOTE: manage and all are special keywords in CASL.
//       manage represents any action and all represents any subject.
type Actions = 'create' | 'read' | 'update' | 'delete' | 'manage'
type Subjects = 'featureA' | 'featureB' | 'featureC' | 'test' | 'all'

export type AppAbility = MongoAbility<[Actions, Subjects]>
