<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main class="mx-5 my-5">
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style scoped></style>
