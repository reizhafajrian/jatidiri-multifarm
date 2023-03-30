'use client'
import { useRouter } from 'next/navigation'
import Navbar from '../layout/Navbar'
import { Button } from '../shared'
import { Download, Pen } from '../shared/Icons'

export default function ShedHeader() {
  const router = useRouter()
  const menu = [
    { name: 'Kambing', link: '/shed/goat' },
    { name: 'Domba', link: '/shed/sheep' },
    { name: 'Sapi', link: '/shed/cow' },
  ]

  return (
    <Navbar menu={menu} className="mb-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button
          className="capitalize"
          onClick={() => router.replace(`/shed/add`)}
        >
          <Pen className="h-4 w-4 md:hidden" />
          <span className="hidden md:block">tambah kandang</span>
        </Button>
        <Button variant="outline" className="px-3">
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </Navbar>
  )
}
