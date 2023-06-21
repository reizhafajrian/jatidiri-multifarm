"use client"

import { PropsWithChildren } from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import useStore from "@/store/useStore"

export default function Container(props: PropsWithChildren) {
  const { isExpanded } = useStore()

  return (
    <motion.div
      className={cn(
        "flex min-h-screen max-w-7xl flex-col p-6",
        isExpanded ? "ml-16 md:ml-[17rem]" : "ml-16"
      )}
    >
      {props.children}
    </motion.div>
  )
}
