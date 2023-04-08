'use client'
import SelectFilter from '@/components/shared/SelectFilter'
import useAnimalFilter from '@/hooks/useAnimalFilter'
import { FC } from 'react'
import DateFilter from './DateFilter'

const AnimalFilter: FC = () => {
  const { opts, originFemale, originMale, setFilter } = useAnimalFilter()

  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
      <DateFilter label="Date" />
      <SelectFilter
        title="asal induk"
        defaultValue={originFemale}
        options={opts?.femaleOrigin}
        onChange={(value) => setFilter({ originFemale: value })}
      />
      <SelectFilter
        title="asal pejantan"
        defaultValue={originMale}
        options={opts?.maleOrigin}
        onChange={(value) => setFilter({ originMale: value })}
      />
    </div>
  )
}

export default AnimalFilter
