import { cookies } from "next/headers"
import axios from "axios"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"

import AddAnimalForm from "./add-animal-form"

export const metadata = {
  title: "Add Animal",
}

export default async function AddAnimalPage({ params }: { params: any }) {
  const token = cookies().get("token")?.value
  const animal = params.animal
  const cowPage = animal === "cow"

  const options = await getData(animal, token!)

  return (
    <Tabs defaultValue="jantan">
      <TabsList>
        <TabsTrigger value="jantan">Jantan</TabsTrigger>
        <TabsTrigger value="betina">Betina</TabsTrigger>
        {!cowPage && <TabsTrigger value="cempek">Cempek</TabsTrigger>}
      </TabsList>
      <TabsContent value="jantan">
        <AddAnimalForm gender="true" options={options} />
      </TabsContent>
      <TabsContent value="betina">
        <AddAnimalForm gender="false" options={options} />
      </TabsContent>
      <TabsContent value="cempek">
        <AddAnimalForm cempekForm options={options} />
      </TabsContent>
    </Tabs>
  )
}

const getData = async (animal: string, token: string) => {
  const url = process.env.API_BASE_URL + `/${animal}/get`
  const options = {
    headers: {
      Authorization: `bearer ${token}`,
    },
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
