<template>
  <Message v-if="error" severity="error" size="small" variant="simple">{{ error }}</Message>
</template>

<script setup lang="ts">
import type { AppErrorMessageProps } from './types'

const { error } = defineProps<AppErrorMessageProps>()
</script>
