<template>
  <div
    class="flex justify-center"
    v-if="userStore.isAuthenticated() && userStore.hasAcceptedTerms()"
  >
    <Drawer v-model:visible="visible" header="Drawer" :base-z-index="10" :modal="false">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </Drawer>
    <Button icon="pi pi-arrow-right" @click="visible = true" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const visible = ref(false)
</script>
