"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu"

import useStore from "@/store/useStore"

import { Button } from "../ui/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu"
import { Icons } from "../ui/Icons"

export default function HeaderMenu() {
  const router = useRouter()
  const { user, logout } = useStore()
  const [loading, setLoading] = useState(false)

  async function logoutHandler() {
    setLoading(true)
    await logout()
    setLoading(false)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-3 outline-none">
          <div className="h-8 w-8 rounded-full bg-gray-200" />
          {user && (
            <div className="hidden md:block">
              <p className="mb-1 text-sm capitalize">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="rounded-md bg-primary-1 px-1 py-[2px] text-[10px] font-light">
                {user?.role}
              </p>
            </div>
          )}
          <Icons.chevronDown className="w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount className="w-56">
        <DropdownMenuGroup className="p-5">
          <DropdownMenuLabel className="mb-3 font-semibold">
            Account
          </DropdownMenuLabel>
          <DropdownMenuItem onClick={() => router.replace("/edit-profile")}>
            Edit Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.replace("/change-password")}>
            Change Password
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup className="p-5">
          <DropdownMenuLabel className="mb-3 font-semibold">
            Manage
          </DropdownMenuLabel>
          <DropdownMenuItem onClick={() => router.replace("/role-management")}>
            Role Management
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <div className="p-5">
          <Button
            onClick={logoutHandler}
            variant="outline"
            className="w-full justify-start border-none p-2 text-neutral-4"
            isLoading={loading}
          >
            Sign Out
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
