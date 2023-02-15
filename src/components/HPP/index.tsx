import DownloadIcon from '@/assets/icons/download.svg'
import { hppData } from '@/data/dummy'
import Button from '../Button'
import Navbar from '../Layout/Navbar'
import FilterHppTable from './FilterHppTable'
import HppTable from './HppTable'

const menu = [
  { name: 'Kambing', link: `/hpp/goat` },
  { name: 'Domba', link: `/hpp/sheep` },
  { name: 'Sapi', link: `/hpp/cow` },
]

export default function HPP() {
  return (
    <main>
      <Navbar menu={menu} className="mb-6 flex items-center justify-between">
        <Button
          intent="secondary"
          className="flex justify-center gap-1 rounded-xl py-1"
        >
          <DownloadIcon className="h-4 w-4" /> download
        </Button>
      </Navbar>
      <FilterHppTable />
      <HppTable data={hppData} />
    </main>
  )
}
