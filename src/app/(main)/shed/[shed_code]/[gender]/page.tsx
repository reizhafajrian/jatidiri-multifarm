import { StoreInitializer } from '@/components/shared'
import ShedAnimalTable from '@/components/table/ShedAnimalTable'
import { IPageProps } from '@/data/interfaces'

export default async function AnimalShedPage(props: IPageProps) {
  return (
    <>
      <StoreInitializer data={{ animal: { gender: props.params.gender } }} />
      <ShedAnimalTable />
    </>
  )
}
