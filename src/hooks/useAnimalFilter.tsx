import useStore from "@/store/useStore"

import useDataList from "./useDataList"

function uniq(a: any[]) {
  return a?.sort()?.filter(function (item: any, pos: number, ary: any[]) {
    return !pos || item != ary[pos - 1]
  })
}

function useAnimalFilter() {
  const { animal, setFilter, originFemale, originMale, vaccine } = useStore()
  let originFemaleOpts: any[] = []
  let originMaleOpts: any[] = []
  const all = { name: "all", value: "all" }

  const url = `/api/${animal.name}/get`

  const { data, loading } = useDataList(url)

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

  return { opts, loading, setFilter, originMale, originFemale, vaccine }
}

export default useAnimalFilter
