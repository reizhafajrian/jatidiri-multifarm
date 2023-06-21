"use client"

import { ColumnDef } from "@tanstack/react-table"

import { longDateFormatter } from "@/lib/utils"
import useShedDetailList from "@/hooks/useShedDetailList"
import Table from "@/components/ui/Table"

export default function ShedInfoTable() {
  const { data, loading } = useShedDetailList()

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

  return (
    <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
  )
}
