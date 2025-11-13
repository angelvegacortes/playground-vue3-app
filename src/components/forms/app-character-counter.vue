<template>
  <small v-if="maxLength"> {{ currentLength }} / {{ maxLength }}</small>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { AppCharacterCounterProps } from './types'

const { value, maxLength } = defineProps<AppCharacterCounterProps>()

const DEFAULT_CURRENT_LENGTH = 0

const currentLength = computed(() => {
  return value && value.length ? value.length : DEFAULT_CURRENT_LENGTH
})
</script>
