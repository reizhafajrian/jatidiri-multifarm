'use client'
import DownloadIcon from '@/assets/icons/download-outline.svg'
import { Tab } from '@headlessui/react'
import Link from 'next/link'

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

  return (
    <Tab.Group>
      <Tab.List className="flex items-center justify-between gap-3">
        <div>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
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
            <button className="group grid h-8 w-8 place-items-center rounded-lg border bg-white hover:bg-primary-5">
              <DownloadIcon className="fill-black group-hover:fill-white" />
            </button>
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
