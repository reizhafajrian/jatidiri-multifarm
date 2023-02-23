import { SelectMenu } from '../shared'

export default function MilkFilter() {
  const statusOptions = [{ name: 'Aktif' }, { name: 'Non-Aktif' }]
  return (
    <div className="mb-5">
      <SelectMenu
        title="Status"
        options={[{ name: 'All' }, ...statusOptions]}
      />
    </div>
  )
}
