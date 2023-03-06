import CempekTable from '@/components/Animal/CempekTable'
import Header from '@/components/Animal/Header'
import { IPageProps } from '@/data/interfaces'
import { fetcher } from '@/libs/api'
import { cookies } from 'next/headers'

export default async function CempekPage(props: IPageProps) {
  const data = await getData(props.params.animal_type)

  return (
    <main>
      <Header animal_type={props.params.animal_type} />
      <CempekTable data={data} params={props.params} />
    </main>
  )
}

const getData = async (animal_type: string) => {
  const nextCookies = cookies()

  const response = await fetcher({
    url: `${process.env.API_BASE_URL}/${animal_type && 'goat'}/get`,
    token: nextCookies.get('token')?.value,
  })

  return response.data
}
