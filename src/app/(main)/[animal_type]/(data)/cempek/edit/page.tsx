import EditCempekForm from '@/components/form/EditCempekForm'
import BackLink from '@/components/shared/BackLink'
import { IPageProps } from '@/data/interfaces'

export default function EditCempekPage(props: IPageProps) {
  const { animal_type, gender } = props.params

  return (
    <main>
      <BackLink />
      <EditCempekForm animal_type={animal_type} gender={gender} />
    </main>
  )
}
