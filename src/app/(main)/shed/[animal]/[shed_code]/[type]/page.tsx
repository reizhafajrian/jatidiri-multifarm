import { use } from "react"
import { cookies } from "next/headers"
import axios from "axios"

import ShedAnimalTable from "./shed-animal-table"

export const metadata = {
  title: "Jatidiri Multifarm | Shed Animals",
}

export default function AnimalShedPage(props: { params: any }) {
  const { animal, shed_code, type } = props.params

  const { shedCodeOptions } = use(
    getData(animal, type, cookies().get("token")?.value!)
  )

  return <ShedAnimalTable id={shed_code} shedCodeOptions={shedCodeOptions} />
}

const getData = async (animal: string, type: string, token: string) => {
  const baseUrl = process.env.API_BASE_URL
  const Authorization = `bearer ${token}`

  // const isCempek = type === "cempek"
  // const gender = type === "male" ? "true" : "false"

  // const url = isCempek
  //   ? `/shed/get/${animal}/cempek`
  //   : `/shed/get/${animal}?gender=${gender}`

  const res = await axios.get(`${baseUrl}/shed/get?animal_type=${animal}`, {
    headers: { Authorization },
  })

  const shedCodeOptions = res?.data?.data.map((item: any) => ({
    name: item.code,
    value: item._id,
  }))

  return {
    shedCodeOptions,
  }
}
