import formatRupiah from '@/utils/formatRupiah'

export default function MilkSalesDiagram() {
  return (
    <div>
      <div className="my-8 text-center text-2xl font-semibold">
        {formatRupiah('18122300')}
      </div>
      <div className="max-h-28 space-y-3 overflow-auto scrollbar-hide">
        {data.map((item, idx) => (
          <div className="flex justify-between" key={idx}>
            <p>
              {item.milk} <span className="text-[10px] text-primary-4">Lt</span>
            </p>
            <p className="text-[10px] text-primary-4">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const data = [
  { milk: '215', date: 'Apr 2022' },
  { milk: '215', date: 'Apr 2022' },
  { milk: '215', date: 'Apr 2022' },
  { milk: '215', date: 'Apr 2022' },
  { milk: '215', date: 'Apr 2022' },
  { milk: '215', date: 'Apr 2022' },
  { milk: '215', date: 'Apr 2022' },
  { milk: '215', date: 'Apr 2022' },
  { milk: '215', date: 'Apr 2022' },
  { milk: '215', date: 'Apr 2022' },
]
