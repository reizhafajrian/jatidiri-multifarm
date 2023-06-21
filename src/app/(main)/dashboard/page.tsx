import DateFilter from "@/components/DateFilter"

import DashboardContent from "./dashboard-content"

export const metadata = {
  title: "Dashboard",
}

export default function DashboardPage() {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <DateFilter label="Show" />
      </div>
      <DashboardContent />
    </>
  )
}
