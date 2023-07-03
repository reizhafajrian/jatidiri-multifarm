import { cookies } from "next/headers"
import axios from "axios"

import FormAdult from "@/components/animal/form/form-adult"

export default async function Page({ params }: { params: { _id: string } }) {
  const token = cookies().get("token")?.value
  const data = await getData({ _id: params._id, token: token! })

  return <FormAdult data={data} />
}

const getData = async ({ _id, token }: { _id: string; token: string }) => {
  const { data } = await axios.get(
    `${process.env.API_BASE_URL}/sheep/get/detail/${_id}`,
    {
      withCredentials: true,
      headers: { Authorization: `bearer ${token}` },
    }
  )

  return data.data
}
