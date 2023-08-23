"use client"

import { ColumnDef } from "@tanstack/react-table"

import { longDateFormatter } from "@/lib/utils"
import useDataList from "@/hooks/useDataList"
import Table from "@/components/ui/table"
import { useState } from "react"

export default function ShedInfoTable({ shed_id }: { shed_id: string }) {
  const queries: Array<string> = []

  const { data, loading, error, mutate } = useDataList({
    url: `/api/shed/data/get?shed_code=${shed_id}`,
    queries,
  })

  const columns: ColumnDef<any, any>[] = [
    {
      header: "Tgl Update Data",
      accessorKey: "updated_at",
      cell: (data) =>
        data.getValue() ? longDateFormatter(new Date(data.getValue())) : "-",
    },
    {
      header: "Pakan",
      accessorKey: "data_feed_type.name",
      cell: (data) => data.getValue() ?? "-",
    },
    {
      header: "Tgl Pakan",
      accessorKey: "data_feed_date",
      cell: (data) =>
        data.getValue() ? longDateFormatter(new Date(data.getValue())) : "-",
    },
    {
      header: "Vitamin",
      accessorKey: "data_vitamin_type.name",
      cell: (data) => data.getValue() ?? "-",
    },
    {
      header: "Tgl Vitamin",
      accessorKey: "data_vitamin_date",
      cell: (data) =>
        data.getValue() ? longDateFormatter(new Date(data.getValue())) : "-",
    },
    {
      header: "Vaksin",
      accessorKey: "data_vaccine_type.name",
      cell: (data) => data.getValue() ?? "-",
    },
    {
      header: "Tgl Vaksin",
      accessorKey: "data_vaccine_date",
      cell: (data) =>
        data.getValue() ? longDateFormatter(new Date(data.getValue())) : "-",
    },
    {
      header: "Obat Cacing",
      accessorKey: "data_anthelmintic_type.name",
      cell: (data) => data.getValue() ?? "-",
    },
    {
      header: "Tgl Obat Cacing",
      accessorKey: "data_anthelmintic_date",
      cell: (data) =>
        data.getValue() ? longDateFormatter(new Date(data.getValue())) : "-",
    },
  ]
  const [{
    pageIndex, pageSize
  }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })



  return (
    <Table
      pagination={{
        pageIndex,
        pageSize
      }}
      setPagination={setPagination}
      isLoading={loading} data={data} columns={columns} fixedCol={2} />
  )
}
