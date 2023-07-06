"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/Icons"
import ReportButton from "@/components/ui/report-button"
import Navbar from "@/components/layout/navbar"

export default function ShedHeader() {
  const router = useRouter()
  const animal = useStore((s) => s.animal)
  const [csvUrl, setCsvUrl] = useState(`?animal_type=${animal}`)
  const [pdfUrl, setPdfUrl] = useState("/")

  useEffect(() => {
    const queriesArray: Array<string> = []
    const url = `/api/shed/download`
    queriesArray.push(`animal_type=${animal}`)
    queriesArray.length > 0 && setCsvUrl(url + `?${queriesArray?.join("&")}`)
  }, [animal])

  const menu = [
    { name: "Kambing", link: "/shed/goat" },
    { name: "Domba", link: "/shed/sheep" },
    { name: "Sapi", link: "/shed/cow" },
  ]

  return (
    <Navbar menu={menu} className="mb-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button
          className="capitalize"
          onClick={() => router.replace(`/shed/add`)}
        >
          <Icons.pen className="h-4 w-4 md:hidden" />
          <span className="hidden md:block">tambah kandang</span>
        </Button>
        <ReportButton csvUrl={csvUrl} pdfUrl={pdfUrl} />
      </div>
    </Navbar>
  )
}
