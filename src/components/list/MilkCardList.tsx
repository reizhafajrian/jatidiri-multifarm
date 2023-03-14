import { formatRupiah, shortDateFormatter } from '@/lib/utils'
import { Card } from '../shared'
import { ArrowSmallUp, MilkCircle, WalletCircle } from '../shared/Icons'

export default function MilkCardList({ info }: any) {
  const cardData = [
    {
      icon: <WalletCircle />,
      title: 'Total Pendapatan',
      date: shortDateFormatter(info.income_date),
      value: formatRupiah(info.income_total),
      percentage: info.income_percentage,
    },
    {
      icon: <MilkCircle />,
      title: 'Total Susu',
      date: shortDateFormatter(info.milk_date),
      value: `${info.milk_total} Liter`,
      percentage: info.milk_percentage,
    },
  ]

  return (
    <div className="my-4 grid grid-cols-2 gap-10">
      {cardData.map(({ date, icon, percentage, title, value }, idx) => (
        <Card key={idx} className="flex justify-between">
          <div className="flex gap-6">
            <div>{icon}</div>
            <div className="grid">
              <p className="text-base font-medium">{title}</p>
              <p className="mt-auto text-2xl font-semibold">{value}</p>
            </div>
          </div>
          <div className="grid">
            <p className="text-base font-semibold text-primary-4">{date}</p>
            <p className="ml-auto mt-auto flex h-fit w-fit items-center gap-1 rounded-xl bg-success-3 py-[2px] px-[10px]">
              <ArrowSmallUp className="fill-success-1" />
              <span className="text-xs font-medium text-success-2">
                {percentage} %
              </span>
            </p>
          </div>
        </Card>
      ))}
    </div>
  )
}
