<template>
  <div>
    <FloatLabel variant="on">
      <InputText
        :id="fieldName"
        v-model="value"
        fluid
        type="text"
        :name="fieldName"
        :disabled="isDisabled"
        :maxlength="maxLength"
        :invalid="errorMessage ? true : false"
        @input="emit('input')"
      />
      <AppLabel :field="fieldName" :label="label" :is-required="isRequired" />
    </FloatLabel>
    <div class="flex justify-between">
      <div>
        <AppErrorMessage :error="errorMessage" />
      </div>
      <div>
        <AppCharacterCounter :value="value" :max-length="maxLength" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { computed } from 'vue'
import AppCharacterCounter from './app-character-counter.vue'
import AppErrorMessage from './app-error-message.vue'
import AppLabel from './app-label.vue'
import type { AppInputTextProps } from './types'

const {
  label,
  field = undefined,
  isRequired = false,
  isDisabled = false,
  maxLength = undefined,
} = defineProps<AppInputTextProps>()

defineModel<string>()

const emit = defineEmits<{
  input: []
}>()

/**
 * Account for field being used inside or outside of forms
 */
const fieldName = computed(() => {
  return field ? field : label.replaceAll(' ', '')
})

const { value, errorMessage } = useField<string>(() => fieldName.value, undefined, {
  syncVModel: true,
})
</script>
