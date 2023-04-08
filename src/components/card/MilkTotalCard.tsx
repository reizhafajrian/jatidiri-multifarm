'use client'
import useDataList from '@/hooks/useDataList'
import { format } from 'date-fns'
import { Card } from '../shared'
import { ArrowUp, MilkCircle } from '../shared/Icons'

const MilkTotalCard = () => {
  const info = {
    milk_total: 35,
    milk_date: new Date(),
    milk_percentage: 5.2,
  }

  const { data, loading } = useDataList('/api/milk/get')

  return (
    <Card className="flex justify-between">
      <div className="flex gap-6">
        <MilkCircle />
        <div className="grid">
          <p className="text-sm font-medium md:text-base">Total Susu</p>
          <p className="mt-auto text-2xl font-semibold">
            {loading
              ? '...'
              : `${data.reduce(
                  (acc: number, cur: any) => acc + cur.amount,
                  0
                )} Liter`}
          </p>
        </div>
      </div>
      <div className="grid">
        <p className="text-base font-semibold text-primary-4">
          {loading ? '...' : format(info.milk_date, 'MMM yyyy')}
        </p>
        <p className="ml-auto mt-auto flex h-fit w-fit items-center gap-1 rounded-xl bg-success-3 py-[2px] px-[10px]">
          <ArrowUp className="w-3 stroke-success-1" />
          <span className="text-xs font-medium text-success-2">
            {loading ? '...' : info.milk_percentage} %
          </span>
        </p>
      </div>
    </Card>
  )
}

export default MilkTotalCard
