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
    :rows="rows"
    :rows-per-page-options="rowsPerPageOptions"
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
import type { DataTableFilterMeta } from 'primevue/datatable'
import { computed, onMounted, ref } from 'vue'

const {
  data,
  size = 'small',
  dataKey = 'id',
  filters = undefined,
  isLoading = false,
} = defineProps<{
  data: unknown[] | undefined
  size?: 'small' | 'large'
  dataKey?: string
  filters?: DataTableFilterMeta
  isLoading?: boolean
}>()

const rows = ref(5)
const rowsPerPageOptions = ref([5, 10, 20, 50])
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
