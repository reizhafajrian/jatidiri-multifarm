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
    </div>
  )
}

const menu = [
  { name: 'Dashboard', link: '/home', icon: <DashboardIcon /> },
  { name: 'Domba', link: '/sheep', icon: <SheepIcon /> },
  { name: 'Kambing', link: '/goat', icon: <GoatIcon /> },
  { name: 'Sapi', link: '/cow', icon: <CowIcon /> },
  { name: 'Cluster', link: '/shed', icon: <ClusterIcon /> },
  { name: 'Kategori', link: '/category', icon: <CategoryIcon /> },
  { name: 'Susu', link: '/milk', icon: <MilkIcon /> },
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
