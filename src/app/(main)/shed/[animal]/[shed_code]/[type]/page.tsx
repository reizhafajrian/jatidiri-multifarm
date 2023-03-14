import ShedAnimalTable from '@/components/table/ShedAnimalTable'
import { IPageProps } from '@/data/interfaces'
import { Get } from '@/lib/api'
import { use } from 'react'

export default function AnimalShedPage(props: IPageProps) {
  const { animal, shed_code, type } = props.params
  const res = use(getData(animal, shed_code, type))
  const data = res.data.filter((d: any) => d._id !== null)

  return <ShedAnimalTable data={data} />
}

const getData = async (animal: string, shed_code: string, type: string) => {
  let params = []

  if (type !== 'cempek') {
    params.push(`gender=${type === 'male' ? 'true' : 'false'}`)
  }
  params.push(`cempek=${type == 'cempek' ? 'true' : 'false'}`)

  return await Get(`/${animal}/get?${params.join('&')}`)
}
