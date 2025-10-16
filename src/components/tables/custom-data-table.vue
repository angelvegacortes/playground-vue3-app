<template>
  <DataTable
    :value="data"
    :size="size"
    removableSort
    paginator
    :rows="rows"
    :rowsPerPageOptions="rowsPerPageOptions"
  >
    <slot></slot>
  </DataTable>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { data, size = 'small' } = defineProps<{
  data: unknown[]
  columnClass: `w-${number}/${number}`
  size?: 'small' | 'large'
}>()

const rows = ref(5)
const rowsPerPageOptions = ref([5, 10, 20, 50])
</script>
