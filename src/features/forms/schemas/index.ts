import schemaUtils from '@app/schemas'
import { z } from 'zod'

export const formSchema1 = z.object({
  email: schemaUtils.email(),
})

const contactSchema = z.object({
  firstName: schemaUtils.string(),
  middleName: schemaUtils.stringOptional(),
  lastName: schemaUtils.string(),
})

export const formSchema2 = z.object({
  email: schemaUtils.email(),
  contact: contactSchema,
})

export const formSchema3 = z.object({
  email: schemaUtils.email(),
  contacts: schemaUtils.objectArray(contactSchema),
})

export const formSchema4 = z.object({
  optional: z.object({
    text: schemaUtils.stringOptional(),
    number: schemaUtils.numberOptional(),
    textarea: schemaUtils.stringOptional(),
    select: schemaUtils.stringOptional(),
    multiselect: schemaUtils.stringArrayOptional(),
  }),
  required: z.object({
    text: schemaUtils.string(),
    number: schemaUtils.numberNonNegative(),
    textarea: schemaUtils.string(),
    select: schemaUtils.string(),
    multiselect: schemaUtils.stringArray(),
  }),
})

export const formSchema5 = formSchema1.extend({
  userId: schemaUtils.stringOptional(),
})
