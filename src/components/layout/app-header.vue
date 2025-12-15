<template>
  <!-- <Menubar v-if="userStore.isAuthenticated() && userStore.hasAcceptedTerms()"> -->
  <Menubar>
    <template #start>
      <div class="mr-5">{{ title }}</div>
      <Button
        v-tooltip.bottom="'Home'"
        size="small"
        as="RouterLink"
        to="/"
        class="mr-2"
        label="Home"
      >
        <span class="material-symbols-rounded">home</span>
        <span>Home</span>
      </Button>
      <Button
        v-tooltip.bottom="'Permission Examples'"
        size="small"
        as="RouterLink"
        to="/examples/permissions"
        class="mr-2"
        label="Permissions"
      >
        <span class="material-symbols-rounded">security</span>
        <span>Permissions</span>
      </Button>
      <Button
        v-tooltip.bottom="'Tab Examples'"
        size="small"
        as="RouterLink"
        to="/examples/tabs"
        class="mr-2"
        label="Tabs"
      >
        <span class="material-symbols-rounded">tabs</span>
        <span>Tabs</span>
      </Button>
      <Button
        v-tooltip.bottom="'Data Table Examples'"
        size="small"
        as="RouterLink"
        to="/examples/data-tables"
        class="mr-2"
        label="Data Tables"
      >
        <span class="material-symbols-rounded">data_table</span>
        <span>Data Tables</span>
      </Button>
      <Button
        v-tooltip.bottom="'Calendar Examples'"
        as="RouterLink"
        to="/examples/calendars"
        size="small"
        class="mr-2"
        label="Calendars"
      >
        <span class="material-symbols-rounded">calendar_month</span>
        <span>Calendars</span>
      </Button>
      <Button
        v-tooltip.bottom="'Form Examples'"
        as="RouterLink"
        to="/examples/forms"
        size="small"
        class="mr-2"
        label="Forms"
      >
        <span class="material-symbols-rounded">forms_add_on</span>
        <span>Forms</span>
      </Button>
      <Button
        v-tooltip.bottom="'Input Examples'"
        as="RouterLink"
        to="/examples/inputs"
        size="small"
        class="mr-2"
        label="Inputs"
      >
        <span class="material-symbols-rounded">input</span>
        <span>Inputs</span>
      </Button>
      <Button
        v-tooltip.bottom="'PDF Examples'"
        as="RouterLink"
        to="/examples/pdfs"
        size="small"
        class="mr-2"
        label="PDFs"
      >
        <span class="material-symbols-rounded">picture_as_pdf</span>
        <span>PDFs</span>
      </Button>
    </template>
    <template #end>
      <span class="mr-2">Logged in as {{ userStore.getName() }}</span>
      <Button
        as="RouterLink"
        to="/login"
        class="mr-2"
        size="small"
        severity="secondary"
        label="Logout"
        @click="userStore.logout"
      >
        <span class="material-symbols-rounded">logout</span>
        <span>Logout</span>
      </Button>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { useUserStore } from '@app/stores/user-store'

const userStore = useUserStore()
const title = import.meta.env.VITE_APP_TITLE
</script>
