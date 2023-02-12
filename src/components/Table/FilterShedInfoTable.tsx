import { animalFormContent } from '@/data/data'
import SelectMenu from '../SelectMenu'

export default function FilterShedInfoTable() {
  const { femaleParentOriginOptions } = animalFormContent.goat

  return (
    <div className="flex items-center gap-3">
      <SelectMenu title="PAKAN" options={femaleParentOriginOptions} />
      <SelectMenu title="VITAMIN" options={femaleParentOriginOptions} />
      <SelectMenu title="VAKSIN" options={femaleParentOriginOptions} />
      <SelectMenu title="OBAT CACING" options={femaleParentOriginOptions} />
    </div>
  )
}
