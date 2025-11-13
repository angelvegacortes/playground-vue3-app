<template>
  <h1 class="text-2xl">Permissions</h1>
  <div class="grid grid-cols-3 gap-3">
    <Card v-if="can('read', 'featureA')" class="mb-5">
      <template #title>Feature A Test</template>
      <template #content>
        <TestParentA />
      </template>
    </Card>

    <Card v-if="can('read', 'featureB')" class="mb-5">
      <template #title>Feature B Test</template>
      <template #content>
        <TestParentB />
      </template>
    </Card>

    <Card v-if="can('read', 'featureC')" class="mb-5">
      <template #title>Feature C Test</template>
      <template #content>
        <TestParentC />
      </template>
    </Card>
  </div>
  <Card>
    <template #title>API Test</template>
    <template #content>
      <div>
        <span v-if="isFetching">
          <span>Loading test data...</span>
        </span>
        <span v-else></span>
        <pre v-if="data">{{ data }}</pre>
        <span v-if="error"> Error: {{ error }}</span>
        <p>Is data null? {{ data === null }}</p>
        <p>Is data undefined? {{ data === undefined }}</p>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { useAppAbility } from '@app/auth/use-app-ability'
import TestParentA from '@app/features/feature1/components/test-parent-a.vue'
import TestParentB from '@app/features/feature1/components/test-parent-b.vue'
import TestParentC from '@app/features/feature1/components/test-parent-c.vue'
import apiService from '@app/services/api'

const { can } = useAppAbility()

const { data, error, isFetching } = apiService.getTestData()
</script>
