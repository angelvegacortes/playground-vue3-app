<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppFooter from './components/app-footer.vue'
import AppHeader from './components/app-header.vue'
import sideNavigation from './components/app-side-navigation.vue'
</script>

<template>
  <header class="sticky top-0 z-50">
    <AppHeader />
  </header>
  <nav>
    <sideNavigation />
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
