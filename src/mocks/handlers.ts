import { http, HttpResponse } from 'msw'
import { type CalendarEvent, type Product, type User } from '@/types'
import { faker } from '@faker-js/faker'

const getUserData = (): User => {
  const user: User = {
    id: 1,
    email: 'john.wick@continental.com',
    firstName: 'John',
    lastName: 'Wick',
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
    isAuthenticated: false,
    hasAcceptedTerms: false,
  }
  return user
}

const getProducts = (limit: number): Product[] => {
  const products: Product[] = []
  for (let i = 0; i < limit; i++) {
    products.push({
      firstName: faker.person.firstName(),
      middleName: i % 2 !== 0 ? faker.person.middleName() : undefined,
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      jobType: i % 2 === 0 ? faker.person.jobType() : undefined,
      country: faker.location.country(),
    })
  }
  return products
}

const getCalendarEvents = (limit: number): CalendarEvent[] => {
  const calendarEvents: CalendarEvent[] = []
  for (let i = 0; i < limit; i++) {
    calendarEvents.push({
      title: faker.book.title(),
      start: faker.date.between({ from: '2025-10-01', to: '2025-10-15' }),
      end: faker.date.between({ from: '2025-10-16', to: '2025-10-31' }),
    })
  }
  return calendarEvents
}

const basicHandlers = [
  // HTTP 200 mock
  http.get('api/test/200', () => {
    return HttpResponse.json(getUserData())
  }),
  // HTTP 204 mock
  http.get('api/test/204', () => {
    return new HttpResponse(null, {
      status: 204,
      statusText: 'No Content',
    })
  }),
  // HTTP 400 mock
  http.get('api/test/400', () => {
    return new HttpResponse(null, { status: 400 })
  }),
  // HTTP 401 mock
  http.get('api/test/401', () => {
    return new HttpResponse(null, { status: 401 })
  }),
  // HTTP 404 mock
  http.get('api/test/404', () => {
    return new HttpResponse(null, { status: 404 })
  }),
  // HTTP 500 mock
  http.get('api/test/500', () => {
    return new HttpResponse(null, { status: 500 })
  }),
]

const dataHandlers = [
  http.get('api/user', () => {
    return HttpResponse.json(getUserData())
  }),
  http.get('api/products', () => {
    return HttpResponse.json(getProducts(10))
  }),
  http.get('api/calendar/events', () => {
    return HttpResponse.json(getCalendarEvents(10))
  }),
]

export const handlers = [...basicHandlers, ...dataHandlers]
