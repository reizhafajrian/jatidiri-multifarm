'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bell, ExclamationCircle } from '../Icons'
import HeaderMenu from './HeaderMenu'
import Search from './Search'

export default function Header() {
  const pathname = usePathname()
  const isDashboard = pathname === '/home'

  return (
    <header className="flex items-center justify-between pt-4 pb-6">
      {isDashboard && (
        <div>
          <p className="mb-2 text-2xl font-semibold">Hello John,</p>
          <p>Dashboard Utama</p>
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
          <Bell className="stroke-primary-6" />
          <ExclamationCircle className="stroke-primary-6" />
          <HeaderMenu />
          <div className="relative h-8 w-16">
            <Image src="/lang.png" alt="lang" fill className="object-contain" />
          </div>
        </div>
      </div>
    </header>
  )
}
