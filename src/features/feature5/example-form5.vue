<template>
  <div class="grid grid-cols-2 gap-2">
    <div>
      <form @submit="onSubmit" class="flex flex-col gap-4 w-full sm:w-56">
        <div class="flex flex-col gap-1">
          <AppInputText field="email" label="Email" />
          <Fieldset>
            <template #legend>
              <span>Contact 1</span>
              <i v-show="doesSection1ContainErrors" class="ml-2 pi pi-times-circle text-red-600" />
            </template>
            <div class="flex flex-col gap-1">
              <AppInputText field="contacts[0].firstName" label="First Name" />
              <AppInputText field="contacts[0].middleName" label="Middle Name" />
              <AppInputText field="contacts[0].lastName" label="Last Name" />
            </div>
          </Fieldset>
          <Fieldset>
            <template #legend>
              <span>Contact 2</span>
              <i v-show="doesSection2ContainErrors" class="ml-2 pi pi-times-circle text-red-600" />
            </template>
            <div class="flex flex-col gap-1">
              <AppInputText field="contacts[1].firstName" label="First Name" />
              <AppInputText field="contacts[1].middleName" label="Middle Name" />
              <AppInputText field="contacts[1].lastName" label="Last Name" />
            </div>
          </Fieldset>
        </div>
        <Button severity="secondary" label="Clear" @click="resetForm()" />
        <Button type="submit" label="Submit" />
      </form>
    </div>
    <div class="overflow-x-auto whitespace-nowrap">
      <p class="font-bold">Raw Form Values</p>
      <pre>{{ values }}</pre>
      <p class="font-bold">Raw Form Errors</p>
      <pre>{{ errors }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppInputText from '@/components/forms/app-input-text.vue'
import { useToast } from 'primevue/usetoast'
import { useForm } from 'vee-validate'
import { computed } from 'vue'
import { formSchema3 } from './schemas'

const toast = useToast()

const contact = {
  firstName: '',
  middleName: '',
  lastName: '',
}

const { handleSubmit, resetForm, values, errors } = useForm({
  validationSchema: formSchema3,
  initialValues: {
    email: '',
    contacts: [contact, contact],
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
  const errorKeys = Object.keys(errors.value)
  // TODO Need to select closest error to parent form element when multiple errors are present
  if (errorKeys.length === 1) {
    scrollToFieldError(errorKeys[0]!)
  }
}

const onSubmit = handleSubmit(onSubmitSuccess, onSubmitError)

const doesSection1ContainErrors = computed(() => {
  const sectionPrefix = 'contacts[0]'
  return Object.keys(errors.value).some((key) => {
    return key.startsWith(sectionPrefix)
  })
})

const doesSection2ContainErrors = computed(() => {
  const sectionPrefix = 'contacts[1]'
  return Object.keys(errors.value).some((key) => {
    return key.startsWith(sectionPrefix)
  })
})
</script>
