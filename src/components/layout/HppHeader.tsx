import Navbar from '@/components/layout/Navbar'
import { Button } from '@/components/shared'
import { CloudArrowDown } from '@/components/shared/Icons'

export default function HppHeader() {
  return (
    <Navbar menu={menu} className="mb-6 flex items-center justify-between">
      <Button intent="secondary" className="rounded-xl py-1 px-2">
        <CloudArrowDown /> download
      </Button>
    </Navbar>
  )
}

const menu = [
  { name: 'Kambing', link: `/hpp?type=goat` },
  { name: 'Domba', link: `/hpp?type=sheep` },
  { name: 'Sapi', link: `/hpp?type=cow` },
]
