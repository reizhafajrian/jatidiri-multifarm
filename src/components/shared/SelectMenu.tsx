'use client'
import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, useState } from 'react'
import { ChevronDown } from './Icons'

export default function SelectMenu({ options, title }: any) {
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="flex items-center">
      <p className="text-sm text-neutral-4">{title}:</p>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="flex items-center gap-3 px-2 text-sm focus:outline-none">
            <span>{selected.name}</span>
            <ChevronDown className="fill-neutral-4" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-32 overflow-auto rounded bg-white p-2 text-sm text-neutral-4 shadow focus:outline-none">
              {options.map((item: any) => (
                <Listbox.Option
                  key={item.name}
                  className={({ active }) =>
                    clsx(
                      'relative cursor-pointer select-none py-1 px-2',
                      active && 'text-primary-4'
                    )
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <span
                      className={selected ? 'font-semibold' : 'font-normal'}
                    >
                      {item.name}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
