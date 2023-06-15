import { notFound } from "next/navigation"

import StoreInitializer from "@/components/StoreInitializer"

import AnimalFilter from "./animal-filter"
import AnimalTable from "./animal-table"

export const metadata = {
  title: "Jatidiri Multifarm",
}

export default function AnimalPage({ params }: { params: any }) {
  const { animal, type } = params
  const typeNotFound = !["male", "female", "cempek"].includes(type)

  if (typeNotFound) return notFound()

  return (
    <>
      <StoreInitializer data={{ type }} />
      <AnimalFilter />
      <AnimalTable animal={animal} />
    </>
  )
}
