<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

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

const tabs = ref([
  { route: '/test/2/feature/a', label: 'Feature A', icon: 'pi pi-chart-line' },
  { route: '/test/2/feature/b', label: 'Feature B', icon: 'pi pi-chart-line' },
  { route: '/test/2/feature/c', label: 'Feature C', icon: 'pi pi-chart-line' },
])

const getActiveTab = () => {
  const fullPath = useRoute().fullPath
  if (fullPath.includes('feature')) {
    return fullPath
  } else {
    return tabs.value[0]!.route
  }
}

const activeTab = ref(getActiveTab())
</script>

<template>
  <Tabs :value="activeTab">
    <TabList>
      <Tab v-for="tab in tabs" :key="tab.label" :value="tab.route" as="RouterLink" :to="tab.route">
        {{ tab.label }}
      </Tab>
    </TabList>
  </Tabs>
  <RouterView class="my-3" />
</template>
