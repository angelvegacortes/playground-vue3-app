<script setup lang="ts">
import { onMounted, ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import { type CalendarOptions } from '@fullcalendar/core'
import type { CalendarEvent } from '@/types'

const { events } = defineProps<{
  events: CalendarEvent[]
}>()

const calendarOptions = ref<CalendarOptions>({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  height: 'auto',
  weekends: false,
  headerToolbar: {
    start: 'prev,next',
    center: 'title',
    end: '',
  },
  eventDurationEditable: false,
  displayEventTime: false,
  editable: false,
  eventOverlap: false,
  events: events,

  // Allow options to be customised on schedule component
  // ...props.additionalOptions,
})

// Access the FullCalendar API
const fullCalendar = ref<InstanceType<typeof FullCalendar>>()
const calendar = ref()

// Load data on page load
onMounted(() => {
  // We can only get the FulLCalendar API on render
  calendar.value = fullCalendar.value?.getApi()
})
</script>

<template>
  <FullCalendar ref="fullCalendar" :options="calendarOptions" />
</template>
