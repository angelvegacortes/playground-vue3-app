import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import AppDialog from './app-dialog.vue'

describe('app-dialog', () => {
  it('can be hidden', () => {
    render(AppDialog, {
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

    expect(screen.queryByRole('dialog')).toBeFalsy()
  })

  it('can be visible', () => {
    render(AppDialog, {
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

    expect(screen.getByRole('dialog')).toBeTruthy()
  })

  it('should show header', () => {
    render(AppDialog, {
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

    expect(screen.getByText('dialog header')).toBeTruthy()
  })

  it('should show content', () => {
    render(AppDialog, {
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

    expect(screen.getByText('dialog content')).toBeTruthy()
  })
})
