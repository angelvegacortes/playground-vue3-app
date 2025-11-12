<template>
  <div>
    <FloatLabel variant="on">
      <Select
        v-model="value"
        :input-id="field"
        :name="field"
        :invalid="errorMessage ? true : false"
        fluid
        :options="options"
        :option-value="optionValue"
        :option-label="optionLabel"
      />
      <label :for="field">
        <span v-if="isRequired" class="mr-1 text-red-700">*</span>
        <span>{{ label }}</span>
      </label>
    </FloatLabel>
    <Message v-if="errorMessage" severity="error" size="small" variant="simple">{{
      errorMessage
    }}</Message>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import type { SelectOption } from './types'

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
  options: string[] | number[] | SelectOption[]
  optionLabel?: string
  optionValue?: string
  isRequired?: boolean
}>()

const { value, errorMessage } = useField<string>(() => field)
</script>
