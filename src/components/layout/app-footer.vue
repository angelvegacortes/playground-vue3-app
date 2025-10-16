<template>
  <div class="footer-bg-color text-center text-black">
    {{ title }} | Version: {{ version }} | {{ date }}
  </div>
</template>

<script setup lang="ts">
const title = import.meta.env.VITE_APP_TITLE
const version = import.meta.env.VITE_APP_VERSION
const date = import.meta.env.VITE_APP_DATE
</script>

<style scoped>
.footer-bg-color {
  background-color: var(--p-primary-color);
}
</style>
