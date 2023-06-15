import useStore from "@/store/useStore"
import useSWR from "swr"

import { Get } from "@/lib/api"

const useShedDetail = () => {
  const { shed_code } = useStore()
  const url = "/api/shed/get/detail/" + shed_code

  const { data, isLoading, error, mutate } = useSWR(url, Get)

  return {
    data: data?.data,
    loading: isLoading,
    error,
    mutate,
  }
}

export default useShedDetail
