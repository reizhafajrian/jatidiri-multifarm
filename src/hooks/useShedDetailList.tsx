import useStore from "@/store/useStore"

import useDataList from "./useDataList"

const useShedDetailList = () => {
  const { shed_id, searchKeyword, searchResults, searchLoading } = useStore()
  const url = `/api/shed/data/get?shed_code=${shed_id}`
  const queries = [] as string[]

  const { data, loading, error, mutate } = useDataList({ url, queries })

  let shedDetailList = data

  return {
    data: shedDetailList,
    loading: loading || searchLoading,
    error,
    mutate,
  }
}

export default useShedDetailList
