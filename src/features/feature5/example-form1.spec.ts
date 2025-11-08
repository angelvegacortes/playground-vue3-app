import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import ExampleForm1 from './example-form1.vue'

describe('example-form-1', () => {
  it('shows the form fields', () => {
    const { getByRole } = render(ExampleForm1)

    expect(getByRole('textbox', { name: 'Email' })).toBeTruthy()
  })

  it('shows the form buttons', () => {
    const { getByRole } = render(ExampleForm1)

    expect(getByRole('button', { name: 'Clear' })).toBeTruthy()
    expect(getByRole('button', { name: 'Submit' })).toBeTruthy()
  })

  it('shows errors when submitting an empty form', async () => {
    const { getByRole, getByText } = render(ExampleForm1)
    const user = userEvent.setup()

    const submitButton = getByRole('button', { name: 'Submit' })
    await user.click(submitButton)

    expect(getByText('Invalid email address')).toBeTruthy()
  })

  it('shows errors when inputting invalid values', async () => {
    const { getByRole, getByText } = render(ExampleForm1)
    const user = userEvent.setup()

    const emailField = getByRole<HTMLInputElement>('textbox', { name: 'Email' })
    await user.type(emailField, 'test')

    expect(emailField.ariaInvalid).toBeTruthy()
    expect(getByText('Invalid email address')).toBeTruthy()
  })

  it('shows no errors when inputting valid values', async () => {
    const { getByRole, queryByText } = render(ExampleForm1)
    const user = userEvent.setup()

    const emailField = getByRole<HTMLInputElement>('textbox', { name: 'Email' })
    await user.type(emailField, 'test@test.gov')

    expect(emailField.ariaInvalid).toBeFalsy()
    expect(queryByText('Invalid email address')).toBeFalsy()
  })

  it('clears the form', async () => {
    const { getByRole } = render(ExampleForm1)
    const user = userEvent.setup()

    const emailField = getByRole<HTMLInputElement>('textbox', { name: 'Email' })
    await user.type(emailField, 'test')
    expect(emailField.value).toBe('test')

    const clearButton = getByRole('button', { name: 'Clear' })
    await user.click(clearButton)

    expect(emailField.value).toBe('')
  })
})
