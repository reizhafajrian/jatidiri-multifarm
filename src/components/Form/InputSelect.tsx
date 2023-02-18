'use client'
import CaretIcon from '@/assets/icons/caret.svg'
import { Combobox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, useState } from 'react'

interface IProps {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
  errorMsg?: string
  name?: string
}

export default function InputSelect(props: IProps) {
  const { label, options, value, onChange, name, errorMsg } = props
  const [query, setQuery] = useState('')

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) => {
          return option.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <>
      <Combobox value={value} onChange={onChange}>
        <div className="relative">
          <div className="relative">
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              className={clsx(
                'peer block w-full appearance-none rounded-lg border bg-white px-2.5 pb-2.5 pt-4 text-sm focus:border-black focus:outline-none focus:ring-0',
                errorMsg ? 'border-[#CE0000]' : 'border-neutral-4'
              )}
              placeholder=" "
            />
            <label
              htmlFor={label}
              className={clsx(
                'absolute top-2 left-1 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black',
                errorMsg ? 'text-[#CE0000]' : 'text-neutral-4'
              )}
            >
              {label}
            </label>
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <CaretIcon
                className={clsx(
                  'h-7 w-7',
                  errorMsg ? 'fill-[#CE0000]' : 'fill-neutral-4'
                )}
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute z-50 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {filteredOptions?.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  {/* Nothing found. */}
                  Pilihan tidak ditemukan.
                </div>
              ) : (
                filteredOptions?.map((option) => (
                  <Combobox.Option
                    key={option}
                    value={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-primary-4 text-white' : 'text-black'
                      }`
                    }
                  >
                    {({ selected }) => (
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-light'
                        }`}
                      >
                        {option}
                      </span>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      {errorMsg && (
        <span className="text-[10px] text-[#CE0000]">{errorMsg}</span>
      )}
    </>
  )
}
