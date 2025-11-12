<template>
  <form class="flex flex-col gap-4 w-full sm:w-56" @submit="onSubmit">
    <div class="flex flex-col gap-1">
      <div>
        <FloatLabel variant="on">
          <InputText
            id="email"
            v-model="email"
            name="email"
            type="text"
            v-bind="emailAttrs"
            :invalid="errors.email ? true : false"
            fluid
          />
          <label for="email">Email</label>
        </FloatLabel>
        <Message v-if="errors.email" severity="error" size="small" variant="simple">{{
          errors.email
        }}</Message>
      </div>
    </div>
    <Button severity="secondary" label="Clear" @click="resetForm()" />
    <Button type="submit" label="Submit" />
  </form>
</template>

<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
import { useForm } from 'vee-validate'
import { formSchema1 } from './schemas'
import { scrollToFieldError } from './utils'

const toast = useToast()

const { errors, handleSubmit, resetForm, defineField } = useForm({
  validationSchema: formSchema1,
  initialValues: {
    email: '',
  },
})

const [email, emailAttrs] = defineField('email')

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
