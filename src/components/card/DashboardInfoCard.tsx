import formatRupiah from '@/utils/formatRupiah'
import { Card } from '../shared'
import { ArrowSmallUp } from '../shared/Icons'

interface IDInfoProps {
  data: {
    icon: any
    title: string
    value: string
    percentage: string
  }
}

export default function DashboardInfoCard({ data }: IDInfoProps) {
  return (
    <Card className="flex items-center">
      <div className="mr-6 h-14 w-14">{data.icon}</div>
      <div className="text-neutral-5">
        <h3 className="mb-4 font-medium capitalize">{data.title}</h3>
        <p className="text-[32px] font-semibold">{formatRupiah(data.value)}</p>
      </div>
      <p className="mt-auto ml-auto flex items-center gap-1 rounded-xl bg-success-3 py-[2px] px-[10px]">
        <ArrowSmallUp className="fill-success-1" />
        <span className="text-xs font-medium text-success-2">
          {data.percentage} %
        </span>
      </p>
    </Card>
  )
}
