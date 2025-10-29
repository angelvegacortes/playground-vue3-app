<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppFooter from './components/layout/app-footer.vue'
import AppHeader from './components/layout/app-header.vue'
import { useUserStore } from './stores/user'

const userStore = useUserStore()

onMounted(() => {
  userStore.init()
})
</script>

<template>
  <header class="sticky top-0 z-50">
    <AppHeader />
  </header>
  <nav>
    <!-- NOTE disable sidenav for now -->
    <!-- <sideNavigation /> -->
  </nav>
  <main class="mx-5 my-5 z-0 flex-1">
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
  <footer class="sticky bottom-0 z-50">
    <AppFooter />
  </footer>
</template>
