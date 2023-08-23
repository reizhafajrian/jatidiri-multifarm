"use client"

import { useEffect, useState } from "react"
import { ColumnDef } from "@tanstack/react-table"

import useDataList from "@/hooks/useDataList"
import useShedAnimalTags from "@/hooks/useshedAnimalTags"
import useStore from "@/store/useStore"
import SelectTable from "@/components/ui/select-table"
import Table from "@/components/ui/table"

import { shedAnimalcolumns } from "./column"

interface IProps {
  animal: string
  shed_id: string
  type: string
  shedCodeOptions: any
}

export default function ShedAnimalTable({
  animal,
  shed_id,
  type,
  shedCodeOptions,
}: IProps) {
  const changeShedAnimal = useStore((state) => state.changeShedAnimal)

  const { data, loading, error, mutate } = useDataList({
    url: `/api/shed/get/detail/${shed_id}`,
    queries: [type === "cempek" ? "cempek=true" : `gender=${type}`],
  })

  const { eartagOptions, mutate: mutateEartags } = useShedAnimalTags(
    animal,
    type
  )

  const changeShedHandler = async (shed_code: string, eartag_code?: string) => {
    await changeShedAnimal(shed_code, eartag_code)
    mutate()
    mutateEartags()
  }

  const columns: ColumnDef<any, any>[] = [
    ...shedAnimalcolumns,
    {
      header: "Pindah Kandang",
      accessorKey: "shed_code",
      cell: (data) => (
        <SelectTable
          value={shed_id}
          onChange={changeShedHandler}
          animalEarTag={data.row.original.eartag_code}
          options={shedCodeOptions}
          triggerClassName="bg-primary-4 text-white"
        />
      ),
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
      isLoading={loading}
      data={data?.animal_data ?? []}
      columns={columns}
      fixedCol={2}
    />
  )
}
