import type { CalendarEvent, Product, User } from '@app/types'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

const fetchCalendarEvents = async (): Promise<CalendarEvent[]> => {
  const { data } = await axios.get('api/calendar/events')
  return data
}

const fetchUser = async (): Promise<User> => {
  const { data } = await axios.get('api/user')
  return data
}

const fetchTestData = async (): Promise<User> => {
  const { data } = await axios.get('api/test/200')
  return data
}

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get('api/products')
  return data
}

const getCalendarEvents = () => {
  return useQuery({ queryKey: ['events'], queryFn: fetchCalendarEvents })
}

const getUser = () => {
  return useQuery({ queryKey: ['user'], queryFn: fetchUser })
}

const getTestData = () => {
  return useQuery({ queryKey: ['user'], queryFn: fetchTestData })
}

const getProducts = () => {
  return useQuery({ queryKey: ['products'], queryFn: fetchProducts })
}

const apiService = {
  getCalendarEvents,
  getProducts,
  getUser,
  getTestData,
}

export default apiService
