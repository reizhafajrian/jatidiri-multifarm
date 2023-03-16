import DashboardFilter from '@/components/filter/DashboardFilter'
import { Button } from '@/components/shared'
import { DownloadCloud } from '@/components/shared/Icons'
import { FC } from 'react'

interface DashboardHeaderProps {}

const DashboardHeader: FC<DashboardHeaderProps> = ({}) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <DashboardFilter />
      <Button
        variant="outline"
        size="sm"
        className="gap-3 rounded-xl uppercase"
      >
        <DownloadCloud className="h-4 w-4" /> download
      </Button>
    </div>
  )
}

export default DashboardHeader
