import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import HomeView from './home-view.vue'

describe('home-view', () => {
  it('has a header', () => {
    render(HomeView)

    expect(screen.getByRole('heading', { level: 1 })).toBeDefined()
  })

  it('only has one header', async () => {
    render(HomeView)
    const headings = await screen.findAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
  })

  it('shows three dummy text cards', async () => {
    render(HomeView)

    const dummyTextCards = await screen.findAllByText('Dummy Text Card')

    expect(dummyTextCards).toHaveLength(3)
  })
})
