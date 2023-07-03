import { cookies } from "next/headers"
import axios from "axios"

import FormCempek from "@/components/animal/form/form-cempek"

export default async function Page() {
  const token = cookies().get("token")?.value
  const options = await getData("goat", token!)

  return <FormCempek options={options} />
}

const getData = async (animal: string, token: string) => {
  const url = process.env.API_BASE_URL + `/${animal}/get`
  const options = {
    withCredentials: true,
    headers: { Authorization: `bearer ${token}` },
  }

  const pejantan = await axios.get(url + "?gender=true&pejantan=true", options)
  const indukan = await axios.get(url + "?gender=false", options)

  const pejantanOpts = pejantan.data.data.map((item: any) => ({
    name: item.eartag_code,
    value: item._id,
  }))

  const indukanOpts = indukan.data.data.map((item: any) => ({
    name: item.eartag_code,
    value: item._id,
  }))

  return {
    pejantanOpts,
    indukanOpts,
  }
}
