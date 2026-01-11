import router from '@app/router'
import { useMagicKeys, whenever } from '@vueuse/core'

export default {
  install: () => {
    const magicKeys = useMagicKeys()

    const ctrlShiftH = magicKeys['Ctrl+Shift+H']
    const ctrlShiftP = magicKeys['Ctrl+Shift+P']
    const ctrlShiftT = magicKeys['Ctrl+Shift+T']

    whenever(ctrlShiftH!, () => {
      router.push('/')
    })

    whenever(ctrlShiftP!, () => {
      router.push('/examples/permissions')
    })

    whenever(ctrlShiftT!, () => {
      router.push('/examples/tabs')
    })
  },
}
