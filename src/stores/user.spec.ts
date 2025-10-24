// stores/counter.spec.ts
import { handlers } from '@/mocks/handlers'
import { setupServer } from 'msw/node'
import { createPinia, setActivePinia } from 'pinia'
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { useUserStore } from './user'

describe('user-store', () => {
  const mockServer = setupServer(...handlers)

  beforeAll(() => mockServer.listen())
  afterEach(() => mockServer.resetHandlers())
  afterAll(() => mockServer.close())

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes the user', async () => {
    const userStore = useUserStore()

    expect(userStore.user).toBeNull()
    await userStore.init()
    expect(userStore.user).not.toBeNull()
  })

  it('does not authenticate user before login', async () => {
    const userStore = useUserStore()

    expect(userStore.isAuthenticated()).toBe(false)
  })

  it('does authenticate user after login', async () => {
    const userStore = useUserStore()

    await userStore.init()
    userStore.login()
    expect(userStore.isAuthenticated()).toBe(true)
  })

  it('does not accept terms before user consent', async () => {
    const userStore = useUserStore()

    expect(userStore.hasAcceptedTerms()).toBe(false)
  })

  it('does accept terms after user consent', async () => {
    const userStore = useUserStore()

    await userStore.init()
    userStore.acceptTerms()
    expect(userStore.hasAcceptedTerms()).toBe(true)
  })

  it('does not return a users name before login', async () => {
    const userStore = useUserStore()

    await userStore.init()
    expect(userStore.getName()).toBe('')
  })

  it('does return a users name after login', async () => {
    const userStore = useUserStore()

    await userStore.init()
    userStore.login()
    expect(userStore.getName()).toBe('John Wick')
  })

  it('allows a user to logout', async () => {
    const userStore = useUserStore()

    await userStore.init()
    userStore.login()
    userStore.acceptTerms()
    expect(userStore.isAuthenticated()).toBe(true)
    expect(userStore.hasAcceptedTerms()).toBe(true)

    userStore.logout()
    expect(userStore.isAuthenticated()).toBe(false)
    expect(userStore.hasAcceptedTerms()).toBe(false)
  })
})
