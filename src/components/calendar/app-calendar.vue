<script setup lang="ts">
import type { CalendarEvent } from '@/types'
import { type CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/vue3'
import { onMounted, ref } from 'vue'

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
  eventInteractive: true,
  eventDurationEditable: false,
  displayEventTime: false,
  editable: false,
  eventOverlap: false,
  events: events,
})

const fullCalendar = ref<InstanceType<typeof FullCalendar>>()
const calendar = ref()

onMounted(() => {
  calendar.value = fullCalendar.value?.getApi()
})
</script>

<template>
  <FullCalendar ref="fullCalendar" :options="calendarOptions" />
</template>
