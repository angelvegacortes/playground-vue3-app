<template>
  <Toolbar>
    <template #start>
      <div class="mr-5">{{ title }}</div>

      <Button class="mr-2" icon="pi pi-home" label="Home" @click="visit('/')" />
      <Button class="mr-2" icon="pi pi-chart-scatter" label="Test" @click="visit('/test')" />
    </template>

    <template #center> </template>

    <template #end>
      <Button
        v-if="!userStore.isAuthenticated()"
        class="mr-2"
        icon="pi pi-sign-in"
        label="Login"
        @click="visit('/login')"
      />
      <div v-if="userStore.isAuthenticated()">
        <span class="mr-2">Logged in as {{ userStore.getName() }}</span>
        <Button
          class="mr-2"
          icon="pi pi-sign-out"
          severity="secondary"
          label="Logout"
          @click="visit('/logout')"
        />
      </div>
    </template>
  </Toolbar>
</template>

<script setup lang="ts">
import router from '@/router'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const title = import.meta.env.VITE_APP_TITLE

const visit = (path: string) => {
  router.push(path)
}
</script>
