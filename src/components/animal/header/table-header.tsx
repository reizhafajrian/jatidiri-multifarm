"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/Icons"
import Navbar from "@/components/layout/navbar"

import AlertCluster from "./alert-cluster"

export default function TableHeader() {
  const router = useRouter()
  const path = usePathname()
  const [endpoint, setEndpoint] = useState("")
  const [animal, title, originMale, originFemale, filterByDate] = useStore(
    (s) => [
      s.animal,
      s.animalTitle,
      s.originMale,
      s.originFemale,
      s.filterByDate,
    ]
  )

  useEffect(() => {
    const queriesArray: Array<string> = []
    const url = `/api/${animal}/download`
    if (!path.includes("cempek")) {
      path.includes("male")
        ? queriesArray.push("gender=true")
        : queriesArray.push("gender=false")
    } else {
      queriesArray.push("cempek=true")
    }
    queriesArray.push(filterByDate)
    originMale && queriesArray.push("origin_male=" + originMale)
    originFemale && queriesArray.push("origin_female=" + originFemale)
    queriesArray.length > 0 && setEndpoint(url + `?${queriesArray?.join("&")}`)
  }, [originMale, originFemale, filterByDate, animal, path])

  return (
    <>
      <AlertCluster />
      <Navbar
        menu={getHeaderMenu(animal)}
        className="mb-5 flex items-center justify-between gap-5"
      >
        <div className="flex items-center justify-end gap-2">
          <Button onClick={() => router.push(`${path}/add`)}>
            <Icons.pen className="h-4 w-4 md:hidden" />
            <span className="hidden capitalize md:block">
              tambah data {title}
            </span>
          </Button>
          <Button
            variant="outline"
            className="space-x-1 px-3"
            onClick={() => window.open(endpoint, "_blank")}
          >
            <Icons.download className="h-4 w-4" /> <span> .PDF</span>
          </Button>
          <Button
            variant="outline"
            className="space-x-1 px-3"
            onClick={() => window.open(endpoint, "_blank")}
          >
            <Icons.download className="h-4 w-4" /> <span> .XLSX</span>
          </Button>
        </div>
      </Navbar>
    </>
  )
}

const getHeaderMenu = (animal: string) => {
  const links = [
    { name: "Jantan", link: `/${animal}/male` },
    { name: "Betina", link: `/${animal}/female` },
  ]

  if (animal !== "cow") {
    links.push({ name: "Cempek", link: `/${animal}/cempek` })
  }

  return links
}
