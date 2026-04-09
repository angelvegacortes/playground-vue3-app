<template>
  <Dialog
    :visible="isVisible"
    modal
    :header="header"
    :closable="isCloseable"
    append-to="self"
    v-bind="$attrs"
    @update:visible="onUpdateVisible"
  >
    <template #default>
      <slot></slot>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import type { AppDialogProperties } from './types'

const { header, isVisible, isCloseable = false } = defineProps<AppDialogProperties>()

defineSlots<{
  default(): void
}>()

const emit = defineEmits<{
  close: []
}>()

const onUpdateVisible = (visible: boolean) => {
  if (!visible) {
    emit('close')
  }
}
</script>
