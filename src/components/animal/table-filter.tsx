"use client"

import useDataList from "@/hooks/useDataList"
import useStore from "@/store/useStore"

import DateFilter from "../ui/date-filter"
import SelectFilter from "../ui/select-filter"

function uniq(a: any[]) {
  return a?.sort()?.filter(function (item: any, pos: number, ary: any[]) {
    return !pos || item != ary[pos - 1]
  })
}

interface IProps {
  animal: string
  type: string
}

export default function TableFilter({ animal, type }: IProps) {
  const [setFilter, originMale, originFemale, vaccine] = useStore((s) => [
    s.setFilter,
    s.originMale,
    s.originFemale,
    s.vaccine,
  ])

  let originFemaleOpts: any[] = []
  let originMaleOpts: any[] = []
  const all = { name: "all", value: "all" }

  const queries: Array<string> = []
  const isCempek = type === "cempek"
  !isCempek && queries.push(`gender=${type}`)
  const { data, loading } = useDataList({ url: `/api/${animal}/get`, queries })

  if (data) {
    originFemaleOpts = uniq(data?.map((item: any) => item.origin_female))?.map(
      (item) => ({ name: item, value: item })
    )

    originMaleOpts = uniq(data?.map((item: any) => item.origin_male))?.map(
      (item) => ({ name: item, value: item })
    )
  }

  const opts = {
    femaleOrigin: [all, ...originFemaleOpts],
    maleOrigin: [all, ...originMaleOpts],
    vaccine: [
      all,
      { name: "sudah vaksin", value: "true" },
      { name: "belum vaksin", value: "false" },
    ],
  }

  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
      <DateFilter label="Date" />
      <SelectFilter
        loading={loading}
        title="asal induk"
        defaultValue={originFemale}
        options={opts?.femaleOrigin}
        onChange={(value: string) => setFilter({ originFemale: value })}
      />
      <SelectFilter
        loading={loading}
        title="asal pejantan"
        defaultValue={originMale}
        options={opts?.maleOrigin}
        onChange={(value: string) => setFilter({ originMale: value })}
      />
      <SelectFilter
        title="vaksin"
        defaultValue={vaccine}
        options={opts?.vaccine}
        onChange={(value: string) => setFilter({ vaccine: value })}
      />
    </div>
  )
}
