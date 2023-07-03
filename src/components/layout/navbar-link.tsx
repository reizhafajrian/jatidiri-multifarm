"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

import { cn } from "@/lib/utils"
import { thisYearValue } from "@/hooks/useFilterDate"
import useStore from "@/store/useStore"

interface IProps {
  item: { name: string; link: string; type?: string }
}

export default function NavbarLink({ item: { name, link, type } }: IProps) {
  const type_query = useSearchParams().get("type")
  const pathname = usePathname()
  const path = type_query ? `${pathname}${"?type=" + type_query}` : pathname
  const href = type ? `${link}${"?type=" + type}` : link
  const isActive = path === href

  function resetFilter() {
    useStore.setState({
      searchKeyword: "",
      originFemale: "all",
      originMale: "all",
      hppStatus: "all",
      filterByDate: thisYearValue,
    })
  }

  return (
    <Link
      replace
      href={href}
      onClick={resetFilter}
      className={cn(
        "border-b px-4 py-3 text-xs focus:outline-none",
        isActive
          ? "border-primary-3 font-medium"
          : "font-light hover:border-primary-3"
      )}
    >
      {name}
    </Link>
  )
}
