'use client'
import CaretIcon from '@/assets/icons/caret.svg'
import InfoIcon from '@/assets/icons/info.svg'
import NotifIcon from '@/assets/icons/notif.svg'
import LangImage from '@/assets/images/lang.png'
import { Popover } from '@headlessui/react'
import clsx from 'clsx'
import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Search from './Search'

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const isDashboard = pathname === '/home'

  function signoutHandler() {
    Cookies.remove('token')
    router.replace('/signin')
  }

  return (
    <header className="flex items-center justify-between pt-4 pb-6">
      {isDashboard && (
        <div>
          <h1 className="mb-2 text-2xl font-semibold">Hello John,</h1>
          <h3>Dashboard Utama</h3>
        </div>
      )}
      <div
        className={clsx(
          'flex items-center justify-between rounded-[20px] bg-white py-3 px-6 shadow-header',
          !isDashboard && 'flex-1'
        )}
      >
        {!isDashboard && <Search />}
        <div className="flex items-center gap-4">
          <NotifIcon className="h-6 w-6 stroke-primary-6" />
          <InfoIcon className="h-6 w-6 stroke-primary-6" />
          <Popover as="div" className="relative">
            <Popover.Button className="outline-none">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-200" />
                <div>
                  <p className="mb-1 text-sm">John Doe</p>
                  <p className="rounded-md bg-primary-1 px-1 py-[2px] text-[10px] font-light">
                    Super Admin
                  </p>
                </div>
                <CaretIcon className="h-7 w-7" />
              </div>
            </Popover.Button>
            <Popover.Panel className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-none ring-0">
              <div className="p-5 py-3">
                <h3 className="mb-3 font-semibold">Account</h3>
                <div className="grid gap-2 text-neutral-4">
                  <Link href="/home">Edit Profile</Link>
                  <Link href="/home">Change Password</Link>
                </div>
              </div>
              <hr />
              <div className="p-5 py-3">
                <h3 className="mb-3 font-semibold">Manage</h3>
                <Link href="/role-management" className="text-neutral-4">
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
          <div className="relative h-8 w-16">
            <Image src={LangImage} alt="lang" fill className="object-contain" />
          </div>
        </div>
      </div>
    </header>
  )
}
