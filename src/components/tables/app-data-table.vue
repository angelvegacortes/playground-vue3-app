<template>
  <DataTable
    v-model:filters="filtersModel"
    :value="value"
    :loading="loading"
    :size="size"
    :data-key="dataKey"
    removable-sort
    paginator
    sort-mode="multiple"
    filter-display="menu"
    :rows="5"
    :rows-per-page-options="[5, 10, 20, 50]"
  >
    <template v-if="filtersModel" #header>
      <div class="flex justify-between">
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label="Clear Filters"
          variant="outlined"
          @click="onClearFilters()"
        />
      </div>
    </template>
    <template #loading>Loading data...</template>
    <template #empty>No data available.</template>
    <slot></slot>
  </DataTable>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { AppDataTableProperties } from './types'

const {
  data,
  size = 'small',
  dataKey = 'id',
  filters,
  isLoading = false,
} = defineProps<AppDataTableProperties>()

defineSlots<{
  default(): void
}>()

const filtersModel = ref()

const value = computed(() => {
  return data
})

const loading = computed(() => {
  return isLoading
})

onMounted(() => {
  initFilters()
})

const onClearFilters = () => {
  initFilters()
}

const initFilters = () => {
  filtersModel.value = { ...filters }
}
</script>
