<template>
  <label :for="field">
    <span v-if="isRequired" class="mr-1 text-red-700">{{ DEFAULT_REQUIRED_INDICATOR }}</span>
    <span>{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import type { AppLabelProps } from './types'
import { DEFAULT_REQUIRED_INDICATOR } from './utils'

const { field, label, isRequired } = defineProps<AppLabelProps>()
</script>
