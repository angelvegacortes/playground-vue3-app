<template>
  <div class="grid grid-cols-2 gap-2">
    <form class="flex flex-col gap-4 w-full sm:w-56" @submit="onSubmit">
      <div class="flex flex-col gap-1">
        <AppInputText field="email" label="Email" />
        <Fieldset legend="Contact">
          <div class="flex flex-col gap-1">
            <AppInputText field="contact.firstName" label="First Name" />
            <AppInputText field="contact.middleName" label="Middle Name" />
            <AppInputText field="contact.lastName" label="Last Name" />
          </div>
        </Fieldset>
      </div>
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
import AppInputText from '@app/components/forms/app-input-text.vue'
import { useToast } from 'primevue/usetoast'
import { useForm } from 'vee-validate'
import { formSchema2 } from '../schemas'
import { scrollToFieldError } from '../utils'

const toast = useToast()

const { values, errors, handleSubmit, resetForm } = useForm({
  validationSchema: formSchema2,
  initialValues: {
    email: '',
    contact: {
      firstName: '',
      middleName: '',
      lastName: '',
    },
  },
})

const onSubmitSuccess = () => {
  toast.add({ severity: 'success', summary: 'Form submitted.', life: 3000 })
  resetForm()
}

const onSubmitError = () => {
  const errorKeys = Object.keys(errors.value)
  scrollToFieldError(errorKeys[0]!)
}

const onSubmit = handleSubmit(onSubmitSuccess, onSubmitError)
</script>
