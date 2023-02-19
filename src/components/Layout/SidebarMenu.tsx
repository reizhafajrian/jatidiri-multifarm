'use client'
import {
  Category,
  Cluster,
  Cow,
  Dashboard,
  Goat,
  HPP,
  Milk,
  Sheep,
} from '../Icons'
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
  { name: 'Dashboard', link: '/home', icon: <Dashboard /> },
  { name: 'Domba', link: '/sheep', icon: <Sheep /> },
  { name: 'Kambing', link: '/goat', icon: <Goat /> },
  { name: 'Sapi', link: '/cow', icon: <Cow /> },
  { name: 'Cluster', link: '/shed', icon: <Cluster /> },
  { name: 'Kategori', link: '/category', icon: <Category /> },
  { name: 'Susu', link: '/milk', icon: <Milk /> },
  { name: 'HPP', link: '/hpp', icon: <HPP /> },
]
