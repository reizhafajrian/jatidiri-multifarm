import EditAnimalForm from '@/components/form/EditAnimalForm'
import { StoreInitializer } from '@/components/shared'
import BackLink from '@/components/shared/BackLink'
import { IPageProps } from '@/data/interfaces'

export default function EditAnimalPage(props: IPageProps) {
  const { animal_type, gender } = props.params
  const animal = { animal_type, gender }

  return (
    <main>
      <StoreInitializer data={{ animal }} />
      <BackLink />
      <EditAnimalForm />
    </main>
  )
}
