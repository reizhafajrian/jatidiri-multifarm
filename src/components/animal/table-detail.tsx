"use client"

import Table from "@/components/ui/table"

import { detailAnimalTColumns } from "./column"

export default function DetailTable({ data }: any) {
  const tableData = [
    {
      date: new Date(),
      category: "vaccine",
      type: "varian a",
      quantity: 1,
    },
    {
      date: new Date(),
      category: "vitamin",
      type: "varian a",
      quantity: 1,
    },
    {
      date: new Date(),
      category: "anthelmintic",
      type: "varian a",
      quantity: 1,
    },
  ]

  console.log(data)
  if (!data) return null
  return (
    <Table
      isLoading={false}
      fixedCol={2}
      data={data.map((item: any) => ({
        ...item,
        date: new Date(item.created_at),
        category: item.category_type,
        type: item[`${item.category_type}`]?.name || '-',
        quantity: item.qty
      }))}
      columns={detailAnimalTColumns}
    />
  )

}
