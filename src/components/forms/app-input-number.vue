<template>
  <div>
    <FloatLabel variant="on">
      <InputNumber
        v-model="value"
        fluid
        :input-id="field"
        :name="field"
        :invalid="errorMessage ? true : false"
        :min="min"
        :max="max"
        @input="emit('input')"
      />
      <AppLabel :field="field" :label="label" :is-required="isRequired" />
    </FloatLabel>
    <AppErrorMessage :error="errorMessage" />
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import AppErrorMessage from './app-error-message.vue'
import AppLabel from './app-label.vue'

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

const emit = defineEmits<{
  input: []
}>()

const { value, errorMessage } = useField<number>(() => field)
</script>
