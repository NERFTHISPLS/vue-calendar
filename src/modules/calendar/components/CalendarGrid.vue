<template>
  <div class="grid">
    <CalendarWeekDays :locale="locale" />
    <CalendarDays
      :date="date"
      :selected-date="selectedDate"
      @day-selected="$emit('daySelected', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { Locale } from '@/modules/locale/type'
import CalendarDays from './CalendarDays.vue'
import CalendarWeekDays from './CalendarWeekDays.vue'

defineProps<{
  date: Date
  selectedDate: Date | null
  locale: Locale
}>()

defineEmits<{
  (e: 'daySelected', date: Date): void
}>()
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.1rem;
}
</style>
