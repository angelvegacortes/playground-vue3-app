<template>
  <AppDialog header="Login" :is-visible="true">
    <div class="text-center">
      <Button as="RouterLink" to="/consent" label="Login" @click="userStore.login" />
    </div>
  </AppDialog>
</template>

<script setup lang="ts">
import AppDialog from '@app/components/layout/app-dialog.vue'
import { useUserStore } from '@app/stores/user'

const userStore = useUserStore()
</script>
