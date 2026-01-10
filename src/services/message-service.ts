import { useToast } from 'primevue/usetoast'

export function useMessageService() {
  const toast = useToast()

  const showMessage = (type: 'success' | 'error', message: string) => {
    toast.add({ severity: type, summary: message, life: 3000 })
  }

  const showSuccessMessage = (message: string) => {
    showMessage('success', message)
  }

  const showErrorMessage = (message: string) => {
    showMessage('success', message)
  }

  return {
    showSuccessMessage,
    showErrorMessage,
  }
}
