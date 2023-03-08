import AnimalTable from '@/components/table/AnimalTable'
import { IPageProps } from '@/data/interfaces'
import { Get } from '@/libs/api'
import { use } from 'react'

export default function AnimalPage({ params }: IPageProps) {
  const { animal, type } = params
  const res = use(getData(animal, type))
  const data = res.data.filter((d: any) => d._id !== null)

  return <AnimalTable data={{ animal, type, data }} />
}

const getData = async (animal: string, type: string) => {
  let params = []

  if (type !== 'cempek') {
    params.push(`gender=${type === 'male' ? 'true' : 'false'}`)
  }
  params.push(`cempek=${type == 'cempek' ? 'true' : 'false'}`)

  return await Get(`/${animal}/get?${params.join('&')}`)
}
