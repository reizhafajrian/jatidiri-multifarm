import { ArrowDown, ArrowUp } from '@/components/shared/Icons'
import { cn, formatRupiah } from '@/lib/utils'
import { FC } from 'react'
import { Card } from '../shared'

interface IProps {
  data: {
    icon: any
    title: string
    value: string
  }
  comparison: any
}

const DashboardInfoCard: FC<IProps> = ({ data, comparison }) => {
  const increased = comparison?.description === 'Increased'
  const percentageClass = cn(
    'flex items-center gap-1 rounded-xl px-1 md:px-[10px] md:py-[2px]',
    increased ? 'bg-success-3 text-success-2' : 'bg-error/20 text-error'
  )

  return (
    <Card className="relative items-center md:flex">
      <div className="mb-3 mr-6 h-10 w-10 md:h-14 md:w-14">{data.icon}</div>
      <div className="text-neutral-5">
        <h3 className="mb-4 font-medium capitalize">{data.title}</h3>
        <p className="text-2xl font-semibold md:text-[32px]">
          {formatRupiah(data.value)}
        </p>
      </div>
      <div className="absolute right-0 top-0 m-6 md:bottom-0 md:top-auto">
        <p className={percentageClass}>
          {increased ? (
            <ArrowUp className="w-3 stroke-success-1" />
          ) : (
            <ArrowDown className="w-3 stroke-error" />
          )}
          <span className="text-xs font-medium">
            {comparison?.percentage ?? '0'} %
          </span>
        </p>
      </div>
    </Card>
  )
}

export default DashboardInfoCard
