'use client'
import CaretIcon from '@/assets/icons/caret.svg'
import { dateOptions, indukOptions, pejantanOptions } from '@/data/data'
import { shortDateFormatter } from '@/utils/formatDate'
import { Popover, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import DatePicker from 'react-datepicker'
import SelectMenu from '../SelectMenu'

export default function FilterTable() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)

  const onChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
    console.log({ startDate, endDate })
  }

  return (
    <div className="mb-6 flex items-center gap-6">
      <div className="flex items-center">
        <p className="text-sm text-[#7B7B7B]">Date:</p>
        <Popover className="relative">
          <Popover.Button className="flex items-center px-2 text-sm focus:outline-none">
            Today
            <CaretIcon className="ml-3 h-6 w-6 fill-[#7B7B7B]" />
          </Popover.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel className="absolute z-50 mt-1 overflow-auto text-sm text-[#515356] focus:outline-none">
              <div className="flex">
                <div className="h-fit rounded-lg bg-white px-4 py-3 shadow-lg">
                  <ul className="space-y-2">
                    {dateOptions.map((item: any) => (
                      <li key={item.name} className="whitespace-nowrap">
                        <button>{item.name}</button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-2 shadow-lg">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border border-[#7B7B7B] p-1 text-center text-xs text-[#7B7B7B]">
                      {shortDateFormatter(startDate)}
                    </div>
                    <div className="border border-[#7B7B7B] p-1 text-center text-xs text-[#7B7B7B]">
                      {endDate ? shortDateFormatter(endDate) : ' '}
                    </div>
                  </div>
                  <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                  />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
      <SelectMenu title="Asal Induk" options={indukOptions} />
      <SelectMenu title="Asal Pejantan" options={pejantanOptions} />
    </div>
  )
}
