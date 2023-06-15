"use client"

import useAnimalFilter from "@/hooks/useAnimalFilter"
import DateFilter from "@/components/ui/DateFilter"
import SelectFilter from "@/components/ui/SelectFilter"

const AnimalFilter = () => {
  const { opts, loading, originFemale, originMale, vaccine, setFilter } =
    useAnimalFilter()

  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
      <DateFilter label="Date" />
      <SelectFilter
        loading={loading}
        title="asal induk"
        defaultValue={originFemale}
        options={opts?.femaleOrigin}
        onChange={(value) => setFilter({ originFemale: value })}
      />
      <SelectFilter
        loading={loading}
        title="asal pejantan"
        defaultValue={originMale}
        options={opts?.maleOrigin}
        onChange={(value) => setFilter({ originMale: value })}
      />
      <SelectFilter
        title="vaksin"
        defaultValue={vaccine}
        options={opts?.vaccine}
        onChange={(value) => setFilter({ vaccine: value })}
      />
    </div>
  )
}

export default AnimalFilter
