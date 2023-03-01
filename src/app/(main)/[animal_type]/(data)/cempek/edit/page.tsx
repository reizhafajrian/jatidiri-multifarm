import EditCempekForm from '@/components/form/EditCempekForm'
import { StoreInitializer } from '@/components/shared'
import BackLink from '@/components/shared/BackLink'
import { IPageProps } from '@/data/interfaces'

export default function EditCempekPage(props: IPageProps) {
  const { animal_type } = props.params

  return (
    <main>
      <StoreInitializer data={{ animal: { animal_type } }} />
      <BackLink />
      <EditCempekForm />
    </main>
  )
}
