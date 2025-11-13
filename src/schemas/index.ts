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
export const getEmail = (isOptional: boolean = false) => {
  if (isOptional) {
    return z.email().optional()
  } else {
    return z.email().nonempty({ error: errorMessages.requiresValue })
  }
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
export const getObjectArray = (data: ZodObject, isOptional: boolean = false) => {
  if (isOptional) {
    return z.array(data).optional()
  } else {
    return z.array(data).min(1, { message: errorMessages.requiresAtLeastOneValue })
  }
}

/**
 * Get number type validation.
 * @param isOptional Defaults to false. If true, then type validation is made optional.
 * @returns
 */
export const getNumber = (isOptional: boolean = false) => {
  if (isOptional) {
    return z.number().optional()
  } else {
    return z.number({ message: errorMessages.requiresValue })
  }
}

/**
 * Get number non-negative type validation.
 * @param isOptional Defaults to false. If true, then type validation is made optional.
 * @returns
 */
export const getNumberNonNegative = (isOptional: boolean = false) => {
  if (isOptional) {
    return z
      .number()
      .nonnegative({ message: schemaUtils.errors.requiresNonNegativeValue })
      .optional()
  } else {
    return z.coerce
      .number({ message: errorMessages.requiresValue })
      .nonnegative({ message: schemaUtils.errors.requiresNonNegativeValue })
  }
}

/**
 * Get string type validation.
 * @param isOptional Defaults to false. If true, then type validation is made optional.
 * @returns
 */
export const getString = (isOptional: boolean = false) => {
  if (isOptional) {
    return z.string().optional()
  } else {
    return z.string().min(1, { message: errorMessages.requiresValue })
  }
}

/**
 * Get string array type validation.
 * @param isOptional Defaults to false. If true, then type validation is made optional.
 * @returns
 */
export const getStringArray = (isOptional: boolean = false) => {
  if (isOptional) {
    return z.array(z.string()).optional()
  } else {
    return z.array(z.string()).min(1, { message: errorMessages.requiresAtLeastOneValue })
  }
}

const schemaUtils = {
  errors: errorMessages,
  getEmail,
  getObjectArray,
  getNumber,
  getNumberNonNegative,
  getString,
  getStringArray,
}

export default schemaUtils
