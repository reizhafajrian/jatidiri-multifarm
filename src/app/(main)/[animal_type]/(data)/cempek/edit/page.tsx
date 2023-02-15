import EditCempekForm from '@/components/Animal/EditCempekForm'
import BackLink from '@/components/BackLink'
import { IPageProps } from '@/data/interfaces'

export default function EditCempekPage(props: IPageProps) {
  return (
    <main>
      <BackLink />
      <EditCempekForm
        animal_type={props.params.animal_type}
        gender={props.params.gender}
      />
    </main>
  )
}
