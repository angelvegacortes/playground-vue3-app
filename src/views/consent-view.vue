<template>
  <Dialog :visible="true" modal header="EULA" :closable="false">
    <DummyText class="my-5" />
    <div class="text-center">
      <RouterLink to="/">
        <Button label="Accept" @click="userStore.acceptTerms" />
      </RouterLink>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import DummyText from '@/components/dummy-text.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>
