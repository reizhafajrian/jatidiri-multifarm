"use client"

import useStore from "@/store/useStore"
import SelectFilter from "@/components/ui/SelectFilter"

const statusOptions = [
  { name: "All", value: "all" },
  { name: "Terjual", value: "sold" },
  { name: "Tersedia", value: "available" },
  { name: "Mati", value: "died" },
]

export default function HppFilter() {
  const { hppStatus } = useStore()
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
