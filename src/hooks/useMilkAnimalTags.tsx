import useSWR from "swr"

import { Api } from "@/lib/api"

const useMilkAnimalTags = () => {
  const { data: milkData } = useSWR("/api/milk/get", Api.get)
  const { data, isLoading, error, mutate } = useSWR(
    "/api/cow/get?gender=false",
    Api.get
  )

  const ids = milkData?.data.map((item: any) => item.animal_id?._id)
  const list = data?.data.filter((item: any) => !ids?.includes(item._id))

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

export default useMilkAnimalTags
