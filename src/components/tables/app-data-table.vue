<template>
  <DataTable
    :value="data"
    :size="size"
    :data-key="dataKey"
    v-model:filters="filtersModel"
    removableSort
    paginator
    sort-mode="multiple"
    filterDisplay="menu"
    :rows="rows"
    :rowsPerPageOptions="rowsPerPageOptions"
  >
    <template #header v-if="filtersModel">
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
    <template #empty> No products found.</template>
    <slot></slot>
  </DataTable>
</template>

<script setup lang="ts">
import type { DataTableFilterMeta } from 'primevue/datatable'
import { onMounted, ref } from 'vue'

const {
  data,
  size = 'small',
  dataKey = 'id',
  filters = undefined,
} = defineProps<{
  data: unknown[]
  size?: 'small' | 'large'
  dataKey?: string
  filters?: DataTableFilterMeta
}>()

const rows = ref(5)
const rowsPerPageOptions = ref([5, 10, 20, 50])
const filtersModel = ref()

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
