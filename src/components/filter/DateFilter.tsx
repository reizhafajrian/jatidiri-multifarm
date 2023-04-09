'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/shared/DropdownMenu'
import { ChevronDown } from '@/components/shared/Icons'
import useFilterDate from '@/hooks/useFilterDate'
import { shortDateFormatter } from '@/lib/utils'
import useStore from '@/store/useStore'
import { format } from 'date-fns'
import { FC } from 'react'
import ReactDatePicker from 'react-datepicker'

interface DateFilterProps {
  label: string
}

const DateFilter: FC<DateFilterProps> = ({ label }) => {
  const { filterByDate: date } = useStore()
  const { dateOptions, startDate, endDate, dateRangeHandler } = useFilterDate()

  const selectedOption = dateOptions?.find((item) => item.value == date)?.name

  const start = format(startDate, 'dd/yyyy/MM')
  const end = endDate ? format(endDate, 'dd/yyyy/MM') : undefined

  return (
    <div className="flex items-center gap-3">
      <p className="text-sm text-neutral-4">{label}:</p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-3 text-sm outline-none">
            {selectedOption && selectedOption}
            {!selectedOption && `${start}${end ? ' - ' + end : ''}`}
            <ChevronDown className="w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {dateOptions.map((item: any) => (
            <DropdownMenuItem
              key={item.value}
              onClick={() => useStore.setState({ filterByDate: item.value })}
              className="text-sm"
            >
              {item.name}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <DropdownMenuItem className="p-0 text-sm">
                Manual
              </DropdownMenuItem>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="ml-3 px-5 pt-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-neutral-4 p-1 text-center text-xs text-neutral-4">
                  {shortDateFormatter(startDate)}
                </div>
                <div className="border border-neutral-4 p-1 text-center text-xs text-neutral-4">
                  {endDate ? shortDateFormatter(endDate) : ' '}
                </div>
              </div>
              <ReactDatePicker
                selected={startDate}
                onChange={dateRangeHandler}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
              />
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default DateFilter
