import SelectMenu from '../SelectMenu'

const statusOptions = [{ name: 'Aktif' }, { name: 'Non-Aktif' }]

export default function FilterMilkTable() {
  return (
    <div className="mb-5">
      <SelectMenu
        title="Status"
        options={[{ name: 'All' }, ...statusOptions]}
      />
    </div>
  )
}
