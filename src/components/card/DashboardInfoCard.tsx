import { ArrowUp } from '@/components/shared/Icons'
import { formatRupiah } from '@/lib/utils'
import { FC } from 'react'
import { Card } from '../shared'

interface DashboardInfoCardProps {
  data: {
    icon: any
    title: string
    value: string
    percentage: string
  }
}

const DashboardInfoCard: FC<DashboardInfoCardProps> = ({ data }) => {
  return (
    <Card className="flex items-center">
      <div className="mr-6 h-8 w-8 md:h-14 md:w-14">{data.icon}</div>
      <div className="text-neutral-5">
        <h3 className="mb-4 font-medium capitalize">{data.title}</h3>
        <p className="text-2xl font-semibold md:text-[32px]">
          {formatRupiah(data.value)}
        </p>
      </div>
      <p className="mt-auto ml-auto flex items-center gap-1 rounded-xl bg-success-3 py-[2px] px-1 md:px-[10px]">
        <ArrowUp className="w-3 stroke-success-1" />
        <span className="text-xs font-medium text-success-2">
          {data.percentage} %
        </span>
      </p>
    </Card>
  )
}

export default DashboardInfoCard
