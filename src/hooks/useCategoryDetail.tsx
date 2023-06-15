import useSWR from "swr"

import { Get } from "@/lib/api"

const useCategoryDetail = () => {
  const url = "/api/category/detail"

  const { data: res, isLoading, error, mutate } = useSWR(url, Get)

  const data = res?.data

  const categoryDetail = {
    feedInfo: data?.find((d: any) => d.title === "Feed")?.result,
    vitaminInfo: data?.find((d: any) => d.title === "Vitamin")?.result,
    anthelminticInfo: data?.find((d: any) => d.title === "Anthelmintic")
      ?.result,
    vaccineInfo: data?.find((d: any) => d.title === "Vaccine")?.result,
  }

  return {
    data: categoryDetail,
    loading: isLoading,
    error,
    mutate,
  }
}

export default useCategoryDetail
