import LogoImage from '@/assets/images/logo.png'
import Image from 'next/image'
import SidebarMenu from './SidebarMenu'

export default function Sidebar() {
  return (
    <div className="fixed top-0 h-screen w-64 bg-primary-7 px-6 pt-7">
      <div className="relative mb-6 h-28">
        <Image
          className="object-contain object-left"
          src={LogoImage}
          alt="logo"
          priority
          fill
        />
      </div>
      <SidebarMenu />
    </div>
  )
}
