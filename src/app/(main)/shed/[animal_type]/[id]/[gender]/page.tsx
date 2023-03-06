import AnimalShedTable from '@/components/Shed/AnimalShedTable'
import { cowsData, goatsData, sheepsData } from '@/data/dummy'

export default function AnimalShedPage({
  params: { animal_type, id, gender },
}: any) {
  const data =
    animal_type === 'goat'
      ? goatsData
      : animal_type === 'sheep'
      ? sheepsData
      : cowsData

  return <AnimalShedTable data={data} />
}
