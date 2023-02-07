'use client'
import CaretIcon from '@/assets/icons/caret.svg'
import CategoryIcon from '@/assets/icons/category.svg'
import ClusterIcon from '@/assets/icons/cluster.svg'
import CowIcon from '@/assets/icons/cow.svg'
import DashboardIcon from '@/assets/icons/dashboard.svg'
import GoatIcon from '@/assets/icons/goat.svg'
import HppIcon from '@/assets/icons/hpp.svg'
import MilkIcon from '@/assets/icons/milk.svg'
import SheepIcon from '@/assets/icons/sheep.svg'
import SidebarLink from './SidebarLink'

export default function SidebarMenu() {
  return (
    <div className="grid gap-3">
      {menu.map((item, idx) => (
        <SidebarLink key={idx} item={item} />
      ))}
      {/* <Disclosure as="div" className="row-start-5">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center gap-3 rounded-lg fill-white py-3 pl-12 text-white transition duration-200 ease-in-out hover:bg-white/25">
              <span className="h-5 w-5">{cluster.icon}</span>
              {cluster.name}
              <span className={clsx('ml-6 h-6 w-6', open && 'rotate-180')}>
                {cluster.caretIcon}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="space-y-3 py-4 ">
              {cluster.submenu?.map((item, idx) => (
                <SidebarLink key={idx} item={item} />
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure> */}
    </div>
  )
}

const menu = [
  { name: 'Dashboard', link: '/home', icon: <DashboardIcon /> },
  { name: 'Domba', link: '/domba', icon: <SheepIcon /> },
  { name: 'Kambing', link: '/kambing', icon: <GoatIcon /> },
  { name: 'Sapi', link: '/sapi', icon: <CowIcon /> },
  { name: 'Cluster', link: '/cluster', icon: <ClusterIcon /> },
  { name: 'Kategori', link: '/category', icon: <CategoryIcon /> },
  { name: 'Susu', link: '/susu', icon: <MilkIcon /> },
  { name: 'HPP', link: '/hpp', icon: <HppIcon /> },
]

const cluster = {
  name: 'Cluster',
  icon: <ClusterIcon />,
  caretIcon: <CaretIcon />,
  submenu: [
    { name: 'Cluster 1', link: '/cluster/1', icon: <ClusterIcon /> },
    { name: 'Cluster 2', link: '/cluster/2', icon: <ClusterIcon /> },
  ],
}
