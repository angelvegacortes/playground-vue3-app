import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import TestForm1 from './test-form1.vue'

describe('test-form-1', () => {
  it('shows the form fields', () => {
    render(TestForm1)

    expect(screen.getByRole('textbox', { name: 'Email' })).toBeTruthy()
  })

  it('shows the form buttons', () => {
    render(TestForm1)

    expect(screen.getByRole('button', { name: 'Clear' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeTruthy()
  })

  it('shows errors when submitting an empty form', async () => {
    render(TestForm1)
    const user = userEvent.setup()

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    await user.click(submitButton)

    expect(screen.getByText('Invalid email address')).toBeTruthy()
  })

  it('shows errors when inputting invalid values', async () => {
    render(TestForm1)
    const user = userEvent.setup()

    const emailField = screen.getByRole<HTMLInputElement>('textbox', { name: 'Email' })
    await user.type(emailField, 'test')

    expect(emailField.ariaInvalid).toBeTruthy()
    expect(screen.getByText('Invalid email address')).toBeTruthy()
  })

  it('shows no errors when inputting valid values', async () => {
    render(TestForm1)
    const user = userEvent.setup()

    const emailField = screen.getByRole<HTMLInputElement>('textbox', { name: 'Email' })
    await user.type(emailField, 'test@test.gov')

    expect(emailField.ariaInvalid).toBeFalsy()
    expect(screen.queryByText('Invalid email address')).toBeFalsy()
  })

  it('clears the form', async () => {
    render(TestForm1)
    const user = userEvent.setup()

    const emailField = screen.getByRole<HTMLInputElement>('textbox', { name: 'Email' })
    await user.type(emailField, 'test')
    expect(emailField.value).toBe('test')

    const clearButton = screen.getByRole('button', { name: 'Clear' })
    await user.click(clearButton)

    expect(emailField.value).toBe('')
  })
})
