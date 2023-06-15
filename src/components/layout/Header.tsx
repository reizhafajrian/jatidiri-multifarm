"use client"

import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import useStore from "@/store/useStore"

import { Icons } from "../ui/Icons"
import HeaderMenu from "./HeaderMenu"
import Search from "./Search"

function Header() {
  const { user } = useStore()
  const pathname = usePathname()
  const headerTitle = getHeaderTitle(pathname, user?.firstName!)

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 pb-6 pt-4">
      {headerTitle ?? <div></div>}
      <div
        className={cn(
          "flex items-center justify-between gap-4 rounded-[20px] bg-white px-6 py-3 shadow-header"
          // !headerTitle && "flex-1"
        )}
      >
        {/* {!headerTitle && <Search />} */}
        <div className="ml-auto flex items-center justify-between gap-4">
          <Icons.bell className="hidden w-6 stroke-primary-6 md:block" />
          <Icons.alertCircle className="hidden w-6 stroke-primary-6 md:block" />
          <HeaderMenu />
          {/* <div className="relative hidden h-8 w-16 md:block">
            <Image src="/lang.png" alt="lang" fill className="object-contain" />
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header

const getHeaderTitle = (pathname: string, name: string) => {
  let title
  if (pathname === "/dashboard") {
    title = (
      <div>
        <p className="mb-2 text-2xl font-semibold">Hello {name},</p>
        <p>Dashboard Utama</p>
      </div>
    )
  } else if (pathname === "/edit-profile") {
    title = <h1 className="mb-2 text-2xl font-semibold">Edit Profile</h1>
  } else if (pathname === "/change-password") {
    title = (
      <h1 className="mb-2 text-lg font-semibold md:text-2xl">
        Change Password
      </h1>
    )
  } else if (pathname === "/category") {
    title = <h1 className="mb-2 text-2xl font-semibold">Kategori</h1>
  } else if (pathname === "/role-management") {
    title = (
      <h1 className="text-md mb-2 font-semibold md:text-2xl">
        Member Management
      </h1>
    )
  }
  return title
}
