import { notFound } from "next/navigation"

import StoreInitializer from "@/components/StoreInitializer"

import AnimalFilter from "./animal-filter"
import AnimalTable from "./animal-table"

export const metadata = {
  title: "Animal",
}

export default function AnimalPage({ params }: { params: any }) {
  const { animal, type } = params
  const typeNotFound = type !== "male" && type !== "female" && type !== "cempek"

  if (typeNotFound) return notFound()

  return (
    <>
      <StoreInitializer data={{ type }} />
      <AnimalFilter />
      <AnimalTable animal={animal} />
    </>
  )
}
