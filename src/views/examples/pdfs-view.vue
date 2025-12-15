<template>
  <h1 class="text-2xl">PDFs</h1>
  <Button class="my-4" label="Generate PDF" @click="generatePdf">
    <span class="material-symbols-rounded">picture_as_pdf</span>
    <span>Generate PDF</span>
  </Button>
</template>

<script setup lang="ts">
import { generatePdf } from '@app/services/pdf-service'
</script>
