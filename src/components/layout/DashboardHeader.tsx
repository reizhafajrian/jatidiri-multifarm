import { Button } from '@/components/shared'
import { DownloadCloud } from '@/components/shared/Icons'
import { FC } from 'react'
import DateFilter from '../filter/DateFilter'

const DashboardHeader: FC = () => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <DateFilter label="Show" />
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
