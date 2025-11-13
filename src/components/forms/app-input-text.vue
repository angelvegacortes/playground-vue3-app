<template>
  <div>
    <FloatLabel variant="on">
      <InputText
        :id="field"
        v-model="value"
        fluid
        type="text"
        :name="field"
        :maxlength="maxLength"
        :invalid="errorMessage ? true : false"
        @input="emit('input')"
      />
      <AppLabel :field="field" :label="label" :is-required="isRequired" />
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
import AppCharacterCounter from './app-character-counter.vue'
import AppErrorMessage from './app-error-message.vue'
import AppLabel from './app-label.vue'

const {
  field,
  label,
  isRequired = false,
  maxLength = undefined,
} = defineProps<{
  field: string
  label: string
  isRequired?: boolean
  maxLength?: number | undefined
}>()

const emit = defineEmits<{
  input: []
}>()

const { value, errorMessage } = useField<string>(() => field)
</script>
