"use client"

import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import useStore from "@/store/useStore"

import { Icons } from "../ui/Icons"
import HeaderMenu from "./header-menu"

export default function Header() {
  const { user } = useStore()
  const pathname = usePathname()
  const headerTitle = getHeaderTitle(pathname, user?.firstName!)

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 pb-6 pt-4">
      {headerTitle}
      <div
        className={cn(
          "flex items-center justify-between gap-4 rounded-[20px] bg-white px-6 py-3 shadow-header"
        )}
      >
        <div className="ml-auto flex items-center justify-between gap-4">
          <Icons.bell className="hidden w-6 stroke-primary-6 md:block" />
          <Icons.alertCircle className="hidden w-6 stroke-primary-6 md:block" />
          <HeaderMenu />
        </div>
      </div>
    </header>
  )
}

const getHeaderTitle = (pathname: string, name: string) => {
  switch (pathname) {
    case "/dashboard":
      return (
        <div>
          <p className="mb-2 text-2xl font-semibold">Hello {name},</p>
          <p>Dashboard Utama</p>
        </div>
      )
    case "/category":
      return <h1 className="mb-2 text-2xl font-semibold">Kategori</h1>
    case "/edit-profile":
      return <h1 className="mb-2 text-2xl font-semibold">Edit Profile</h1>
    case "/change-password":
      return (
        <h1 className="mb-2 text-lg font-semibold md:text-2xl">
          Change Password
        </h1>
      )
    case "/role-management":
      return (
        <h1 className="text-md mb-2 font-semibold md:text-2xl">
          Member Management
        </h1>
      )
    default:
      return <div></div>
  }
}
