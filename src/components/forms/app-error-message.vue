<template>
  <Message v-if="error" severity="error" size="small" variant="simple">{{ error }}</Message>
</template>

<script setup lang="ts">
const { error } = defineProps<{
  error: string | undefined
}>()
</script>
