'use client'
import { Tab as TabPrimitive } from '@headlessui/react'
import { FC } from 'react'

interface TabProps {
  categories: any
}

const Tab: FC<TabProps> = ({ categories }) => {
  return (
    <TabPrimitive.Group>
      <TabPrimitive.List className="flex items-center justify-between gap-3">
        <div>
          {Object.keys(categories).map((category) => (
            <TabPrimitive
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
            </TabPrimitive>
          ))}
        </div>
      </TabPrimitive.List>

      <TabPrimitive.Panels>
        {Object.values(categories).map((content: any, idx) => (
          <TabPrimitive.Panel
            as="div"
            key={idx}
            className="mt-5 focus:outline-none"
          >
            {content}
          </TabPrimitive.Panel>
        ))}
      </TabPrimitive.Panels>
    </TabPrimitive.Group>
  )
}

export default Tab
