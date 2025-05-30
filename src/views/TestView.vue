<script setup lang="ts">
import ATestParent from '@/features/featureA/ATestParent.vue'
import BTestParent from '@/features/featureB/BTestParent.vue'
import CTestParent from '@/features/featureC/CTestParent.vue'
import { useFetch } from '@vueuse/core'
import { ref } from 'vue'

const url = ref('/api/test/200')
const { isFetching, error, data } = await useFetch(url, {
  refetch: true,
})
</script>

<template>
  <div class="grid grid-cols-3 gap-3">
    <Card class="mb-5">
      <template #title>Feature A Test</template>
      <template #content>
        <ATestParent />
      </template>
    </Card>

    <Card class="mb-5">
      <template #title>Feature B Test</template>
      <template #content>
        <BTestParent />
      </template>
    </Card>

    <Card class="mb-5">
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
        <p>Is data an empty string? {{ data === '' }}</p>
      </div>
    </template>
  </Card>
</template>
