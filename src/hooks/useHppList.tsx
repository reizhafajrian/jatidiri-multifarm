import { Get } from '@/lib/api'
import useStore from '@/store/useStore'
import useSWR from 'swr'

const useHppList = () => {
  const {
    animal: { name: animal },
    status,
    searchKeyword,
    searchResults,
    searchLoading,
  } = useStore()
  const queriesArray = []
  status !== 'all' && queriesArray.push(`status=${status}`)

  const queries = queriesArray?.join('&')
  const url = `/api/hpp/get?animal_type=${animal}`
  const endpoint = queriesArray ? url + `&${queries}` : url

  const { data, isLoading, error, mutate } = useSWR(endpoint, Get)

  let hppData = data?.data
  if (searchKeyword.length !== 0) {
    hppData = searchResults
  }

  return {
    data: hppData,
    loading: isLoading || searchLoading,
    error,
    mutate,
  }
}

export default useHppList
