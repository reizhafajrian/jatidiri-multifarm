import CempekTable from '@/components/Table/CampekTable'
import { cowsData, goatsData, sheepsData } from '@/data/dummy'

export default function CempekPage({ params: { animal_type } }: any) {
  const data =
    animal_type === 'goat'
      ? goatsData
      : animal_type === 'sheep'
      ? sheepsData
      : cowsData

  return <CempekTable data={data} />
}
