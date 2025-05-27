export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  role: 'user' | 'admin'
  createdAt: Date
  updatedAt: Date
  isAuthenticated: boolean
}
