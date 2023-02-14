import { Listbox, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const statusOptions = [
  { name: 'Terjual' },
  { name: 'Tersedia' },
  { name: 'Mati' },
]

export default function ListboxAnimalStatus({ value }: { value: string }) {
  return (
    <Listbox value={value}>
      <div className="relative">
        <Listbox.Button className="relative w-28 cursor-default rounded-lg bg-white py-2 px-4 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate">{value}</span>
        </Listbox.Button>
      </div>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-28 overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {statusOptions.map((item: any, idx: any) => (
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
  )
}
