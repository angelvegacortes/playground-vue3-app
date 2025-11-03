<template>
  <DataTable
    v-model:filters="filtersModel"
    :value="data"
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
