import { Get } from '@/lib/api'
import useSWR from 'swr'

const useDataList = (url: string, queriesArray?: Array<string>) => {
  const queries = queriesArray?.join('&')
  const endpoint = queriesArray ? url + `?${queries}` : url
  console.log(endpoint)

  const { data, isLoading, error, isValidating, mutate } = useSWR(endpoint, Get)

  return {
    data: data?.data,
    loading: isLoading,
    error,
    validating: isValidating,
    mutate,
  }
}

export default useDataList
