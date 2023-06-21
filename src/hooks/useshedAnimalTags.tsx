import useStore from "@/store/useStore"

import useDataList from "./useDataList"

const useShedAnimalTags = () => {
  const { animal, shed_code, type } = useStore()
  const isCempek = type === "cempek"
  const gender = type === "male" ? "true" : "false"
  const url = isCempek
    ? `/api/${animal.name}/cempek/get`
    : `/api/${animal.name}/get?gender=${gender}`

  const { data, loading, error, mutate } = useDataList(url)

  const list = data.filter((item: any) => item.shed_code !== shed_code)

  const eartagOptions =
    list?.map((item: any) => ({
      name: item.eartag_code,
      value: item.eartag_code,
    })) ?? []

  return {
    eartagOptions,
    loading,
    error,
    mutate,
  }
}

export default useShedAnimalTags
