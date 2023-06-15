import useStore from "@/store/useStore"
import useSWR from "swr"

import { Get } from "@/lib/api"

const useShedDetailList = () => {
  const { shed_id, searchKeyword, searchResults, searchLoading } = useStore()

  const queriesArray = [] as string[]
  //   milkStatus !== 'all' && queriesArray.push(`status=${milkStatus}`)
  const queries = queriesArray?.join("&")
  const url = `/api/shed/data/get?shed_code=${shed_id}`
  const endpoint = queriesArray ? url + `&${queries}` : url

  const { data, isLoading, error, mutate } = useSWR(url, Get)

  let shedDetailList = data?.data

  //   if (searchKeyword.length !== 0) {
  //     shedDetailList = searchResults
  //   }

  return {
    data: shedDetailList,
    loading: isLoading || searchLoading,
    error,
    mutate,
  }
}

export default useShedDetailList
