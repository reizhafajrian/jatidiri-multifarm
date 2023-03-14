'use client'
import { FC } from 'react'
import { SelectFilter } from '../shared'

interface DashboardFilterProps {}

const DashboardFilter: FC<DashboardFilterProps> = ({}) => {
  const dateOptions = [
    { name: 'Today', value: 'today' },
    { name: 'This Week', value: 'this-week' },
    { name: 'This Month', value: 'this-month' },
    { name: 'This Year', value: 'this-year' },
  ]

  return (
    <SelectFilter options={dateOptions} defaultValue={dateOptions[0].value} />
  )
}

export default DashboardFilter
