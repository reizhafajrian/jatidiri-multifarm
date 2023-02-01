import CaretIcon from '@/assets/icons/caret.svg'
import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, useState } from 'react'

const reportFilter = [
  { name: 'Today' },
  { name: 'This Week' },
  { name: 'This Month' },
  { name: 'This Year' },
]

export default function FilterReport() {
  const [selected, setSelected] = useState(reportFilter[0])

  return (
    <div className="flex items-center">
      <p className="text-sm text-[#7B7B7B]">Show:</p>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="flex items-center gap-3 px-2 text-sm focus:outline-none">
            <span>{selected.name}</span>
            <CaretIcon className="h-6 w-6 fill-[#7B7B7B]" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-primary-4 py-1 text-sm text-white shadow focus:outline-none">
              {reportFilter.map((item, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active }) =>
                    clsx(
                      'relative cursor-default select-none py-1 px-2',
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
