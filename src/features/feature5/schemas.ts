import { z } from 'zod'

export const formSchema1 = z.object({
  username: z.string().min(1, { message: 'Field is required' }),
})

const itemSchema = z.object({
  email: z.string().min(1, { message: 'Field is required' }),
})

export const formSchema2 = z.object({
  username: z.string().min(1, { message: 'Field is required' }),
  emails: z.array(itemSchema).min(2, 'Field is required'),
})
