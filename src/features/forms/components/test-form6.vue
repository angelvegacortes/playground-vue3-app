<template>
  <div class="grid grid-cols-2 gap-2">
    <div>
      <form class="flex flex-col gap-4 w-full sm:w-56" @submit="onSubmit">
        <div class="flex flex-col gap-1">
          <AppInputText field="email" label="Email" />
          <Button
            type="submit"
            size="small"
            icon="pi pi-plus"
            label="Add Contact"
            @click="push(contact)"
          />
          <div v-for="(field, index) in fields" :key="field.key">
            <Fieldset>
              <template #legend>
                <span>{{ `Contact ${index + 1}` }}</span>
                <i
                  v-show="doesSectionContainErrors(`contacts[${index}]`)"
                  class="ml-2 pi pi-times-circle text-red-600"
                />
              </template>
              <div class="flex flex-col gap-1">
                <AppInputText :field="`contacts[${index}].firstName`" label="First Name" />
                <AppInputText :field="`contacts[${index}].middleName`" label="Middle Name" />
                <AppInputText :field="`contacts[${index}].lastName`" label="Last Name" />
              </div>
              <Button
                class="mt-2"
                icon="pi pi-times"
                severity="danger"
                type="submit"
                size="small"
                label="Remove Contact"
                @click="remove(index)"
              />
            </Fieldset>
          </div>
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
import AppInputText from '@app/components/forms/app-input-text.vue'
import { useMessageService } from '@app/services/message-service'
import { useFieldArray, useForm } from 'vee-validate'
import { formSchema3 } from '../schemas'
import { scrollToFieldError } from '../utils'

const { showSuccessMessage } = useMessageService()

const contact = {
  firstName: '',
  middleName: '',
  lastName: '',
}

const { handleSubmit, resetForm, values, errors } = useForm({
  validationSchema: formSchema3,
  initialValues: {
    email: '',
    contacts: [contact],
  },
})

const { fields, push, remove } = useFieldArray('contacts')

const onSubmitSuccess = () => {
  showSuccessMessage('Form submitted.')
  resetForm()
}

const onSubmitError = () => {
  const errorKeys = Object.keys(errors.value)
  scrollToFieldError(errorKeys[0]!)
}

const onSubmit = handleSubmit(onSubmitSuccess, onSubmitError)

const doesSectionContainErrors = (sectionPrefix: string) => {
  return Object.keys(errors.value).some((key) => {
    return key.startsWith(sectionPrefix)
  })
}
</script>
