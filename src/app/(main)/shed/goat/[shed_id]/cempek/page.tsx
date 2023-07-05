import { getShedCodeOptions } from "@/lib/helpers"
import ShedAnimalTable from "@/components/shed/shed-animal-table"

export const metadata = {
  title: "Cempek Goat Shed",
}
interface IProps {
  params: {
    shed_id: string
  }
}

export default async function Page({ params: { shed_id } }: IProps) {
  const { shedCodeOptions } = await getShedCodeOptions("goat")

  return (
    <ShedAnimalTable
      animal="goat"
      shed_id={shed_id}
      type="cempek"
      shedCodeOptions={shedCodeOptions}
    />
  )
}
