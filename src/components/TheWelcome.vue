<script setup lang="ts">
import ATestParent from '@/features/featureA/ATestParent.vue'
import BTestParent from '@/features/featureB/BTestParent.vue'
import CTestParent from '@/features/featureC/CTestParent.vue'
import { useFetch } from '@vueuse/core'
import { ref } from 'vue'

const title = import.meta.env.VITE_APP_TITLE
const version = import.meta.env.VITE_APP_VERSION

const url = ref('/api/test/200')
const { isFetching, error, data } = await useFetch(url, {
  refetch: true,
})
</script>

<template>
  <h1>{{ title }}</h1>
  <h2>App version: {{ version }}</h2>
  <br />
  <hr />
  <br />
  <ATestParent />
  <br />
  <BTestParent />
  <br />
  <CTestParent />
  <br />
  <hr />
  <br />
  <h3>Test Data</h3>
  <div>
    <span v-if="isFetching">
      <span>Loading test data...</span>
    </span>
    <span v-else></span>
    <span v-if="data"> Data: {{ data }}</span>
    <span v-if="error"> Error: {{ error }}</span>
    <p>Is data null? {{ data === null }}</p>
    <p>Is data undefined? {{ data === undefined }}</p>
    <p>Is data an empty string? {{ data === '' }}</p>
  </div>
</template>
