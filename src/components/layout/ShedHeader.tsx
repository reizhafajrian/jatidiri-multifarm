'use client'
import { useRouter } from 'next/navigation'
import Navbar from '../layout/Navbar'
import { Button } from '../shared'
import { ArrowDownTray } from '../shared/Icons'

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
          onClick={() => router.push('/shed/add')}
          className="rounded-lg p-2"
        >
          <span className="text-sm capitalize">tambah kandang</span>
        </Button>
        <Button intent="secondary" className="rounded-lg p-2">
          <ArrowDownTray />
        </Button>
      </div>
    </Navbar>
  )
}
