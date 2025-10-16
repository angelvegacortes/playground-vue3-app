<template>
  <div
    class="flex justify-center"
    v-if="true || (userStore.isAuthenticated() && userStore.hasAcceptedTerms())"
  >
    <Drawer v-model:visible="visible" header="Drawer" :base-z-index="10" :modal="false">
      <p id="my-test-id">KABOOM</p>
    </Drawer>
    <Button icon="pi pi-arrow-right" @click="visible = true" label="Open" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const visible = ref(false)
</script>
