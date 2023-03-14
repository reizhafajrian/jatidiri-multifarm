'use client'
import { shedInfoTypesOptions } from '@/data/data'
import { FC } from 'react'
import { SelectFilter } from '../shared'

interface ShedInfoFilterProps {}

const ShedInfoFilter: FC<ShedInfoFilterProps> = ({}) => {
  // const [filterSelected, setFilterSelected] =
  // useState<IFilterShedInfo>(shedInfoInitial)

  return (
    <div className="flex items-center gap-3">
      <span className="font-semibold">FILTER:</span>
      <div className="flex items-center gap-3">
        {shedInfoTypesOptions.map(({ name, options, placeholder }, idx) => {
          // const selected = filterSelected[name as keyof IFilterShedInfo]
          return <SelectFilter key={name} options={options} noTitle />
        })}
      </div>
    </div>
  )
}

export default ShedInfoFilter

// interface IFilterShedInfo {
//   feed: {
//     name: string
//     value: string
//   }
//   vitamin: {
//     name: string
//     value: string
//   }
//   vaccine: {
//     name: string
//     value: string
//   }
//   anthelmintic: {
//     name: string
//     value: string
//   }
// }
