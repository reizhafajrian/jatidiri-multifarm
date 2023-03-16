'use client'
import { AlertCircle, Bell } from '@/components/shared/Icons'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import HeaderMenu from './HeaderMenu'
import Search from './Search'

function Header() {
  const pathname = usePathname()
  const headerTitle = getHeaderTitle(pathname)

  return (
    <header className="flex items-center justify-between pt-4 pb-6">
      {headerTitle}
      <div
        className={cn(
          'flex items-center justify-between rounded-[20px] bg-white py-3 px-6 shadow-header',
          !headerTitle && 'flex-1'
        )}
      >
        {!headerTitle && <Search />}
        <div className="flex items-center gap-4">
          <Bell className="w-6 stroke-primary-6" />
          <AlertCircle className="w-6 stroke-primary-6" />
          <HeaderMenu />
          <div className="relative h-8 w-16">
            <Image src="/lang.png" alt="lang" fill className="object-contain" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

const getHeaderTitle = (pathname: string) => {
  let title
  if (pathname === '/dashboard') {
    title = (
      <div>
        <p className="mb-2 text-2xl font-semibold">Hello John,</p>
        <p>Dashboard Utama</p>
      </div>
    )
  } else if (pathname === '/edit-profile') {
    title = <h1 className="mb-2 text-2xl font-semibold">Edit Profile</h1>
  } else if (pathname === '/change-password') {
    title = <h1 className="mb-2 text-2xl font-semibold">Change Password</h1>
  }
  return title
}
