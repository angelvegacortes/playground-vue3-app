<template>
  <div>
    <FloatLabel variant="on">
      <InputText
        :id="field"
        v-model="value"
        :name="field"
        type="text"
        :invalid="errorMessage ? true : false"
        fluid
      />
      <label :for="field">{{ label }}</label>
    </FloatLabel>
    <Message v-if="errorMessage" severity="error" size="small" variant="simple">{{
      errorMessage
    }}</Message>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'

const { field, label } = defineProps<{
  field: string
  label: string
}>()

const { value, errorMessage } = useField<string>(() => field)
</script>
