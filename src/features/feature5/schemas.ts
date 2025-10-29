import { z } from 'zod'

export const formSchema1 = z.object({
  email: z.email(),
})

const contactSchema = z.object({
  firstName: z.string().min(1, { message: 'Field is required' }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'Field is required' }),
})

export const formSchema2 = z.object({
  email: z.email(),
  contact: contactSchema,
})

export const formSchema3 = z.object({
  email: z.email(),
  contacts: z.array(contactSchema),
})
