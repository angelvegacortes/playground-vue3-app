<template>
  <Dialog :visible="isVisible" modal :header="header" :closable="isClosable" append-to="self">
    <slot></slot>
  </Dialog>
</template>

<script setup lang="ts">
const {
  header,
  isVisible,
  isClosable = false,
} = defineProps<{
  header: string
  isVisible: boolean
  isClosable?: boolean
}>()
</script>
