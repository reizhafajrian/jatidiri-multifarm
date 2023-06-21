import { cookies } from "next/headers"

import StoreInitializer from "@/components/StoreInitializer"

import ShedDetailHeader from "./shed-detail-header"
import ShedInfo from "./shed-info"

export const metadata = {
  title: "Detail Shed",
}

export default async function ShedDetailPage(props: { params: any }) {
  const { shed_code, animal } = await props.params
  const token = cookies().get("token")?.value!
  const { shedDetail: data, options } = await getData(shed_code, token)

  return (
    <>
      <StoreInitializer
        data={{ animal, shed_code: data.code, shed_id: shed_code }}
      />
      <ShedDetailHeader />
      <ShedInfo options={options} />
    </>
  )
}

const getData = async (shed_code: string, token: string) => {
  const baseUrl = process.env.API_BASE_URL
  const Authorization = `bearer ${token}`

  const detailUrl = baseUrl + "/shed/get/detail/" + shed_code
  const resDetail = await fetch(detailUrl, {
    next: { revalidate: 0 },
    headers: { Authorization },
  }).then((res) => res.json())

  const feed = await fetch(baseUrl + "/feed/get", {
    next: { revalidate: 0 },
    headers: { Authorization },
  }).then((res) => res.json())

  const vitamin = await fetch(baseUrl + "/vitamin/get", {
    next: { revalidate: 0 },
    headers: { Authorization },
  }).then((res) => res.json())

  const vaccine = await fetch(baseUrl + "/vaccine/get", {
    next: { revalidate: 0 },
    headers: { Authorization },
  }).then((res) => res.json())

  const anthelmintic = await fetch(baseUrl + "/anthelmintic/get", {
    next: { revalidate: 0 },
    headers: { Authorization },
  }).then((res) => res.json())

  return {
    shedDetail: resDetail.data,
    options: {
      feed: feed.data,
      vitamin: vitamin.data,
      vaccine: vaccine.data,
      anthelmintic: anthelmintic.data,
    },
  }
}
