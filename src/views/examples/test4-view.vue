<template>
  <p class="my-3">
    This calendar is using the
    <Tag severity="contrast" value="FullCalendar" rounded></Tag> component.
  </p>
  <AppCalendar v-if="isSuccess" :events="data!" />
</template>

<script setup lang="ts">
import AppCalendar from '@app/components/calendar/app-calendar.vue'
import apiService from '@app/services'

const { data, isSuccess } = await apiService.getCalendarEvents()
</script>
