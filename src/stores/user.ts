import apiService from '@app/services'
import { type User } from '@app/types'
import { defineStore } from 'pinia'
import 'pinia-plugin-persistedstate'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref<User | null>(null)

    const init = async () => {
      if (user.value === null) {
        const { data, error } = apiService.getUser()

        if (error) {
          console.error(error.value?.message)
        } else {
          user.value = data.value!
        }
      }
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

    return { isAuthenticated, login, logout, getName, hasAcceptedTerms, acceptTerms, user, init }
  },
  {
    persist: true,
  },
)
