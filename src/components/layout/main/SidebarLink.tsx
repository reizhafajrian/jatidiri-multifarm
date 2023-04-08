'use client'
import { thisMonthValue } from '@/hooks/useFilterDate'
import useStore from '@/store/useStore'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IProps {
  item: { name: string; link: string; icon: any }
}

export default function SidebarLink(props: IProps) {
  const { name, link, icon } = props.item
  const pathname = usePathname()
  const pathLink = link.split('/')[1]
  const isActive = pathname?.startsWith('/' + pathLink)

  return (
    <Link
      replace
      href={link}
      className={clsx(
        'flex items-center gap-3 rounded-lg py-3 pl-12 transition duration-200 ease-in-out',
        isActive
          ? 'bg-white font-semibold text-primary-5'
          : 'text-white hover:bg-white/25'
      )}
      onClick={() =>
        useStore.setState({
          searchKeyword: '',
          originFemale: 'all',
          originMale: 'all',
          hppStatus: 'all',
          filterByDate: thisMonthValue,
        })
      }
    >
      <span
        className={clsx('h-5 w-5', isActive ? 'fill-primary-5' : 'fill-white')}
      >
        {icon}
      </span>
      {name}
    </Link>
  )
}
