<template>
  <Menubar v-if="userStore.isAuthenticated() && userStore.hasAcceptedTerms()">
    <template #start>
      <div class="mr-5">{{ title }}</div>
      <RouterLink to="/">
        <Button class="mr-2" icon="pi pi-home" label="Home" v-tooltip="'Home'" />
      </RouterLink>
      <RouterLink to="/test">
        <Button class="mr-2" icon="pi pi-chart-scatter" label="Test" v-tooltip="'Test'" />
      </RouterLink>
    </template>
    <template #end>
      <span class="mr-2">Logged in as {{ userStore.getName() }}</span>
      <RouterLink to="/login">
        <Button
          class="mr-2"
          icon="pi pi-sign-out"
          severity="secondary"
          label="Logout"
          @click="userStore.logout"
        />
      </RouterLink>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const title = import.meta.env.VITE_APP_TITLE
</script>
