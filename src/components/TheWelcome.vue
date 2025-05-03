<script setup lang="ts">
import ATestParent from '@/features/featureA/ATestParent.vue'
import BTestParent from '@/features/featureB/BTestParent.vue'
import CTestParent from '@/features/featureC/CTestParent.vue'
import { useFetch } from '@vueuse/core'
import { ref } from 'vue'

const title = import.meta.env.VITE_APP_TITLE
const subtitle = import.meta.env.VITE_APP_SUBTITLE

const url = ref('/api/test/200')
const { execute, isFetching, error, data } = await useFetch(url, {
  refetch: true,
  immediate: false,
})

const checkData = () => {
  console.log(`data=${data.value}`)
  console.log(`is data is null? ${data.value === null}`)
  console.log(`is data is undefined? ${data.value === undefined}`)
  console.log(`is data an empty string? ${data.value === ''}`)
}

// execute 1st fetch
execute()
checkData()

// execute 2nd fetch
url.value = '/api/test/204'
execute()
checkData()
</script>

<template>
  <h1>{{ title }}</h1>
  <h2>{{ subtitle }}</h2>
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
  </div>
</template>
