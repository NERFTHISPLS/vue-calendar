import type { Locale } from '@/modules/locale/type'
import type { DateStringFormat } from '../type'

export function getMonthFrom(date: Date, locale: Locale = 'ru') {
  return Intl.DateTimeFormat(locale, { month: 'short' }).format(date)
}

export function getFullYearFrom(date: Date) {
  return date.getFullYear()
}

export function changeMonthBy(diff: number, date: Date) {
  const newDate = new Date(date)
  newDate.setMonth(newDate.getMonth() + diff)

  return newDate
}

export function getMonthGrid(date: Date): (Date | null)[] {
  const year = date.getFullYear()
  const month = date.getMonth()

  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const startWeekday = new Date(year, month, 1).getDay()

  const grid: (Date | null)[] = []

  for (let i = 0; i < startWeekday; i++) {
    grid.push(null)
  }

  for (let day = 1; day <= daysInMonth; day++) {
    grid.push(new Date(year, month, day))
  }

  return grid
}

export function datesAreEqual(date1: Date | null, date2: Date | null) {
  if (!date1 || !date2) {
    return false
  }

  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

export function getTodayDateString() {
  return new Date().toISOString().split('T')[0] as DateStringFormat
}

export function getWeekDays(locale: Locale = 'ru'): string[] {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: 'short' })
  const baseDate = new Date(Date.UTC(2025, 0, 4)) // 5 января 2025 — это воскресенье

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(baseDate)
    d.setDate(baseDate.getDate() + i)

    return formatter.format(d)
  })
}
