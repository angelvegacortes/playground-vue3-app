import { z } from 'zod'

const errorMessages = {
  requiredString: 'Field is required.',
  atLeastOneSelection: 'Field requires at least one selection.',
}

export const formSchema1 = z.object({
  email: z.email(),
})

const contactSchema = z.object({
  firstName: z.string().min(1, { message: errorMessages.requiredString }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: errorMessages.requiredString }),
})

export const formSchema2 = z.object({
  email: z.email(),
  contact: contactSchema,
})

export const formSchema3 = z.object({
  email: z.email(),
  contacts: z.array(contactSchema),
})

export const formSchema4 = z.object({
  optional: z.object({
    text: z.string().optional(),
    number: z.number().optional(),
    textarea: z.string().optional(),
    select: z.string().optional(),
    multiselect: z.array(z.string()),
  }),
  required: z.object({
    text: z.string().min(1, { message: errorMessages.requiredString }),
    number: z.coerce
      .number({ message: errorMessages.requiredString })
      .nonnegative({ message: errorMessages.requiredString }),
    textarea: z.string().min(1, { message: errorMessages.requiredString }),
    select: z.string().min(1, { message: errorMessages.requiredString }),
    multiselect: z.array(z.string()).min(1, { message: errorMessages.atLeastOneSelection }),
  }),
})
