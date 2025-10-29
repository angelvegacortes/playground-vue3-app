<template>
  <div class="card flex flex-row gap-5">
    <Form v-slot="$form" ref="formApi" :resolver @submit="onFormSubmit" :data>
      <div class="flex flex-col gap-1">
        <InputText name="username" type="text" placeholder="Username" fluid />
        <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{
          $form.username.error.message
        }}</Message>
      </div>
      <pre>{{ $form.emails }}</pre>
      <div v-for="(item, index) in data.emails" :key="index" class="flex gap-2 mb-2">
        <InputText
          v-model="data.emails[index].email"
          :name="`emails[${index}].email`"
          type="text"
          placeholder="Enter email"
          class="flex-grow"
        />
        <Message
          v-if="$form.emails?.[index]?.email.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.emails?.[index]?.email.error.message }}</Message
        >
      </div>
      <Button severity="secondary" label="Clear" @click="onClearForm()" />
      <Button type="submit" label="Submit" />
    </Form>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormSubmitEvent } from '@primevue/forms/form'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { useForm } from '@primevue/forms/useform'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import { useToast } from 'primevue/usetoast'
import { ref } from 'vue'
import { formSchema2 } from './schemas'

const toast = useToast()

const initialValuesData = {
  username: '',
  emails: [{ email: '' }, { email: '' }, { email: '' }],
}

const formApi = ref<FormInstance>()
const data = ref({ ...initialValuesData })

const resolver = zodResolver(formSchema2)

const { handleSubmit } = useForm({ initialValues: data, resolver })

const onFormSubmit = handleSubmit(async (event: FormSubmitEvent) => {
  if (event.valid) {
    console.log(event)
    toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 })
  } else {
    console.error(event)
  }
})

// const onFormSubmit = (event: FormSubmitEvent) => {
//   if (event.valid) {
//     console.log(event)
//     toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 })
//   } else {
//     console.error(event)
//   }
// }

const onClearForm = () => {
  formApi.value?.reset()
  data.value = { ...initialValuesData }
}
</script>
