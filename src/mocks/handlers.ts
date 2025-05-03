import { http, HttpResponse } from 'msw'
import { type User } from '@/types/main'

const getUserData = () => {
  const user: User = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
  }
  return user
}

export const handlers = [
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
