// stores/counter.spec.ts
import mockData from '@app/services/mocks/data'
import { server } from '@app/services/mocks/node'
import { createPinia, setActivePinia } from 'pinia'
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { useUserStore } from './user-store'

describe('user-store', () => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes the user', () => {
    const userStore = useUserStore()
    userStore.user = mockData.getUserData()
    userStore.init()

    expect(userStore.user).not.toBeNull()
  })

  it('does not authenticate user before login', () => {
    const userStore = useUserStore()

    expect(userStore.isAuthenticated()).toBe(false)
  })

  it('does authenticate user after login', () => {
    const userStore = useUserStore()
    userStore.user = mockData.getUserData()
    userStore.init()

    userStore.login()
    expect(userStore.isAuthenticated()).toBe(true)
  })

  it('does not accept terms before user consent', async () => {
    const userStore = useUserStore()

    expect(userStore.hasAcceptedTerms()).toBe(false)
  })

  it('does accept terms after user consent', () => {
    const userStore = useUserStore()
    userStore.user = mockData.getUserData()
    userStore.init()

    userStore.acceptTerms()
    expect(userStore.hasAcceptedTerms()).toBe(true)
  })

  it('does not return a users name before login', () => {
    const userStore = useUserStore()
    userStore.user = mockData.getUserData()
    userStore.init()

    expect(userStore.getName()).toBe('')
  })

  it('does return a users name after login', () => {
    const userStore = useUserStore()
    userStore.user = mockData.getUserData()
    userStore.init()

    userStore.login()
    expect(userStore.getName()).toBe('John Wick')
  })

  it('allows a user to logout', () => {
    const userStore = useUserStore()
    userStore.user = mockData.getUserData()
    userStore.init()

    userStore.login()
    userStore.acceptTerms()
    expect(userStore.isAuthenticated()).toBe(true)
    expect(userStore.hasAcceptedTerms()).toBe(true)

    userStore.logout()
    expect(userStore.isAuthenticated()).toBe(false)
    expect(userStore.hasAcceptedTerms()).toBe(false)
  })
})
