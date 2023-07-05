import { getShedCodeOptions } from "@/lib/helpers"
import ShedAnimalTable from "@/components/shed/shed-animal-table"

export const metadata = {
  title: "Male Sheep Shed",
}
interface IProps {
  params: {
    shed_id: string
  }
}

export default async function Page({ params: { shed_id } }: IProps) {
  const { shedCodeOptions } = await getShedCodeOptions("cow")

  return (
    <ShedAnimalTable
      animal="cow"
      shed_id={shed_id}
      type="true"
      shedCodeOptions={shedCodeOptions}
    />
  )
}
