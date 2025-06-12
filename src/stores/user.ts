import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type User } from '@/types/main'
import { useFetch } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const init = async () => {
    const { data } = await useFetch<User>('api/test/200').get().json()
    user.value = data.value
  }

  const isAuthenticated = () => {
    if (user.value !== null) {
      return user.value!.isAuthenticated
    }

    return false
  }

  const hasAcceptedTerms = () => {
    if (user.value !== null) {
      return user.value!.hasAcceptedTerms
    }

    return false
  }

  const acceptTerms = () => {
    user.value!.hasAcceptedTerms = true
  }

  const getName = () => {
    if (isAuthenticated()) {
      return `${user.value!.firstName} ${user.value!.lastName}`
    }

    return ''
  }

  const login = () => {
    if (!isAuthenticated()) {
      user.value!.isAuthenticated = true
    }
  }

  const logout = () => {
    if (isAuthenticated()) {
      user.value!.isAuthenticated = false
      user.value!.hasAcceptedTerms = false
    }
  }

  init()

  return { isAuthenticated, login, logout, getName, hasAcceptedTerms, acceptTerms }
})
