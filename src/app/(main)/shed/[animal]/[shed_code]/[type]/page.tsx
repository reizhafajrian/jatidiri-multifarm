import ShedAnimalTable from '@/components/table/ShedAnimalTable'
import { IPageProps } from '@/lib/types'
import { cookies } from 'next/headers'
import { use } from 'react'

export const metadata = {
  title: 'Jatidiri Multifarm | Shed Animals',
}

export default function AnimalShedPage(props: IPageProps) {
  const { animal, shed_code, type } = props.params

  const { shedCodeOptions } = use(
    getData(animal, type, shed_code, cookies().get('token')?.value!)
  )

  return <ShedAnimalTable id={shed_code} shedCodeOptions={shedCodeOptions} type={type} />
}

const getData = async (
  animal: string,
  type: string,
  shed_code: string,
  token: string
) => {
  const baseUrl = process.env.API_BASE_URL
  const Authorization = `bearer ${token}`

  // const isCempek = type === 'cempek'
  // const gender = type === 'male' ? 'true' : 'false'

  // const url = isCempek
  //   ? `/shed/get/${animal}/cempek`
  //   : `/shed/get/${animal}?gender=${gender}`

  const res = await fetch(baseUrl + '/shed/get', {
    headers: { Authorization },
  }).then((res) => res.json())

  // const shedCodeOptions = res.data.filter((item: any) => item._id !== shed_code)
  const shedCodeOptions = res.data.map((item: any) => ({
    name: item.code,
    value: item.code,
  }))

  return {
    shedCodeOptions,
  }
}
