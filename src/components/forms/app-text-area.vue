<template>
  <div>
    <FloatLabel variant="on">
      <Textarea
        :id="field"
        v-model="value"
        :name="field"
        :rows="rows"
        :cols="cols"
        :invalid="errorMessage ? true : false"
        fluid
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
  rows,
  cols,
  isRequired = false,
} = defineProps<{
  field: string
  label: string
  rows: number
  cols: number
  isRequired?: boolean
}>()

const { value, errorMessage } = useField<string>(() => field)
</script>
