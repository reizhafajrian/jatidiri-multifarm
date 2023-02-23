import AnimalHeader from '@/components/layout/AnimalHeader'
import AnimalTable from '@/components/table/AnimalTable'
import { IPageProps } from '@/data/interfaces'
import { fetcher } from '@/utils/fetcher'
import { cookies } from 'next/headers'

export default async function MaleAnimalPage(props: IPageProps) {
  const { animal_type, gender } = props.params
  const data = await getData({ animal_type })

  return (
    <main>
      <AnimalHeader animal_type={animal_type} />
      <AnimalTable data={data} params={{ animal_type, gender }} />
    </main>
  )
}

const getData = async ({ animal_type }: any) => {
  const nextCookies = cookies()

  const response = await fetcher({
    url: `${process.env.API_BASE_URL}/${animal_type && 'goat'}/get`,
    token: nextCookies.get('token')?.value,
  })

  return response.data
}
