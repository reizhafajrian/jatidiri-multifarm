"use client"

import useSWR from "swr"

import { Api } from "@/lib/api"

interface IProps {
  url: string
  queries?: Array<string>
}

export default function useDataList({ url, queries = [] }: IProps) {
  const endpoint = queries.length > 0 ? url + `?${queries.join("&")}` : url

  const { data, isLoading, isValidating, error, mutate } = useSWR(
    endpoint,
    Api.get
  )

  return {
    data: data?.data,
    pagination: data?.pagination,
    loading: isValidating && isLoading,
    error,
    mutate,
  }
}
