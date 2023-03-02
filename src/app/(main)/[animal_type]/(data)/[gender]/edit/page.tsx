import EditAnimalForm from '@/components/form/EditAnimalForm'
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

export default function EditAnimalPage(props: IPageProps) {
  const { animal_type, gender } = props.params
  const animalFormContent = content[animal_type]
  const animal = { animal_type, gender, animalFormContent }
  useAnimalStore.setState({ animal_type })

  return (
    <main>
      <StoreInitializer data={{ animal }} />
      <BackLink />
      <EditAnimalForm />
    </main>
  )
}
