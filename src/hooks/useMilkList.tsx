import { Get } from '@/lib/api'
import useStore from '@/store/useStore'
import useSWR from 'swr'

const useMilkList = () => {
  const { milkStatus, searchKeyword, searchResults, searchLoading } = useStore()
  const queriesArray = []
  milkStatus !== 'all' && queriesArray.push(`status=${milkStatus}`)

  const queries = queriesArray?.join('&')
  const url = '/api/milk/get'
  const endpoint = queriesArray ? url + `?${queries}` : url

  const { data, isLoading, error, mutate } = useSWR(endpoint, Get)

  let milkData = data?.data

  if (searchKeyword.length !== 0) {
    milkData = searchResults
  }

  return {
    data: milkData,
    loading: isLoading || searchLoading,
    error,
    mutate,
  }
}

export default useMilkList
