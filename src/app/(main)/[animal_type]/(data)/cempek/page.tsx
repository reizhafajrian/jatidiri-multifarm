import AnimalHeader from '@/components/layout/AnimalHeader'
import CempekTable from '@/components/table/CempekTable'
import { IPageProps } from '@/data/interfaces'
import { fetcher } from '@/utils/fetcher'
import { cookies } from 'next/headers'

export default async function CempekPage(props: IPageProps) {
  const { animal_type, gender } = props.params
  const data = await getData({ animal_type })

  return (
    <main>
      <AnimalHeader animal_type={animal_type} />
      <CempekTable data={data} params={{ animal_type, gender }} />
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
