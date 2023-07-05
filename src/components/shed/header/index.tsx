"use client"

import { usePathname } from "next/navigation"

import ShedDetailHeader from "./shed-detail-header"
import ShedHeader from "./shed-header"

export default function Header() {
  const path = usePathname()
  const isShedListPage = path.split("/").length === 3

  if (isShedListPage) return <ShedHeader />
  return <ShedDetailHeader />
}
