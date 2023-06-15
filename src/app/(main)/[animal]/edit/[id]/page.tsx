import { use } from "react"
import { cookies } from "next/headers"
import axios from "axios"

import EditAnimalForm from "./edit-animal-form"

export const metadata = {
  title: "Jatidiri Multifarm | Edit Animal",
}

export default function EditAnimalPage({ params }: { params: any }) {
  const { animal, id } = params
  const data = use(getData(animal, id, cookies().get("token")?.value!))

  return (
    <EditAnimalForm
      id={id}
      gender={data.detail.gender}
      cempekForm={data.detail.cempek}
      values={data.detail}
      options={{
        pejantanOpts: data.pejantanOpts,
        indukanOpts: data.indukanOpts,
      }}
    />
  )
}

const getData = async (animal: string, id: string, token: string) => {
  const url = process.env.API_BASE_URL + `/${animal}/get`
  const options = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }

  const {
    data: { data: detail },
  } = await axios.get(url + `/detail/${id}`, options)

  const pejantan = await axios.get(url + "?gender=true", options)
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
    detail,
    pejantanOpts,
    indukanOpts,
  }
}
