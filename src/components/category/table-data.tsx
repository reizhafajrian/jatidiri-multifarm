"use client"

import useDataList from "@/hooks/useDataList"
import useStore from "@/store/useStore"

import Table from "../ui/table"
import { getCategoryColumns } from "./column"
import { useState } from "react"

interface IProps {
  category: string
}

export default function TableData({ category }: IProps) {
  const { deleteCategory } = useStore()
  const { data, loading, mutate } = useDataList({ url: `/api/${category}/get` })
  const [{
    pageIndex, pageSize
  }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })


  const columns = getCategoryColumns(category, deleteCategory, mutate)

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
