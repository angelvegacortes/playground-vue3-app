<script setup lang="ts">
import ATestParent from '@/features/featureA/ATestParent.vue'
import BTestParent from '@/features/featureB/BTestParent.vue'
import CTestParent from '@/features/featureC/CTestParent.vue'
import { useFetch } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { useAppAbility } from '@/auth/use-app-ability'

const { can } = useAppAbility()
const url = ref('api/test/200')
const isFetching = ref(false)
const data = ref()
const error = ref(null)

onMounted(async () => {
  const {
    isFetching: fetchingStatus,
    error: fetchedError,
    data: fetchedData,
  } = await useFetch(url, {
    refetch: true,
  })
    .get()
    .json()

  isFetching.value = fetchingStatus.value
  data.value = fetchedData.value
  error.value = fetchedError.value
})
</script>

<template>
  <div class="grid grid-cols-3 gap-3">
    <Card class="mb-5" v-if="can('read', 'featureA')">
      <template #title>Feature A Test</template>
      <template #content>
        <ATestParent />
      </template>
    </Card>

    <Card class="mb-5" v-if="can('read', 'featureB')">
      <template #title>Feature B Test</template>
      <template #content>
        <BTestParent />
      </template>
    </Card>

    <Card class="mb-5" v-if="can('read', 'featureC')">
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
