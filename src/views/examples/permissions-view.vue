<template>
  <h1 class="text-2xl">Permissions</h1>
  <div class="grid grid-cols-3 gap-3">
    <Card class="mb-5">
      <template #content>
        <template v-if="can('read', 'featureA')">
          <p>Feature A Test</p>
          <Tag icon="pi pi-check-circle" severity="success" value="Access granted"></Tag>
          <TestParentA />
        </template>
        <template v-else>
          <Tag icon="pi pi-times-circle" severity="danger" value="Access denied"></Tag>
        </template>
      </template>
    </Card>

    <Card class="mb-5">
      <template #content>
        <template v-if="can('read', 'featureB')">
          <p>Feature B Test</p>
          <Tag icon="pi pi-check-circle" severity="success" value="Access granted"></Tag>
          <TestParentA />
        </template>
        <template v-else>
          <Tag icon="pi pi-times-circle" severity="danger" value="Access denied"></Tag>
        </template>
      </template>
    </Card>

    <Card class="mb-5">
      <template #content>
        <template v-if="can('read', 'featureC')">
          <p>Feature C Test</p>
          <Tag icon="pi pi-check-circle" severity="success" value="Access granted"></Tag>
          <TestParentA />
        </template>
        <template v-else>
          <Tag icon="pi pi-times-circle" severity="danger" value="Access denied"></Tag>
        </template>
      </template>
    </Card>
  </div>
  <Card>
    <template #title>API Test</template>
    <template #content>
      <template v-if="isFetching">
        <p>Loading test data...</p>
      </template>
      <template v-else>
        <pre v-if="data">{{ data }}</pre>
        <span v-if="error"> Error: {{ error }}</span>
        <p>Is data null?</p>
        <p>{{ data === null }}</p>
        <p>Is data undefined?</p>
        <p>{{ data === undefined }}</p>
      </template>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { useAppAbility } from '@app/auth/use-app-ability'
import TestParentA from '@app/features/general/components/test-parent-a.vue'
import apiService from '@app/services/api'

const { can } = useAppAbility()

const { data, error, isFetching } = apiService.getTestData()
</script>
