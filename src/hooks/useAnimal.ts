import { useAnimalStore } from '@/store/animal'
import { get } from '@/utils/fetcher'
import useSWR from 'swr'

export const useAnimalList = () => {
  const { animal_type, gender } = useAnimalStore()
  const { data, error } = useSWR('/api/goat/get', get)

  return {
    data: data?.data,
    loading: !error && !data,
    error,
  }
}

export const useCempekList = () => {
  const { animal_type } = useAnimalStore()
  const { data, error } = useSWR('/api/goat/get', get)

  return {
    data: data?.data,
    loading: !error && !data,
    error,
  }
}
