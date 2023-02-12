import AnimalTable from '@/components/Table/AnimalTable'
import { fetcher } from '@/libs/api'
import { cookies } from 'next/headers'

const getData = async (animal_type: string) => {
  const nextCookies = cookies()
  // const data = await fetcher({
  //   url: `${process.env.API_BASE_URL}/${animal_type}/get`,
  //   token: nextCookies.get('token')?.value,
  // })

  const data = await fetcher({
    url: `${process.env.API_BASE_URL}/goat/get`,
    token: nextCookies.get('token')?.value,
  })

  return data
}

export default async function MaleAnimalPage({ params: { animal_type } }: any) {
  const res = await getData(animal_type)

  return <AnimalTable data={res.data} />
}
