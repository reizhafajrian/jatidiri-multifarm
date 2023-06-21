import { ReactNode } from "react"
import { cookies } from "next/headers"
import axios from "axios"

import StoreInitializer from "@/components/StoreInitializer"

import ShedDetailHeader from "../shed-detail-header"

interface IProps {
  children: ReactNode
  params: any
}

export default async function ShedAnimalLayout({ children, params }: IProps) {
  const { animal, shed_code: shed_id, type } = params
  const token = cookies().get("token")?.value!
  const { shed_code } = await getData({ shed_id, token })

  return (
    <>
      <StoreInitializer data={{ animal, type, shed_code, shed_id }} />
      <ShedDetailHeader />
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
  const url = `${baseUrl}/shed/get/detail/${shed_id}`
  const options = {
    headers: { Authorization: `bearer ${token}` },
  }

  const details = await axios.get(url, options)
  const shed_code = details.data.data.code

  return { shed_code }
}
