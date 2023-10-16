"use client"

import { useEffect, useMemo, useState } from "react"
import { ColumnDef } from "@tanstack/react-table"

import useDataShedList from "@/hooks/useDataShedList"
import useShedAnimalTags from "@/hooks/useshedAnimalTags"
import useStore from "@/store/useStore"
import SelectTable from "@/components/ui/select-table"
import Table from "@/components/ui/table"

import { shedAnimalcolumns, shedAnimalCempekcolumns } from "./column"

interface IProps {
  animal: string
  shed_id: string
  type: string
  shedCodeOptions: any
  cempek?: Boolean
}

export default function ShedAnimalTable({
  animal,
  shed_id,
  type,
  shedCodeOptions,
  cempek
}: IProps) {

  const changeShedAnimal = useStore((state) => state.changeShedAnimal)

  // const { data, loading, error, mutate } = useDataList({
  //   url: `/api/shed/get/detail/${shed_id}`,
  //   queries: [type === "cempek" ? "cempek=true" : `gender=${type}`],
  // })
  const [{
    pageIndex, pageSize
  }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })

  // fetch data list
  const { data, loading, error, mutate, pagination } = useDataShedList({
    url: `/api/shed/get/detail/${shed_id}`,
    queries: [type === "cempek" ? "cempek=true" : `gender=${type}`, `page=${pageIndex}`, `item_per_page=${pageSize}`],
  })


  const { eartagOptions, mutate: mutateEartags } = useShedAnimalTags(
    animal,
    type
  )

  const changeShedHandler = async (shed_code: string, eartag_code?: string) => {
    await changeShedAnimal(shed_code, eartag_code)
    // mutate()
    // mutateEartags()
  }

  const columns: ColumnDef<any, any>[] = [
    ...(cempek ? shedAnimalcolumns : shedAnimalCempekcolumns),
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

  return (
    <Table
      pagination={{
        pageIndex,
        pageSize,
        totalPage: pagination?.total_page ?? 0
      }}
      setPagination={setPagination}
      isLoading={loading}
      data={data ?? []}
      columns={columns}
      fixedCol={2}
    />
  )
}
