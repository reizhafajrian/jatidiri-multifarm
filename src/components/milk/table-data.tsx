"use client"

import useDataList from "@/hooks/useDataList"
import useStore from "@/store/useStore"
import Table from "@/components/ui/table"

import { toast } from "../ui/toast"
import { getMilkColumns } from "./column"

export default function TableData() {
  const [changeMilkStatus, status] = useStore((s) => [
    s.changeMilkStatus,
    s.milkStatus,
  ])

  const queries = []
  status !== "all" && queries.push(`milk_status=${status}`)
  const { data, loading, error, mutate } = useDataList({
    url: "/api/milk/get",
    queries,
  })

  const changeStatus = async (id: string, status: string) => {
    try {
      const res = await changeMilkStatus(id, status)
      toast({ type: "success", message: res.message })
      mutate()
    } catch (err: any) {
      toast({ type: "error", message: err.errors[0].msg })
    }
  }

  const columns = getMilkColumns(changeStatus)

  const [{
    pageIndex, pageSize
  }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })


  return (
    <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
  )
}
