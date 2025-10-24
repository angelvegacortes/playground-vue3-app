import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import HomeView from './home-view.vue'

describe('home-view', () => {
  it('has a header', () => {
    const { getByRole } = render(HomeView)

    expect(getByRole('heading', { level: 1 })).toBeDefined()
  })

  it('only has one header', async () => {
    const { findAllByRole } = render(HomeView)
    const headings = await findAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
  })

  it('shows three dummy text cards', async () => {
    const { findAllByText } = render(HomeView)

    const dummyTextCards = await findAllByText('Dummy Text Card')

    expect(dummyTextCards).toHaveLength(3)
  })
})
