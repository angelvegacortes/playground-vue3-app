<template>
  <small v-if="maxLength"> {{ currentLength }} / {{ maxLength }}</small>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { AppCharacterCounterProperties } from './types'

const { value, maxLength } = defineProps<AppCharacterCounterProperties>()

const DEFAULT_CURRENT_LENGTH = 0

const currentLength = computed(() => {
  return value && value.length > 0 ? value.length : DEFAULT_CURRENT_LENGTH
})
</script>
