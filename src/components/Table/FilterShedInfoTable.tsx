import { indukOptions } from '@/data/data'
import SelectMenu from '../SelectMenu'

export default function FilterShedInfoTable() {
  return (
    <div className="flex items-center gap-3">
      <SelectMenu title="PAKAN" options={indukOptions} />
      <SelectMenu title="VITAMIN" options={indukOptions} />
      <SelectMenu title="VAKSIN" options={indukOptions} />
      <SelectMenu title="OBAT CACING" options={indukOptions} />
    </div>
  )
}
