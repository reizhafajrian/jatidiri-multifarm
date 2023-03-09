'use client'
import * as ICON from '../../shared/Icons'
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
  { name: 'Dashboard', link: '/', icon: <ICON.Dashboard /> },
  { name: 'Domba', link: '/sheep/male', icon: <ICON.Sheep /> },
  { name: 'Kambing', link: '/goat/male', icon: <ICON.Goat /> },
  { name: 'Sapi', link: '/cow/male', icon: <ICON.Cow /> },
  { name: 'Cluster', link: '/shed/goat', icon: <ICON.Cluster /> },
  { name: 'Kategori', link: '/category', icon: <ICON.Category /> },
  { name: 'Susu', link: '/milk', icon: <ICON.Milk /> },
  { name: 'HPP', link: '/hpp/goat', icon: <ICON.HPP /> },
]
