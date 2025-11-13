<template>
  <small v-if="maxLength"> {{ currentLength }} / {{ maxLength }}</small>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { value, maxLength } = defineProps<{
  value: string | undefined
  maxLength: number | undefined
}>()

const DEFAULT_CURRENT_LENGTH = 0

const currentLength = computed(() => {
  return value && value.length ? value.length : DEFAULT_CURRENT_LENGTH
})
</script>
