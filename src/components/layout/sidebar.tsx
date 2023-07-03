"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

import useStore from "@/store/useStore"

import { Icons } from "../ui/Icons"
import SidebarLink from "./sidebar-link"

export default function Sidebar() {
  const { isExpanded, setExpanded } = useStore()

  const handleToggle = () => {
    setExpanded(!isExpanded)
  }

  const sidebarVariants = {
    expanded: {
      width: "240px",
      paddingLeft: "6px",
      paddingRight: "6px",
      paddingTop: "7px",
      paddingBottom: "7px",
    },
    collapsed: {
      width: "60px",
      paddingLeft: "0px",
      paddingRight: "0px",
      paddingTop: "7px",
      paddingBottom: "7px",
    },
  }

  const contentVariants = {
    expanded: {
      opacity: 1,
      display: "block",
      paddingLeft: "6px",
      paddingRight: "6px",
    },
    collapsed: {
      opacity: 1,
      display: "block",
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  }
  const imageVariants = {
    expanded: { opacity: 1, display: "block" },
    collapsed: { opacity: 0, display: "block" },
  }

  const menu = [
    { name: "Dashboard", link: "/dashboard", icon: <Icons.dashboard /> },
    { name: "Domba", link: "/sheep/male", icon: <Icons.sheep /> },
    { name: "Kambing", link: "/goat/male", icon: <Icons.goat /> },
    { name: "Sapi", link: "/cow/male", icon: <Icons.cow /> },
    { name: "Cluster", link: "/shed/goat", icon: <Icons.cluster /> },
    { name: "Kategori", link: "/category", icon: <Icons.category /> },
    { name: "Susu", link: "/milk", icon: <Icons.milk /> },
    { name: "HPP", link: "/hpp/goat", icon: <Icons.hpp /> },
  ]

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="fixed left-0 top-0 z-10 h-screen bg-primary-7"
          initial={{ width: "240px" }}
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={sidebarVariants}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="mt-6 lg:mb-3"
            initial={{ opacity: 1 }}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={imageVariants}
            transition={{ duration: 0.3 }}
          >
            <Link href="/dashboard" className="relative block h-24 w-full">
              <Image
                className={
                  isExpanded
                    ? "object-contain object-left"
                    : "object-contain object-left"
                }
                src="/logo.png"
                alt="logo"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                fill
              />
            </Link>
          </motion.div>
          <motion.div
            className={`px-6 pt-7 lg:pt-3`}
            initial={{ opacity: 1 }}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={contentVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="grid gap-3">
              {menu.map((item, idx) => (
                <SidebarLink key={idx} item={item} isExpanded={isExpanded} />
              ))}
            </div>
          </motion.div>
          <motion.button
            className="absolute bottom-0 left-0 flex h-16 w-full items-center justify-center text-lg font-bold text-white"
            onClick={handleToggle}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? (
              <Icons.chevronLeft className="h-6 w-6" />
            ) : (
              <Icons.chevronRight className="h-6 w-6" />
            )}
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
