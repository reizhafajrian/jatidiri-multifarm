import TabelCempek from '@/components/Table/TabelCempek'
import { fetcher } from '@/libs/api'

const getData = async () => {
  const data = await fetcher({
    url: 'https://63d4e20320b08498cbc3a1e6.mockapi.io/kambing',
    method: 'get',
  })

  return data
}

export default async function KambingCempekPage() {
  const data = await getData()
  return <TabelCempek data={data} />
}
