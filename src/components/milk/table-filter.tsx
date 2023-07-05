"use client"

import useStore from "@/store/useStore"
import SelectFilter from "@/components/ui/select-filter"

export default function TableFilter() {
  const milkStatus = useStore((s) => s.milkStatus)

  const statusOptions = [
    { name: "All", value: "all" },
    { name: "Aktif", value: "active" },
    { name: "Non-Aktif", value: "inactive" },
  ]

  return (
    <div className="mb-5">
      <SelectFilter
        title="status"
        options={statusOptions}
        defaultValue={milkStatus}
        onChange={(value) => useStore.setState({ milkStatus: value })}
      />
    </div>
  )
}
