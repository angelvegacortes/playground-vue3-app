<template>
  <h1 class="text-4xl">Welcome to the home page!</h1>
  <AppDummyText class="my-5" />
  <AppDummyText class="my-5" />
  <AppDummyText class="my-5" />
  <Select
    v-model="selectedSample"
    :options="sampleData"
    placeholder="Select a City"
    class="w-full md:w-56"
  />
</template>

<script setup lang="ts">
import AppDummyText from '@/components/text/app-dummy-text.vue'
import { samples } from '@/types'
import { ref } from 'vue'
const selectedSample = ref()
const sampleData = ref([...samples])
</script>
