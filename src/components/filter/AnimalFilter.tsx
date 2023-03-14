'use client'
import { getAnimalListOptions } from '@/data/data'
import { shortDateFormatter } from '@/lib/utils'
import { useAnimalStore } from '@/store/animal'
import { FC, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../shared/DropdownMenu'
import { ChevronDown } from '../shared/Icons'
import SelectFilter from '../shared/SelectFilter'

interface AnimalFilterProps {
  animal: string
}

const AnimalFilter: FC<AnimalFilterProps> = ({ animal }) => {
  const opts = getAnimalListOptions(animal)

  return (
    <div className="mb-6 flex items-center gap-6">
      <FilterDate dateOptions={opts.dateOptions} />
      <SelectFilter
        title="asal induk"
        defaultValue={useAnimalStore.getState().origin_female}
        options={opts.femaleOriginOptions}
        onChange={(value) => useAnimalStore.setState({ origin_female: value })}
      />
      <SelectFilter
        title="asal pejantan"
        defaultValue={useAnimalStore.getState().origin_male}
        options={opts.maleOriginOptions}
        onChange={(value) => useAnimalStore.setState({ origin_male: value })}
      />
    </div>
  )
}

export default AnimalFilter

const FilterDate = ({ dateOptions }: any) => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)

  const [selectedDate, setSelectedDate] = useState(dateOptions[0])

  const onChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <div className="flex items-center gap-3">
      <p className="text-sm text-neutral-4">Date:</p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex gap-3 text-sm outline-none">
            {selectedDate.name}
            <ChevronDown />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {dateOptions.map((item: any) => (
            <DropdownMenuItem
              key={item.value}
              onClick={() => setSelectedDate(item)}
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
