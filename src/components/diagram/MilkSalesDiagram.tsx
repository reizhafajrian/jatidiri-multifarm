'use client'
import { formatRupiah } from '@/lib/utils'
import { FC } from 'react'
import SimpleBar from 'simplebar-react'

interface MilkSalesDiagramProps {}

const MilkSalesDiagram: FC<MilkSalesDiagramProps> = ({}) => {
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
  return (
    <div>
      <div className="my-8 text-center text-2xl font-semibold">
        {formatRupiah('18122300')}
      </div>
      <SimpleBar className="max-h-28">
        {data.map((item, idx) => (
          <div className="mb-3 flex justify-between" key={idx}>
            <p>
              {item.milk} <span className="text-[10px] text-primary-4">Lt</span>
            </p>
            <p className="text-[10px] text-primary-4">{item.date}</p>
          </div>
        ))}
      </SimpleBar>
    </div>
  )
}

export default MilkSalesDiagram
