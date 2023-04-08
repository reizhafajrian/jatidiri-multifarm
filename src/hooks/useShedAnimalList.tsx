import { Get } from '@/lib/api'
import useStore from '@/store/useStore'
import useSWR from 'swr'

const useShedAnimalList = () => {
  const { shed_id, type } = useStore()

  const isCempek = type === 'cempek'
  const gender = type === 'male' ? 'true' : 'false'

  const url = isCempek
    ? `/api/shed/get/detail/${shed_id}?cempek=true`
    : `/api/shed/get/detail/${shed_id}?gender=${gender}`

  const { data, isLoading, error, mutate } = useSWR(url, Get)

  return {
    data: data?.data,
    loading: isLoading,
    error,
    mutate,
  }
}

export default useShedAnimalList
