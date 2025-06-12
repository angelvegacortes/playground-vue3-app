<template>
  <Dialog :visible="true" modal header="Login" :closable="false">
    <div class="text-center">
      <RouterLink to="/consent">
        <Button label="Login" @click="userStore.login" />
      </RouterLink>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>
