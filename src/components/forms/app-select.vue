<template>
  <div>
    <FloatLabel variant="on">
      <Select
        v-if="isObjectArray"
        v-model="value"
        fluid
        :disabled="isDisabled"
        :aria-label="ariaLabel"
        :input-id="fieldName"
        :name="fieldName"
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
        :disabled="isDisabled"
        :aria-label="ariaLabel"
        :input-id="fieldName"
        :name="fieldName"
        :invalid="errorMessage ? true : false"
        :options="options"
        @change="emit('change')"
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
import type { AppSelectProperties } from './types'
import { DEFAULT_REQUIRED_INDICATOR, isObject } from './utils'

const {
  label,
  options,
  field,
  optionLabel = 'label',
  optionValue = 'value',
  isRequired = false,
  isDisabled = false,
} = defineProps<AppSelectProperties>()

defineModel<string | number>()

const emit = defineEmits<{
  change: []
}>()

/**
 * Account for field being used inside or outside of forms
 */
const fieldName = computed(() => {
  return field ?? label.replaceAll(' ', '')
})

const { value, errorMessage } = useField<string>(() => fieldName.value, undefined, {
  syncVModel: true,
})

const isObjectArray = computed(() => {
  return isObject(options[0])
})

const ariaLabel = computed(() => {
  return isRequired ? `${DEFAULT_REQUIRED_INDICATOR}${label}` : label
})
</script>
