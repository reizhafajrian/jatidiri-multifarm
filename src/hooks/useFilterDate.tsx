import useStore from '@/store/useStore'
import {
  format,
  lastDayOfMonth,
  lastDayOfWeek,
  lastDayOfYear,
  startOfMonth,
  startOfWeek,
  startOfYear,
} from 'date-fns'
import { useState } from 'react'

const shape = 'yyyy-MM-dd'
const today = new Date()

const now = format(today, shape)
const fdOfThisWeek = format(startOfWeek(today), shape)
const ldOfThisWeek = format(lastDayOfWeek(today), shape)
const fdOfThisMonth = format(startOfMonth(today), shape)
const ldOfThisMonth = format(lastDayOfMonth(today), shape)
const fdOfThisYear = format(startOfYear(today), shape)
const ldOfThisYear = format(lastDayOfYear(today), shape)

const todayValue = `start=${now}&end=${now}`
const thisWeekValue = `start=${fdOfThisWeek}&end=${ldOfThisWeek}`
const thisMonthValue = `start=${fdOfThisMonth}&end=${ldOfThisMonth}`
export const thisYearValue = `start=${fdOfThisYear}&end=${ldOfThisYear}`

function useFilterDate() {
  const dateOptions = [
    { name: 'Today', value: todayValue },
    { name: 'This Week', value: thisWeekValue },
    { name: 'This Month', value: thisMonthValue },
    { name: 'This Year', value: thisYearValue },
  ]

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState<Date | null>(null)

  const dateRangeHandler = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)

    if (start && end) {
      const value = `start=${format(start, shape)}&end=${format(end, shape)}`
      useStore.setState({ filterByDate: value })
    }
  }

  return {
    dateOptions,
    startDate,
    endDate,
    dateRangeHandler,
  }
}

export default useFilterDate
