import CaretIcon from '@/assets/icons/caret.svg'
import { Listbox as List, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'

interface IProps {
  value: any
  options: any
  onChange: any
  className?: string
  optionsClassname?: string
}

export default function Listbox(props: IProps) {
  const { value, options, onChange, className, optionsClassname } = props

  return (
    <div className="relative">
      <List value={value} onChange={onChange}>
        <List.Button
          className={clsx(
            'relative flex w-36 cursor-default items-center justify-between rounded-md py-1 px-2 focus:outline-none',
            className ?? 'bg-white text-neutral-5'
          )}
        >
          {value.name}
          <CaretIcon className="w-7" />
        </List.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <List.Options
            className={clsx(
              'absolute z-10 mt-1 max-h-60 w-36 overflow-auto rounded-md py-1 shadow',
              optionsClassname ?? 'bg-white text-neutral-4'
            )}
          >
            {options.map((item: any, idx: any) => (
              <List.Option
                key={idx}
                className={({ active, selected }) =>
                  `relative cursor-default select-none py-2 px-4 ${
                    active && 'font-medium'
                  } ${selected && className}`
                }
                value={item}
              >
                {item.name}
              </List.Option>
            ))}
          </List.Options>
        </Transition>
      </List>
    </div>
  )
}
