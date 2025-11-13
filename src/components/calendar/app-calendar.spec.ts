import ability from '@app/auth/ability-config-advanced'
import mockData from '@app/services/mocks/data'
import { server } from '@app/services/mocks/node'
import { render } from '@testing-library/vue'
import { DateTime } from 'luxon'
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import AppCalendar from './app-calendar.vue'

describe('app-calendar', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    // NOTE: disable all permissions before each test
    ability.update([])
  })

  it('shows the navigation buttons', async () => {
    const { getByRole } = render(AppCalendar, {
      props: {
        events: [],
      },
    })

    expect(getByRole('button', { name: 'Previous month' })).toBeTruthy()
    expect(getByRole('button', { name: 'Next month' })).toBeTruthy()
  })

  it('shows the current month', async () => {
    const { getByRole } = render(AppCalendar, {
      props: {
        events: [],
      },
    })

    const currentMonth = DateTime.now().toFormat('LLLL yyyy')
    expect(getByRole('heading', { level: 2, name: currentMonth })).toBeTruthy()
  })

  it('shows events', async () => {
    const events = mockData.getCalendarEvents(1)

    const { queryAllByText } = render(AppCalendar, {
      props: {
        events: events,
      },
    })

    expect(queryAllByText(events[0]!.title).length).toBeGreaterThanOrEqual(1)
  })
})
