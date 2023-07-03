"use client"

import { cn } from "@/lib/utils"
import useDashboardData from "@/hooks/useDashboardData"

import * as C from "./card"

export default function Content() {
  const { info, animal, diagram } = useDashboardData()

  const dClass = [
    "md:col-span-5",
    "md:col-span-4",
    "md:col-span-3",
    "md:col-span-5",
    "md:col-span-4",
    "md:col-span-3",
  ]

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
        {diagram.map(({ title, children }, i) => (
          <C.DashboardDiagramCard key={i} title={title} className={dClass[i]}>
            {children}
          </C.DashboardDiagramCard>
        ))}
      </div>
    </div>
  )
}
