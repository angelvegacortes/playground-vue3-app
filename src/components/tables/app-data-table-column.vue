<template>
  <Column
    v-if="!isHidden"
    :field="field"
    :header="header"
    :hidden="isHidden"
    :sortable="isSortable"
    :class="cssClass"
    :show-filter-match-modes="false"
  >
    <template #body="slotProps">
      <slot name="body" :data="slotProps.data" :field="field">
        <!-- Default column content -->
        <span>{{ slotProps.data[field] ?? EMPTY_VALUE_PLACEHOLDER }}</span>
      </slot>
    </template>
    <template #filter="{ filterModel, filterCallback }" v-if="isFilterable">
      <InputText
        v-if="showFilterByText"
        v-model="filterModel.value"
        type="text"
        @input="filterCallback()"
        :placeholder="filterPlaceholder"
      />
      <InputNumber
        v-if="showFilterByNumber"
        v-model="filterModel.value"
        :min="0"
        show-buttons
        @input="filterCallback()"
        :placeholder="filterPlaceholder"
      />
      <Select
        v-if="showFilterBySelect"
        v-model="filterModel.value"
        :options="filterOptions"
        :placeholder="filterPlaceholder"
      >
      </Select>
      <MultiSelect
        v-if="showFilterByMultiSelect"
        v-model="filterModel.value"
        :options="filterOptions"
        :placeholder="filterPlaceholder"
      >
      </MultiSelect>
    </template>
  </Column>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const {
  field = '',
  header = '',
  cssClass = 'w-1/4',
  isHidden = false,
  isSortable = false,
  isFilterable = false,
  filterOptions = undefined,
  filterType = 'text',
} = defineProps<{
  field: string
  header: string
  cssClass: `w-${number}/${number}` | `w-[${number}/${number}]`
  isHidden?: boolean
  isSortable?: boolean
  isFilterable?: boolean
  filterOptions?: unknown[] | undefined
  filterType?: 'text' | 'number' | 'select' | 'multi-select' | undefined
}>()

const EMPTY_VALUE_PLACEHOLDER = '-'

const filterPlaceholder = computed(() => {
  return `Filter by ${header}`
})

const showFilterByText = computed(() => {
  return isFilterable && filterType === 'text'
})

const showFilterByNumber = computed(() => {
  return isFilterable && filterType === 'number'
})

const showFilterBySelect = computed(() => {
  return isFilterable && filterType === 'select' && filterOptions !== undefined
})

const showFilterByMultiSelect = computed(() => {
  return isFilterable && filterType === 'multi-select' && filterOptions !== undefined
})
</script>
