import useStore from "@/store/useStore"

import useDataList from "./useDataList"

const useHppList = () => {
  const {
    animal: { name: animal },
    hppStatus,
    searchKeyword,
    searchResults,
    searchLoading,
  } = useStore()
  const url = `/api/hpp/get?animal_type=${animal}`
  const queriesArray = []
  hppStatus !== "all" && queriesArray.push(`status=${hppStatus}`)

  const { data, loading, error, mutate } = useDataList(url, queriesArray)

  let hppData = data
  // if (searchKeyword.length !== 0) {
  //   hppData = searchResults
  // }

  return {
    data: hppData,
    loading: loading || searchLoading,
    error,
    mutate,
  }
}

export default useHppList
