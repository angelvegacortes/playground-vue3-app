<template>
  <!-- <Menubar v-if="userStore.isAuthenticated() && userStore.hasAcceptedTerms()"> -->
  <Menubar>
    <template #start>
      <div class="mr-5">{{ title }}</div>
      <Button as="router-link" to="/" class="mr-2" v-tooltip="'Home'" label="Home">
        <span class="material-symbols-rounded">home</span>
        <span>Home</span>
      </Button>
      <Button
        as="RouterLink"
        to="/test"
        class="mr-2"
        icon="pi pi-chart-scatter"
        label="Test"
        v-tooltip="'Test'"
      />
    </template>
    <template #end>
      <span class="mr-2">Logged in as {{ userStore.getName() }}</span>
      <Button
        as="RouterLink"
        to="/login"
        class="mr-2"
        icon="pi pi-sign-out"
        severity="secondary"
        label="Logout"
        @click="userStore.logout"
      />
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const title = import.meta.env.VITE_APP_TITLE
</script>
