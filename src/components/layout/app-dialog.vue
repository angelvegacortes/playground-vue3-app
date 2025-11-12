<template>
  <Dialog
    :visible="isVisible"
    modal
    :header="header"
    :closable="false"
    append-to="self"
    v-bind="$attrs"
  >
    <slot></slot>
  </Dialog>
</template>

<script setup lang="ts">
const { header, isVisible } = defineProps<{
  header: string
  isVisible: boolean
}>()
</script>
