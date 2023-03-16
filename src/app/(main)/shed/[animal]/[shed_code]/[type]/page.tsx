import ShedAnimalTable from '@/components/table/ShedAnimalTable'
import { IPageProps } from '@/lib/types'

export default function AnimalShedPage(props: IPageProps) {
  const { animal, shed_code, type } = props.params

  return <ShedAnimalTable />
}
