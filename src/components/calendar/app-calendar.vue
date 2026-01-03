<script setup lang="ts">
import type { CalendarEvent } from '@app/types'
import { type CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/vue3'
import { onMounted, ref, useTemplateRef } from 'vue'

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

const fullCalendar = useTemplateRef<InstanceType<typeof FullCalendar>>('full-calendar')
const calendar = ref()

onMounted(() => {
  calendar.value = fullCalendar.value?.getApi()
})
</script>

<template>
  <FullCalendar ref="full-calendar" :options="calendarOptions" />
</template>
