import ArrowUpIcon from '@/assets/icons/arrow-up.svg'
import MilkIcon from '@/assets/icons/milk-circle.svg'
import WalletIcon from '@/assets/icons/wallet-circle.svg'
import formatRupiah from '@/utils/formatRupiah'

const cardData = [
  {
    icon: <WalletIcon />,
    title: 'Total Pendapatan',
    date: 'Januari 2023',
    value: formatRupiah('1250000'),
    percentage: '5.2',
  },
  {
    icon: <MilkIcon />,
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
        <div
          key={idx}
          className="flex justify-between rounded-xl border border-neutral-2 bg-white p-6"
        >
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
            <p className="ml-auto mt-auto flex h-fit w-fit items-center gap-1 rounded-xl bg-[#E1F7E8] py-[2px] px-[10px] text-xs font-medium text-[#0F752E]">
              <ArrowUpIcon className="fill-[#16B364] stroke-[#16B364]" />{' '}
              {item.percentage} %
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
