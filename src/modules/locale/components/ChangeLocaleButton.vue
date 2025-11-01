<template>
  <button @click="switchLocale">{{ buttonText }}</button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Locale } from '../type'

const emit = defineEmits<{
  (e: 'localeChanged', newLocale: Locale): void
}>()

const locale = ref<Locale>('ru')

const buttonText = computed(() =>
  locale.value === 'en' ? 'Change to Russian' : 'Поменять на английский',
)

function switchLocale() {
  const newLocale: Locale = locale.value === 'en' ? 'ru' : 'en'
  locale.value = newLocale

  emit('localeChanged', newLocale)
}
</script>

<style scoped></style>
