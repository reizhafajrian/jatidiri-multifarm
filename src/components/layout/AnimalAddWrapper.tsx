'use client'
import { useAnimalStore } from '@/store/animal'
import { Tab } from '@headlessui/react'
import AnimalForm from '../form/AnimalForm'

export default function AnimalAddWrapper() {
  const { animal_type } = useAnimalStore.getState()

  const categories =
    animal_type === 'cow'
      ? {
          Pejantan: <AnimalForm formType="add" />,
          Betina: <AnimalForm formType="add" gender="female" />,
        }
      : {
          Pejantan: <AnimalForm formType="add" gender="male" />,
          Betina: <AnimalForm formType="add" gender="female" />,
          Cempek: <AnimalForm formType="add" cempekForm />,
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
