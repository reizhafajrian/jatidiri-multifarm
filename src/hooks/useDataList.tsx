import { Get } from '@/lib/api'
import useSWR from 'swr'

const useDataList = (url: string, queriesArray?: Array<string>) => {
  const queries = queriesArray?.join('&')
  const endpoint = queriesArray ? url + `?${queries}` : url

  const { data, isLoading, error, mutate } = useSWR(endpoint, Get)

  return {
    data: data?.data,
    loading: isLoading,
    error,
    mutate,
  }
}

export default useDataList
