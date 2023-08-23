"use client"

import { usePathname, useRouter } from "next/navigation"

import useDataList from "@/hooks/useDataList"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import Table from "@/components/ui/table"
import { useState } from "react"

export default function ShedTable() {
  const router = useRouter()
  const pathname = usePathname()
  const { animal, searchKeyword, searchResults } = useStore()

  const { data, loading } = useDataList({
    url: "/api/shed/get",
    queries: [`animal_type=${animal}`],
  })

  const columns = [
    { header: "No Kandang", accessorKey: "code" },
    //react table if average_weight is null, it will return 0
    {
      header: "Berat",
      accessorKey: "average_weight",
      cell: (data: any) =>
        `${data.getValue() ? data.getValue() + " Kg" : "0 Kg"}`,
    },
    { header: "Keterangan", accessorKey: "description" },
    {
      header: "Aksi",
      accessorKey: "_id",
      cell: (data: any) => (
        <Button
          size="sm"
          className="text-xs capitalize"
          onClick={() => router.replace(`${pathname}/${data.getValue()}`)}
        >
          Detail
        </Button>
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
      isLoading={loading}
      pagination={{
        pageIndex,
        pageSize
      }}
      setPagination={setPagination}
      data={searchKeyword.length > 0 ? searchResults : data}
      columns={columns}
      fixedCol={2}
    />
  )
}
