"use client"

import { ReactNode } from "react"
import useStore from "@/store/useStore"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface ContainerProps {
  children: ReactNode
}
const Container = (props: ContainerProps) => {
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

export default Container
