<template>
  <p class="my-3">
    This table is using
    <Tag severity="contrast" value="DataTable" rounded></Tag> and
    <Tag severity="contrast" value="Column" rounded></Tag>
    components.
  </p>
  <DataTable
    :value="products"
    size="small"
    data-key="id"
    v-model:filters="filters1"
    removableSort
    paginator
    sort-mode="multiple"
    filterDisplay="menu"
    :rows="5"
    :rowsPerPageOptions="[5, 10, 20, 50]"
  >
    <template #header>
      <div class="flex justify-between">
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label="Clear Filters"
          variant="outlined"
          @click="onClearFilters()"
        />
        <Button
          type="button"
          label="Toggle Additional Columns"
          variant="outlined"
          @click="onToggleColumns()"
        />
      </div>
    </template>
    <template #empty> No products found. </template>
    <Column
      field="firstName"
      header="First Name"
      sortable
      class="w-1/6"
      :show-filter-match-modes="false"
    >
      <template #filter="{ filterModel, filterCallback }">
        <InputText
          v-model="filterModel.value"
          type="text"
          @input="filterCallback()"
          placeholder="Filter by First Name"
        />
      </template>
    </Column>
    <Column
      field="middleName"
      header="Middle Name"
      sortable
      class="w-1/6"
      :show-filter-match-modes="false"
      :hidden="hideAdditionalColumns"
    >
      <template #filter="{ filterModel, filterCallback }">
        <InputText
          v-model="filterModel.value"
          type="text"
          @input="filterCallback()"
          placeholder="Filter by Middle Name"
        />
      </template>
    </Column>
    <Column
      field="lastName"
      header="Last Name"
      sortable
      class="w-1/6"
      :show-filter-match-modes="false"
    >
      <template #filter="{ filterModel, filterCallback }">
        <InputText
          v-model="filterModel.value"
          type="text"
          @input="filterCallback()"
          placeholder="Filter by Last Name"
        />
      </template>
    </Column>
    <Column field="email" header="Email" sortable class="w-1/6">
      <template #body="{ data }">
        <i class="pi pi-envelope"></i>
        {{ data.email }}
      </template>
    </Column>
    <Column field="jobType" header="Job Type" :sortable="false" class="w-1/6"></Column>
    <Column
      field="country"
      header="Country"
      sortable
      class="w-1/6"
      :show-filter-match-modes="false"
    >
      <template #filter="{ filterModel }">
        <!-- NOTE fiter by text -->
        <!-- <InputText
          v-model="filterModel.value"
          type="text"
          @input="filterCallback()"
          placeholder="Filter by Country"
        /> -->
        <!-- NOTE fiter by select -->
        <!-- <Select
          v-model="filterModel.value"
          :options="countries"
          placeholder="Filter by Country"
         /> -->
        <!-- NOTE fiter by multi select -->
        <MultiSelect
          v-model="filterModel.value"
          :options="countries"
          placeholder="Filter by Country"
        />
      </template>
    </Column>
  </DataTable>
  <p class="my-3">
    This table is using
    <Tag severity="contrast" value="DataTable" rounded></Tag> and
    <Tag severity="contrast" value="AppDataTableColumn" rounded></Tag>
    components.
  </p>
  <DataTable
    :value="products"
    size="small"
    data-key="id"
    v-model:filters="filters2"
    removableSort
    paginator
    sort-mode="multiple"
    filterDisplay="menu"
    :rows="5"
    :rowsPerPageOptions="[5, 10, 20, 50]"
  >
    <template #header>
      <div class="flex justify-between">
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label="Clear Filters"
          variant="outlined"
          @click="onClearFilters()"
        />
        <Button
          type="button"
          label="Toggle Additional Columns"
          variant="outlined"
          @click="onToggleColumns()"
        />
      </div>
    </template>
    <template #empty> No products found. </template>
    <AppDataTableColumn
      key="firstName"
      field="firstName"
      header="First Name"
      css-class="w-1/6"
      :is-sortable="true"
      :is-filterable="true"
    />
    <AppDataTableColumn
      key="middleName"
      field="middleName"
      header="Middle Name"
      css-class="w-1/6"
      :is-sortable="true"
      :is-hidden="hideAdditionalColumns"
      :is-filterable="true"
    />
    <AppDataTableColumn
      key="lastName"
      field="lastName"
      header="Last Name"
      css-class="w-1/6"
      :is-sortable="true"
      :is-filterable="true"
    />
    <AppDataTableColumn
      key="email"
      field="email"
      header="Email"
      css-class="w-1/6"
      :is-sortable="true"
    >
      <template #body="{ data }">
        <i class="pi pi-envelope"></i>
        {{ data.email }}
      </template>
    </AppDataTableColumn>
    <AppDataTableColumn
      key="jobType"
      field="jobType"
      header="Job Type"
      :is-sortable="false"
      css-class="w-1/6"
    />
    <AppDataTableColumn
      key="country"
      field="country"
      header="Country"
      css-class="w-1/6"
      :is-sortable="true"
      :is-filterable="true"
      :filter-options="countries"
      :is-filter-options-multi-select="true"
    />
  </DataTable>
  <p class="my-3">
    This table is using
    <Tag severity="contrast" value="AppDataTable" rounded></Tag> and
    <Tag severity="contrast" value="AppDataTableColumn" rounded></Tag>
    components.
  </p>
  <AppDataTable :data="products" v-model:filters="filters3">
    <AppDataTableColumn
      key="firstName"
      field="firstName"
      header="First Name"
      css-class="w-1/6"
      :is-sortable="true"
      :is-filterable="true"
    />
    <AppDataTableColumn
      key="middleName"
      field="middleName"
      header="Middle Name"
      css-class="w-1/6"
      :is-hidden="hideAdditionalColumns"
      :is-sortable="true"
      :is-filterable="true"
    />
    <AppDataTableColumn
      key="lastName"
      field="lastName"
      header="Last Name"
      css-class="w-1/6"
      :is-sortable="true"
      :is-filterable="true"
    />
    <AppDataTableColumn
      key="email"
      field="email"
      header="Email"
      css-class="w-1/6"
      :is-sortable="true"
    >
      <template #body="{ data }">
        <i class="pi pi-envelope"></i>
        {{ data.email }}
      </template>
    </AppDataTableColumn>
    <AppDataTableColumn
      key="jobType"
      field="jobType"
      header="Job Type"
      :is-sortable="false"
      css-class="w-1/6"
    />
    <AppDataTableColumn
      key="country"
      field="country"
      header="Country"
      css-class="w-1/6"
      :is-sortable="true"
      :is-filterable="true"
      :filter-options="countries"
      :is-filter-options-multi-select="true"
    />
  </AppDataTable>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { faker } from '@faker-js/faker'
import AppDataTableColumn from '@/components/tables/app-data-table-column.vue'
import type { Product } from '@/types'
import { FilterMatchMode } from '@primevue/core/api'
import AppDataTable from '@/components/tables/app-data-table.vue'

onMounted(() => {
  initFilters()
  getProducts(10)
  getCountries()
})

const baseFilters = ref({
  firstName: { value: null, matchMode: FilterMatchMode.CONTAINS },
  middleName: { value: null, matchMode: FilterMatchMode.CONTAINS },
  lastName: { value: null, matchMode: FilterMatchMode.CONTAINS },
  country: { value: null, matchMode: FilterMatchMode.IN },
})

const filters1 = ref()
const filters2 = ref()
const filters3 = ref()

const products = ref<Product[]>([])

const getProducts = (limit: number) => {
  for (let i = 0; i < limit; i++)
    products.value.push({
      firstName: faker.person.firstName(),
      middleName: i % 2 !== 0 ? faker.person.middleName() : undefined,
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      jobType: i % 2 === 0 ? faker.person.jobType() : undefined,
      country: faker.location.country(),
    })
}

const countries = ref<string[]>([])

const getCountries = () => {
  if (products.value && products.value.length > 0) {
    countries.value = products.value.map((d: Product) => {
      return d.country
    })
    countries.value = [...new Set(countries.value)]
  }
}

const initFilters = () => {
  filters1.value = { ...baseFilters.value }
  filters2.value = { ...baseFilters.value }
  filters3.value = { ...baseFilters.value }
}

const onClearFilters = () => {
  initFilters()
}

const hideAdditionalColumns = ref(true)

const onToggleColumns = () => {
  hideAdditionalColumns.value = !hideAdditionalColumns.value
}
</script>
