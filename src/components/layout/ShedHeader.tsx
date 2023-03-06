import Navbar from '../layout/Navbar'
import { Button } from '../shared'
import { ArrowDownTray } from '../shared/Icons'

export default function ShedHeader() {
  const menu = [
    { name: 'Kambing', link: '/shed?type=goat' },
    { name: 'Domba', link: '/shed?type=sheep' },
    { name: 'Sapi', link: '/shed?type=cow' },
  ]

  return (
    <Navbar menu={menu} className="mb-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button href="/shed/add" className="rounded-lg p-2">
          <span className="text-sm capitalize">tambah kandang</span>
        </Button>
        <Button intent="secondary" className="rounded-lg p-2">
          <ArrowDownTray />
        </Button>
      </div>
    </Navbar>
  )
}
