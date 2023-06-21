"use client"

import useDashboardData from "@/hooks/useDashboardData"

import * as C from "./card"

export default function DashboardContent() {
  const { info, animal, diagram } = useDashboardData()

  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-2 md:gap-7">
        {info?.map((item, idx) => (
          <C.DashboardInfoCard
            key={idx}
            data={item.data}
            comparison={item.comparison}
          />
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-3 md:gap-7">
        {animal.map((item, idx) => (
          <C.DashboardAnimalInfoCard key={idx} data={item} />
        ))}
      </div>
      <div className="space-y-3 md:grid md:grid-cols-12 md:gap-6 md:space-y-0">
        {diagram.map(({ title, className, children }, idx) => (
          <C.DashboardDiagramCard key={idx} title={title} className={className}>
            {children}
          </C.DashboardDiagramCard>
        ))}
      </div>
    </div>
  )
}
