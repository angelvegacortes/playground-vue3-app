<template>
  <h1 class="text-2xl">Inputs</h1>
  <Card class="mx-2 my-4">
    <template #content>
      <div class="grid grid-cols-3 gap-2">
        <AppInputText v-model="inputTextValue" label="Sample Input Text" />
        <AppInputText v-model="inputTextValue" label="Disabled Input Text" :is-disabled="true" />
        <p>Value: {{ inputTextValue }}</p>
        <Divider class="col-span-3" />
        <AppInputNumber v-model="inputNumberValue" label="Sample Input Number" />
        <AppInputNumber
          v-model="inputNumberValue"
          label="Disabled Input Number"
          :is-disabled="true"
        />
        <p>Value: {{ inputNumberValue }}</p>
        <Divider class="col-span-3" />
        <AppTextArea v-model="textAreaValue" :rows="3" :cols="10" label="Sample Text Area" />
        <AppTextArea
          v-model="textAreaValue"
          :rows="3"
          :cols="10"
          label="Disabled Text Area"
          :is-disabled="true"
        />
        <p>Value: {{ textAreaValue }}</p>
        <Divider class="col-span-3" />
        <AppSelect v-model="selectValue" label="Sample Select" :options="selectOptions" />
        <AppSelect
          v-model="selectValue"
          label="Disabled Select"
          :options="selectOptions"
          :is-disabled="true"
        />
        <p>Value: {{ selectValue }}</p>
        <AppMultiSelect
          v-model="multiSelectValue"
          :options="selectOptions"
          label="Sample Multi Select"
        />
        <AppMultiSelect
          v-model="multiSelectValue"
          :options="selectOptions"
          label="Disabled Multi Select"
          :is-disabled="true"
        />
        <p>Value: {{ multiSelectValue }}</p>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import AppInputNumber from '@app/components/forms/app-input-number.vue'
import AppInputText from '@app/components/forms/app-input-text.vue'
import AppMultiSelect from '@app/components/forms/app-multi-select.vue'
import AppSelect from '@app/components/forms/app-select.vue'
import AppTextArea from '@app/components/forms/app-text-area.vue'
import { ref } from 'vue'

const inputTextValue = ref()
const inputNumberValue = ref()
const textAreaValue = ref()
const selectValue = ref()
const multiSelectValue = ref()

const selectOptions = [
  { label: 'uno', value: '1' },
  { label: 'dos', value: '2' },
  { label: 'tres', value: '3' },
]
</script>
