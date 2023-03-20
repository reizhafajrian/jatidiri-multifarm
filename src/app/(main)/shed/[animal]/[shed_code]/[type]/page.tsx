import ShedAnimalTable from '@/components/table/ShedAnimalTable'
import { cookies } from 'next/headers'
import { use } from 'react'

export const metadata = {
  title: 'Jatidiri Multifarm | Shed Animals',
}

export default function AnimalShedPage(props: { params: any }) {
  const { animal, shed_code, type } = props.params

  const { shedCodeOptions } = use(
    getData(animal, type, shed_code, cookies().get('token')?.value!)
  )

  return (
    <ShedAnimalTable
      id={shed_code}
      shedCodeOptions={shedCodeOptions}
      type={type}
    />
  )
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

  const res = await fetch(baseUrl + `/shed/get?animal_type=${animal}`, {
    headers: { Authorization },
  }).then((res) => res.json())

  const shedCodeOptions = res.data.map((item: any) => ({
    name: item.shed_code,
    value: item._id,
  }))

  return {
    shedCodeOptions,
  }
}
