import { SelectFilter } from '../shared'

export default function MilkFilter() {
  const statusOptions = [
    { name: 'All', value: 'all' },
    { name: 'Aktif', value: 'active' },
    { name: 'Non-Aktif', value: 'non-active' },
  ]

  return (
    <div className="mb-5">
      <SelectFilter title="status" options={statusOptions} />
    </div>
  )
}
