import DashboardInfoCard from '../card/DashboardInfoCard'
import { DashboardCart, DashboardWallet } from '../shared/Icons'

export default function DashboardInfoList() {
  return (
    <div className="grid grid-cols-2 gap-7">
      {dataTotal.map((item, idx) => (
        <DashboardInfoCard key={idx} data={item} />
      ))}
    </div>
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
