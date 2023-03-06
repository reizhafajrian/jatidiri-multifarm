import { milkData } from '@/data/dummy'
import { get } from '@/utils/fetcher'
import useSWR from 'swr'

export const useMilkList = () => {
  const { data, error } = useSWR('/api/goat/get', get)

  return {
    // data: data?.data,
    data: milkData,
    loading: !error && !data,
    error,
  }
}
