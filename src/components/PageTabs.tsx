import DownloadIcon from '@/assets/icons/download-outline.svg'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

interface IProps {
  categories: any
  addButton: {
    title: string
    onClick?: () => void
  }
  downloadOnClick?: () => void
}

export default function PageTabs(props: IProps) {
  const { categories, addButton, downloadOnClick } = props

  return (
    <div>
      <Tab.Group>
        <Tab.List className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <div>
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  clsx(
                    'border-b py-3 px-4 font-light focus:outline-none',
                    selected
                      ? 'border-primary-3 font-medium'
                      : 'border-transparent hover:border-primary-3'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-lg bg-primary-4 py-2 px-4 hover:bg-primary-5">
              <span className="text-sm font-semibold capitalize text-white">
                {addButton.title}
              </span>
            </button>
            <button className="group grid h-8 w-8 place-items-center rounded-lg border bg-white hover:bg-primary-5">
              <DownloadIcon className="fill-black group-hover:fill-white" />
            </button>
          </div>
        </Tab.List>

        <Tab.Panels className="mt-5">
          {Object.values(categories).map((content: any, idx) => (
            <Tab.Panel key={idx} className="focus:outline-none">
              {content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
