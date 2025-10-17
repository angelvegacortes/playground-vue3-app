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

export interface Product {
  name: string
  email: string
  jobType?: string
  country: string
}

export const samples = ['SAMPLE_1', 'SAMPLE_2', 'SAMPLE_3'] as const
