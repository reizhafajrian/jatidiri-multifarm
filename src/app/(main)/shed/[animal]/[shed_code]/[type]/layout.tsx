import ShedDetailHeader from '@/components/layout/ShedDetailHeader'
import { StoreInitializer } from '@/components/shared'
import { ILayoutProps } from '@/lib/types'
import { cookies } from 'next/headers'
import { use } from 'react'

export default function ShedAnimalLayout(props: ILayoutProps) {
  const { animal, shed_code, type } = props.params

  const { eartagOptions, shedDetail: data } = use(
    getData(animal, type, shed_code, cookies().get('token')?.value!)
  )

  return (
    <>
      <StoreInitializer data={{ animal }} />
      <ShedDetailHeader
        animal={animal}
        shed_code={data.shed_code}
        type={type}
        eartagOptions={eartagOptions}
      />
      {props.children}
    </>
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

  const isCempek = type === 'cempek'

  const gender = type === 'male' ? 'true' : 'false'

  const url = isCempek
    ? `/${animal}/cempek/get`
    : `/${animal}/get?gender=${gender}`

  const eartagOptions = await await fetch(baseUrl + url, {
    headers: { Authorization },
  }).then((res) => res.json())

  const resDetail = await fetch(baseUrl + '/shed/get/detail/' + shed_code, {
    headers: { Authorization },
  }).then((res) => res.json())

  return {
    eartagOptions: eartagOptions.data,
    shedDetail: resDetail.data,
  }
}
