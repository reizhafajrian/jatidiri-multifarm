"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { thisYearValue } from "@/hooks/useFilterDate"
import useStore from "@/store/useStore"

interface IProps {
  item: { name: string; link: string; icon: any }
  isExpanded?: boolean
}

export default function SidebarLink({
  item: { name, link, icon },
  isExpanded,
}: IProps) {
  const pathname = usePathname()
  const pathLink = link.split("/")[1]
  const isActive = pathname?.startsWith("/" + pathLink)

  function resetFilter() {
    useStore.setState({
      searchKeyword: "",
      originFemale: "all",
      originMale: "all",
      hppStatus: "all",
      vaccine: "all",
      filterByDate: thisYearValue,
    })
  }

  return (
    <Link
      replace
      href={link}
      className={cn(
        "flex items-center gap-3 rounded-lg py-3 transition duration-200 ease-in-out",
        isExpanded ? "pl-12" : "mx-2 justify-center pl-0",
        isActive
          ? "bg-white font-semibold text-primary-5"
          : "text-white hover:bg-white/25"
      )}
      onClick={resetFilter}
    >
      <span className={cn("h-5 w-5 fill-white", isActive && "fill-primary-5")}>
        {icon}
      </span>
      <motion.div
        initial={{ opacity: 1 }}
        animate={
          isExpanded
            ? { opacity: 1, display: "block" }
            : { opacity: 0, display: "none" }
        }
        transition={{ duration: 0.9 }}
      >
        {name}
      </motion.div>
    </Link>
  )
}
