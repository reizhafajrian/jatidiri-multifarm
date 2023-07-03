"use client"

import useStore from "@/store/useStore"
import SelectFilter from "@/components/ui/select-filter"

export default function HppFilter() {
  const { hppStatus } = useStore()

  const statusOptions = [
    { name: "All", value: "all" },
    { name: "Terjual", value: "sold" },
    { name: "Tersedia", value: "available" },
    { name: "Mati", value: "died" },
  ]

  return (
    <div className="mb-5">
      <SelectFilter
        title="status"
        options={statusOptions}
        defaultValue={hppStatus}
        onChange={(value) => useStore.setState({ hppStatus: value })}
      />
    </div>
  )
}
