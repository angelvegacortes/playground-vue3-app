import { z, ZodObject } from 'zod'

/**
 * List of available type validation error messages.
 */
const errors = {
  requiresValue: 'Field is required.',
  requiresAtLeastOneValue: 'Field requires at least one value.',
  requiresNonNegativeValue: 'Field requires a non-negative value.',
}

/**
 * Get email type validation.
 */
const email = () => {
  return z.email().nonempty({ error: errors.requiresValue })
}

/**
 * Get email optional type validation.
 */
const emailOptional = () => {
  return z.email().optional()
}

/**
 * Get object array type validation.
 */
const objectArray = (data: ZodObject) => {
  return z.array(data).min(1, { message: errors.requiresAtLeastOneValue })
}

/**
 * Get object array optional type validation.
 */
const objectArrayOptional = (data: ZodObject) => {
  return z.array(data).optional()
}

/**
 * Get number type validation.
 */
const number = () => {
  return z.number({ message: errors.requiresValue })
}

/**
 * Get number optional type validation.
 */
const numberOptional = () => {
  return z.number().optional()
}

/**
 * Get number non-negative type validation.
 */
const numberNonNegative = () => {
  return z.coerce
    .number({ message: errors.requiresValue })
    .nonnegative({ message: schemaUtilities.errors.requiresNonNegativeValue })
}

/**
 * Get number non-negative type validation.
 */
const numberNonNegativeOptional = () => {
  return z
    .number()
    .nonnegative({ message: schemaUtilities.errors.requiresNonNegativeValue })
    .optional()
}

/**
 * Get string type validation.
 */
const string = () => {
  return z.string().min(1, { message: errors.requiresValue })
}

/**
 * Get string optional type validation.
 */
const stringOptional = () => {
  return z.string().optional()
}

/**
 * Get string array type validation.
 */
const stringArray = () => {
  return z.array(z.string()).min(1, { message: errors.requiresAtLeastOneValue })
}

/**
 * Get string array optional type validation.
 */
const stringArrayOptional = () => {
  return z.array(z.string()).optional()
}

const schemaUtilities = {
  errors: errors,
  email,
  emailOptional,
  objectArray,
  objectArrayOptional,
  number,
  numberOptional,
  numberNonNegative,
  numberNonNegativeOptional,
  string,
  stringOptional,
  stringArray,
  stringArrayOptional,
}

export default schemaUtilities
