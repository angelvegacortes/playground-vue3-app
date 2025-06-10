<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import sideNavigation from './components/side-navigation.vue'
</script>

<template>
  <header class="sticky top-0">
    <AppHeader />
  </header>
  <nav>
    <sideNavigation />
  </nav>
  <main class="mx-5 my-5">
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
  <footer class="sticky bottom-0">
    <AppFooter />
  </footer>
</template>
