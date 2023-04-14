'use client'
import { AlertCircle, Bell } from '@/components/shared/Icons'
import { cn } from '@/lib/utils'
import useStore from '@/store/useStore'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import HeaderMenu from './HeaderMenu'
import Search from './Search'

function Header() {
  const { user } = useStore()
  const pathname = usePathname()
  const headerTitle = getHeaderTitle(pathname, user?.firstName!)

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 pt-4 pb-6">
      {headerTitle}
      <div
        className={cn(
          'flex items-center justify-between gap-4 rounded-[20px] bg-white py-3 px-6 shadow-header',
          !headerTitle && 'flex-1'
        )}
      >
        {!headerTitle && <Search />}
        <div className="flex items-center justify-between gap-4">
          <Bell className="hidden w-6 stroke-primary-6 md:block" />
          <AlertCircle className="hidden w-6 stroke-primary-6 md:block" />
          <HeaderMenu />
          <div className="relative hidden h-8 w-16 md:block">
            <Image src="/lang.png" alt="lang" fill className="object-contain" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

const getHeaderTitle = (pathname: string, name: string) => {
  let title
  if (pathname === '/dashboard') {
    title = (
      <div>
        <p className="mb-2 text-2xl font-semibold">Hello {name},</p>
        <p>Dashboard Utama</p>
      </div>
    )
  } else if (pathname === '/edit-profile') {
    title = <h1 className="mb-2 text-2xl font-semibold">Edit Profile</h1>
  } else if (pathname === '/change-password') {
    title = (
      <h1 className="mb-2 text-lg font-semibold md:text-2xl">
        Change Password
      </h1>
    )
  } else if (pathname === '/category') {
    title = <h1 className="mb-2 text-2xl font-semibold">Kategori</h1>
  } else if (pathname === '/role-management') {
    title = (
      <h1 className="text-md mb-2 font-semibold md:text-2xl">
        Member Management
      </h1>
    )
  }
  return title
}
