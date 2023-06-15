"use client"

import { FC } from "react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import clsx from "clsx"

import { thisYearValue } from "@/hooks/useFilterDate"
import useStore from "@/store/useStore"

interface IProps {
  item: { name: string; link: string; type?: string }
}

const NavbarLink: FC<IProps> = (props) => {
  const type_query = useSearchParams().get("type")
  const { name, link, type } = props.item
  const pathname = usePathname()

  const path = type_query ? `${pathname}${"?type=" + type_query}` : pathname
  const href = type ? `${link}${"?type=" + type}` : link
  const isActive = path === href

  return (
    <Link
      replace
      href={href}
      onClick={() =>
        useStore.setState({
          searchKeyword: "",
          originFemale: "all",
          originMale: "all",
          hppStatus: "all",
          filterByDate: thisYearValue,
        })
      }
      className={clsx(
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

export default NavbarLink
