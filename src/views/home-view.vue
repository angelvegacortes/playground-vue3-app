<template>
  <h1 class="text-4xl">Welcome to the home page!</h1>
  <div class="mt-2 flex items-center gap-2">
    <Button
      v-tooltip.bottom="'Keyboard Shortcut Examples'"
      size="small"
      as="RouterLink"
      to="/examples/keyboard-shortcuts"
      label="Keyboard Shortcuts"
    >
      <span class="material-symbols-rounded">keyboard</span>
      <span>Keyboard Shortcuts</span>
    </Button>
    <Button
      v-tooltip.bottom="'Timer Examples'"
      size="small"
      as="RouterLink"
      to="/examples/timers"
      label="Timer Examples"
    >
      <span class="material-symbols-rounded">timer</span>
      <span>Timers</span>
    </Button>
  </div>
  <AppDummyText class="my-5" />
  <AppDummyText class="my-5" />
  <AppDummyText class="my-5" />
</template>

<script setup lang="ts">
import AppDummyText from '@app/components/text/app-dummy-text.vue'
</script>
