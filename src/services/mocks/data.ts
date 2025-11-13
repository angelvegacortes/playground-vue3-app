import { type CalendarEvent, type Product, type User } from '@app/types'
import { faker } from '@faker-js/faker'

faker.seed(1234)

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
