<template>
  <Message v-if="error" severity="error" size="small" variant="simple">{{ error }}</Message>
</template>

<script setup lang="ts">
import type { AppErrorMessageProperties } from './types'

const { error } = defineProps<AppErrorMessageProperties>()
</script>
