"use client"

import { FC } from "react"

import Table from "@/components/ui/Table"

import { detailAnimalTColumns } from "./column"

interface IProps {}

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

const DetailTable: FC<IProps> = () => {
  return (
    <Table
      isLoading={false}
      fixedCol={2}
      data={data}
      columns={detailAnimalTColumns}
    />
  )
}

export default DetailTable
