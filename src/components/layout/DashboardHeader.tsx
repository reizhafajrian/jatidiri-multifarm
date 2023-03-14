import { DownloadCloud } from 'lucide-react'
import { FC } from 'react'
import DashboardFilter from '../filter/DashboardFilter'
import { Button } from '../shared'

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
