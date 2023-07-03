"use client"

import { usePathname } from "next/navigation"

import useStore from "@/store/useStore"
import BackLink from "@/components/ui/back-link"
import Navbar from "@/components/layout/navbar"

export default function FormHeader() {
  const path = usePathname()
  const pathArray = path.split("/")
  const formtype = pathArray[pathArray.length - 1]
  const animal = useStore((s) => s.animal)

  if (path.includes("add")) {
    return (
      <>
        <BackLink href={path.replace(formtype, "")} />
        <Navbar
          menu={getHeaderMenu(animal)}
          className="mb-5 flex items-center justify-between gap-5"
        />
      </>
    )
  }

  return <BackLink href={path.replace(formtype, "")} />
}

const getHeaderMenu = (animal: string) => {
  const links = [
    { name: "Jantan", link: `/${animal}/male/add` },
    { name: "Betina", link: `/${animal}/female/add` },
  ]

  if (animal !== "cow") {
    links.push({ name: "Cempek", link: `/${animal}/cempek/add` })
  }

  return links
}
