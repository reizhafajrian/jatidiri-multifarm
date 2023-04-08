import DashboardContent from '@/components/layout/DashboardContent'
import DashboardHeader from '@/components/layout/DashboardHeader'

export const metadata = {
  title: 'Jatidiri Multifarm | Dashboard',
}

export default function HomePage() {
  return (
    <>
      <DashboardHeader />
      <DashboardContent />
    </>
  )
}
