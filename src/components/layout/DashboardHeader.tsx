import { FC } from 'react'
import DateFilter from '../filter/DateFilter'

const DashboardHeader: FC = () => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <DateFilter label="Show" />
    </div>
  )
}

export default DashboardHeader
