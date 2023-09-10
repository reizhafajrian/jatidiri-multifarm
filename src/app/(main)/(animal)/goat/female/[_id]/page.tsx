import { cookies } from "next/headers"
import axios from "axios"

import AnimalDetail from "@/components/animal/animal-detail"
import FormAdult from "@/components/animal/form/form-adult"

export default async function Page({ params }: { params: { _id: string } }) {
  const token = cookies().get("token")?.value
  const { data } = await getData({ _id: params._id, token: token! })

  return (
    <>
      <FormAdult data={data} />
      <AnimalDetail />
    </>
  )
}

const getData = async ({ _id, token }: { _id: string; token: string }) => {
  const { data } = await axios.get(
    `${process.env.API_BASE_URL}/goat/get/detail/${_id}`,
    {
      withCredentials: true,
      headers: { Authorization: `bearer ${token}` },
    }
  )
  const item_per_page = 5
  const { data: dataShed } = await axios.get(
    `${process.env.API_BASE_URL}/goat/sheddata?_id=${_id}&page=1&item_per_page=${item_per_page}`,
    {
      withCredentials: true,
      headers: { Authorization: `bearer ${token}` },
    }
  )

  return {
    data: data.data,
    dataShed: dataShed.data,
  }
}
