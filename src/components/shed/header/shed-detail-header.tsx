"use client"

import { usePathname } from "next/navigation"

import useStore from "@/store/useStore"
import BackLink from "@/components/ui/back-link"
import Navbar from "@/components/layout/navbar"

import FormShedAnimal from "../form/form-shed-animal"

export default function ShedDetailHeader() {
  const path = usePathname()
  const { animal, animalTitle, shed_code } = useStore()
  const pathArray = path.split("/")
  const shed_id = pathArray[3]
  const baseUrl = `/shed/${animal}/${shed_id}`

  const menu = [
    { name: "Informasi", link: baseUrl },
    { name: "Pejantan", link: baseUrl + "/male" },
    { name: "Betina", link: baseUrl + "/female" },
  ]

  if (animal !== "cow") {
    menu.push({ name: "Cempek", link: baseUrl + "/cempek" })
  }

  return (
    <>
      <BackLink href={`/shed/${animal}`} />
      <div className="mb-8">
        <h1 className="my-6 text-2xl font-semibold text-neutral-5">
          Detail Kandang <span className="text-primary-5">#{shed_code}</span>
        </h1>
        <p className="font-light">
          Informasi Detail terkait Kandang Nomor
          <span className="font-semibold"> {shed_code}</span> yang berisi hewan
          <span className="font-semibold"> {animalTitle}</span>.
        </p>
      </div>
      <Navbar menu={menu} className="mb-5 flex items-center justify-between">
        {pathArray.length > 4 && <FormShedAnimal />}
      </Navbar>
    </>
  )
}
