<template>
  <h1 class="text-2xl">Dialogs</h1>
  <Button class="m-2" label="Open Dialog" @click="isDialogVisible = true" />
  <AppDialog
    header="Dialog Example 1"
    :is-visible="isDialogVisible"
    :is-closeable="true"
    class="w-1/3"
    @close="isDialogVisible = false"
  >
    <p>This is sample dialog.</p>
    <Button label="Close" severity="secondary" @click="isDialogVisible = false" />
  </AppDialog>
</template>

<script setup lang="ts">
import AppDialog from '@app/components/layout/app-dialog.vue'
import { ref } from 'vue'

const isDialogVisible = ref(false)
</script>
