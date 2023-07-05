"use client"

import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/Icons"
import Navbar from "@/components/layout/navbar"

export default function ShedHeader() {
  const router = useRouter()
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
        <Button variant="outline" className="px-3">
          <Icons.download className="h-4 w-4" />
        </Button>
      </div>
    </Navbar>
  )
}
