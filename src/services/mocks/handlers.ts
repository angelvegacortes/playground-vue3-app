import { http, HttpResponse } from 'msw'
import mockData from './data'

const basicHandlers = [
  // HTTP 200 mock
  http.get('api/test/200', () => {
    return HttpResponse.json(mockData.getUserData())
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
    return HttpResponse.json(mockData.getUserData())
  }),
  http.get('api/products', () => {
    return HttpResponse.json(mockData.getProducts(10))
  }),
  http.get('api/calendar/events', () => {
    return HttpResponse.json(mockData.getCalendarEvents(10))
  }),
]

export const handlers = [...basicHandlers, ...dataHandlers]
