import { ArrowDown, ArrowUp } from '@/components/shared/Icons'
import { formatRupiah } from '@/lib/utils'
import { FC } from 'react'
import { Card } from '../shared'

interface DashboardInfoCardProps {
  data: {
    icon: any
    title: string
    value: string
  }
  comparison: any
}

const DashboardInfoCard: FC<DashboardInfoCardProps> = (props) => {
  const { data, comparison } = props

  return (
    <Card className="relative flex items-center">
      <div className="mr-6 h-10 w-10 md:h-14 md:w-14">{data.icon}</div>
      <div className="text-neutral-5">
        <h3 className="mb-4 font-medium capitalize">{data.title}</h3>
        <p className="text-2xl font-semibold md:text-[32px]">
          {formatRupiah(data.value)}
        </p>
      </div>
      {comparison ? (
        comparison?.description === 'Increased' ? (
          <p className="absolute bottom-0 right-0 mb-6 mr-6 flex items-center gap-1 rounded-xl bg-success-3 px-1 md:py-[2px] md:px-[10px]">
            {comparison?.percentage !== 'Infinity' && (
              <ArrowUp className="w-3 stroke-success-1" />
            )}
            <span className="text-xs font-medium text-success-2">
              {comparison?.percentage === 'Infinity'
                ? '0'
                : comparison?.percentage}{' '}
              %
            </span>
          </p>
        ) : (
          <p className="absolute bottom-0 right-0 mb-6 mr-6 flex items-center gap-1 rounded-xl bg-error/20 px-1 md:py-[2px] md:px-[10px]">
            {comparison?.percentage !== 'Infinity' && (
              <ArrowDown className="w-3 stroke-error" />
            )}
            <span className="text-xs font-medium text-error">
              {comparison?.percentage === 'Infinity'
                ? '0'
                : comparison?.percentage}{' '}
              %
            </span>
          </p>
        )
      ) : (
        <div></div>
      )}
    </Card>
  )
}

export default DashboardInfoCard
