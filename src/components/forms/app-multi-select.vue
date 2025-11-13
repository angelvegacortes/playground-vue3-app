<template>
  <div>
    <FloatLabel variant="on">
      <MultiSelect
        v-if="isObjectArray"
        v-model="value"
        filter
        fluid
        :input-id="field"
        :aria-label="ariaLabel"
        :name="field"
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
        :input-id="field"
        :aria-label="ariaLabel"
        :name="field"
        :invalid="errorMessage ? true : false"
        :max-selected-labels="optionSelectedMax"
        :display="optionDisplayFormat"
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
import { DEFAULT_REQUIRED_INDICATOR, isObject } from './utils'

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
