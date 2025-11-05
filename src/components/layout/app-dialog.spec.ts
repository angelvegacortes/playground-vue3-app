import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import AppDialog from './app-dialog.vue'

describe('app-dialog', () => {
  it('can be hidden', () => {
    const { queryByRole } = render(AppDialog, {
      props: {
        header: 'dialog header',
        isVisible: false,
      },
      slots: {
        default: `
        <p>dialog content</p>
        `,
      },
    })

    expect(queryByRole('dialog')).toBeFalsy()
  })

  it('can be visible', () => {
    const { getByRole } = render(AppDialog, {
      props: {
        header: 'dialog header',
        isVisible: true,
      },
      slots: {
        default: `
        <p>dialog content</p>
        `,
      },
    })

    expect(getByRole('dialog')).toBeTruthy()
  })

  it('should show header', () => {
    const { getByText } = render(AppDialog, {
      props: {
        header: 'dialog header',
        isVisible: true,
      },
      slots: {
        default: `
        <p>dialog content</p>
        `,
      },
    })

    expect(getByText('dialog header')).toBeTruthy()
  })

  it('should show content', () => {
    const { getByText } = render(AppDialog, {
      props: {
        header: 'dialog header',
        isVisible: true,
      },
      slots: {
        default: `
        <p>dialog content</p>
        `,
      },
    })

    expect(getByText('dialog content')).toBeTruthy()
  })
})
