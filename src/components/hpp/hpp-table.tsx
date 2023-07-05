"use client"

import useDataList from "@/hooks/useDataList"
import useStore from "@/store/useStore"
import Table from "@/components/ui/table"

import { toast } from "../ui/toast"
import { getHppColumns } from "./column"

interface IProps {
  animal: string
}

export default function HppTable({ animal }: IProps) {
  const { hppStatus, changeStatusHpp } = useStore()

  const queries = [`animal_type=${animal}`]
  hppStatus !== "all" && queries.push(`status=${hppStatus}`)

  const { data, loading, error, mutate } = useDataList({
    url: `/api/hpp/get`,
    queries,
  })

  const changeStatusHandler = async (value: string, _id?: string) => {
    try {
      const res = await changeStatusHpp({ status: value, _id, animal })
      toast({ type: "success", message: res.message })
      mutate()
    } catch (err: any) {
      toast({ type: "error", message: err.errors[0].msg })
    }
  }

  const columns = getHppColumns(changeStatusHandler)

  return (
    <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
  )
}
