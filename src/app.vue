<template>
  <header class="sticky top-0 z-50">
    <AppHeader>
      <template #notificationsButton>
        <NotificationsCounter />
      </template>
    </AppHeader>
  </header>
  <nav>
    <!-- NOTE disable sidenav for now -->
    <!-- <sideNavigation /> -->
  </nav>
  <main class="mx-5 my-5 z-0 flex-1">
    <!-- NOTE global toast component. Define once and can be used by all child components -->
    <Toast :pt="{ root: 'mt-12' }" />
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
  <footer class="sticky bottom-0 z-50">
    <AppFooter />
  </footer>
</template>

<script setup lang="ts">
import NotificationsCounter from '@app/features/notifications/notifications-counter.vue'
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppFooter from './components/layout/app-footer.vue'
import AppHeader from './components/layout/app-header.vue'
import { useUserStore } from './stores/user-store'

const userStore = useUserStore()

onMounted(() => {
  userStore.init()
})
</script>
