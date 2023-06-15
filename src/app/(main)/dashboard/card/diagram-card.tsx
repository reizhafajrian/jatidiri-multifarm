import React, { FC } from "react"

import Card from "@/components/ui/Card"
import { Icons } from "@/components/ui/Icons"

interface IProps {
  className?: string
  title: string
  children?: React.ReactNode
}

const DashboardDiagramCard: FC<IProps> = ({ className, title, children }) => {
  return (
    <Card className={className}>
      <div className="mb-4 flex items-center justify-between capitalize">
        <h3>{title}</h3>
        <Icons.dashboardInfo />
      </div>
      {children}
    </Card>
  )
}

export default DashboardDiagramCard
