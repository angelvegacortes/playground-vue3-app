<template>
  <h1 class="text-2xl">Tabs</h1>
  <Tabs :value="activeTab">
    <TabList>
      <Tab v-for="tab in tabs" :key="tab.label" :value="tab.route" as="RouterLink" :to="tab.route">
        {{ tab.label }}
      </Tab>
    </TabList>
  </Tabs>
  <RouterView class="my-3" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const tabs = ref([
  { route: '/examples/tabs/a', label: 'Feature A', icon: 'pi pi-chart-line' },
  { route: '/examples/tabs/b', label: 'Feature B', icon: 'pi pi-chart-line' },
  { route: '/examples/tabs/c', label: 'Feature C', icon: 'pi pi-chart-line' },
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
