import ShedAnimalHeader from '@/components/layout/ShedAnimalHeader'
import ShedAnimalTable from '@/components/table/ShedAnimalTable'
import { cowsData, goatsData, sheepsData } from '@/data/dummy'
import { IPageProps } from '@/data/interfaces'

export default function AnimalShedPage(props: IPageProps) {
  const { animal_type, id, gender } = props.params

  const data =
    animal_type === 'goat'
      ? goatsData
      : animal_type === 'sheep'
      ? sheepsData
      : cowsData

  return (
    <main>
      <ShedAnimalHeader animal_type={animal_type} id={id} />
      <ShedAnimalTable data={data} />
    </main>
  )
}
