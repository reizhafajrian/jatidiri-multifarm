import AnimalHeader from '@/components/layout/AnimalHeader'
import { StoreInitializer } from '@/components/shared'
import AnimalTable from '@/components/table/AnimalTable'
import { IPageProps } from '@/data/interfaces'
import { fetcher } from '@/utils/fetcher'
import { cookies } from 'next/headers'

export default async function MaleAnimalPage(props: IPageProps) {
  const nextCookies = cookies()
  const { animal_type, gender } = props.params

  const token = nextCookies.get('token')?.value
  const url = `${process.env.API_BASE_URL}/${animal_type && 'goat'}/get`
  const { data: animalList } = await fetcher({ url, token })
  const animal = { animal_type, animalList, gender }

  return (
    <main>
      <StoreInitializer data={{ animal }} />
      <AnimalHeader />
      <AnimalTable />
    </main>
  )
}
