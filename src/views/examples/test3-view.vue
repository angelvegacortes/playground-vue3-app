<template>
  <p>This is a PrimeVue DataTable component.</p>
  <DataTable
    :value="products"
    size="small"
    removableSort
    paginator
    :rows="5"
    :rowsPerPageOptions="[5, 10, 20, 50]"
  >
    <Column field="name" header="Name" sortable class="w-1/4"></Column>
    <Column field="email" header="Email" sortable class="w-1/4"></Column>
    <Column field="jobType" header="Job Type" sortable class="w-1/4"></Column>
    <Column field="country" header="Country" sortable class="w-1/4"></Column>
  </DataTable>
  <Divider />
  <p>This is a custom DataTable component.</p>
  <CustomDataTable column-class="w-1/4" :data="products">
    <CustomDataTableColumn field="name" header="Name" css-class="w-1/4" />
    <CustomDataTableColumn field="email" header="Email" css-class="w-1/4" />
    <CustomDataTableColumn field="jobType" header="Job Type" css-class="w-1/4" />
    <CustomDataTableColumn field="country" header="Country" css-class="w-1/4" />
  </CustomDataTable>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { faker } from '@faker-js/faker'
import CustomDataTable from '@/components/tables/custom-data-table.vue'
import CustomDataTableColumn from '@/components/tables/custom-data-table-column.vue'

onMounted(() => {
  getProducts(10)
})

const products = ref([{}])

const getProducts = (limit: number) => {
  for (let i = 0; i < limit; i++)
    products.value.push({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      jobType: faker.person.jobType(),
      country: faker.location.country(),
    })
}
</script>
