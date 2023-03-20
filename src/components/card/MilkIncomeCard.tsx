'use client'
import useDataList from '@/hooks/useDataList'
import { formatRupiah, shortDateFormatter } from '@/lib/utils'
import { Card } from '../shared'
import { ArrowUp, WalletCircle } from '../shared/Icons'

const IncomeCard = () => {
  const info = {
    // income_total: 1250000,
    income_date: new Date(),
    income_percentage: 5.2,
  }

  const { data, loading } = useDataList('/api/milk/income/get')

  return (
    <Card className="flex justify-between">
      <div className="flex gap-6">
        <WalletCircle />
        <div className="grid">
          <p className="text-base font-medium">Total Pendapatan</p>
          <p className="mt-auto text-2xl font-semibold">
            {loading
              ? '...'
              : formatRupiah(
                  data.reduce((acc: number, cur: any) => acc + cur.amount, 0)
                )}
          </p>
        </div>
      </div>
      <div className="grid">
        <p className="text-base font-semibold text-primary-4">
          {loading ? '...' : shortDateFormatter(info.income_date)}
        </p>
        <p className="ml-auto mt-auto flex h-fit w-fit items-center gap-1 rounded-xl bg-success-3 py-[2px] px-[10px]">
          <ArrowUp className="w-3 stroke-success-1" />
          <span className="text-xs font-medium text-success-2">
            {loading ? '...' : info.income_percentage} %
          </span>
        </p>
      </div>
    </Card>
  )
}

export default IncomeCard
