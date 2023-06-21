import useStore from "@/store/useStore"

import useDataList from "./useDataList"

const useMilkList = () => {
  const { milkStatus, searchKeyword, searchResults, searchLoading } = useStore()
  const url = "/api/milk/get"
  const queriesArray = []
  milkStatus !== "all" && queriesArray.push(`status=${milkStatus}`)

  const { data, loading, error, mutate } = useDataList(url, queriesArray)
  let milkData = data

  if (searchKeyword.length !== 0) {
    milkData = searchResults
  }

  return {
    data: milkData,
    loading: loading || searchLoading,
    error,
    mutate,
  }
}

export default useMilkList
