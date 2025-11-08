import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/vue'
import flushPromises from 'flush-promises'
import { describe, expect, it } from 'vitest'
import waitForExpect from 'wait-for-expect'
import ExampleForm3 from './example-form3.vue'

describe('example-form-3', () => {
  it('shows the form fields', () => {
    const { getByRole } = render(ExampleForm3)

    expect(getByRole('textbox', { name: '*Email' })).toBeTruthy()
  })

  it('shows the form buttons', () => {
    const { getByRole } = render(ExampleForm3)

    expect(getByRole('button', { name: 'Clear' })).toBeTruthy()
    expect(getByRole('button', { name: 'Submit' })).toBeTruthy()
  })

  it('shows errors when submitting an empty form', async () => {
    const { getByRole, getByText } = render(ExampleForm3)
    const user = userEvent.setup()

    const submitButton = getByRole('button', { name: 'Submit' })
    await user.click(submitButton)

    await flushPromises()
    await waitForExpect(() => {
      expect(getByText('Invalid email address')).toBeTruthy()
    })
  })

  it('shows errors when inputting invalid values', async () => {
    const { getByRole, getByText } = render(ExampleForm3)
    const user = userEvent.setup()

    const emailField = getByRole<HTMLInputElement>('textbox', { name: '*Email' })
    await user.type(emailField, 'test')

    await flushPromises()
    await waitForExpect(() => {
      expect(emailField.ariaInvalid).toBeTruthy()
      expect(getByText('Invalid email address')).toBeTruthy()
    })
  })

  it('shows no errors when inputting valid values', async () => {
    const { getByRole, queryByText } = render(ExampleForm3)
    const user = userEvent.setup()

    const emailField = getByRole<HTMLInputElement>('textbox', { name: '*Email' })
    await user.type(emailField, 'test@test.gov')

    await flushPromises()
    await waitForExpect(() => {
      expect(emailField.ariaInvalid).toBeFalsy()
      expect(queryByText('Invalid email address')).toBeFalsy()
    })
  })

  it('clears the form', async () => {
    const { getByRole } = render(ExampleForm3)
    const user = userEvent.setup()

    const emailField = getByRole<HTMLInputElement>('textbox', { name: '*Email' })
    await user.type(emailField, 'test')
    expect(emailField.value).toBe('test')

    const clearButton = getByRole('button', { name: 'Clear' })
    await user.click(clearButton)

    expect(emailField.value).toBe('')
  })
})
