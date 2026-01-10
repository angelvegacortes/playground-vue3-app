<template>
  <div class="grid grid-cols-2 gap-2">
    <form class="flex flex-col gap-4 w-full sm:w-56" @submit="onSubmit">
      <div class="flex flex-col gap-1">
        <AppInputText field="email" label="Email" :is-required="true" />
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
import { useMessageService } from '@app/services/message-service'
import { useForm } from 'vee-validate'
import { formSchema1 } from '../schemas'
import { scrollToFieldError } from '../utils'

const { showSuccessMessage } = useMessageService()

const { handleSubmit, resetForm, errors, values } = useForm({
  validationSchema: formSchema1,
  initialValues: {
    email: '',
  },
})

const onSubmitSuccess = () => {
  showSuccessMessage('Form submitted.')
  resetForm()
}

const onSubmitError = () => {
  const firstError = Object.keys(errors.value)[0] as string
  scrollToFieldError(firstError)
}

const onSubmit = handleSubmit(onSubmitSuccess, onSubmitError)
</script>
