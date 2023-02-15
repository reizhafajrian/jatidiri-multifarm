import DownloadIcon from '@/assets/icons/download-outline.svg'
import { shedData } from '@/data/dummy'
import Link from 'next/link'
import Button from '../Button'
import Navbar from '../Layout/Navbar'
import ShedTable from './ShedTable'

export default function Shed() {
  const menu = [
    { name: 'Kambing', link: '/shed/goat' },
    { name: 'Domba', link: '/shed/sheep' },
    { name: 'Sapi', link: '/shed/cow' },
  ]

  return (
    <main>
      <Navbar menu={menu} className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button className="w-fit px-2">
            <Link href="/shed/add">
              <span className="text-sm capitalize">tambah kandang</span>
            </Link>
          </Button>
          <Button intent="secondary" className="w-fit px-2">
            <DownloadIcon />
          </Button>
        </div>
      </Navbar>
      <ShedTable data={shedData} />
    </main>
  )
}
