import AnimalTable from '@/components/Table/AnimalTable'
import { cowsData, goatsData, sheepsData } from '@/data/dummy'

export default function MaleAnimalPage({ params: { animal_type } }: any) {
  const data =
    animal_type === 'goat'
      ? goatsData
      : animal_type === 'sheep'
      ? sheepsData
      : cowsData

  return <AnimalTable data={data} />
}
