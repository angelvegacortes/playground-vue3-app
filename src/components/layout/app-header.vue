<template>
  <!-- <Menubar v-if="userStore.isAuthenticated() && userStore.hasAcceptedTerms()"> -->
  <Menubar>
    <template #start>
      <div class="mr-5">{{ title }}</div>
      <Button v-tooltip="'Home'" as="router-link" to="/" class="mr-2" label="Home">
        <span class="material-symbols-rounded">home</span>
        <span>Home</span>
      </Button>
      <Button
        v-tooltip="'Test 1'"
        as="RouterLink"
        to="/test/1"
        class="mr-2"
        icon="pi pi-chart-scatter"
        label="Test 1"
      />
      <Button
        v-tooltip="'Test 2'"
        as="RouterLink"
        to="/test/2"
        class="mr-2"
        icon="pi pi-chart-scatter"
        label="Test 2"
      />
      <Button
        v-tooltip="'Test 3'"
        as="RouterLink"
        to="/test/3"
        class="mr-2"
        icon="pi pi-chart-scatter"
        label="Test 3"
      />
      <Button
        v-tooltip="'Test 4'"
        as="RouterLink"
        to="/test/4"
        class="mr-2"
        icon="pi pi-chart-scatter"
        label="Test 4"
      />
      <Button
        v-tooltip="'Test 5'"
        as="RouterLink"
        to="/test/5"
        class="mr-2"
        icon="pi pi-chart-scatter"
        label="Test 5"
      />
      <Button
        v-tooltip="'Test 6'"
        as="RouterLink"
        to="/test/6"
        class="mr-2"
        icon="pi pi-chart-scatter"
        label="Test 6"
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
import { useUserStore } from '@app/stores/user'

const userStore = useUserStore()
const title = import.meta.env.VITE_APP_TITLE
</script>
