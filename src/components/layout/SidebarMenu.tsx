"use client"

import { Icons } from "../ui/Icons"
import SidebarLink from "./SidebarLink"

const menu = [
  { name: "Dashboard", link: "/dashboard", icon: <Icons.dashboard /> },
  { name: "Domba", link: "/sheep/male", icon: <Icons.sheep /> },
  { name: "Kambing", link: "/goat/male", icon: <Icons.goat /> },
  { name: "Sapi", link: "/cow/male", icon: <Icons.cow /> },
  { name: "Cluster", link: "/shed/goat", icon: <Icons.cluster /> },
  { name: "Kategori", link: "/category", icon: <Icons.category /> },
  { name: "Susu", link: "/milk", icon: <Icons.milk /> },
  { name: "HPP", link: "/hpp/goat", icon: <Icons.hpp /> },
]

interface IProps {
  isExpanded?: boolean
}

export default function SidebarMenu({ isExpanded }: IProps) {
  return (
    <div className="grid gap-3">
      {menu.map((item, idx) => (
        <SidebarLink key={idx} item={item} isExpanded={isExpanded} />
      ))}
    </div>
  )
}
