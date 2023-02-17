import DashboardCart from '@/assets/icons/dashboard-cart.svg'
import DashboardWallet from '@/assets/icons/dashboard-wallet.svg'
import CardInfo from './CardInfo'

export default function CardInfoList() {
  return (
    <div className="grid grid-cols-2 gap-7">
      {dataTotal.map((item, idx) => (
        <CardInfo key={idx} data={item} />
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
