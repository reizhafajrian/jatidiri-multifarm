'use client'
import { useStore } from '@/store/store'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import Button from './Button'
import { ArrowDownTray } from './Icons'

interface IProps {
  categories: any
  addButton?: {
    title: string
    link: string
  }
  downloadHandler?: () => void
}

export default function PageTabs(props: IProps) {
  const { categories, addButton, downloadHandler } = props
  const { reset } = useStore()

  return (
    <Tab.Group>
      <Tab.List className="flex items-center justify-between gap-3">
        <div>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              onClick={() => reset()}
              className={({ selected }) =>
                `border-b py-3 px-4 text-xs focus:outline-none ${
                  selected
                    ? 'border-primary-3 font-medium'
                    : 'font-light hover:border-primary-3'
                }`
              }
            >
              {category}
            </Tab>
          ))}
        </div>
        {addButton && (
          <div className="flex items-center gap-2">
            <Link
              href={addButton.link ?? '/'}
              className="rounded-lg bg-primary-4 py-2 px-4 hover:bg-primary-5"
              replace
            >
              <span className="text-sm font-semibold capitalize text-white">
                {addButton.title}
              </span>
            </Link>
            <Button intent="secondary" className="w-fit px-2">
              <ArrowDownTray />
            </Button>
          </div>
        )}
      </Tab.List>

      <Tab.Panels>
        {Object.values(categories).map((content: any, idx) => (
          <Tab.Panel as="div" key={idx} className="mt-5 focus:outline-none">
            {content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
