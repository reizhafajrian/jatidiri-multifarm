'use client'
import CaretIcon from '@/assets/icons/caret.svg'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import Search from './Search'
// import InfoIcon from '@/assets/icons/info.svg'
// import NotifIcon from '@/assets/icons/notif.svg'
// import LangImage from '@/assets/images/lang.png'
// import Image from 'next/image'

export default function Header() {
  const pathname = usePathname()
  const isDashboard = pathname === '/home'

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
          {/* <NotifIcon className="h-6 w-6 stroke-primary-6" /> */}
          {/* <InfoIcon className="h-6 w-6 stroke-primary-6" /> */}
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
          {/* <div className="relative h-8 w-16">
            <Image src={LangImage} alt="lang" fill className="object-contain" />
          </div> */}
        </div>
      </div>
    </header>
  )
}
