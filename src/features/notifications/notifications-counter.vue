<template>
  <template v-if="counterDisplay">
    <OverlayBadge :value="counterDisplay" severity="danger">
      <Button
        v-tooltip.bottom="`${counterDisplay} Notifications`"
        type="button"
        size="small"
        @click="updateCounter"
      >
        <span class="material-symbols-rounded">notifications</span>
      </Button>
    </OverlayBadge>
  </template>
  <template v-else>
    <Button v-tooltip.bottom="'Notifications'" type="button" size="small" @click="updateCounter">
      <span class="material-symbols-rounded">notifications</span>
    </Button>
  </template>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const DEFAULT_COUNTER_VALUE = 0
const DEFAULT_COUNTER_LIMIT = 25

const counter = ref(DEFAULT_COUNTER_VALUE)

const counterDisplay = computed(() => {
  return counter.value > DEFAULT_COUNTER_VALUE ? `${counter.value}` : undefined
})

const updateCounter = () => {
  counter.value++

  if (counter.value > DEFAULT_COUNTER_LIMIT) {
    counter.value = DEFAULT_COUNTER_VALUE
  }
}
</script>
