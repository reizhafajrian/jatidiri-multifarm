import ShedAnimalTable from '@/components/Table/ShedAnimalTable'
import { cowsData, goatsData, sheepsData } from '@/data/dummy'

export default function ShedDetailPage({
  params: { animal_type, id, gender },
}: any) {
  const data =
    animal_type === 'goat'
      ? goatsData
      : animal_type === 'sheep'
      ? sheepsData
      : cowsData

  return <ShedAnimalTable data={data} />
}
