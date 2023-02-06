'use client'
import CaretIcon from '@/assets/icons/caret.svg'
import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, useState } from 'react'

export default function SelectMenu({ options, title }: any) {
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="flex items-center">
      <p className="text-sm text-[#7B7B7B]">{title}:</p>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="flex items-center px-2 text-sm focus:outline-none">
            <span>{selected.name}</span>
            <CaretIcon className="ml-3 h-6 w-6 fill-[#7B7B7B]" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-32 overflow-auto rounded bg-white p-2 text-sm text-[#515356] shadow focus:outline-none">
              {options.map((item: any) => (
                <Listbox.Option
                  key={item.name}
                  className={({ active }) =>
                    clsx(
                      'relative cursor-pointer select-none py-1 px-2',
                      active && 'bg-white text-primary-4'
                    )
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <span
                      className={
                        selected ? 'font-medium text-primary-2' : 'font-normal'
                      }
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
