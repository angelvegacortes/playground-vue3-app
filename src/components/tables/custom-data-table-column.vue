<template>
  <Column :field="field" :header="header" :sortable="isSortable" :class="cssClass"></Column>
</template>

<script setup lang="ts">
const {
  field,
  header,
  cssClass,
  isSortable = true,
} = defineProps<{
  field: string
  header: string
  cssClass: `w-${number}/${number}`
  isSortable?: boolean
}>()
</script>
