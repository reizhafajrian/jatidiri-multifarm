'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IProps {
  item: { name: string; link: string; icon: any }
}

export default function SidebarLink(props: IProps) {
  const { name, link, icon } = props.item
  const pathname = usePathname()
  const pathLink = link.split('?')[0]
  const isActive = pathname?.startsWith(pathLink)

  return (
    <Link
      replace
      href={link}
      className={clsx(
        'flex items-center gap-3 rounded-lg fill-white py-3 pl-12 transition duration-200 ease-in-out',
        isActive
          ? 'bg-white fill-primary-5 font-semibold text-primary-5'
          : 'text-white hover:bg-white/25'
      )}
    >
      <span className="h-5 w-5">{icon}</span>
      {name}
    </Link>
  )
}