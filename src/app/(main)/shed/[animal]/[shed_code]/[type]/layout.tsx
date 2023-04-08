import ShedDetailHeader from '@/components/layout/ShedDetailHeader'
import { StoreInitializer } from '@/components/shared'
import axios from 'axios'
import { cookies } from 'next/headers'
import { ReactNode } from 'react'

export default async function ShedAnimalLayout({
  children,
  params: { animal, shed_code: shed_id, type },
}: {
  children: ReactNode
  params: any
}) {
  const token = cookies().get('token')?.value!
  const params = { animal, shed_id, token, type }
  const { shed_code } = await getData(params)

  return (
    <>
      <StoreInitializer data={{ animal, }} />
      <ShedDetailHeader
      />
      {children}
    </>
  )
}

type Props = {
  shed_id: string
  token: string
}

const getData = async ({ shed_id, token }: Props) => {
  const baseUrl = process.env.API_BASE_URL
  const headers = { Authorization: `bearer ${token}` }

  const details = await axios.get(`${baseUrl}/shed/get/detail/${shed_id}`, {
    headers,
  })
  const shed_code = details.data.data.code

  return {
    shed_code,
  }
}
