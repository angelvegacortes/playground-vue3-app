import { z, ZodObject } from 'zod'

/**
 * List of available type validation error messages.
 */
const errorMessages = {
  requiresValue: 'Field is required.',
  requiresAtLeastOneValue: 'Field requires at least one value.',
  requiresNonNegativeValue: 'Field requires a non-negative value.',
}

/**
 * Get email type validation.
 * @param isOptional Defaults to false. If true, then type validation is made optional.
 * @returns
 */
const getEmail = (isOptional: boolean = false) => {
  return isOptional
    ? z.email().optional()
    : z.email().nonempty({ error: errorMessages.requiresValue })
}

/**
 * Get object array type validation.
 * @param isOptional Defaults to false. If true, then type validation is made optional.
 * @returns
 */
/**
 * Get object array type validation.
 * @param data ZodObject that wil be passed into the array type.
 * @param isOptional Defaults to false. If true, then type validation is made optional.
 * @returns
 */
const getObjectArray = (data: ZodObject, isOptional: boolean = false) => {
  return isOptional
    ? z.array(data).optional()
    : z.array(data).min(1, { message: errorMessages.requiresAtLeastOneValue })
}

/**
 * Get number type validation.
 * @param isOptional Defaults to false. If true, then type validation is made optional.
 * @returns
 */
const getNumber = (isOptional: boolean = false) => {
  return isOptional ? z.number().optional() : z.number({ message: errorMessages.requiresValue })
}

/**
 * Get number non-negative type validation.
 * @param isOptional Defaults to false. If true, then type validation is made optional.
 * @returns
 */
const getNumberNonNegative = (isOptional: boolean = false) => {
  return isOptional
    ? z
        .number()
        .nonnegative({ message: schemaUtilities.errors.requiresNonNegativeValue })
        .optional()
    : z.coerce
        .number({ message: errorMessages.requiresValue })
        .nonnegative({ message: schemaUtilities.errors.requiresNonNegativeValue })
}

/**
 * Get string type validation.
 * @param isOptional Defaults to false. If true, then type validation is made optional.
 * @returns
 */
const getString = (isOptional: boolean = false) => {
  return isOptional
    ? z.string().optional()
    : z.string().min(1, { message: errorMessages.requiresValue })
}

/**
 * Get string array type validation.
 * @param isOptional Defaults to false. If true, then type validation is made optional.
 * @returns
 */
const getStringArray = (isOptional: boolean = false) => {
  return isOptional
    ? z.array(z.string()).optional()
    : z.array(z.string()).min(1, { message: errorMessages.requiresAtLeastOneValue })
}

const schemaUtilities = {
  errors: errorMessages,
  getEmail,
  getObjectArray,
  getNumber,
  getNumberNonNegative,
  getString,
  getStringArray,
}

export default schemaUtilities
