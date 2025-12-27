/**
 * Scrolls into view and focuses on provided form element.
 * @param fieldName name of form element
 */
export const scrollToFieldError = (fieldName: string) => {
  const element = document.querySelector(`[name="${fieldName}"]`) as HTMLElement
  if (element.scrollIntoView) {
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }
  if (element.focus) {
    element?.focus()
  }
}
