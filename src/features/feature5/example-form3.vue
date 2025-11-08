<template>
  <form class="flex flex-col gap-4 w-full sm:w-56" @submit="onSubmit">
    <div class="flex flex-col gap-1">
      <AppInputText field="email" label="Email" :is-required="true" />
    </div>
    <Button severity="secondary" label="Clear" @click="resetForm()" />
    <Button type="submit" label="Submit" />
  </form>
</template>

<script setup lang="ts">
import AppInputText from '@app/components/forms/app-input-text.vue'
import { useToast } from 'primevue/usetoast'
import { useForm } from 'vee-validate'
import { formSchema1 } from './schemas'

const toast = useToast()

const { handleSubmit, resetForm, errors } = useForm({
  validationSchema: formSchema1,
  initialValues: {
    email: '',
  },
})

const scrollToFieldError = (fieldName: string) => {
  const el = document.querySelector(`[name="${fieldName}"]`) as HTMLElement
  el?.scrollIntoView({
    behavior: 'smooth',
  })
  el?.focus()
}

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
