'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IProps {
  item: { name: string; link: string }
}

export default function NavbarLink(props: IProps) {
  const { name, link } = props.item
  const pathname = usePathname()
  const isActive = pathname === link

  return (
    <Link
      replace
      href={link}
      className={clsx(
        'border-b py-3 px-4 text-xs focus:outline-none',
        isActive
          ? 'border-primary-3 font-medium'
          : 'font-light hover:border-primary-3'
      )}
    >
      {name}
    </Link>
  )
}
