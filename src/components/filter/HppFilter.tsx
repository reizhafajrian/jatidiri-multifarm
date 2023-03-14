import { SelectFilter } from '../shared'

const statusOptions = [
  { name: 'All', value: 'all' },
  { name: 'Terjual', value: 'sold' },
  { name: 'Tersedia', value: 'available' },
  { name: 'Mati', value: 'died' },
]

export default function HppFilter() {
  return (
    <div className="mb-5">
      <SelectFilter title="status" options={statusOptions} />
    </div>
  )
}
