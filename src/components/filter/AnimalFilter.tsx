'use client'
import SelectFilter from '@/components/shared/SelectFilter'
import { getAnimalListOptions } from '@/lib/data'
import useStore from '@/store/useStore'

import { FC } from 'react'
import DateFilter from './DateFilter'

interface AnimalFilterProps {
  animal: string
}

const AnimalFilter: FC<AnimalFilterProps> = ({ animal }) => {
  const { setFilter, originFemale, originMale } = useStore()
  const opts = getAnimalListOptions(animal)

  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
      <DateFilter label="Date" />
      <SelectFilter
        title="asal induk"
        defaultValue={originFemale}
        options={opts?.femaleOriginOptions}
        onChange={(value) => setFilter({ originFemale: value })}
      />
      <SelectFilter
        title="asal pejantan"
        defaultValue={originMale}
        options={opts?.maleOriginOptions}
        onChange={(value) => setFilter({ originMale: value })}
      />
    </div>
  )
}

export default AnimalFilter
