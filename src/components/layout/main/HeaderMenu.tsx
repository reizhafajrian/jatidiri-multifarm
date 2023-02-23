'use client'
import { Popover } from '@headlessui/react'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { ChevronDown } from '../../shared/Icons'

export default function HeaderMenu() {
  const router = useRouter()
  const buttonRef = useRef<any>(null)

  const signoutHandler = () => {
    Cookies.remove('token')
    router.replace('/signin')
  }

  return (
    <Popover as="div" className="relative">
      <Popover.Button ref={buttonRef} className="outline-none">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-200" />
          <div>
            <p className="mb-1 text-sm">John Doe</p>
            <p className="rounded-md bg-primary-1 px-1 py-[2px] text-[10px] font-light">
              Super Admin
            </p>
          </div>
          <ChevronDown />
        </div>
      </Popover.Button>
      <Popover.Panel className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-none ring-0">
        <div className="p-5 py-3">
          <h3 className="mb-3 font-semibold">Account</h3>
          <div className="grid gap-2 text-neutral-4">
            <Link href="/home" onClick={() => buttonRef.current.click()}>
              Edit Profile
            </Link>
            <Link href="/home" onClick={() => buttonRef.current.click()}>
              Change Password
            </Link>
          </div>
        </div>
        <hr />
        <div className="p-5 py-3">
          <h3 className="mb-3 font-semibold">Manage</h3>
          <Link
            href="/role-management"
            className="text-neutral-4"
            onClick={() => buttonRef.current.click()}
          >
            Role Management
          </Link>
        </div>
        <hr />
        <div className="p-5 pt-3">
          <button
            onClick={signoutHandler}
            className="text-neutral-4 hover:text-primary-7"
          >
            Sign Out
          </button>
        </div>
      </Popover.Panel>
    </Popover>
  )
}
