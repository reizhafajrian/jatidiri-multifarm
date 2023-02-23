import formatRupiah from '@/utils/formatRupiah'
import { Card } from '../shared'
import { ArrowSmallUp, MilkCircle, WalletCircle } from '../shared/Icons'

const cardData = [
  {
    icon: <WalletCircle />,
    title: 'Total Pendapatan',
    date: 'Januari 2023',
    value: formatRupiah('1250000'),
    percentage: '5.2',
  },
  {
    icon: <MilkCircle />,
    title: 'Total Susu',
    date: 'Januari 2023',
    value: '35 Liter',
    percentage: '5.2',
  },
]

export default function MilkCardList() {
  return (
    <div className="my-4 grid grid-cols-2 gap-10">
      {cardData.map((item, idx) => (
        <Card key={idx} className="flex justify-between">
          <div className="flex gap-6">
            <div>{item.icon}</div>
            <div className="grid">
              <p className="text-base font-medium">{item.title}</p>
              <p className="mt-auto text-2xl font-semibold">{item.value}</p>
            </div>
          </div>
          <div className="grid">
            <p className="text-base font-semibold text-primary-4">
              {item.date}
            </p>
            <p className="ml-auto mt-auto flex h-fit w-fit items-center gap-1 rounded-xl bg-success-3 py-[2px] px-[10px]">
              <ArrowSmallUp className="fill-success-1" />
              <span className="text-xs font-medium text-success-2">
                {item.percentage} %
              </span>
            </p>
          </div>
        </Card>
      ))}
    </div>
  )
}
