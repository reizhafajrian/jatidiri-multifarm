"use client"

import { DownloadCloud } from "lucide-react"

import { Button } from "@/components/ui/Button"
import Navbar from "@/components/Navbar"

export default function HppHeader(props: { animal_type: string }) {
  const downloadHpp = () => {
    window.open(`/api/hpp/download?animal_type=${props.animal_type}`, "_blank")
  }

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
        onClick={downloadHpp}
        className="gap-3 rounded-xl uppercase"
      >
        <DownloadCloud className="h-4 w-4" /> download
      </Button>
    </Navbar>
  )
}
