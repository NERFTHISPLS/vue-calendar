<template>
  <div class="container">
    <CalendarHeader
      :date="date"
      :locale="locale"
      @month-previous="handleMonthChange(-1)"
      @month-next="handleMonthChange(1)"
    />
    <CalendarGrid
      :date="date"
      :locale="locale"
      :selected-date="selectedDate"
      @day-selected="handleDaySelected"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CalendarGrid from './CalendarGrid.vue'
import CalendarHeader from './CalendarHeader.vue'
import { changeMonthBy, getTodayDateString } from '../utils/helpers'
import type { DateStringFormat } from '../type'
import type { Locale } from '@/modules/locale/type'

const props = withDefaults(
  defineProps<{
    initialDate?: DateStringFormat
    locale?: Locale
  }>(),
  {
    initialDate: getTodayDateString,
    locale: 'ru',
  },
)

const emit = defineEmits<{
  (e: 'daySelected', date: Date): void
}>()

const date = ref(new Date(props.initialDate))
const selectedDate = ref(date.value)

function handleMonthChange(diff: number) {
  date.value = changeMonthBy(diff, date.value)
}

function handleDaySelected(date: Date) {
  selectedDate.value = date

  emit('daySelected', date)
}
</script>

<style scoped>
.container {
  width: 25rem;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  padding: 0.5rem;
}
</style>
