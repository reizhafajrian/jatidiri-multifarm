"use client"

import Table from "@/components/ui/table"

import { detailAnimalTColumns } from "./column"

export default function DetailTable() {
  const data = [
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

  return (
    <Table
      isLoading={false}
      fixedCol={2}
      data={data}
      columns={detailAnimalTColumns}
    />
  )
}
