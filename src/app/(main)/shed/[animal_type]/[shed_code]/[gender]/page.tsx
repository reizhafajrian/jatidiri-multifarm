import ShedAnimalHeader from '@/components/layout/ShedAnimalHeader'
import { StoreInitializer } from '@/components/shared'
import ShedAnimalTable from '@/components/table/ShedAnimalTable'
import { dummyData } from '@/data/dummy'
import { IPageProps } from '@/data/interfaces'
import { fetcher } from '@/utils/fetcher'
import { cookies } from 'next/headers'

export default async function AnimalShedPage(props: IPageProps) {
  const nextCookies = cookies()
  const { animal_type, shed_code, gender } = props.params

  const token = nextCookies.get('token')?.value
  const url = `${process.env.API_BASE_URL}/${animal_type && 'goat'}/get`
  const { data: animalList } = await fetcher({ url, token })

  const animal = { animalList }
  const shed = { shed: dummyData.shed }

  return (
    <main>
      <StoreInitializer data={{ shed, animal }} />
      <ShedAnimalHeader />
      <ShedAnimalTable />
    </main>
  )
}
