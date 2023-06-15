"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { thisYearValue } from "@/hooks/useFilterDate"
import useStore from "@/store/useStore"

interface IProps {
  item: { name: string; link: string; icon: any }
  isExpanded?: boolean
}

export default function SidebarLink(props: IProps) {
  const { name, link, icon } = props.item
  const { isExpanded } = props
  const pathname = usePathname()
  const pathLink = link.split("/")[1]
  const isActive = pathname?.startsWith("/" + pathLink)

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
      onClick={() =>
        useStore.setState({
          searchKeyword: "",
          originFemale: "all",
          originMale: "all",
          hppStatus: "all",
          vaccine: "all",
          filterByDate: thisYearValue,
        })
      }
    >
      <span
        className={clsx("h-5 w-5", isActive ? "fill-primary-5" : "fill-white")}
      >
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
