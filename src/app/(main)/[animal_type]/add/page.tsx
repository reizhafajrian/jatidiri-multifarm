import AnimalAddWrapper from '@/components/layout/AnimalAddWrapper'
import { StoreInitializer } from '@/components/shared'
import BackLink from '@/components/shared/BackLink'
import { IPageProps } from '@/data/interfaces'
import { useAnimalStore } from '@/store/animal'

const content = {
  sheep: {
    typeOptions: ['doorper', 'garut'],
    femaleOriginOptions: ['garut', 'impor', 'swiss'],
    maleOriginOptions: ['garut', 'impor', 'swiss'],
    originOptions: ['garut', 'impor', 'australia'],
  },
  goat: {
    typeOptions: ['doorper', 'garut'],
    femaleOriginOptions: ['garut', 'impor', 'swiss'],
    maleOriginOptions: ['garut', 'impor', 'swiss'],
    originOptions: ['garut', 'impor', 'australia'],
  },
  cow: {
    typeOptions: ['doorper', 'garut'],
    femaleOriginOptions: ['garut', 'impor', 'swiss'],
    maleOriginOptions: ['garut', 'impor', 'swiss'],
    originOptions: ['garut', 'impor', 'australia'],
  },
}

export default async function AddAnimalPage(props: IPageProps) {
  const { animal_type } = props.params
  const animalFormContent = content[animal_type]
  useAnimalStore.setState({ animal_type })

  return (
    <main>
      <StoreInitializer data={{ animal: { animal_type, animalFormContent } }} />
      <BackLink />
      <AnimalAddWrapper />
    </main>
  )
}
