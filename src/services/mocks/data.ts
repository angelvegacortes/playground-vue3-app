import { type CalendarEvent, type Product, type User } from '@app/types'
import { faker } from '@faker-js/faker'

const DEFAULT_FAKER_SEED = 1234
faker.seed(DEFAULT_FAKER_SEED)

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
  const DIVISOR_FOR_EVEN_CHECK = 2
  for (let index = 0; index < limit; index++) {
    products.push({
      firstName: faker.person.firstName(),
      middleName: index % DIVISOR_FOR_EVEN_CHECK === 0 ? undefined : faker.person.middleName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      jobType: index % DIVISOR_FOR_EVEN_CHECK === 0 ? faker.person.jobType() : undefined,
      country: faker.location.country(),
    })
  }
  return products
}

const getCalendarEvents = (limit: number): CalendarEvent[] => {
  const calendarEvents: CalendarEvent[] = []
  for (let index = 0; index < limit; index++) {
    calendarEvents.push({
      title: faker.book.title(),
      start: faker.date.recent({ days: 1 }),
      end: faker.date.soon({ days: 10 }),
    })
  }
  return calendarEvents
}

const mockData = {
  getUserData,
  getProducts,
  getCalendarEvents,
}

export default mockData
