/**
 * Visual indicator for a required form field.
 */
export const DEFAULT_REQUIRED_INDICATOR = '*'

/**
 * Returns true if value is object; otherwise, returns false.
 * @param value the value to evaluate
 */
export const isObject = (value: unknown) => {
  const isObject = typeof value === 'object' && value !== null

  return isObject ? true : false
}
