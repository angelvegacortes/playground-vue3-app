<template>
  <div
    v-if="true || (userStore.isAuthenticated() && userStore.hasAcceptedTerms())"
    class="flex justify-center"
  >
    <Drawer v-model:visible="visible" header="Drawer" :base-z-index="10" :modal="false">
      <p id="my-test-id">KABOOM</p>
    </Drawer>
    <Button icon="pi pi-arrow-right" label="Open" @click="visible = true" />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
const userStore = useUserStore()
const visible = ref(false)
</script>
