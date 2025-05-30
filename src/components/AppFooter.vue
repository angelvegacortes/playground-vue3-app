<template>
  <div class="sticky bottom-0 text-center text-gray-400">{{ title }} | Version: {{ version }}</div>
</template>

<script setup lang="ts">
const title = import.meta.env.VITE_APP_TITLE
const version = import.meta.env.VITE_APP_VERSION
</script>
