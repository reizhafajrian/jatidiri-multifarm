'use client'
import AnimalForm from '@/components/form/AnimalForm'
import { IPageProps } from '@/data/interfaces'
import { Tab } from '@headlessui/react'

export default function AddAnimalPage(props: IPageProps) {
  const animal = props.params.animal

  const categories = {
    Pejantan: <AnimalForm formType="add" gender="male" animal={animal} />,
    Betina: <AnimalForm formType="add" gender="female" animal={animal} />,
    ...(animal !== 'cow' && {
      Cempek: <AnimalForm formType="add" cempekForm animal={animal} />,
    }),
  }

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
