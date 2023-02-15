import DashboardCart from '@/assets/icons/dashboard-cart.svg'
import DashboardCow from '@/assets/icons/dashboard-cow.svg'
import DashboardGoat from '@/assets/icons/dashboard-goat.svg'
import DashboardSheep from '@/assets/icons/dashboard-sheep.svg'
import DashboardWallet from '@/assets/icons/dashboard-wallet.svg'
import DownloadIcon from '@/assets/icons/download.svg'
import Button from '../Button'
import CardAnimalInfo from './CardAnimalInfo'
import CardDiagram from './CardDiagram'
import CardInfo from './CardInfo'
import FilterReport from './FilterReport'

export default function Dashboard() {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <FilterReport />
        <Button
          intent="secondary"
          className="flex justify-center gap-1 rounded-xl py-1"
        >
          <DownloadIcon className="h-4 w-4" /> download
        </Button>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-7">
          {dataTotal.map((item, idx) => (
            <CardInfo key={idx} data={item} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-7">
          {dataAnimal.map((item, idx) => (
            <CardAnimalInfo key={idx} data={item} />
          ))}
        </div>
        <div className="grid grid-cols-12 gap-6">
          {dataDiagram.map(({ title, className }, idx) => (
            <CardDiagram key={idx} title={title} className={className} />
          ))}
        </div>
      </div>
    </main>
  )
}

const dataTotal = [
  {
    icon: <DashboardWallet />,
    title: 'total pendapatan',
    value: '20122300',
    percentage: '5.2',
  },
  {
    icon: <DashboardCart />,
    title: 'total pembelian',
    value: '18122300',
    percentage: '2.2',
  },
]

const dataAnimal = [
  {
    icon: <DashboardCow />,
    animal_type: 'cow',
    totalAdult: 100,
    totalCempek: 80,
  },
  {
    icon: <DashboardSheep />,
    animal_type: 'sheep',
    totalAdult: 100,
    totalCempek: 80,
  },
  {
    icon: <DashboardGoat />,
    animal_type: 'goat',
    totalAdult: 100,
    totalCempek: 80,
  },
]

const dataDiagram = [
  {
    title: 'ternak terjual',
    className: 'col-span-5',
  },
  {
    title: 'pendapatan event',
    className: 'col-span-4',
  },
  {
    title: 'penjualan susu',
    className: 'col-span-3',
  },
  {
    title: 'data analytics',
    className: 'col-span-5',
  },
  {
    title: 'hewan mati',
    className: 'col-span-4',
  },
  {
    title: 'total kambing menyusui',
    className: 'col-span-3',
  },
]
