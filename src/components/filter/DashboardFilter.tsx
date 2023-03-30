'use client'
import useStore from '@/store/useStore'
import {
  format, lastDayOfMonth,
  lastDayOfWeek, lastDayOfYear,
  startOfMonth, startOfWeek, startOfYear
} from 'date-fns'
import { FC } from 'react'
import { SelectFilter } from '../shared'

const DashboardFilter: FC = () => {
  const { dashboardFilterParams } = useStore()
  const shape = 'yyyy-MM-dd'
  const today = new Date()

  const now = format(today, shape)
  const fdOfThisWeek = format(startOfWeek(today), shape)
  const ldOfThisWeek = format(lastDayOfWeek(today), shape)
  const fdOfThisMonth = format(startOfMonth(today), shape)
  const ldOfThisMonth = format(lastDayOfMonth(today), shape)
  const fdOfThisYear = format(startOfYear(today), shape)
  const ldOfThisYear = format(lastDayOfYear(today), shape)

  const dateOptions = [
    { name: 'Today', value: `start=${now}&end=${now}` },
    { name: 'This Week', value: `start=${fdOfThisWeek}&end=${ldOfThisWeek}` },
    { name: 'This Month', value: `start=${fdOfThisMonth}&end=${ldOfThisMonth}` },
    { name: 'This Year', value: `start=${fdOfThisYear}&end=${ldOfThisYear}` }
  ]

  return (
    <SelectFilter options={dateOptions} defaultValue={dashboardFilterParams} onChange={(value) => useStore.setState({ dashboardFilterParams: value })} />
  )
}

export default DashboardFilter
