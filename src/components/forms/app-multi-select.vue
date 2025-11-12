<template>
  <div>
    <FloatLabel variant="on">
      <MultiSelect
        v-model="value"
        :input-id="field"
        :name="field"
        :invalid="errorMessage ? true : false"
        :max-selected-labels="optionSelectedMax"
        filter
        fluid
        :display="optionDisplayFormat"
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

const {
  field,
  label,
  options,
  optionLabel = 'label',
  optionValue = 'value',
  optionDisplayFormat = 'chip',
  optionSelectedMax = 3,
  isRequired = false,
} = defineProps<{
  field: string
  label: string
  options: unknown[]
  optionLabel?: string
  optionValue?: string
  optionDisplayFormat?: 'chip' | 'comma'
  optionSelectedMax?: number
  isRequired?: boolean
}>()

const { value, errorMessage } = useField<string>(() => field)
</script>
