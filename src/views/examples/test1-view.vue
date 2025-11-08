<script setup lang="ts">
import { useAppAbility } from '@app/auth/use-app-ability'
import ATestParent from '@app/features/featureA/ATestParent.vue'
import BTestParent from '@app/features/featureB/BTestParent.vue'
import CTestParent from '@app/features/featureC/CTestParent.vue'
import apiService from '@app/services'

const { can } = useAppAbility()

const { data, error, isFetching } = apiService.getTestData()
</script>

<template>
  <div class="grid grid-cols-3 gap-3">
    <Card v-if="can('read', 'featureA')" class="mb-5">
      <template #title>Feature A Test</template>
      <template #content>
        <ATestParent />
      </template>
    </Card>

    <Card v-if="can('read', 'featureB')" class="mb-5">
      <template #title>Feature B Test</template>
      <template #content>
        <BTestParent />
      </template>
    </Card>

    <Card v-if="can('read', 'featureC')" class="mb-5">
      <template #title>Feature C Test</template>
      <template #content>
        <CTestParent />
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
        <code v-if="data">{{ data }}</code>
        <span v-if="error"> Error: {{ error }}</span>
        <p>Is data null? {{ data === null }}</p>
        <p>Is data undefined? {{ data === undefined }}</p>
      </div>
    </template>
  </Card>
</template>
