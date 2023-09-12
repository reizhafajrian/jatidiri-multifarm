import { cookies } from "next/headers"
import axios from "axios"

import AnimalDetail from "@/components/animal/animal-detail"
import FormCempek from "@/components/animal/form/form-cempek"

export default async function Page({ params }: { params: { _id: string } }) {
  const token = cookies().get("token")?.value
  const { data, options } = await getData({ _id: params._id, token: token! })

  return (
    <>
      <FormCempek options={options} data={data} />
      <AnimalDetail />
    </>
  )
}

const getData = async ({ _id, token }: { _id: string; token: string }) => {
  const url = process.env.API_BASE_URL + `/goat/get`
  const options = {
    withCredentials: true,
    headers: { Authorization: `bearer ${token}` },
  }

  const { data: detail } = await axios.get(`${url}/detail/${_id}`, options)

  const pejantan = await axios.get(url + "?gender=true&pejantan=true", options)
  const indukan = await axios.get(url + "?gender=false", options)

  const pejantanOpts = pejantan.data.data.map((item: any) => ({
    name: item.eartag_code,
    value: item._id,
  }))

  const indukanOpts = indukan.data.data.map((item: any) => ({
    name: item.eartag_code,
    value: item._id
  }))

  return {
    data: detail.data,
    options: { pejantanOpts, indukanOpts },
  }
}
