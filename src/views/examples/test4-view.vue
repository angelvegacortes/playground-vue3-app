<template>
  <p class="my-3">
    This calendar is using the
    <Tag severity="contrast" value="FullCalendar" rounded></Tag> component.
  </p>
  <AppCalendar v-if="isFinished" :events="data" />
</template>

<script setup lang="ts">
import AppCalendar from '@/components/calendar/app-calendar.vue'
import type { CalendarEvent } from '@/types'
import { useFetch } from '@vueuse/core'

const { data, isFinished } = await useFetch<CalendarEvent[]>('api/calendar/events').get().json()
</script>
