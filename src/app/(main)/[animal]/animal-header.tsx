"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

import useStore from "@/store/useStore"
import BackLink from "@/components/ui/BackLink"
import { Button } from "@/components/ui/Button"
import { Icons } from "@/components/ui/Icons"
import Navbar from "@/components/Navbar"

import AlertCluster from "./alert-cluster"

interface IProps {
  undefinedClusterTotal: number
}

export default function AnimalHeader({ undefinedClusterTotal }: IProps) {
  const router = useRouter()
  const path = usePathname()
  const isListData = !path.includes("add") && !path.includes("edit")

  const [endpoint, setEndpoint] = useState("")
  const { animal, type, originMale, originFemale, filterByDate } = useStore()
  const headerMenu = getHeaderMenu(animal.name)

  useEffect(() => {
    const queriesArray = []
    if (type !== "cempek") {
      type === "male" && queriesArray.push("gender=true")
      type === "female" && queriesArray.push("gender=false")
    } else {
      queriesArray.push("cempek=true")
    }

    originMale !== "all" && queriesArray.push("origin_male=" + originMale)
    originFemale !== "all" && queriesArray.push("origin_female=" + originFemale)
    queriesArray.push(filterByDate)

    const url = `/api/${animal.name}/download`
    const isQueries = queriesArray.length > 0
    isQueries && setEndpoint(url + `?${queriesArray?.join("&")}`)
  }, [type, originMale, originFemale, animal, filterByDate])

  return (
    <>
      {isListData ? (
        <>
          {undefinedClusterTotal > 0 && (
            <AlertCluster
              animal={animal.title}
              undefinedClusterTotal={undefinedClusterTotal}
            />
          )}
          <Navbar
            menu={headerMenu}
            className="mb-5 flex items-center justify-between gap-5"
          >
            <div className="flex items-center justify-end gap-2">
              <Button onClick={() => router.push(`/${animal.name}/add`)}>
                <Icons.pen className="h-4 w-4 md:hidden" />
                <span className="hidden capitalize md:block">
                  tambah data {animal.title}
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
      ) : (
        <BackLink href={`/${animal.name}/male`} />
      )}
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
