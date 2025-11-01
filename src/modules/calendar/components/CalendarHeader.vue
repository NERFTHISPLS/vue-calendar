<template>
  <header class="header">
    <button class="btn" @click="$emit('monthPrevious')">
      <span class="material-symbols-outlined">arrow_left</span>
    </button>

    <p class="title">{{ month }} {{ year }}</p>

    <button class="btn">
      <span class="material-symbols-outlined" @click="$emit('monthNext')">arrow_right</span>
    </button>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getFullYearFrom, getMonthFrom } from '../utils/helpers'
import type { Locale } from '@/modules/locale/type'

const props = defineProps<{
  date: Date
  locale: Locale
}>()

defineEmits<{
  (e: 'monthPrevious'): void
  (e: 'monthNext'): void
}>()

const month = computed(() => getMonthFrom(props.date, props.locale))
const year = computed(() => getFullYearFrom(props.date))
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.btn {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
}

.btn:hover {
  background-color: #e9e9e9;
}
</style>
