import DashboardHeader from '@/components/layout/DashboardHeader'
import DashboardAnimalInfoList from '@/components/list/DashboardAnimalInfoList'
import DashboardDiagramList from '@/components/list/DashboardDiagramList'
import DashboardInfoList from '@/components/list/DashboardInfoList'

export default function HomePage() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardInfoList />
      <DashboardAnimalInfoList />
      <DashboardDiagramList />
    </div>
  )
}
