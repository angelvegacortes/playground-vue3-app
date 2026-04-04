<template>
  <Menubar :model="items">
    <template #start>
      <div class="mt-2 flex items-center gap-2">
        <span>{{ title }}</span>
      </div>
    </template>
    <template #item="{ item, root }">
      <Button
        v-if="item.route"
        size="small"
        as="RouterLink"
        :variant="!root ? 'text' : undefined"
        :severity="!root ? 'success' : undefined"
        :to="item.route"
        :label="item.label as string"
      >
        <span class="material-symbols-rounded">{{ item.icon }}</span>
        <span>{{ item.label }}</span>
      </Button>
      <Button v-else size="small" :label="item.label as string">
        <span>{{ item.label }}</span>
        <span class="material-symbols-rounded">keyboard_arrow_down</span>
      </Button>
    </template>
    <template #end>
      <div class="mt-2 flex items-center gap-4">
        <span>Logged in as {{ userStore.getName() }}</span>
        <slot name="notificationsButton"></slot>
        <Button
          v-tooltip.left="'Logout'"
          size="small"
          severity="secondary"
          label="Logout"
          @click="logout()"
        >
          <span class="material-symbols-rounded">logout</span>
        </Button>
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import router from '@app/router'
import { useUserStore } from '@app/stores/user-store'
import { ref } from 'vue'

defineSlots<{
  notificationsButton(): void
}>()

const userStore = useUserStore()
const title = import.meta.env.VITE_APP_TITLE

const logout = () => {
  userStore.logout()
  router.push('/login')
}

const items = ref([
  {
    label: 'Home',
    icon: 'home',
    route: '/',
  },
  {
    label: 'Permissions',
    icon: 'security',
    route: '/examples/permissions',
  },
  {
    label: 'Layout',
    icon: 'security',
    items: [
      {
        label: 'Calendars',
        icon: 'calendar_month',
        route: '/examples/calendars',
      },
      {
        label: 'Tabs',
        icon: 'tabs',
        route: '/examples/tabs',
      },
      {
        label: 'Data Tables',
        icon: 'data_table',
        route: '/examples/data-tables',
      },
    ],
  },
  {
    label: 'Inputs',
    icon: 'security',
    items: [
      {
        label: 'Input Fields',
        icon: 'input',
        route: '/examples/inputs',
      },
      {
        label: 'Forms',
        icon: 'forms_add_on',
        route: '/examples/forms',
      },
      {
        label: 'Keyboard Shortcuts',
        icon: 'keyboard',
        route: '/examples/keyboard-shortcuts',
      },
    ],
  },
  {
    label: 'PDFs',
    icon: 'picture_as_pdf',
    route: '/examples/pdfs',
  },
])
</script>
