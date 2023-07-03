"use client"

import { ColumnDef } from "@tanstack/react-table"

import useDataList from "@/hooks/useDataList"
import useStore from "@/store/useStore"
import SelectTable from "@/components/ui/select-table"
import Table from "@/components/ui/table"

import { toast } from "../ui/toast"
import { hppColumns } from "./column"
import EditHppForm from "./hpp-form-edit"

export default function HppTable() {
  const { animal, hppStatus, changeStatusHpp } = useStore()

  const url = `/api/hpp/get?animal_type=${animal}`
  const queries = []
  hppStatus !== "all" && queries.push(`status=${hppStatus}`)

  const { data, loading, error, mutate } = useDataList({ url, queries })

  const statusOptions = [
    { name: "Terjual", value: "sold", bgColor: "bg-[#FFE2DC]" },
    { name: "Tersedia", value: "available", bgColor: "bg-[#E1F7E8]" },
    { name: "Mati", value: "died", bgColor: "bg-[#BFC4C6] bg-opacity-20" },
  ]

  const changeStatusHandler = async (value: string, _id?: string) => {
    try {
      const res = await changeStatusHpp({ status: value, _id, animal })
      toast({ type: "success", message: res.message })
      mutate()
    } catch (err: any) {
      toast({ type: "error", message: err.errors[0].msg })
    }
  }

  const columns: ColumnDef<any, any>[] = [
    ...hppColumns,
    {
      header: "Status",
      accessorKey: "status",
      cell: (data) => (
        <SelectTable
          onChange={changeStatusHandler}
          animalEarTag={data.row.original._id}
          value={data.getValue() === "active" ? "available" : data.getValue()}
          options={statusOptions}
          triggerClassName={
            statusOptions.find((i) => i.value === data.getValue())?.bgColor! ??
            "bg-[#E1F7E8]"
          }
        />
      ),
    },
    { header: "Nama Pembeli", accessorKey: "buyer" },
    { header: "No Telepon", accessorKey: "phoneNumber" },
    {
      header: "Aksi",
      accessorKey: "eartag_code",
      cell: (data) => <EditHppForm data={data.row.original} />,
    },
  ]

  return (
    <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
  )
}
