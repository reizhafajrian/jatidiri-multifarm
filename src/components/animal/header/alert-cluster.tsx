"use client"

import useStore from "@/store/useStore"
import { Icons } from "@/components/ui/Icons"

export default function AlertCluster() {
  const [total, animalTitle] = useStore((s) => [
    s.undefinedClusterTotal,
    s.animal,
    s.animalTitle,
  ])

  if (total === 0) return

  return (
    <div className="my-8 flex gap-5 bg-warning/30 px-5 py-3">
      <Icons.exclamationTriangle />
      <div className="space-y-2">
        <p className="font-semibold">
          {total} {animalTitle} belum masuk kandang
        </p>
        <p className="text-xs">
          Segera masukan {animalTitle} ke kandang melalui halaman
          <span className="font-semibold"> Cluster</span>
        </p>
      </div>
    </div>
  )
}
