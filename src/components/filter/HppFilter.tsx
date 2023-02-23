import { SelectMenu } from '../shared'

const statusOptions = [
  { name: 'Terjual' },
  { name: 'Tersedia' },
  { name: 'Mati' },
]

export default function HppFilter() {
  return (
    <div className="mb-5">
      <SelectMenu
        title="Status"
        options={[{ name: 'All' }, ...statusOptions]}
      />
    </div>
  )
}
