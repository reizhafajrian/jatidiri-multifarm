"use client"

import { useEffect, useState } from "react"
import { DownloadCloud } from "lucide-react"

import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/navbar"

interface IProps {
  animal: string
}

export default function HppHeader({ animal }: IProps) {
  const hppStatus = useStore((s) => s.hppStatus)
  const [endpoint, setEndpoint] = useState("")

  useEffect(() => {
    const queriesArray: Array<string> = [`animal_type=${animal}`]
    const url = "/api/hpp/download"
    hppStatus !== "all" && queriesArray.push("status=" + hppStatus)
    queriesArray.length > 0 && setEndpoint(url + `?${queriesArray?.join("&")}`)
  }, [hppStatus])

  const menu = [
    { name: "Kambing", link: `/hpp/goat` },
    { name: "Domba", link: `/hpp/sheep` },
    { name: "Sapi", link: `/hpp/cow` },
  ]

  return (
    <Navbar menu={menu} className="mb-6 flex items-center justify-between">
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(endpoint, "_blank")}
        className="gap-3 rounded-xl uppercase"
      >
        <DownloadCloud className="h-4 w-4" /> download
      </Button>
    </Navbar>
  )
}
