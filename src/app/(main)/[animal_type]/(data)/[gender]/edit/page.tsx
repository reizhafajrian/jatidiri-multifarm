import EditAnimalForm from '@/components/form/EditAnimalForm'
import BackLink from '@/components/shared/BackLink'
import { IPageProps } from '@/data/interfaces'

export default function EditAnimalPage(props: IPageProps) {
  const { animal_type, gender } = props.params

  return (
    <main>
      <BackLink />
      <EditAnimalForm animal_type={animal_type} gender={gender} />
    </main>
  )
}
