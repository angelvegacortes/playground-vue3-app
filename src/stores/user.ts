import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type User } from '@/types/main'
import { useFetch } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const init = async () => {
    console.log('useUserStore::init()')
    const { data } = await useFetch<User>('api/test/200').get().json()
    user.value = data.value
  }

  const isAuthenticated = () => {
    if (user.value !== null) {
      return user.value!.isAuthenticated
    } else {
      return false
    }
  }

  const login = () => {
    if (user.value !== null) {
      user.value!.isAuthenticated = true
    }
  }

  const logout = () => {
    if (user.value !== null) {
      user.value!.isAuthenticated = false
    }
  }

  init()

  return { isAuthenticated, login, logout }
})
