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
  { name: 'Dashboard', link: '/home', icon: <ICON.Dashboard /> },
  { name: 'Domba', link: '/sheep?type=male', icon: <ICON.Sheep /> },
  { name: 'Kambing', link: '/goat?type=male', icon: <ICON.Goat /> },
  { name: 'Sapi', link: '/cow?type=male', icon: <ICON.Cow /> },
  { name: 'Cluster', link: '/shed?type=goat', icon: <ICON.Cluster /> },
  { name: 'Kategori', link: '/category', icon: <ICON.Category /> },
  { name: 'Susu', link: '/milk', icon: <ICON.Milk /> },
  { name: 'HPP', link: '/hpp?type=goat', icon: <ICON.HPP /> },
]
