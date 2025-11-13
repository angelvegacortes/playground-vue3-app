<template>
  <div class="grid grid-cols-2 gap-2">
    <form class="flex flex-col gap-4 w-full" @submit="onSubmit">
      <AppInputText field="optional.text" label="Optional Text" :max-length="10" />
      <AppInputText
        field="required.text"
        label="Required Text"
        :is-required="true"
        :max-length="10"
      />
      <AppInputNumber field="optional.number" label="Optional Number" />
      <AppInputNumber
        field="required.number"
        label="Required Number"
        :is-required="true"
        :max="10"
        :min="0"
      />
      <AppTextArea
        field="optional.textarea"
        label="Optional Textarea"
        :rows="3"
        :cols="5"
        :max-length="100"
      />
      <AppTextArea
        field="required.textarea"
        label="Required Textarea"
        :rows="3"
        :cols="5"
        :max-length="100"
        :is-required="true"
      />
      <AppSelect field="optional.select" label="Optional Select" :options="selectOptions" />
      <AppSelect
        field="required.select"
        label="Optional Select"
        :options="selectOptions"
        :is-required="true"
      />
      <AppMultiSelect
        field="optional.multiselect"
        label="Optional MultiSelect"
        :options="selectOptions"
      />
      <AppMultiSelect
        field="required.multiselect"
        label="Required MultiSelect"
        :options="selectOptions"
        :is-required="true"
      />
      <Button severity="secondary" label="Clear" @click="resetForm()" />
      <Button type="submit" label="Submit" />
    </form>
    <div class="overflow-x-auto whitespace-nowrap">
      <p class="font-bold">Raw Form Values</p>
      <pre>{{ values }}</pre>
      <p class="font-bold">Raw Form Errors</p>
      <pre>{{ errors }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppInputNumber from '@app/components/forms/app-input-number.vue'
import AppInputText from '@app/components/forms/app-input-text.vue'
import AppMultiSelect from '@app/components/forms/app-multi-select.vue'
import AppSelect from '@app/components/forms/app-select.vue'
import AppTextArea from '@app/components/forms/app-text-area.vue'
import { useToast } from 'primevue/usetoast'
import { useForm } from 'vee-validate'
import { formSchema4 } from '../schemas'
import { scrollToFieldError } from '../utils'

const toast = useToast()

const { handleSubmit, resetForm, values, errors } = useForm({
  validationSchema: formSchema4,
  initialValues: {
    optional: {
      text: '',
      textarea: '',
      number: undefined,
      select: '',
      multiselect: [],
    },
    required: {
      text: '',
      textarea: '',
      number: undefined,
      select: '',
      multiselect: [],
    },
  },
})

const selectOptions = [
  { label: 'uno', value: '1' },
  { label: 'dos', value: '2' },
  { label: 'tres', value: '3' },
]

const onSubmitSuccess = () => {
  toast.add({ severity: 'success', summary: 'Form submitted.', life: 3000 })
  resetForm()
}

const onSubmitError = () => {
  const firstError = Object.keys(errors.value)[0] as string
  scrollToFieldError(firstError)
}

const onSubmit = handleSubmit(onSubmitSuccess, onSubmitError)
</script>
