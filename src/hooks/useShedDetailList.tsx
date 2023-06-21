import useStore from "@/store/useStore"

import useDataList from "./useDataList"

const useShedDetailList = () => {
  const { shed_id, searchKeyword, searchResults, searchLoading } = useStore()
  const url = `/api/shed/data/get?shed_code=${shed_id}`
  const queriesArray = [] as string[]
  //   milkStatus !== 'all' && queriesArray.push(`status=${milkStatus}`)

  const { data, loading, error, mutate } = useDataList(url, queriesArray)

  let shedDetailList = data

  //   if (searchKeyword.length !== 0) {
  //     shedDetailList = searchResults
  //   }

  return {
    data: shedDetailList,
    loading: loading || searchLoading,
    error,
    mutate,
  }
}

export default useShedDetailList
