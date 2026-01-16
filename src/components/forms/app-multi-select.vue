<template>
  <div>
    <FloatLabel variant="on">
      <MultiSelect
        v-if="isObjectArray"
        v-model="value"
        filter
        fluid
        :disabled="isDisabled"
        :input-id="fieldName"
        :aria-label="ariaLabel"
        :name="fieldName"
        :invalid="errorMessage ? true : false"
        :max-selected-labels="optionSelectedMax"
        :display="optionDisplayFormat"
        :options="options"
        :option-value="optionValue"
        :option-label="optionLabel"
        @change="emit('change')"
      />
      <MultiSelect
        v-else
        v-model="value"
        filter
        fluid
        :disabled="isDisabled"
        :input-id="fieldName"
        :aria-label="ariaLabel"
        :name="fieldName"
        :invalid="errorMessage ? true : false"
        :max-selected-labels="optionSelectedMax"
        :display="optionDisplayFormat"
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
import type { AppMultiSelectProperties } from './types'
import { DEFAULT_REQUIRED_INDICATOR, isObject } from './utils'

const DEFAULT_MAX_OPTIONS_SELECTED = 3

const {
  label,
  options,
  field,
  optionLabel = 'label',
  optionValue = 'value',
  optionDisplayFormat = 'chip',
  optionSelectedMax = DEFAULT_MAX_OPTIONS_SELECTED,
  isRequired = false,
  isDisabled = false,
} = defineProps<AppMultiSelectProperties>()

defineModel<string[] | number[]>()

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
