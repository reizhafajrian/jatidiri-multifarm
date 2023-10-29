import { useEffect } from "react"

import useStore from "@/store/useStore"

import useDataList from "./useDataList"

const useShedAnimalTags = (animal: string, type: string) => {
  const { shed_code } = useStore()

  const url =
    type === "cempek"
      ? `/api/${animal}/cempek/get`
      : `/api/${animal}/get?gender=${type}`

  const { data, loading, error, mutate } = useDataList({ url })


  const eartagOptions =
    data?.map((item: any) => ({
      name: `${item.eartag_code}- ${item?.description?.slice(0, 10)}`,
      value: item.eartag_code,
    })) ?? []

  useEffect(() => {
    useStore.setState((s) => ({ ...s, shedAnimalTags: eartagOptions }))
  }, [data])

  return {
    eartagOptions,
    loading,
    error,
    mutate,
  }
}

export default useShedAnimalTags
