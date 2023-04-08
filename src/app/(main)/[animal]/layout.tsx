import AnimalHeader from '@/components/layout/AnimalHeader'
import { StoreInitializer } from '@/components/shared'
import axios from 'axios'
import { cookies } from 'next/headers'
import { ReactNode } from 'react'

export default async function AnimalLayout(props: {
  children: ReactNode
  params: any
}) {
  const { animal } = props.params
  const token = cookies().get('token')?.value
  const { undefinedClusterTotal: total } = await getData(animal, token!)

  return (
    <>
      <StoreInitializer data={{ animal, searchType: animal }} />
      <AnimalHeader undefinedClusterTotal={total} />
      {props.children}
    </>
  )
}

const getData = async (animal: string, token: string) => {
  const baseUrl = process.env.API_BASE_URL
  const headers = {
    Authorization: `Bearer ${token}`,
  }

  const adult = await axios
    .get(baseUrl + `/${animal}/get`, { headers })
    .then((res) => res.data.data)

  let cempek = []
  if (animal !== 'cow') {
    cempek = await axios
      .get(baseUrl + `/${animal}/cempek/get`, { headers })
      .then((res) => res.data.data)
  }

  const data = [...adult, ...cempek]
  const undefinedClusterTotal = data.filter((item) => !item.shed_code).length

  return { undefinedClusterTotal }
}
