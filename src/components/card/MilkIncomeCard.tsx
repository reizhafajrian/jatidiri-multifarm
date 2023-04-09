'use client'
import useDataList from '@/hooks/useDataList'
import { formatRupiah } from '@/lib/utils'
import { format } from 'date-fns'
import IncomeForm from '../form/IncomeForm'
import { Card } from '../shared'
import { ArrowUp, WalletCircle } from '../shared/Icons'

const MilkIncomeCard = () => {
  const info = {
    // income_total: 1250000,
    income_date: new Date(),
    income_percentage: 5.2,
  }


  // startdate is 1 days of this month
  const startDate = new Date()
  startDate.setDate(1)


  //end date is last day of this month
  const endDate = new Date()
  endDate.setMonth(endDate.getMonth() + 1)
  endDate.setDate(0)


  const { data, loading } = useDataList(`/api/milk/income/get?start=${startDate}&end=${endDate}`)

  return (
    <Card className="flex justify-between">
      <div className="flex gap-6">
        <WalletCircle />
        <div className="grid">
          <div className="flex gap-1 md:gap-3">
            <p className="text-sm font-medium md:text-base">Total Pendapatan</p>
            <IncomeForm />
          </div>

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
          {loading ? '...' : format(info.income_date, 'MMM yyyy')}
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

export default MilkIncomeCard
