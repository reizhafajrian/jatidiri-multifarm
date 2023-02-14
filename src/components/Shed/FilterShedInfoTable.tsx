'use client'
import { shedInfoInitial, shedInfoTypesOptions } from '@/data/data'
import { IFilterShedInfo } from '@/data/interfaces'
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function FilterShedInfoTable() {
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
              <Listbox
                value={selected}
                onChange={(val) =>
                  setFilterSelected({ ...filterSelected, [name]: val })
                }
              >
                <Listbox.Button className="relative cursor-default rounded-lg bg-white py-2 px-4 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block uppercase">
                    {selected.name === 'all' ? placeholder : selected.name}
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute top-10 z-10 mt-1 max-h-60 w-28 overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {options.map((item, idx) => (
                      <Listbox.Option
                        key={idx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 px-4 ${
                            active ? 'bg-primary-4 text-white' : 'text-gray-900'
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
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </Listbox>
            </div>
          )
        })}
      </div>
    </div>
  )
}
