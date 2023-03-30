'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/shared/DropdownMenu'
import { ChevronDown } from '@/components/shared/Icons'
import SelectFilter from '@/components/shared/SelectFilter'
import { getAnimalListOptions } from '@/lib/data'
import { shortDateFormatter } from '@/lib/utils'
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
import { FC, useState } from 'react'
import ReactDatePicker from 'react-datepicker'

interface AnimalFilterProps {
  animal: string
}

const AnimalFilter: FC<AnimalFilterProps> = ({ animal }) => {
  const { setFilter, originFemale, originMale } = useStore()
  const opts = getAnimalListOptions(animal)

  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
      <FilterDate />
      <SelectFilter
        title="asal induk"
        defaultValue={originFemale}
        options={opts?.femaleOriginOptions}
        onChange={(value) => setFilter({ originFemale: value })}
      />
      <SelectFilter
        title="asal pejantan"
        defaultValue={originMale}
        options={opts?.maleOriginOptions}
        onChange={(value) => setFilter({ originMale: value })}
      />
    </div>
  )
}

export default AnimalFilter

const FilterDate = () => {
  const { filterByDateAnimals } = useStore()

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
    {
      name: 'This Month',
      value: `start=${fdOfThisMonth}&end=${ldOfThisMonth}`,
    },
    { name: 'This Year', value: `start=${fdOfThisYear}&end=${ldOfThisYear}` },
  ]

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const onChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)

    // if (start && end) {
    const value = `start=${format(start, shape)}&end=${format(end, shape)}`
    useStore.setState({ filterByDateAnimals: value })
    // }
  }

  return (
    <div className="flex items-center gap-3">
      <p className="text-sm text-neutral-4">Date:</p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-3 text-sm outline-none">
            {dateOptions?.find((item) => item.value == filterByDateAnimals)
              ?.name ??
              (format(startDate, 'dd/yyyy/MM') + ' - ' + endDate !== null &&
                format(endDate, 'dd/yyyy/MM'))}
            <ChevronDown className="w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {dateOptions.map((item: any) => (
            <DropdownMenuItem
              key={item.value}
              onClick={() =>
                useStore.setState({ filterByDateAnimals: item.value })
              }
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
                onChange={onChange}
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
