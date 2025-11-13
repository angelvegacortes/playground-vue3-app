<template>
  <div>
    <FloatLabel variant="on">
      <InputNumber
        v-model="value"
        fluid
        :input-id="fieldName"
        :name="fieldName"
        :invalid="errorMessage ? true : false"
        :min="min"
        :max="max"
        :disabled="isDisabled"
        @input="emit('input')"
      />
      <AppLabel :field="fieldName" :label="label" :is-required="isRequired" />
    </FloatLabel>
    <AppErrorMessage :error="errorMessage" />
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { computed } from 'vue'
import AppErrorMessage from './app-error-message.vue'
import AppLabel from './app-label.vue'
import type { AppInputNumberProps } from './types'

const {
  label,
  field = undefined,
  min = undefined,
  max = undefined,
  isRequired = false,
  isDisabled = false,
} = defineProps<AppInputNumberProps>()

defineModel<number>()

const emit = defineEmits<{
  input: []
}>()

/**
 * Account for field being used inside or outside of forms
 */
const fieldName = computed(() => {
  return field ? field : label.replaceAll(' ', '')
})

const { value, errorMessage } = useField<number>(() => fieldName.value, undefined, {
  syncVModel: true,
})
</script>
