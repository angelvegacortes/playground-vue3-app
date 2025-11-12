<template>
  <div>
    <FloatLabel variant="on">
      <InputNumber
        v-model="value"
        :input-id="field"
        :name="field"
        :invalid="errorMessage ? true : false"
        show-buttons
        fluid
        :min="min"
        :max="max"
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
  min = undefined,
  max = undefined,
  isRequired = false,
} = defineProps<{
  field: string
  label: string
  min?: number | undefined
  max?: number | undefined
  isRequired?: boolean
}>()

const { value, errorMessage } = useField<number>(() => field)
</script>
