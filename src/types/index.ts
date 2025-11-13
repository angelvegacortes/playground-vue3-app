/**
 * Represents a user
 */
export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  role: 'user' | 'admin'
  createdAt: Date
  updatedAt: Date
  isAuthenticated: boolean
  hasAcceptedTerms: boolean
}

/**
 * Represents a product
 */
export interface Product {
  firstName: string
  middleName?: string
  lastName: string
  email: string
  jobType?: string
  country: string
}

/**
 * Represents a calendar event
 */
export interface CalendarEvent {
  title: string
  start: Date
  end: Date
}

/**
 * Represents a readyonly list of samples
 */
export const samples = ['SAMPLE_1', 'SAMPLE_2', 'SAMPLE_3'] as const
