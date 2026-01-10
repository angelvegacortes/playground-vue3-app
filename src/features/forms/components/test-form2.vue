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
            v-bind="emailAttributes"
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
import { useMessageService } from '@app/services/message-service'
import { useForm } from 'vee-validate'
import { formSchema1 } from '../schemas'
import { scrollToFieldError } from '../utils'

const { showSuccessMessage } = useMessageService()

const { errors, handleSubmit, resetForm, defineField } = useForm({
  validationSchema: formSchema1,
  initialValues: {
    email: '',
  },
})

const [email, emailAttributes] = defineField('email')

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
