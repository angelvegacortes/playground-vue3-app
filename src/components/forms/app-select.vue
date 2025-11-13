<template>
  <div>
    <FloatLabel variant="on">
      <Select
        v-if="isObjectArray"
        v-model="value"
        fluid
        :aria-label="ariaLabel"
        :input-id="field"
        :name="field"
        :invalid="errorMessage ? true : false"
        :options="options"
        :option-value="optionValue"
        :option-label="optionLabel"
        @change="emit('change')"
      />
      <Select
        v-else
        v-model="value"
        fluid
        :aria-label="ariaLabel"
        :input-id="field"
        :name="field"
        :invalid="errorMessage ? true : false"
        :options="options"
        @change="emit('change')"
      />
      <AppLabel :field="field" :label="label" :is-required="isRequired" />
    </FloatLabel>
    <AppErrorMessage :error="errorMessage" />
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { computed } from 'vue'
import AppErrorMessage from './app-error-message.vue'
import AppLabel from './app-label.vue'
import type { AppSelectOption } from './types'
import { DEFAULT_REQUIRED_INDICATOR, isObject } from './utils'

const {
  field,
  label,
  options,
  optionLabel = 'label',
  optionValue = 'value',
  isRequired = false,
} = defineProps<{
  field: string
  label: string
  options: string[] | number[] | AppSelectOption[]
  optionLabel?: string
  optionValue?: string
  isRequired?: boolean
}>()

const emit = defineEmits<{
  change: []
}>()

const { value, errorMessage } = useField<string>(() => field)

const isObjectArray = computed(() => {
  return isObject(options[0])
})

const ariaLabel = computed(() => {
  return isRequired ? `${DEFAULT_REQUIRED_INDICATOR}${label}` : label
})
</script>
