import AnimalTable from '@/components/Animal/AnimalTable'
import { IPageProps } from '@/data/interfaces'
import { fetcher } from '@/libs/api'
import { cookies } from 'next/headers'

export default async function FemaleAnimalPage(props: IPageProps) {
  const data = await getData(props.params.animal_type)

  return <AnimalTable data={data} />
}

const getData = async (animal_type: string) => {
  const nextCookies = cookies()

  const response = await fetcher({
    url: `${process.env.API_BASE_URL}/${animal_type && 'goat'}/get`,
    token: nextCookies.get('token')?.value,
  })

  return response.data
}
