import { useAnimalStore } from '@/store/animal'
import { get } from '@/utils/fetcher'
import useSWR from 'swr'

export const useAnimalList = () => {
  const { animal_type, gender } = useAnimalStore() || {}
  let params = ''
  if (gender !== undefined) {
    params += `gender=${gender}`
  }
  const { data, error } = useSWR(`/api/${animal_type}/get?${params}`, get)

  return {
    data: data?.data,
    loading: !error && !data,
    error,
  }
}

export const useAnimalDetail = (id: string) => {
  const { animal_type } = useAnimalStore()
  const { data, error } = useSWR(`/api/${animal_type}/get/detail/${id}`, get)


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
