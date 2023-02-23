'use client'
import { shedInfoInitial, shedInfoTypesOptions } from '@/data/data'
import { IFilterShedInfo } from '@/data/interfaces'
import { Listbox as List, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronDown } from '../shared/Icons'

export default function ShedInfoFilter() {
  const [filterSelected, setFilterSelected] =
    useState<IFilterShedInfo>(shedInfoInitial)

  return (
    <div className="flex items-center gap-3">
      <span className="font-semibold">FILTER:</span>
      <div className="flex items-center gap-3">
        {shedInfoTypesOptions.map(({ name, placeholder, options }, idx) => {
          const selected = filterSelected[name as keyof IFilterShedInfo]
          return (
            <div key={idx} className="relative">
              <List
                value={selected}
                onChange={(val) =>
                  setFilterSelected({ ...filterSelected, [name]: val })
                }
              >
                <List.Button className="relative flex cursor-default items-center justify-between gap-3 rounded-md border py-1 px-2 focus:outline-none">
                  <span className="font-semibold uppercase text-neutral-5">
                    {selected.name === 'all' ? placeholder : selected.name}
                  </span>
                  <ChevronDown />
                </List.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <List.Options className="absolute right-0 z-10 mt-1 max-h-60 min-w-[100px] overflow-auto rounded-md bg-white py-1 shadow">
                    {options.map((item, idx) => (
                      <List.Option
                        key={idx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 px-4 ${
                            active ? 'text-primary-4' : 'text-neutral-4'
                          }`
                        }
                        value={item}
                      >
                        {({ selected }) => (
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {item.name}
                          </span>
                        )}
                      </List.Option>
                    ))}
                  </List.Options>
                </Transition>
              </List>
            </div>
          )
        })}
      </div>
    </div>
  )
}
