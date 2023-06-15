"use client"

import { FC } from "react"
import { ColumnDef } from "@tanstack/react-table"

import useHppList from "@/hooks/useHppList"
import useStore from "@/store/useStore"
import SelectTable from "@/components/ui/SelectTable"
import Table from "@/components/ui/Table"

import { hppColumns } from "./column"
import EditHppForm from "./hpp-form-edit"

const statusOptions = [
  { name: "Terjual", value: "sold", bgColor: "bg-[#FFE2DC]" },
  { name: "Tersedia", value: "available", bgColor: "bg-[#E1F7E8]" },
  { name: "Mati", value: "died", bgColor: "bg-[#BFC4C6] bg-opacity-20" },
]

const HppTable: FC = () => {
  const { editAnimal } = useStore()
  const { data, loading, mutate } = useHppList()

  const changeStatusHandler = async (value: any, _id?: string) => {
    const pathname = window?.location?.pathname
    const secondPath = pathname.split("/")[2]
    editAnimal({ status: value, _id, animal: secondPath })
    mutate()
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
    {
      header: "Aksi",
      accessorKey: "eartag_code",
      cell: (data) => <EditHppForm data={data.row.original} mutate={mutate} />,
    },
  ]

  return (
    <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
  )
}

export default HppTable
