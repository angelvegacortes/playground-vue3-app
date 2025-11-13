/**
 * Scrolls into view and focuses on provided form element.
 * @param fieldName name of form element
 */
export const scrollToFieldError = (fieldName: string) => {
  const el = document.querySelector(`[name="${fieldName}"]`) as HTMLElement
  if (el.scrollIntoView) {
    el?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }
  if (el.focus) {
    el?.focus()
  }
}
