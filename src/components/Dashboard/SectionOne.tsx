import ArrowUpIcon from '@/assets/icons/arrow-up.svg'
import DashboardCart from '@/assets/icons/dashboard-cart.svg'
import DashboardWallet from '@/assets/icons/dashboard-wallet.svg'
import formatRupiah from '@/utils/formatRupiah'
import Card from '../Card'

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

export default function SectionOne() {
  return (
    <div className="grid grid-cols-2 gap-7">
      {dataTotal.map((item, idx) => (
        <Card key={idx} className="flex justify-between">
          <div className="flex items-center gap-6">
            <div className="h-14 w-14">{item.icon}</div>
            <div>
              <h3 className="mb-4 font-medium capitalize text-[#515356]">
                {item.title}
              </h3>
              <p className="text-[32px] font-semibold text-[#25282B]">
                {formatRupiah(item.value)}
              </p>
            </div>
          </div>
          <span className="mt-auto flex items-center gap-1 rounded-xl bg-[#E1F7E8] py-[2px] px-[10px] text-xs font-medium text-[#0F752E]">
            <ArrowUpIcon className="fill-[#16B364] stroke-[#16B364]" />{' '}
            {item.percentage} %
          </span>
        </Card>
      ))}
    </div>
  )
}
