

"use client"

import useSWR from "swr"

import { Api } from "@/lib/api"

interface IProps {
  url: string
  queries?: Array<string>
}

export default function useDataShedList({ url, queries = [] }: IProps) {

  const endpoint = queries.length > 0 ? url + `?${queries.join("&")}` : url


  const { data, isLoading, isValidating, error, mutate } = useSWR(
    endpoint,
    Api.get
  )



  return {
    data: data?.data?.animal_data?.data,
    pagination: data?.data?.animal_data?.pagination,
    loading: isValidating && isLoading,
    error,
    mutate,
  }
}
