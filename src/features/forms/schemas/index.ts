import schemaUtils from '@app/schemas'
import { z } from 'zod'

export const formSchema1 = z.object({
  email: schemaUtils.getEmail(),
})

const contactSchema = z.object({
  firstName: schemaUtils.getString(),
  middleName: schemaUtils.getString(true),
  lastName: schemaUtils.getString(),
})

export const formSchema2 = z.object({
  email: schemaUtils.getEmail(),
  contact: contactSchema,
})

export const formSchema3 = z.object({
  email: schemaUtils.getEmail(),
  contacts: schemaUtils.getObjectArray(contactSchema),
})

export const formSchema4 = z.object({
  optional: z.object({
    text: schemaUtils.getString(true),
    number: schemaUtils.getNumber(true),
    textarea: schemaUtils.getString(true),
    select: schemaUtils.getString(true),
    multiselect: schemaUtils.getStringArray(true),
  }),
  required: z.object({
    text: schemaUtils.getString(),
    number: schemaUtils.getNumberNonNegative(),
    textarea: schemaUtils.getString(),
    select: schemaUtils.getString(),
    multiselect: schemaUtils.getStringArray(),
  }),
})

export const formSchema5 = formSchema1.extend({
  userId: schemaUtils.getString(true),
})
