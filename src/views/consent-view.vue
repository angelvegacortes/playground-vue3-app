<template>
  <AppDialog header="EULA" :is-visible="true">
    <DummyText class="my-5" />
    <div class="text-center">
      <Button as="RouterLink" to="/" label="Accept" @click="userStore.acceptTerms" />
    </div>
  </AppDialog>
</template>

<script setup lang="ts">
import DummyText from '@/components/text/app-dummy-text.vue'
import { useUserStore } from '@/stores/user'
import { onMounted, onUnmounted } from 'vue'

const userStore = useUserStore()

onMounted(() => {
  document.body.classList.add('consent-alternate-background-color')
})

onUnmounted(() => {
  document.body.classList.remove('consent-alternate-background-color')
})
</script>
