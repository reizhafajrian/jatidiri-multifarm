"use client"

import { FC } from "react"
import { ColumnDef } from "@tanstack/react-table"

import { longDateFormatter } from "@/lib/utils"
import useShedAnimalList from "@/hooks/useShedAnimalList"
import useShedAnimalTags from "@/hooks/useshedAnimalTags"
import useStore from "@/store/useStore"
import SelectTable from "@/components/ui/SelectTable"
import Table from "@/components/ui/Table"

interface IProps {
  id: string
  shedCodeOptions: any
}

export default function ShedAnimalTable({ id, shedCodeOptions }: IProps) {
  const changeShedAnimal = useStore((state) => state.changeShedAnimal)
  const { data, loading, mutate: mutateTable } = useShedAnimalList()
  const { mutate: mutateEartags } = useShedAnimalTags()

  const changeShedHandler = async (shed_code: string, eartag_code?: string) => {
    await changeShedAnimal(shed_code, eartag_code)
    mutateTable()
    mutateEartags()
  }

  const columns: ColumnDef<any, any>[] = [
    {
      header: "Tgl Tiba",
      accessorKey: "arrival_date",
      cell: (data: any) => longDateFormatter(new Date(data.getValue())),
    },
    { header: "No Eartag", accessorKey: "eartag_code" },
    { header: "Keterangan", accessorKey: "description" },
    {
      header: "Pindah Kandang",
      accessorKey: "shed_code",
      cell: (data) => (
        <SelectTable
          value={id}
          onChange={changeShedHandler}
          animalEarTag={data.row.original.eartag_code}
          options={shedCodeOptions}
          triggerClassName="bg-primary-4 text-white"
        />
      ),
    },
  ]

  return (
    <Table
      isLoading={loading}
      data={data?.animal_data ?? []}
      columns={columns}
      fixedCol={2}
    />
  )
}
