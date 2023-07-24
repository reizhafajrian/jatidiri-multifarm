"use client"

import { useEffect, useState } from "react"

import useStore from "@/store/useStore"
import Navbar from "@/components/layout/navbar"

import ReportButton from "../ui/report-button"

interface IProps {
  animal: string
}

export default function HppHeader({ animal }: IProps) {
  const hppStatus = useStore((s) => s.hppStatus)
  const [csvUrl, setCsvUrl] = useState("")
  const [pdfUrl, setPdfUrl] = useState("")

  useEffect(() => {
    const queriesArray: Array<string> = [`animal_type=${animal}`]
    const url = "/api/hpp/download"
    hppStatus !== "all" && queriesArray.push("status=" + hppStatus)
    if (queriesArray.length > 0) {
      setCsvUrl(url + `?${queriesArray?.join("&")}`)
      setPdfUrl(`${url + "/pdf"}` + `?${queriesArray?.join("&")}`)
    } else {
      setCsvUrl(url)
      setPdfUrl(url + "/pdf")
    }
  }, [animal, hppStatus])

  const menu = [
    { name: "Kambing", link: `/hpp/goat` },
    { name: "Domba", link: `/hpp/sheep` },
    { name: "Sapi", link: `/hpp/cow` },
  ]

  return (
    <Navbar menu={menu} className="mb-6 flex items-center justify-between">
      <div className="flex gap-2">
        <ReportButton csvUrl={csvUrl} pdfUrl={pdfUrl} />
      </div>
    </Navbar>
  )
}
