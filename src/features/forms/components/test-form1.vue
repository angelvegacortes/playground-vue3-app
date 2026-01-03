<template>
  <Form
    ref="form-api"
    v-slot="$form"
    :initial-values
    :resolver="resolver"
    class="flex flex-col gap-4 w-full sm:w-56"
    @submit="onFormSubmit"
  >
    <div class="flex flex-col gap-1">
      <div>
        <FloatLabel variant="on">
          <InputText id="email" name="email" type="text" fluid />
          <label for="email">Email</label>
        </FloatLabel>
        <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{
          $form.email.error.message
        }}</Message>
      </div>
    </div>
    <Button severity="secondary" label="Clear" @click="onClearForm()" />
    <Button type="submit" label="Submit" />
  </Form>
</template>

<script setup lang="ts">
import type { FormInstance, FormSubmitEvent } from '@primevue/forms/form'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { useToast } from 'primevue/usetoast'
import { ref, useTemplateRef } from 'vue'
import { formSchema1 } from '../schemas'

const toast = useToast()

const initialValuesData = {
  email: '',
}

const formApi = useTemplateRef<FormInstance>('form-api')
const initialValues = ref({ ...initialValuesData })

const resolver = ref(zodResolver(formSchema1))

const onFormSubmit = (event: FormSubmitEvent) => {
  if (event.valid) {
    toast.add({ severity: 'success', summary: 'Form submitted.', life: 3000 })
  }
}

const onClearForm = () => {
  formApi.value?.reset()
  initialValues.value = { ...initialValuesData }
}
</script>
