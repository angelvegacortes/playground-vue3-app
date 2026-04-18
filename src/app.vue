<template>
  <header class="sticky top-0 z-50">
    <AppHeader>
      <template #notificationsButton>
        <NotificationsCounter />
      </template>
    </AppHeader>
  </header>
  <div class="flex min-h-screen">
    <nav class="z-10 transition-all duration-300 ease-in-out bg-gray-100" :class="sideNavWidth">
      <AppSideNavigation />
    </nav>
    <main class="z-0 flex-1 p-4">
      <!-- NOTE global toast component. Define once and can be used by all child components -->
      <Toast :pt="{ root: 'mt-12' }" />
      <Suspense>
        <RouterView />
      </Suspense>
    </main>
  </div>
  <footer class="sticky bottom-0 z-50">
    <AppFooter />
  </footer>
</template>

<script setup lang="ts">
import NotificationsCounter from '@app/features/notifications/notifications-counter.vue'
import { computed, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppFooter from './components/layout/app-footer.vue'
import AppHeader from './components/layout/app-header.vue'
import AppSideNavigation from './components/layout/app-side-navigation.vue'
import { useAppSideNavigationStore } from './components/layout/stores/app-side-navigation-store'
import { useUserStore } from './stores/user-store'

const userStore = useUserStore()
const appSideNavigationStore = useAppSideNavigationStore()

onMounted(() => {
  userStore.init()
})

const sideNavWidth = computed(() => {
  return appSideNavigationStore.isVisible() ? 'w-40' : 'w-0 hidden'
})
</script>
