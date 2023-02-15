import EditAnimalForm from '@/components/Animal/EditAnimalForm'
import BackLink from '@/components/BackLink'
import { IPageProps } from '@/data/interfaces'

export default function EditAnimalPage(props: IPageProps) {
  return (
    <main>
      <BackLink />
      <EditAnimalForm
        animal_type={props.params.animal_type}
        gender={props.params.gender}
      />
    </main>
  )
}
