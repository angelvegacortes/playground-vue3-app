<template>
  <Column
    :field="field"
    :header="header"
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
  isSortable = true,
  isFilterable = false,
  filterOptions = undefined,
  isFilterOptionsMultiSelect = false,
} = defineProps<{
  field: string
  header: string
  cssClass: `w-${number}/${number}` | `w-[${number}/${number}]`
  isSortable?: boolean
  isFilterable?: boolean
  filterOptions?: unknown[] | undefined
  isFilterOptionsMultiSelect?: boolean
}>()

const EMPTY_VALUE_PLACEHOLDER = '-'

const filterPlaceholder = computed(() => {
  return `Filter by ${header}`
})

const showFilterByText = computed(() => {
  return isFilterable && filterOptions === undefined && !isFilterOptionsMultiSelect
})

const showFilterBySelect = computed(() => {
  return isFilterable && filterOptions !== undefined && !isFilterOptionsMultiSelect
})

const showFilterByMultiSelect = computed(() => {
  return isFilterable && filterOptions !== undefined && isFilterOptionsMultiSelect
})
</script>
