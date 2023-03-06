import { hppData } from '@/data/dummy'
import { get } from '@/utils/fetcher'
import useSWR from 'swr'

export const useHppList = () => {
  const { data, error } = useSWR('/api/goat/get', get)

  return {
    // data: data?.data,
    data: hppData,
    loading: !error && !data,
    error,
  }
}
