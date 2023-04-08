import { Get } from '@/lib/api'
import useStore from '@/store/useStore'
import useSWR from 'swr'

const useShedAnimalTags = () => {
  const { animal, shed_code, type } = useStore()

  const isCempek = type === 'cempek'
  const gender = type === 'male' ? 'true' : 'false'

  const url = isCempek
    ? `/api/${animal.name}/cempek/get`
    : `/api/${animal.name}/get?gender=${gender}`

  const { data, isLoading, error, mutate } = useSWR(url, Get)

  const list = data?.data.filter((item: any) => item.shed_code !== shed_code)

  const eartagOptions =
    list?.map((item: any) => ({
      name: item.eartag_code,
      value: item.eartag_code,
    })) ?? []

  return {
    eartagOptions,
    loading: isLoading,
    error,
    mutate,
  }
}

export default useShedAnimalTags
