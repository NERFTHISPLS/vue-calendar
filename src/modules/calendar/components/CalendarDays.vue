<template>
  <button
    v-for="(cell, index) in days"
    :key="index"
    class="day"
    :class="{ empty: !cell, selected: datesAreEqual(selectedDate, cell) }"
    @click="emitDaySelected(cell)"
  >
    <span v-if="cell">{{ cell.getDate() }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { datesAreEqual, getMonthGrid } from '../utils/helpers'

const props = defineProps<{
  date: Date
  selectedDate: Date | null
}>()

const emit = defineEmits<{
  (e: 'daySelected', date: Date): void
}>()

const days = computed(() => getMonthGrid(props.date))

function emitDaySelected(date: Date | null) {
  if (!date) {
    return
  }

  emit('daySelected', date)
}
</script>

<style scoped>
.day {
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.day:hover {
  background-color: #e6e6e6;
}

.day.empty:hover {
  background: none;
  cursor: default;
}

.day.selected {
  background-color: #d8d8d8;
}
</style>
