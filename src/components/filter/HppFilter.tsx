'use client'
import useStore from '@/store/useStore'
import { SelectFilter } from '../shared'

const statusOptions = [
  { name: 'All', value: 'all' },
  { name: 'Terjual', value: 'sold' },
  { name: 'Tersedia', value: 'available' },
  { name: 'Mati', value: 'died' },
]

export default function HppFilter() {
  const { setHppFilter } = useStore()
  return (
    <div className="mb-5">
      <SelectFilter
        title="status"
        options={statusOptions}
        defaultValue={statusOptions[0].value}
        onChange={(value) => setHppFilter(value !== "all" ? value : "")}
      />
    </div>
  )
}
