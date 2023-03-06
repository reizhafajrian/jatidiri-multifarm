import SelectMenu from '../SelectMenu'

const statusOptions = [
  { name: 'Terjual' },
  { name: 'Tersedia' },
  { name: 'Mati' },
]

export default function FilterHppTable() {
  return (
    <div className="mb-5">
      <SelectMenu
        title="Status"
        options={[{ name: 'All' }, ...statusOptions]}
      />
    </div>
  )
}
