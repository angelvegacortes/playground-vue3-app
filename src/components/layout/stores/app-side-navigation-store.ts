import { defineStore } from 'pinia'
import 'pinia-plugin-persistedstate'
import { ref } from 'vue'

export const useAppSideNavigationStore = defineStore(
  'appSideNavigation',
  () => {
    const visible = ref<boolean>(false)

    const show = () => {
      visible.value = true
    }

    const hide = () => {
      visible.value = false
    }

    const toggle = () => {
      visible.value = !visible.value
    }

    const isVisible = () => {
      return visible.value
    }

    return {
      isVisible,
      show,
      hide,
      toggle,
    }
  },
  {
    persist: true,
  },
)
