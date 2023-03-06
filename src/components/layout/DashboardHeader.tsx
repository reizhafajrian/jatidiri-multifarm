import DashboardFilter from '../filter/DashboardFilter'
import { Button } from '../shared'
import { CloudArrowDown } from '../shared/Icons'

export default function DashboardHeader() {
  return (
    <div className="mb-4 flex items-center justify-between">
      <DashboardFilter />
      <Button intent="secondary" className="rounded-xl py-1 px-2">
        <CloudArrowDown /> download
      </Button>
    </div>
  )
}
