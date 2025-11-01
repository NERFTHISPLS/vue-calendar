<template>
  <p>Задали дату</p>
  <BaseCalendar :initial-date="'2024-01-24'" :locale="locale" @day-selected="console.log" />

  <p>Сегодняшний день</p>
  <BaseCalendar @day-selected="console.log" :locale="locale" />

  <ChangeLocaleButton @locale-changed="handleLocaleChanged" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BaseCalendar } from './modules/calendar'
import { ChangeLocaleButton } from './modules/locale'
import type { Locale } from './modules/locale/type'

const locale = ref<Locale>('ru')

function handleLocaleChanged(newLocale: Locale) {
  locale.value = newLocale
}
</script>

<style scoped></style>
