<template>
  <p class="weekday" v-for="weekday in weekDays" :key="weekday">{{ weekday }}</p>
</template>

<script setup lang="ts">
import type { Locale } from '@/modules/locale/type'
import { computed } from 'vue'
import { getWeekDays } from '../utils/helpers'

const props = defineProps<{
  locale: Locale
}>()

const weekDays = computed(() => getWeekDays(props.locale))
</script>

<style scoped>
.weekday {
  text-align: center;
  font-size: 0.9rem;
  color: #5a5a5a;
}
</style>
